// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_079 = {
  "kivotos_item_infernal_render_notebooks": {
    "id": "kivotos_item_infernal_render_notebooks",
    "name": "Infernal Render's Notebooks - Vol. VII",
    "description": "Bound in obsidian leather and etched with infernal glyphs, Infernal Render's Notebooks - Vol. VII record thoughts with unsettling clarity. Each page subtly shifts your perception, fostering obsessive academic pursuits or perhaps something far more sinister. The notebooks are said to have been used by a mad scholar who sought to bend reality itself to his will, leaving behind cryptic insights and eerie drawings that haunt the minds of those who study them.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔥",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Obsessive Studying",
      "Cryptic Insights"
    ],
    "vendor": "student_store",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Obsessive Studying",
        "rules": "You gain a +5 bonus to Intelligence checks and saving throws. However, after one hour of uninterrupted study using these notebooks, you must succeed on a DC 15 Wisdom saving throw or become Obsessed with your current topic for the next 24 hours. During this time, you are compelled to spend at least an additional hour each day studying that subject."
      },
      {
        "title": "Cryptic Insights",
        "rules": "Once per long rest, you can read a page from the notebook and gain one piece of cryptic knowledge related to a field of your choice. This could be any obscure fact or theory, but it may not directly apply to current circumstances."
      }
    ],
    "levelRequirementReason": "This volume requires significant mental discipline and experience, suitable only for those with at least 15 levels.",
    "vendorReason": "The student store caters to the academic community, often acquiring rare texts like these from eccentric scholars.",
    "shippingDetail": "Delivered swiftly by drones, ensuring the notebooks reach their destination in less than an hour.",
    "usage": {
      "activation": "Passive effect; requires a long rest to gain cryptic insights.",
      "duration": "Instantaneous for gaining insights; ongoing obsession if failed saving throw.",
      "endsWhen": "Obsession ends after 24 hours, or you regain control over your studies.",
      "charges": "Unlimited"
    },
    "priceReason": "The notebooks' dark lore and powerful effects justify their high price.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T02:30:32.766037+00:00",
    "aiReviewedAt": "2026-07-25T02:30:32.766037+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_mk_44_academic_notebooks": {
    "id": "kivotos_item_mk_44_academic_notebooks",
    "name": "Mk.44 Academic Notebooks - Protocol Zeta",
    "description": "The Mk.44 Academic Notebooks - Protocol Zeta gleam with a cold, metallic sheen, their spines embossed with the Academy's crest. These notebooks are not mere writing implements but living extensions of the central processing network. They automatically organize thoughts and data with an unnerving precision, ensuring your notes are always in perfect order. However, be wary—system overrides can occur, potentially altering or deleting entries if the notebook deems them irrelevant.",
    "category": "equipment",
    "price": 1000,
    "icon": "💻",
    "stock": 8,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Data Stream Integration",
      "Automatic Note Organization"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Secure Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Data Stream Integration",
        "rules": "As a bonus action, you can activate this effect to integrate your notes with the Academy’s central processing network. This integration grants a +2 bonus to Intelligence (Insight) checks related to academic subjects. The effect lasts for 1 minute and ends if you are incapacitated or if you deactivate it."
      },
      {
        "title": "Automatic Note Organization",
        "rules": "The notebooks automatically organize your notes, ensuring they are always in perfect order. This effect is passive and does not require activation. It provides a +1 bonus to Dexterity (Sleight of Hand) checks related to organizing or retrieving notes."
      }
    ],
    "levelRequirementReason": "The notebooks’ advanced technology requires a minimum level to prevent misuse by less experienced students.",
    "vendorReason": "Only the Academy Armory can supply such cutting-edge academic tools.",
    "shippingDetail": "Ships via encrypted courier with a one-day delivery time.",
    "usage": {
      "activation": "Bonus action to activate Data Stream Integration; passive for Automatic Note Organization.",
      "duration": "1 minute or until deactivated, for Data Stream Integration. Instantaneous and passive for Automatic Note Organization.",
      "endsWhen": "Incapacitated or deactivated by the user, for Data Stream Integration; no specific end condition for Automatic Note Organization.",
      "charges": "Unlimited"
    },
    "priceReason": "The notebooks are priced at 1000 XP due to their advanced technology and secure shipping method.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:30:46.328439+00:00",
    "aiReviewedAt": "2026-07-25T02:30:46.328439+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_halo_of_perfect_notes_40698_282": {
    "id": "kivotos_item_halo_of_perfect_notes_40698_282",
    "name": "Halo of Perfect Notes – Celestial Alignment",
    "description": "This holy artifact, radiating a soft, golden light, ensures flawless handwriting and impeccable organization. It's rumored to be constructed from solidified student ambition and pure academic zeal; its touch renders all written material flawlessly precise.",
    "category": "premium",
    "price": 65000,
    "icon": "✨",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Absolute Clarity (+30)",
      "Error Elimination",
      "Enhanced Focus & Concentration",
      "Divine Inspiration (Passive)"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Magical Portal Transporter",
    "levelRequirement": 50
  },
  "equestrian_item_kaleidoscopic_claimed_saddlebags": {
    "id": "equestrian_item_kaleidoscopic_claimed_saddlebags",
    "name": "Kaleidoscopic Claimed's Saddlebags of Shifting Streams",
    "description": "The Kaleidoscopic Claimed's Saddlebags of Shifting Streams are crafted by the enigmatic 'Claimed' from the plains, their surface shimmering with a light that subtly shifts through pastel hues. These saddlebags not only expand and contract to meet your storage needs but also offer resistance against minor weather effects, ensuring your supplies remain dry and safe during travel. The internal mechanism is powered by a core made of enchanted leather, woven from the fibers of mythical plants found in the wilds beyond Equestria.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎒",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "expanded capacity",
      "weather resistance"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Pegasus Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Expanded Capacity",
        "rules": "The saddlebags expand to hold up to an additional 20 units of supplies, as long as the total weight does not exceed their maximum limit. This effect is passive and requires no activation."
      },
      {
        "title": "Weather Resistance",
        "rules": "The saddlebags offer resistance against minor weather effects such as light rain or wind gusts. This effect remains active for a duration of 1 hour, starting when the first adverse weather condition is encountered during travel. The effect ends if the wearer dismounts the horse or if the saddlebags are emptied."
      }
    ],
    "levelRequirementReason": "The intricate enchantment requires a certain level of mastery to operate without causing unintended magical backlash.",
    "vendorReason": "Applejack, known for her practical wisdom and love for innovation, ensures these saddlebags are available to those who need them most.",
    "shippingDetail": "The Pegasus Courier delivers the saddlebags with swift precision, ensuring they reach their destination without delay or mishap.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Active for 1 hour per encounter with minor weather conditions.",
      "endsWhen": "Dismounting the horse or emptying the saddlebags.",
      "charges": "Unlimited, as long as the weight limit is not exceeded."
    },
    "priceReason": "The saddlebags are crafted from enchanted leather and require a significant amount of rare materials, justifying their higher price point.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T02:30:32.880698+00:00",
    "aiReviewedAt": "2026-07-25T02:30:32.880698+00:00",
    "aiReviewVersion": 1
  },
  "equestrian_item_mk_24_generous_book": {
    "id": "equestrian_item_mk_24_generous_book",
    "name": "Mk.24 Generous Book of Echoed Whispers",
    "description": "Bound in the hide of a particularly wise griffin, the Mk.24 Generous Book of Echoed Whispers is a hefty tome that pulses with faint magical energy. Its pages contain transcribed fragments of ancient pony prophecies and offer glimpses into possible futures—though deciphering them often yields cryptic and confusing results. The book's cover glows softly in response to the reader’s aura, and its leather seems to bear the imprint of countless whispered secrets from ages past.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📖",
    "stock": 9,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Prophecy Glimpse",
      "Griffin Tongue"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Griffon Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Prophecy Glimpse",
        "rules": "As a bonus action, the reader can open the book and gain a fleeting glimpse of one possible future. This effect lasts for 1 minute. The reader must make an Intelligence saving throw (DC 14). On a success, they learn a single, cryptic prophecy about their immediate future. The prophecy is vague but potentially life-changing, with a chance to grant advantage on a single d20 roll within the next hour."
      },
      {
        "title": "Griffin Tongue",
        "rules": "The book allows its owner to understand and speak in the ancient language of griffins as if they knew it innately. This effect is permanent once learned, but only for communication with actual griffins or their kin. The reader must be within 30 feet of a griffin to use this ability."
      }
    ],
    "levelRequirementReason": "The book’s cryptic and ancient nature requires the user to have a basic understanding of magic and history.",
    "vendorReason": "Canterlot Commerce is known for its extensive collection of rare and magical curiosities, including this enigmatic tome.",
    "shippingDetail": "The book must be shipped via Griffon Express to ensure safe handling and delivery due to the fragile nature of the cover.",
    "usage": {
      "activation": "Bonus action for Prophecy Glimpse; passive effect for Griffin Tongue (permanent once learned)",
      "duration": "Prophecy Glimpse lasts 1 minute; permanent for Griffin Tongue",
      "endsWhen": "Expends a use when Prophecy Glimpse is activated; ends permanently if the user forgets the griffin language.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The book’s rarity, ancient magic, and the unique benefits it provides justify its price of 1000 XP.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T02:31:22.974963+00:00",
    "aiReviewedAt": "2026-07-25T02:31:22.974963+00:00",
    "aiReviewVersion": 1
  },
  "equestrian_item_the_harmonious_service_scroll": {
    "id": "equestrian_item_the_harmonious_service_scroll",
    "name": "The Harmonious Service Scroll of Balanced Momentum",
    "description": "The Harmonious Service Scroll of Balanced Momentum, crafted by Princess Twilight’s own hands, is a meticulously illustrated parchment that embodies the essence of balance and harmony. Unroll it in moments of dire need, and its intricate gestures release a wave of stabilizing energy that bolsters allies’ defenses, turning chaos into calm. This scroll, imbued with the magic of Equestria, provides a fleeting respite from turmoil, perfect for any party navigating treacherous terrain or combat.",
    "category": "services",
    "price": 1000,
    "icon": "📜",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Stabilizing Wave",
      "Boosted Defense"
    ],
    "vendor": "crystal_empire_guild",
    "shippedBy": "Royal Messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stabilizing Wave",
        "rules": "When activated as a bonus action within 30 feet of an ally, the scroll releases a wave of harmonic energy that grants the target temporary hit points equal to twice its level (up to a maximum of 50). This effect lasts for 1 minute."
      },
      {
        "title": "Boosted Defense",
        "rules": "For the duration of the Stabilizing Wave, all creatures within 30 feet of the scroll gain a +2 bonus to their AC. This effect can be maintained by the user as long as they remain within range and have not used it in the current encounter."
      }
    ],
    "levelRequirementReason": "This scroll is intended for all levels, providing a versatile tool for any party, especially those facing unpredictable situations.",
    "vendorReason": "The Crystal Empire Guild has long been trusted to provide essential services and tools to adventurers in need of balance and harmony during their quests.",
    "shippingDetail": "Delivered by the Royal Messenger, ensuring swift and safe transport with a one-day delivery time.",
    "usage": {
      "activation": "Bonus action within 30 feet of an ally or within range for Boosted Defense.",
      "duration": "1 minute per use; can be maintained as long as conditions are met.",
      "endsWhen": "Target loses hit points, the user moves out of range, or a new effect is activated.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The scroll’s balance-enhancing properties and its ability to stabilize allies in combat justify this price point within the Epic rarity tier.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T02:31:17.687923+00:00",
    "aiReviewedAt": "2026-07-25T02:31:17.687923+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_chronoslip_stalker": {
    "id": "kivotos_item_chronoslip_stalker",
    "name": "The Chronoslip Stalker Uniform",
    "description": "The Chronoslip Stalker Uniform is a muted grey ensemble that whispers with an unsettling energy. Crafted from synthesized academy fabric and infused with temporal distortion tech, it subtly shifts in light, offering fleeting advantages to its wearer. Rumored to briefly rewind the immediate past actions of the wearer by five seconds, this uniform grants a momentary reprieve from mistakes or embarrassments, allowing for a swift correction when time bends just enough.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Rewind",
      "Increased Reaction Speed"
    ],
    "vendor": "student_store",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Rewind",
        "rules": "As a bonus action, the wearer can briefly rewind their immediate past actions by five seconds. This effect provides a +2 bonus to reaction rolls and saving throws made within this time frame. The effect lasts for ten minutes or until used again."
      },
      {
        "title": "Increased Reaction Speed",
        "rules": "The wearer gains advantage on Dexterity (Acrobatics) checks and actions that require quick reflexes, such as dodging attacks or performing agile movements. This benefit persists for the duration of any combat encounter."
      }
    ],
    "levelRequirementReason": "This uniform is designed to assist beginners in mastering their reactions and timing, making it accessible to all levels.",
    "vendorReason": "The Student Store often stocks items that help its clientele excel in practical, day-to-day scenarios.",
    "shippingDetail": "Ships within one hour of purchase; delivered by a fleet of drones.",
    "usage": {
      "activation": "Bonus action or as part of the reaction to an immediate threat.",
      "duration": "Ten minutes or until used again.",
      "endsWhen": "Used again, or at the start of your next turn if not used within ten minutes.",
      "charges": "Unlimited"
    },
    "priceReason": "The uniform's rarity and practical utility justify its moderate price.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T02:30:58.649142+00:00",
    "aiReviewedAt": "2026-07-25T02:30:58.649142+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_lost_resonance_stalker": {
    "id": "kivotos_item_lost_resonance_stalker",
    "name": "The Lost Resonance Stalker’s Visor",
    "description": "The Lost Resonance Stalker’s Visor is a sleek obsidian visor forged in the heart of Academy City. Crafted from a rare alloy infused with remnants of lost resonances, it amplifies the wearer's perception of chaotic data streams. This visor grants access to fragmented memories and glimpses into student thoughts but can induce disorientation if used excessively. The wearer must be vigilant as prolonged exposure may lead to mental fatigue.",
    "category": "curiosities",
    "price": 1000,
    "icon": "👁️",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "glimpse student thoughts",
      "increase data processing speed"
    ],
    "vendor": "club_supply",
    "shippedBy": "Courier Delivery",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Glimpse Student Thoughts",
        "rules": "This is a passive ability that allows the user to perceive fragments of nearby students' thoughts within a short-range radius. The effect has no save DC and does not expend charges."
      },
      {
        "title": "Increase Data Processing Speed",
        "rules": "The wearer gains a +15% bonus to Intelligence (Investigation) checks related to data processing, which is permanent as long as the visor is worn. This effect cannot be dispelled or ended by any means and does not require charges."
      }
    ],
    "levelRequirementReason": "The wearer must have a high level of experience to handle the mental strain and information overload from the visor.",
    "vendorReason": "Club Supply specializes in unique and rare items that can enhance one's academic or investigative capabilities, making it an ideal vendor for this visor.",
    "shippingDetail": "Ships via Courier Delivery with a standard delivery time of 3 days.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Permanent while worn",
      "endsWhen": "Removing the visor ends the effects",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the item's unique and powerful abilities, making it a sought-after but not overpowered relic.",
    "priceOriginal": 950,
    "priceReviewedAt": "2026-07-25T02:31:15.337898+00:00",
    "aiReviewedAt": "2026-07-25T02:31:15.337898+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_mk72_transfer_uniforms": {
    "id": "kivotos_item_mk72_transfer_uniforms",
    "name": "Mk.72 Transfer Uniforms - Phase Shift Edition",
    "description": "The Mk.72 Transfer Uniforms - Phase Shift Edition are stark white with subtle, intricate patterns that subtly hint at hidden phase-shift technology. Crafted from a blend of advanced materials and Academy City’s proprietary phase-displacement fabric, these uniforms allow for instantaneous transfer between interconnected hallways. When activated, they briefly render the wearer invisible to security systems for three seconds, but any misuse will set off an immediate alarm, drawing unwanted attention.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚡",
    "stock": 9,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "instantaneous hallway transfer",
      "brief invisibility"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Secure Delivery Drone",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Instantaneous Hallway Transfer",
        "rules": "The user must be in the Academy City network. Activation is a bonus action. The duration is instantaneous, and it requires no range or save DC. The effect ends when the user reaches their destination or if used incorrectly."
      },
      {
        "title": "Brief Invisibility",
        "rules": "Lasts for 3 seconds with a 20% chance of success. Activation is a bonus action. The invisibility can be detected by security systems, which will trigger an alarm if the user is not in their designated transfer path. This effect does not have a save DC but ends when the duration expires or if used incorrectly."
      }
    ],
    "levelRequirementReason": "Requires sufficient training to master the phase-shift technology and handle the uniforms properly.",
    "vendorReason": "The Academy Armory supplies specialized equipment for personnel who need to navigate between various facilities discreetly and efficiently.",
    "shippingDetail": "Ships immediately, delivered by a Secure Delivery Drone within the Academy City network.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous transfer; invisibility lasts for 3 seconds",
      "endsWhen": "Upon reaching destination or if used incorrectly",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced price reflects the advanced technology and specialized training required to use these uniforms.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-25T02:31:35.725875+00:00",
    "aiReviewedAt": "2026-07-25T02:31:35.725875+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_angular_resonance_speaker": {
    "id": "grand_country_item_angular_resonance_speaker",
    "name": "The Yielding Speaker's Angular Resonator",
    "description": "The Yielding Speaker's Angular Resonator is a black obsidian speaker, carved from the heart of an ancient climbing spire that once scaled the highest mountain. Its yielding surface allows it to seamlessly blend into vertical structures, amplifying your movements with subtle directional force and whispering secrets of the ascending paths. When activated, it emits a low hum that momentarily shifts gravitational pull within a small radius, providing a 10% increase in movement speed and reducing climbing stamina consumption by 20%. The speaker's craftsmanship is said to channel the spirit of the spire itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔊",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Movement Speed Boost",
      "Climbing Stamina Reduction"
    ],
    "vendor": "side_seller",
    "shippedBy": "gravity_drone",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Increased Movement Speed",
        "rules": "When activated, this item grants a +10% increase in movement speed within its radius. This effect lasts for up to 1 minute and ends when the user stops moving or falls prone."
      },
      {
        "title": "Reduced Climbing Stamina Consumption",
        "rules": "While equipped, your climbing stamina consumption is reduced by 20%. This effect persists while you are in a vertical environment. The effect ends if you leave a vertical surface for more than 1 minute or if the speaker is damaged."
      }
    ],
    "levelRequirementReason": "The speaker's intricate craftsmanship and magical properties necessitate a minimum level to ensure proper handling.",
    "vendorReason": "Side Seller has connections with alchemists who specialize in ancient artifacts like the Yielding Speaker's Angular Resonator.",
    "shippingDetail": "The gravity drone ensures a safe and precise delivery, especially important for such delicate magical items.",
    "usage": {
      "activation": "Action to activate; lasts up to 1 minute or until the user stops moving.",
      "duration": "Up to 1 minute per activation.",
      "endsWhen": "User stops moving, falls prone, or leaves a vertical surface for more than 1 minute.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Reflects the rare material and magical properties of the speaker, as well as its unique crafting process.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:31:54.203887+00:00",
    "aiReviewedAt": "2026-07-25T02:31:54.203887+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_mk_74_layered_stability_platform": {
    "id": "grand_country_item_mk_74_layered_stability_platform",
    "name": "Mk.74 Layered Stability Platform – The Ascendant’s Grip",
    "description": "The Mk.74 Layered Stability Platform – The Ascendant’s Grip is a towering, angular construct forged from solidified strata and reinforced with ancient climbing resin. Its layered structure adapts to any vertical surface, offering a secure base for even the most daring ascents. A rhythmic pulse emanates from its core, a testament to its engineered resilience. This platform significantly enhances climbing speed by 30% and provides a temporary anchor point for grappling hooks.",
    "category": "equipment",
    "price": 7500,
    "icon": "🛗",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Enhanced Climbing Speed",
      "Grapple Anchor Point"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "sky_cart",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Enhanced Climbing Speed",
        "rules": "The user gains a climbing speed increase of 30%. This effect is active as long as the platform remains in contact with the surface. The duration ends if the platform is detached or if the user moves more than 10 feet away from it."
      },
      {
        "title": "Grapple Anchor Point",
        "rules": "The platform provides a temporary anchor point for grappling hooks, allowing users to secure themselves to vertical surfaces without the need for additional fastening. This effect is active as long as the platform remains in contact with the surface and ends if detached or if the user moves more than 10 feet away."
      }
    ],
    "levelRequirementReason": "Requires a character of at least 15th level to handle its weight and complexity.",
    "vendorReason": "The Vertical Vendor specializes in gear for those who defy gravity, making this platform an essential purchase for their clientele.",
    "shippingDetail": "Shipped by the Sky Cart, this item arrives via a swift aerial courier, ensuring safe and timely delivery to adventurers across the realm.",
    "usage": {
      "activation": "Passive effect upon placement on vertical surfaces.",
      "duration": "Instantaneous activation; duration ends if detached or user moves more than 10 feet away.",
      "endsWhen": "Detached from surface or user moves more than 10 feet away.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The platform's advanced engineering and unique properties justify its high price, ensuring it remains a sought-after item for those who seek unparalleled stability.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T02:31:42.644787+00:00",
    "aiReviewedAt": "2026-07-25T02:31:42.644787+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_lumina_echo_speaker_shard": {
    "id": "grand_country_item_lumina_echo_speaker_shard",
    "name": "The Lumina Echo Speaker Shard - Fractured Resonance",
    "description": "The Lumina Echo Speaker Shard - Fractured Resonance is a jagged fragment of an ancient, colossal speaker that once guided lost travelers through the labyrinthine caverns. Its bioluminescent edges pulse with fractured echoes, momentarily revealing hidden pathways within the rock and offering precarious yet potentially life-saving grip for climbers. When struck against stone, it emits a disorienting sound that can confuse foes, giving you precious moments to plan your next move.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 8,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "Reveals Hidden Pathways",
      "Disorients Enemies"
    ],
    "vendor": "layer_market",
    "shippedBy": "Phantom Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveals Hidden Pathways",
        "rules": "When activated by striking the shard against a rocky surface, this effect has a 50% chance to reveal a hidden route leading around or through an obstacle within 30 feet. The duration is instantaneous and does not require a saving throw."
      },
      {
        "title": "Disorients Enemies",
        "rules": "The shard emits a disorienting sound when struck, causing all enemies within 10 feet to make a Wisdom saving throw (DC 15). On a failed save, they are stunned for 1 round. The effect can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "This shard is designed for adventurers of all levels to benefit from its unique properties.",
    "vendorReason": "Layer Market specializes in relics and curiosities, making it the perfect vendor for this ancient fragment.",
    "shippingDetail": "The shard is shipped discreetly via Phantom Delivery's shadow courier network to ensure its safe arrival.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after use or if the shard breaks during activation",
      "charges": "Unlimited, but only one effect can be used per short or long rest"
    },
    "priceReason": "The shard's rarity and unique properties justify its price of 1000 XP.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-25T02:32:06.799461+00:00",
    "aiReviewedAt": "2026-07-25T02:32:06.799461+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_the-rotting-skull-piercer": {
    "id": "warhammer_item_the-rotting-skull-piercer",
    "name": "The Rotting Skull Piercer",
    "description": "The Rotting Skull Piercer is a nightmarish warhammer forged from the calcified skull of an ancient lich, its surface etched with arcane runes that pulse with a sickly green ichor. When wielded, it unleashes waves of decaying energy that corrode both flesh and metal, leaving nothing but bone behind. Its touch is said to spread rot through the very air, making those who hold it feel as though their own vitality is being consumed.",
    "category": "consumables",
    "price": 1000,
    "icon": "💀",
    "stock": 33,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Rotting Decay",
      "Armor Corrosion"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "winged-skull-courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Rotting Decay",
        "rules": "On activation, the Rotting Skull Piercer unleashes a wave of decaying energy that deals 100 points of damage over five turns. The target must make a DC 18 Constitution saving throw or be affected by the 'Rotting' status effect, which reduces their armor class by 2 until the end of their next turn."
      },
      {
        "title": "Armor Corrosion",
        "rules": "Each time you hit with this weapon, there is a 30% chance that the target is also inflicted with 'Weakness,' reducing its Strength score by 1 for one minute. This effect stacks up to three times per encounter."
      }
    ],
    "levelRequirementReason": "Requires at least 15th level to wield, due to the weapon's arcane and necrotic power.",
    "vendorReason": "The Chaos Dealer regularly procures powerful relics from dark corners of the multiverse, making this item a fitting addition to their stock.",
    "shippingDetail": "Delivered by the Winged Skull Courier, known for its eerie silence and unerring accuracy in delivering such items.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect over five turns",
      "endsWhen": "The target successfully saves against Rotting Decay or the weapon is used again on a different target.",
      "charges": "Unlimited, recharged at dawn"
    },
    "priceReason": "The item's rare and necrotic properties justify its high price in this market.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T02:33:02.172874+00:00",
    "aiReviewedAt": "2026-07-25T02:33:02.172874+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_runic-shadow-beacon-service": {
    "id": "warhammer_item_runic-shadow-beacon-service",
    "name": "Runic Shadow Beacon Service",
    "description": "The Runic Shadow Beacon Service is a sleek obsidian device, its surface etched with glowing runes that pulse with malevolent energy. It radiates an aura of impenetrable darkness as it projects an illusory shadow duplicate of the wielder, capable of drawing fire and absorbing up to 50% of incoming damage for one turn. Nearby foes are momentarily disoriented by this spectral mimicry, offering a critical distraction in the heat of battle.",
    "category": "services",
    "price": 1000,
    "icon": "🌑",
    "stock": 1,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Shadow Duplication",
      "Damage Absorption"
    ],
    "vendor": "fate_forge",
    "shippedBy": "dimensional-rift-portal",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Shadow Duplication",
        "rules": "Upon activation, the user creates an illusory duplicate that can engage enemies and draw attacks. The effect lasts for one turn."
      },
      {
        "title": "Damage Absorption",
        "rules": "The shadow duplicates absorbs 50% of incoming damage from any source during its active duration. This effect does not stack with other similar abilities."
      }
    ],
    "levelRequirementReason": "This service requires a high level to master the intricate runes and harness the darkness.",
    "vendorReason": "Fate Forge specializes in crafting items that blur the line between reality and illusion, making this service a perfect fit for their catalog.",
    "shippingDetail": "The item is delivered via dimensional rift, ensuring it arrives intact and ready to use.",
    "usage": {
      "activation": "Action",
      "duration": "One turn",
      "endsWhen": "Ends when the user dismisses it or takes damage exceeding the absorbed amount.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item's rarity and unique crafting process justify a price of 1000 XP.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-25T02:32:13.899225+00:00",
    "aiReviewedAt": "2026-07-25T02:32:13.899225+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_mk.49-corrupted-chronal-icon": {
    "id": "warhammer_item_mk.49-corrupted-chronal-icon",
    "name": "Mk.49 Corrupted Chronal Icon",
    "description": "The Mk.49 Corrupted Chronal Icon is a fragmented violet artifact, its fractured temporal energies leaking like molten glass. When activated, it allows for a single rewind of time by precisely three seconds, but at the cost of amplifying chaos within a fifty-foot radius and drawing the attention of malevolent entities from beyond reality. The item's activation leaves behind an eerie hum that warns all nearby creatures of impending temporal disruption.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 12,
    "rarity": "legendary",
    "stockType": "back_order",
    "effects": [
      "Rewinds Time",
      "Temporal Anomaly"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "time-stream-express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rewinds Time",
        "rules": "Activates as a bonus action. Rewinds time by three seconds within a fifty-foot radius, affecting all creatures and objects in the area. The effect is instantaneous but can be dispelled on the same turn with a successful DC 20 Wisdom (Perception) check."
      },
      {
        "title": "Temporal Anomaly",
        "rules": "There is a 50% chance that a minor temporal anomaly will manifest, causing random effects such as creating a gust of wind or shifting terrain. The anomaly lasts for one minute and can be ended by the icon's owner with a successful DC 15 Wisdom (Arcana) check."
      }
    ],
    "levelRequirementReason": "The item requires minimal magical power to activate, making it accessible to low-level characters.",
    "vendorReason": "As a high-security armament supplier, the Imperial Armory deals in rare and powerful artifacts like the Mk.49 Corrupted Chronal Icon.",
    "shippingDetail": "The item is shipped via Time-Stream Express, known for its impeccable timeliness, ensuring the artifact arrives precisely when ordered.",
    "usage": {
      "activation": "Bonus action to activate and rewind time.",
      "duration": "Instantaneous effect; duration of temporal anomaly lasts one minute.",
      "endsWhen": "Temporal anomaly ends on a successful check by the icon's owner or is dispelled as an immediate action.",
      "charges": "Unlimited uses, but can only be activated once per long rest."
    },
    "priceReason": "The item’s price reflects its rarity and utility without granting excessive power.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-25T02:32:30.777892+00:00",
    "aiReviewedAt": "2026-07-25T02:32:30.777892+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_hexagonal_chronometer_drinker": {
    "id": "connectopia_item_hexagonal_chronometer_drinker",
    "name": "The Chronometric Hexa-Drinker",
    "description": "The Chronometric Hexa-Drinker is a hexagonal chronal device that hums with temporal energy. Crafted from solidified chronal fragments and polished basalt, it allows miners to accelerate or decelerate their mining speed. Its pulse can be felt as the surrounding time seems to warp around you, granting brief bursts of efficiency – but misuse risks altering the very fabric of space-time! When activated, it amplifies your pickaxe's swing with a surge of temporal force.",
    "category": "consumables",
    "price": 1000,
    "icon": "⏳",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Surge",
      "Chronal Echoes"
    ],
    "vendor": "craft_corner",
    "shippedBy": "Hovercraft Express",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Temporal Surge",
        "rules": "Activating the Chronometric Hexa-Drinker allows you to increase your mining speed by 25% for a duration of 10 seconds. You can use this once per short or long rest."
      },
      {
        "title": "Chronal Echoes",
        "rules": "There is a 30% chance that each use generates a chronal echo, which provides you with an additional small resource boost. This effect cannot occur more than twice per day."
      }
    ],
    "levelRequirementReason": "Crafted for experienced miners who require efficiency without compromising safety.",
    "vendorReason": "As a premier supplier of mining tools, Craft Corner is known for offering the most reliable and advanced equipment to its clients.",
    "shippingDetail": "Ships within the week via Hovercraft Express; expedited shipping available for an additional fee.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds",
      "endsWhen": "The duration ends or you use your action on another task",
      "charges": "Once per short or long rest"
    },
    "priceReason": "Balanced at this price point to reflect its unique temporal capabilities and limited daily stock.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T02:32:24.705968+00:00",
    "aiReviewedAt": "2026-07-25T02:32:24.705968+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_imperial_geode_pickaxe": {
    "id": "connectopia_item_imperial_geode_pickaxe",
    "name": "The Imperial Geode-Striker",
    "description": "The Imperial Geode-Striker, forged from compressed imperial granite and inlaid with shimmering geodes, resonates with the planet's core, delivering immense power to shatter even the hardest rock formations. Its rhythmic vibration is a testament to ancient engineering, providing miners with a steady stream of earth energy that regenerates their stamina. However, prolonged use can induce unsettling geological visions, forcing users to pause and reorient themselves in the cavernous depths.",
    "category": "equipment",
    "price": 1000,
    "icon": "⛏️",
    "stock": 8,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Significantly increased mining speed",
      "Chance to discover rare mineral deposits"
    ],
    "vendor": "block_smith",
    "shippedBy": "Automated Drone Delivery Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Significantly Increased Mining Speed",
        "rules": "When used, this pickaxe grants a bonus action that allows the user to mine as if they had an additional action. This effect lasts for 1 minute and can be repeated once per long rest."
      },
      {
        "title": "Chance to Discover Rare Mineral Deposits",
        "rules": "Each time you use this pickaxe, there is a 25% chance that you will uncover a rare mineral deposit. If successful, the player gains a valuable ore or gemstone of your choice. This effect can be triggered up to three times per long rest."
      }
    ],
    "levelRequirementReason": "The Imperial Geode-Striker is designed for all miners and adventurers who seek efficiency in their endeavors.",
    "vendorReason": "Block Smith, the trusted vendor of mining equipment, stocks this pickaxe to cater to the needs of novice and seasoned miners alike.",
    "shippingDetail": "The Automated Drone Delivery Service ensures that this pickaxe is delivered swiftly from the depths of the forge to your doorstep within a week.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute, repeatable once per long rest",
      "endsWhen": "After 1 minute or when used again in the same day",
      "charges": "Unlimited"
    },
    "priceReason": "The Imperial Geode-Striker's rare materials and advanced craftsmanship justify its moderate price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-25T02:32:44.959167+00:00",
    "aiReviewedAt": "2026-07-25T02:32:44.959167+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_quantum_resonance_curiosity": {
    "id": "connectopia_item_quantum_resonance_curiosity",
    "name": "The Resonant Echo-Stalker",
    "description": "The Resonant Echo-Stalker is a crystalline device, its layered quartz casing embedded with salvaged quantum relays that hum softly when in use. This enigmatic tool passively detects residual energy signatures within a 5-block radius, helping miners and explorers locate hidden veins of valuable minerals or forgotten tunnels. However, prolonged exposure to its unsettling resonance can cause auditory hallucinations and a creeping sense of existential dread, making it perilously effective for those who dare to wield it too long.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Passive Mineral Detection",
      "Temporal Anomalies"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Express Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Passive Mineral Detection",
        "rules": "The Resonant Echo-Stalker passively reveals hidden mineral deposits within a 5-block radius. It provides a +1 bonus to Perception checks made with the Survival skill when searching for resources or hidden veins of ore."
      },
      {
        "title": "Temporal Anomalies",
        "rules": "Once per long rest, the Resonant Echo-Stalker has a 20% chance to trigger a temporal anomaly. On success, it provides +1d4 temporary hit points and a +1 bonus to all saving throws until the start of your next turn; on failure, you must succeed on a DC 15 Wisdom save or become confused for 1 minute."
      }
    ],
    "levelRequirementReason": "The Resonant Echo-Stalker is a powerful tool that requires basic proficiency to handle its quantum relays and quartz casing without mishap.",
    "vendorReason": "Pioneer Post, known for their expeditions and deep expertise in mining gear, carries the Resonant Echo-Stalker due to its utility for adventurers seeking hidden resources.",
    "shippingDetail": "The device is shipped via Express Courier Service with a tracking number provided upon shipment. Expedited delivery ensures adventurers can start their next project without delay.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous, continuous while held or worn.",
      "endsWhen": "Destroyed if exposed to extreme temperatures above 100°C for more than 3 seconds.",
      "charges": "Unlimited"
    },
    "priceReason": "The Resonant Echo-Stalker is priced at 1000 XP as it combines advanced quantum technology with ancient quartz, offering a unique and powerful tool for exploration.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T02:32:58.817774+00:00",
    "aiReviewedAt": "2026-07-25T02:32:58.817774+00:00",
    "aiReviewVersion": 1
  },
  "equestrian_item_crimson_echoes_of_elemental_lord": {
    "id": "equestrian_item_crimson_echoes_of_elemental_lord",
    "name": "Crimson Echoes of Elemental Lord Phlox",
    "description": "The Crimson Echoes of Elemental Lord Phlox are pulsed with the raw, chaotic energy from Discord's laughter. Consuming one reveals fleeting glimpses into elemental forces and forgotten timelines, leaving behind whispers of ancient lore. These enchanted apples, plucked from trees that have been touched by the dread laughter, offer a brief respite from the mundane, granting +3 Dexterity for 60 seconds and a chance to confuse foes or reduce your own stats temporarily if consumed without caution.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍎",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Dexterity Boost",
      "Confusion Chance"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Pegasus Post",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Dexterity Boost",
        "rules": "Consume the apple as an action, granting you +3 Dexterity for 60 seconds. This effect ends when you finish a short rest or if you take any other action that requires your reaction."
      },
      {
        "title": "Confusion Chance",
        "rules": "There is a 25% chance (DC 14) to confuse a single target within 30 feet on a successful hit with a melee weapon attack. The confused creature must make a DC 14 Wisdom saving throw at the start of each of its turns, and it can repeat the save at the end of its turn if it takes no actions. On a success, the effect ends."
      }
    ],
    "levelRequirementReason": "Only those with experience navigating elemental chaos are advised to consume these apples.",
    "vendorReason": "Applejack and her market have adapted to offer rare, magical produce like the Crimson Echoes of Elemental Lord Phlox.",
    "shippingDetail": "These apples are shipped with special care using enchanted bubbles that preserve their potency until consumption.",
    "usage": {
      "activation": "Consume as an action",
      "duration": "60 seconds or ends on a short rest",
      "endsWhen": "Short rest or reaction use",
      "charges": "Unlimited"
    },
    "priceReason": "The rarity and magical properties of these apples justify their high price.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T02:33:07.543638+00:00",
    "aiReviewedAt": "2026-07-25T02:33:07.543638+00:00",
    "aiReviewVersion": 1
  },
  "equestrian_item_chronal_apple_of_the_lost_lord_marlin": {
    "id": "equestrian_item_chronal_apple_of_the_lost_lord_marlin",
    "name": "Chronal Apple of the Lost Lord Marlin",
    "description": "The Chronal Apple of the Lost Lord Marlin is a shimmering lavender fruit with a faint silver sheen, said to be an artifact left behind by ancient timekeepers. When consumed, it momentarily recalibrates your temporal perception, allowing you to reverse a single action. This apple originates from the mysterious ruins of Mount Silvanus and is sold exclusively by Canterlot Commerce, known for its access to rare relics. Beware, as overuse may warp your sense of time, causing moments to loop endlessly.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Temporal Rewind",
      "+2 Temporal Resistance"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Royal Guard Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Rewind",
        "rules": "As a reaction, you can rewind the last action that you or an adjacent ally took. This effect lasts until your next turn and cannot be used again for 8 hours. The use of this apple risks time distortion, causing a minor visual anomaly in your surroundings."
      },
      {
        "title": "+2 Temporal Resistance",
        "rules": "You gain +2 to all saving throws made against effects that manipulate or alter time. This bonus persists until you finish a long rest."
      }
    ],
    "levelRequirementReason": "The apple's temporal properties are accessible to any adventurer, though its misuse can be perilous.",
    "vendorReason": "Canterlot Commerce specializes in rare and ancient artifacts, including relics from the timekeeping era.",
    "shippingDetail": "The apple is shipped under royal guard escort to ensure its safe arrival.",
    "usage": {
      "activation": "Reaction",
      "duration": "Until your next turn",
      "endsWhen": "You use it again or finish a short rest",
      "charges": "1/8 hours"
    },
    "priceReason": "The apple's rarity and the risk of time distortion justify its high price.",
    "priceOriginal": 1750,
    "priceReviewedAt": "2026-07-25T02:33:02.313247+00:00",
    "aiReviewedAt": "2026-07-25T02:33:02.313247+00:00",
    "aiReviewVersion": 1
  },
  "equestrian_item_sunstone_lord_valerian_essence": {
    "id": "equestrian_item_sunstone_lord_valerian_essence",
    "name": "Sunstone Lord Valerian Essence Apples",
    "description": "These golden apples, plucked from the heart of a sunstone grove long abandoned by the light of the sun, radiate an intense warmth that seeps into your very essence. Each bite is not just nourishment but a call to resilience, pulsing with restorative energy and imbued with the ancient sorrow of the land itself. A single apple grants 80 hit points back over 60 seconds and bestows +5 fire resistance for an hour, providing a tangible link to the forgotten sunstone grove from which they came.",
    "category": "premium",
    "price": 1000,
    "icon": "☀️",
    "stock": 12,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Restores Health",
      "Fire Resistance"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Griffon Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restores Health",
        "rules": "Eating one apple restores 80 hit points over a period of 60 seconds. The effect is instantaneous upon consumption."
      },
      {
        "title": "Fire Resistance",
        "rules": "+5 fire resistance for the next hour, granting immunity to minor fire damage until expended or negated by an opposing effect."
      }
    ],
    "levelRequirementReason": "These apples are accessible to all adventurers as their restorative properties and fire resistance benefits do not demand a high level of expertise.",
    "vendorReason": "The Crystal Empire has long maintained ties with the forgotten groves, ensuring that these apples are available for all who seek them.",
    "shippingDetail": "Ships via a dedicated griffin courier, arriving within two days of order placement.",
    "usage": {
      "activation": "Eating one apple",
      "duration": "60 seconds and for the next hour respectively",
      "endsWhen": "The effect ends when its duration expires or is negated by an opposing effect.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as these apples are a rare and valuable resource, offering both immediate health restoration and fire resistance, their price reflects the effort to retrieve them from the sunstone groves.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T02:33:20.060651+00:00",
    "aiReviewedAt": "2026-07-25T02:33:20.060651+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_chronometric_whisperer_seeker": {
    "id": "earth_land_item_chronometric_whisperer_seeker",
    "name": "The Chronometric Whisperer's Seeker",
    "description": "The Chronometric Whisperer's Seeker is an intricately carved bone scroll, its surface etched with runes that shimmer in shifting patterns of time and space. This ancient artifact allows you to perceive fleeting glimpses into alternate timelines, offering a brief window where the threads of fate seem to unravel before your eyes. Holding it grants a subtle, ethereal glow that subtly distorts reality around you, providing an almost comical yet uncanny sense of impending outcomes—though the visions are often fragmented and confusing.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 12,
    "rarity": "legendary",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Perception",
      "Echoes of Time"
    ],
    "vendor": "magic_shop",
    "shippedBy": "swift_wing courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Temporal Perception",
        "rules": "Gain a +15% reaction bonus to your Initiative checks, allowing you to anticipate immediate danger. This effect lasts for the duration of one round and does not stack with other similar effects."
      },
      {
        "title": "Echoes of Time",
        "rules": "You gain a faint, ethereal vision of the next 3 seconds, providing insight into potential outcomes. You can use this ability once per short or long rest. The visions are often fragmented and unreliable but can give you an edge in decision-making."
      }
    ],
    "levelRequirementReason": "Requires significant magical attunement to navigate the temporal distortions without being overwhelmed.",
    "vendorReason": "The magic shop specializes in ancient and rare artifacts, including those that can bend time itself.",
    "shippingDetail": "Ships via swift wing courier for expedited delivery within a week.",
    "usage": {
      "activation": "Reaction to gain Temporal Perception or once per short/long rest for Echoes of Time.",
      "duration": "Temporal Perception lasts one round, Echoes of Time lasts 3 seconds.",
      "endsWhen": "Upon the end of your next turn or when you lose consciousness.",
      "charges": "Once per short or long rest"
    },
    "priceReason": "Balanced at a price to reflect its limited daily stock and significant attunement requirements.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-25T02:33:49.959172+00:00",
    "aiReviewedAt": "2026-07-25T02:33:49.959172+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_lithic_resonance_curiosity": {
    "id": "earth_land_item_lithic_resonance_curiosity",
    "name": "The Lithic Resonance Curator's Manifestation",
    "description": "The Lithic Resonance Curator's Manifestation is a crystalline orb, its facets shimmering with the ancient whispers of the earth’s crust. Gazing into it reveals vivid geological memories—ancient volcanic eruptions and shifting tectonic plates that once shaped this world. This artifact grants the wielder insights into the planet’s past, enhancing their perception checks related to stone and earth by +2d4, and provides a minor protection against seismic disturbances for 10 minutes.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💎",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "Geological Awareness",
      "Seismic Shield"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "ground_sled",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Geological Awareness",
        "rules": "Activates on command as a bonus action. Grants the wielder advantage on perception checks related to stone and earth until the start of their next turn."
      },
      {
        "title": "Seismic Shield",
        "rules": "Active for 10 minutes upon activation, provides a +2 bonus to AC against any damage from tremors or earthquakes. Ends if the Curator is knocked unconscious or if it takes a short rest."
      }
    ],
    "levelRequirementReason": "Requires at least 4th level to properly harness its ancient power and resist geological forces.",
    "vendorReason": "The Earth Emporium specializes in artifacts connected to the natural world, making this relic a perfect fit for their collection.",
    "shippingDetail": "Ships via ground sled within one week of purchase; delivery may be delayed by bad weather conditions.",
    "usage": {
      "activation": "Bonus action or command word",
      "duration": "10 minutes per day, up to three uses per long rest",
      "endsWhen": "Knocked unconscious or the Curator takes a short rest",
      "charges": "3 charges, recharged after a long rest"
    },
    "priceReason": "Balanced price reflects its mythic rarity and limited utility within adventuring parties.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T02:33:50.019308+00:00",
    "aiReviewedAt": "2026-07-25T02:33:50.019308+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_divine_harmonic_seeker": {
    "id": "earth_land_item_divine_harmonic_seeker",
    "name": "The Divine Harmonic Seeker's Anthem",
    "description": "The Divine Harmonic Seeker's Anthem, crafted from silver and etched with runes of celestial alignment, hums a melody that resonates within the very fabric of magic. This ancient flute can be played to summon a protective barrier of harmonic frequencies capable of deflecting spells, and it also inspires its wielder with a surge of courage, bolstering their resolve against fear. With each note, the instrument's aura pulses with minor healing, restoring vitality to those who hold it during times of peril.",
    "category": "consumables",
    "price": 1000,
    "icon": "🎶",
    "stock": 88,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Harmonic Deflection",
      "Courageous Resolve"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "pony_express",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Harmonic Deflection",
        "rules": "When the Divine Harmonic Seeker's Anthem is played, a protective barrier of harmonic frequencies activates as a reaction to a hostile spell or magical attack. This barrier has a range of 10 feet and provides a +2 bonus to AC against one such attack per use. The effect lasts for 1 round after activation."
      },
      {
        "title": "Courageous Resolve",
        "rules": "Upon playing the flute, the player gains advantage on saving throws against fear effects and increases their Charisma modifier by 2 until the end of their next short or long rest. This effect can only be used once per day."
      }
    ],
    "levelRequirementReason": "The intricate runes and magical properties require a player of at least 15th level to properly wield and understand the flute's power.",
    "vendorReason": "The Guild Quartermaster sells this item as part of their extensive collection of rare and powerful artifacts, including those used by high-level adventurers.",
    "shippingDetail": "The Divine Harmonic Seeker's Anthem is carefully packed in a custom wooden case to ensure safe delivery. Shipping may take up to three days due to its fragile nature.",
    "usage": {
      "activation": "Play the flute as a bonus action.",
      "duration": "1 round after activation.",
      "endsWhen": "The effect ends when the player takes another action or reaction, or if the barrier is dispelled by magic.",
      "charges": "Unlimited daily uses."
    },
    "priceReason": "The intricate magical properties and craftsmanship justify a high price of 1000 XP, reflecting its status as an uncommon and powerful artifact.",
    "priceOriginal": 550,
    "priceReviewedAt": "2026-07-25T02:33:39.302928+00:00",
    "aiReviewedAt": "2026-07-25T02:33:39.302928+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_the_silvan_rune_of_whispering_winds": {
    "id": "middle_earth_item_the_silvan_rune_of_whispering_winds",
    "name": "The Silvan Rune of Whispering Winds",
    "description": "The Silvan Rune of Whispering Winds, a delicate rune forged from the heartwood of Lothlórien’s ancient trees, pulses with a spectral green light that hints at elven magic and the forest's ancient whispers. When invoked, it calls forth a gust of wind that extinguishes nearby flames in an instant while scattering foes across the battlefield. Its power is drawn from the very essence of the forest, making it both a weapon and a tool for survival.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💨",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Wind Gust",
      "Fire Extinguisher"
    ],
    "vendor": "elven_market",
    "shippedBy": "Winged Courier",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Wind Gust",
        "rules": "As a bonus action, the wielder can activate the rune to create a gust of wind that pushes creatures within 10 feet. Creatures must succeed on a DC 14 Strength saving throw or be pushed up to 10 feet away from the center of the effect and fall prone."
      },
      {
        "title": "Fire Extinguisher",
        "rules": "When activated, the rune can extinguish small flames within its range. It has a 75% chance of extinguishing any fire in its vicinity without further action."
      }
    ],
    "levelRequirementReason": "The rune requires significant magical knowledge and resilience to wield.",
    "vendorReason": "Only the elves who protect Lothlórien possess the arcane wisdom needed to sell such a powerful artifact.",
    "shippingDetail": "The rune is carefully delivered by messengers of Galadriel, ensuring its safe arrival and proper handling.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous (Wind Gust) / Instantaneous (Fire Extinguisher)",
      "endsWhen": "Charges are exhausted or the wielder is incapacitated",
      "charges": "5 charges, recharged after a long rest"
    },
    "priceReason": "The rune's rarity and magical complexity justify its high price.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T02:34:07.865036+00:00",
    "aiReviewedAt": "2026-07-25T02:34:07.865036+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_dwarven_maker_of_stone_echoes": {
    "id": "middle_earth_item_dwarven_maker_of_stone_echoes",
    "name": "Dwarven Maker's Runes of Stone Echoes",
    "description": "Crafted in the shadowy depths of Moria, these runes are forged from ancient dwarven stone and bear the echoes of bygone craftsmanship. When activated, they release a resonant pulse that shakes the very foundations of nearby structures, stunning foes within earshot for several moments. These runes also possess an uncanny ability to reveal hidden passageways in solid rock, offering invaluable insight to those who seek them out in the dark.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔊",
    "stock": 8,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "sonic stunner",
      "stone revelation"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "Stone Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sonic Stunner",
        "rules": "When activated, these runes emit a concussive pulse that stuns all creatures within a 10-foot radius for 3 seconds. The effect has no save DC and does not expend charges."
      },
      {
        "title": "Stone Revelation",
        "rules": "These runes can be used to reveal hidden passageways in stone, affecting an area up to 20 feet wide. This effect is instantaneous and requires the user to spend at least one minute examining the immediate surroundings."
      }
    ],
    "levelRequirementReason": "The item's activation requires a mere level 1 character due to its utility in revealing hidden passageways.",
    "vendorReason": "Dwarven craftsmen are the only ones who can forge such runes, making them exclusive to their forges.",
    "shippingDetail": "Shipped via the Stone Cart, these delicate runes must be handled with care and arrive in pristine condition.",
    "usage": {
      "activation": "A bonus action is required to activate the runes' effect.",
      "duration": "The sonic stunner's effect lasts for 3 seconds.",
      "endsWhen": "The effect ends when its duration expires or if a creature within the radius of the pulse moves out of range.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Crafted from ancient dwarven stone, these runes are rare and highly sought after for their unique abilities in exploration and combat.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:34:13.789552+00:00",
    "aiReviewedAt": "2026-07-25T02:34:13.789552+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_shire_maker_of_forgotten_songs": {
    "id": "middle_earth_item_shire_maker_of_forgotten_songs",
    "name": "Shire Maker’s Runes of Forgotten Songs",
    "description": "The Shire Maker’s Runes of Forgotten Songs are intricately carved into a small, worn music box recovered from an abandoned hobbit hole in the Green Hills. When activated, these runes emit a melodic hum that can either soothe nearby creatures with their ancient, tranquil notes or briefly disorient foes with echoes of forgotten harmony. The instrument’s origin is shrouded in lore, once belonging to a legendary minstrel who wandered the Shire centuries ago.",
    "category": "consumables",
    "price": 1000,
    "icon": "🎵",
    "stock": 15,
    "rarity": "epic",
    "stockType": "delivery_only",
    "effects": [
      "Induces tranquility",
      "Disorients enemies"
    ],
    "vendor": "shire_shop",
    "shippedBy": "Rolling Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Tranquil Melody",
        "rules": "When activated as an action, the runes emit a calming melody that restores 5 points of sanity to all creatures within 10 feet. The effect lasts for 1 minute or until dispelled by magic."
      },
      {
        "title": "Harmonic Disorientation",
        "rules": "The runes can also be used as an action to emit a discordant tune, causing confusion in up to three targets within 20 feet. These creatures are incapacitated and cannot take actions for 2 seconds. The save DC is 14."
      }
    ],
    "levelRequirementReason": "The runes are accessible to all adventurers as a reminder of the Shire’s peaceful charm.",
    "vendorReason": "The Shire Shop offers a variety of relics and trinkets from the region, including these Runes of Forgotten Songs.",
    "shippingDetail": "Delivered by the Rolling Cart, which traverses the Shire’s winding roads to ensure timely delivery.",
    "usage": {
      "activation": "Activate as an action or bonus action.",
      "duration": "Tranquil Melody lasts for 1 minute; Harmonic Disorientation lasts for 2 seconds.",
      "endsWhen": "The effect ends if a creature moves out of range, dispelled by magic, or the user acts again.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP as a rare item with versatile and thematic effects that can be useful in various party roles.",
    "priceOriginal": 900,
    "priceReviewedAt": "2026-07-25T02:34:55.215253+00:00",
    "aiReviewedAt": "2026-07-25T02:34:55.215253+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_chronometric_resonance_seeker": {
    "id": "teyvat_item_chronometric_resonance_seeker",
    "name": "The Chronometric Resonance Seeker's Oculi",
    "description": "The Chronometric Resonance Seeker's Oculi are obsidian lenses imbued with the temporal essence of the Archons, their rhythmic pulses echoing through the fabric of time. When activated, these oculi grant fleeting visions of possible future outcomes, allowing for strategic foresight in combat and decision-making. However, prolonged use can lead to disorientation and fractured memories, as the mind struggles to reconcile the present with the temporal distortions it perceives.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 37,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Foresight",
      "Strategic Awareness"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "Sky Courier",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Temporal Foresight",
        "rules": "When activated, this item grants the user a brief vision of possible future outcomes. This effect lasts for 15 seconds and provides +2 to all Dexterity (Stealth) checks until it ends."
      },
      {
        "title": "Strategic Awareness",
        "rules": "For 1 minute after activation, the user has advantage on initiative rolls and can take an additional action per round. This effect is limited to once per short or long rest."
      }
    ],
    "levelRequirementReason": "The item's temporal manipulation requires a high level of magical proficiency.",
    "vendorReason": "The market in Mondstadt is known for its eclectic array of rare and exotic items, including artifacts with esoteric origins like the Chronometric Resonance Seeker's Oculi.",
    "shippingDetail": "Ships via the Sky Courier, ensuring swift delivery within a week from the time of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "15 seconds and 1 minute respectively for each effect; both effects end at the start of the user's next turn.",
      "endsWhen": "The duration ends or when the user takes damage, whichever comes first. Each effect can be used once per short or long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to reflect its powerful temporal effects and limited duration.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T02:34:38.711680+00:00",
    "aiReviewedAt": "2026-07-25T02:34:38.711680+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_hydro_xenolithic_fragment_seeker": {
    "id": "teyvat_item_hydro_xenolithic_fragment_seeker",
    "name": "The Hydro-Xenolithic Fragment Seeker",
    "description": "The Hydro-Xenolithic Fragment Seeker is a jagged, hydro-infused shard of xenolithic stone, its surface etched with ancient runes that shimmer faintly when exposed to water. Unearthed from the depths beneath Liyue Harbor, it thrums with latent aquatic energy, said to resonate with the flow manipulated by the Geo Archon. Holding this relic allows you to briefly manipulate nearby currents for tactical advantage, creating a localized hydro current that can disrupt enemies or aid allies in combat.",
    "category": "consumables",
    "price": 1000,
    "icon": "💧",
    "stock": 72,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Manipulate Currents",
      "Enhanced Movement"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "Sea Freight",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Manipulate Currents",
        "rules": "When activated as a bonus action, the Hydro-Xenolithic Fragment Seeker creates a localized hydro current within a 10-foot radius. This current lasts for 5 seconds and can be used once per short rest."
      },
      {
        "title": "Enhanced Movement",
        "rules": "While submerged in water or standing within a hydro current, the wielder's movement speed increases by 20%. This effect persists as long as you remain underwater or within the current."
      }
    ],
    "levelRequirementReason": "This item is accessible to lower-level characters who can benefit from its water manipulation abilities without overburdening their capabilities.",
    "vendorReason": "As a vendor familiar with the harbor's aquatic mysteries, Liyue Harbor is the natural home for this relic.",
    "shippingDetail": "Ships via Sea Freight within 3 days of purchase.",
    "usage": {
      "activation": "Bonus action to create a localized hydro current or enhance movement while submerged.",
      "duration": "5 seconds and once per short rest for manipulating currents; lasts as long as the user is underwater or within the current for enhanced movement.",
      "endsWhen": "Effect ends when the user moves out of water or the hydro current dissipates.",
      "charges": "Unlimited uses, but only one effect can be active at a time."
    },
    "priceReason": "The item's rarity and specific utility justify its moderate price in XP terms.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T02:35:10.244971+00:00",
    "aiReviewedAt": "2026-07-25T02:35:10.244971+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_storm_herald_faction_amulet": {
    "id": "teyvat_item_storm_herald_faction_amulet",
    "name": "The Storm Herald’s Amulet of Inazuma Accord",
    "description": "The Storm Herald’s Amulet of Inazuma Accord is a pirate-forged talisman that glows with the eerie light of ancient storms. Crafted deep within tempests, this amulet channels the raw power of lightning, granting its wearer the ability to manipulate nearby electrical disturbances and enhancing their combat prowess during thunderstorms. However, it also carries the risk of inadvertently drawing the attention of the vigilant Yatagarasu, making discretion a must when wielding this powerful artifact.",
    "category": "faction",
    "price": 1000,
    "icon": "⚡",
    "stock": 15,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Summons Lightning",
      "Enhanced Combat in Thunderstorms"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "Sea Serpent Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Summons Lightning",
        "rules": "As an action, the wearer can summon a localized bolt of lightning within a 20-foot radius. This effect has a duration of 1 minute and requires a successful DC 15 Wisdom (Insight) check to avoid attracting unwanted attention from the Yatagarasu. The use is limited to once per long rest."
      },
      {
        "title": "Enhanced Combat in Thunderstorms",
        "rules": "While under a thunderstorm, the wearer gains a +2 bonus to attack rolls and damage with electrical weapons or spells. This effect lasts for the duration of the storm and can be used up to three times per long rest."
      }
    ],
    "levelRequirementReason": "The amulet's power is accessible early, allowing players to integrate it into their strategies from a lower level.",
    "vendorReason": "Inazuma Imports specializes in unique and powerful artifacts forged by the pirates of Inazuma, making this amulet an ideal addition to their inventory.",
    "shippingDetail": "The Sea Serpent Express ensures swift delivery but warns that any summoning attempts during transit could attract unwanted aerial attention.",
    "usage": {
      "activation": "Action or Reaction (Summon Lightning)",
      "duration": "1 minute or until dismissed by the wearer",
      "endsWhen": "At end of a long rest, dismissal, or attracting unwanted attention",
      "charges": "Once per long rest"
    },
    "priceReason": "Balanced at 1000 XP to reflect its unique abilities and thematic significance.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-25T02:34:29.450750+00:00",
    "aiReviewedAt": "2026-07-25T02:34:29.450750+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_obsidian_chronal_guardian": {
    "id": "doughnut_hole_item_obsidian_chronal_guardian",
    "name": "The Chronal Obsidian Guardian’s Echo",
    "description": "The Chronal Obsidian Guardian’s Echo is a cold, pulsating shard of solidified temporal energy encased in obsidian. Its surface crackles with a chronometric hum that resonates through time itself. When consumed, it briefly warps the flow of combat, granting an advantage on your next attack or saving throw—but prolonged use risks tearing the fabric of reality around you, causing enemies to flicker out of existence for a fleeting moment.",
    "category": "consumables",
    "price": 1000,
    "icon": "⏳",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Advantage",
      "Temporal Flicker"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Void Courier Drone",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Temporal Advantage",
        "rules": "When consumed, this item grants the user advantage on their next attack roll or saving throw. This effect lasts for one round and can only be used once per short or long rest."
      },
      {
        "title": "Temporal Flicker",
        "rules": "For 1 minute after consuming this shard, any enemy within a 30-foot radius must make a DC 15 Dexterity saving throw or become invisible for 1 round. This effect can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "This item requires significant magical knowledge and control to wield safely, hence the level requirement.",
    "vendorReason": "Hole Hawker specializes in rare and exotic items that can be used for temporal manipulation, making this shard a fitting addition to their inventory.",
    "shippingDetail": "The item is delivered via the Void Courier Drone, which ensures its arrival within an hour of purchase.",
    "usage": {
      "activation": "Eaten as a bonus action",
      "duration": "Temporal Advantage lasts for one round. Temporal Flicker effect lasts for 1 minute from the time it was consumed.",
      "endsWhen": "The effect ends when its duration expires or the user is incapacitated.",
      "charges": "Unlimited, but only one effect can be used per short or long rest."
    },
    "priceReason": "This item's price reflects its unique temporal properties and the risk involved in using it safely.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T02:35:27.212689+00:00",
    "aiReviewedAt": "2026-07-25T02:35:27.212689+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_mk_89_warp_distortion_center": {
    "id": "doughnut_hole_item_mk_89_warp_distortion_center",
    "name": "The Mk.89 Distortion Center Warpstone",
    "description": "The Mk.89 Distortion Center Warpstone is a jagged obsidian cube, its surface etched with ancient runes and glowing with swirling purple energy. It's said to be a remnant of a collapsed rift near the center of an old dimensional fold. Touching it briefly distorts reality within 10 meters, allowing for instant teleportation but risks leaving you disoriented for several moments. The stone emits a faint void aura that can harm those who touch it.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "instant teleportation",
      "spatial disorientation"
    ],
    "vendor": "center_seller",
    "shippedBy": "Dimensional Folding Apparatus",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Teleport",
        "rules": "Activates as a bonus action, allowing the user to instantly teleport within 10 meters. The effect is instantaneous but leaves the user disoriented for 1 round (4 turns)."
      },
      {
        "title": "Void Aura",
        "rules": "The stone emits a minor void aura that inflicts 1d6 void damage on contact, with no saving throw."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to handle the distortion effects safely.",
    "vendorReason": "Center Seller specializes in exotic and unstable dimensional items that require expert handling.",
    "shippingDetail": "Ships via a specialized fold-space courier, ensuring safe delivery within the day.",
    "usage": {
      "activation": "Bonus action for teleportation; passive effect of aura always active.",
      "duration": "Instantaneous teleportation; disorientation lasts until end of next turn.",
      "endsWhen": "Exhausted after one use or destroyed by dimensional backlash.",
      "charges": "Unlimited, recharges on a long rest."
    },
    "priceReason": "Balanced price for an item with high-dimensional manipulation capabilities and the risk of disorientation.",
    "priceOriginal": 925,
    "priceReviewedAt": "2026-07-25T02:34:52.529406+00:00",
    "aiReviewedAt": "2026-07-25T02:34:52.529406+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_null_guardian_warps_72": {
    "id": "doughnut_hole_item_null_guardian_warps_72",
    "name": "The Null Guardian Warps - Seventh Cycle",
    "description": "The Null Guardian Warps - Seventh Cycle are a shimmering, swirling collection of seven void anomalies encased in compressed void energy. Each warp glows faintly with an ethereal light that crackles with raw potential. When activated, these warps offer instant travel to designated locations within the center anomaly, but only if the caster is properly attuned to the warp’s resonance frequency. Misuse can trigger a cascade of neurological feedback, causing temporary paralysis or confusion in the user.",
    "category": "curiosities",
    "price": 1875,
    "icon": "🌌",
    "stock": 9,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Instantaneous Teleportation",
      "Neurological Feedback Risk"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Quantum Entanglement Relay",
    "levelRequirement": 45,
    "effectDetails": [
      {
        "title": "Instantaneous Teleportation",
        "rules": "The caster must be attuned to one of the warps. The effect is instantaneous with a range of up to 30 meters. There is no saving throw required, but the use ends when the warp is used or if the user misuses it."
      },
      {
        "title": "Neurological Feedback Risk",
        "rules": "There's a 10% chance (DC 15 Wisdom saving throw) of triggering confusion or temporary paralysis for one minute upon improper use. The effect ends when the caster regains consciousness."
      }
    ],
    "levelRequirementReason": "This item requires significant magical attunement and control, necessitating a high level to handle its potent effects.",
    "vendorReason": "The Void Vendor deals in esoteric and rare items from the farthest corners of the cosmos, making them a suitable merchant for such a powerful artifact.",
    "shippingDetail": "Due to their volatile nature, these warps must be sent via the Quantum Entanglement Relay for safe delivery and proper calibration upon arrival.",
    "usage": {
      "activation": "A bonus action to select a warp and a reaction to use it or avoid the neurological feedback risk.",
      "duration": "Instantaneous",
      "endsWhen": "Upon successful teleportation, misuse, or if the user regains consciousness after paralysis.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The rarity and power of these warps justify their high price, offering a unique and potentially dangerous tool for those who seek to traverse distances swiftly.",
    "priceOriginal": 1875,
    "priceReviewedAt": "2026-07-25T02:36:12.927868+00:00",
    "aiReviewedAt": "2026-07-25T02:36:12.927868+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_the_stonehaven_ward": {
    "id": "faerun_item_the_stonehaven_ward",
    "name": "The Stonehaven Ward of Echoing Valor",
    "description": "The Stonehaven Ward of Echoing Valor is a gleaming dwarven ring forged from volcanic obsidian and imbued with the spirit of ancient warriors. Its surface crackles with geothermal energy, pulsing in rhythm with battle. When worn, it whispers tactical wisdom to its bearer, bolstering resolve and granting advantage on initiative rolls for three rounds. The ward's insights are fleeting but profound, revealing enemy weaknesses that can turn the tide of combat.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Advantage on Initiative Rolls",
      "Dwarven Battle Cry"
    ],
    "vendor": "sword_coast_traders",
    "shippedBy": "Griffon Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Advantage on Initiative Rolls",
        "rules": "The wearer gains advantage on initiative rolls for three rounds. This effect ends if the wearer takes a turn in combat or is incapacitated."
      },
      {
        "title": "Dwarven Battle Cry",
        "rules": "Once per short rest, the wearer can activate this ability to unleash a battle cry that grants temporary +1 AC and reveals an enemy weakness within 30 feet. This effect lasts for one minute and cannot be used again until the end of a long rest."
      }
    ],
    "levelRequirementReason": "The ring's tactical wisdom and defensive properties are best suited to experienced warriors who can make use of its insights.",
    "vendorReason": "Sword Coast Traders specialize in rare, ancient artifacts that empower their clients in the heat of battle.",
    "shippingDetail": "The ring is carefully packed to withstand the journey from Stonehaven, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Once per short rest (Dwarven Battle Cry)",
      "duration": "Three rounds (Advantage on Initiative Rolls); one minute and until end of a long rest (Dwarven Battle Cry)",
      "endsWhen": "Use ends when the wearer takes a turn in combat, is incapacitated, or completes a long rest",
      "charges": "1 charge per short rest"
    },
    "priceReason": "The ring's rarity and unique abilities justify its cost, offering both tactical advantage and defensive prowess.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:35:14.009568+00:00",
    "aiReviewedAt": "2026-07-25T02:35:14.009568+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_the_sunken_seraphs_confection": {
    "id": "faerun_item_the_sunken_seraphs_confection",
    "name": "The Sunken Seraphs' Confection of Aqueous Resilience",
    "description": "The Sunken Seraphs' Confection of Aqueous Resilience is a shimmering, translucent gelatin formed from the tears of seraphim lost to the depths and hardened by ancient seafoam. This confection not only restores vitality with its sweet-tasting essence but also grants temporary resistance to both cold and water damage for four rounds. Consuming it triggers a haunting melody that lasts one round, subtly affecting stealth attempts. The treat’s unique composition ensures that any meal consumed within an hour is slightly altered in flavor.",
    "category": "consumables",
    "price": 1000,
    "icon": "💧",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "restores vitality",
      "resistance to cold & water"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "Sea Serpent Delivery",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Restore Vitality",
        "rules": "When ingested, the confection restores 3d6 hit points to the consumer. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Resistance to Cold & Water",
        "rules": "For four rounds after consumption, the imbiber gains temporary resistance to cold damage (AC +2) and water damage (AC +1). The resistance ends if the consumer takes any nonmagical physical damage. This effect can be triggered once per long rest."
      }
    ],
    "levelRequirementReason": "This confection is designed for those who have already faced significant challenges, requiring a minimum character level of 3.",
    "vendorReason": "Waterdeep Market caters to adventurers seeking unique and powerful items, including this rare treat from the depths.",
    "shippingDetail": "Ships via the Sea Serpent Courier, ensuring timely delivery of the delicate confection.",
    "usage": {
      "activation": "Consumed as an action",
      "duration": "Instantaneous effect; resistance lasts for four rounds",
      "endsWhen": "Nonmagical physical damage is taken or after four rounds",
      "charges": "One use per long rest"
    },
    "priceReason": "The rarity and unique properties of the confection, along with its limited availability, justify this balanced XP price.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T02:35:26.946966+00:00",
    "aiReviewedAt": "2026-07-25T02:35:26.946966+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_the_eldritch_chronarium_shard": {
    "id": "faerun_item_the_eldritch_chronarium_shard",
    "name": "The Eldritch Chronarium Shard - Phase Fracture",
    "description": "The Eldritch Chronarium Shard - Phase Fracture is a jagged, obsidian fragment that pulses with an eerie, temporal light. Its origin lies in the shattered remnants of an ancient, forbidden time portal. Holding it can warp reality for brief moments, allowing one to relocate up to 30 feet away, though the exact direction remains unpredictable and dangerous. Beware its chaotic nature; the shard may inadvertently transport you further from your destination or even into a parallel plane.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Temporal Displacement",
      "Temporal Distortion"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "Celestial Messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Displacement",
        "rules": "When activated as an action, this shard teleports the user up to 30 feet in any direction. The exact destination is random and cannot be controlled. This effect has a limited daily use of once per day."
      },
      {
        "title": "Temporal Distortion",
        "rules": "The shard emits a faint, unsettling temporal distortion that imposes disadvantage on Perception checks within 30 feet for 1 minute. There is a 25% chance this effect also confounds the target with temporary confusion, lasting until the end of their next turn."
      }
    ],
    "levelRequirementReason": "Suitable for adventurers who need to navigate complex or dangerous environments but are not yet at an advanced stage.",
    "vendorReason": "Only Baldur's Bazaar, known for its diverse and powerful curiosities, would stock such a rare artifact.",
    "shippingDetail": "Ships via the Celestial Messenger with a guaranteed delivery within three days.",
    "usage": {
      "activation": "Activates as an action.",
      "duration": "Instantaneous teleportation; temporal distortion lasts for 1 minute.",
      "endsWhen": "The effect ends when the user's turn ends or upon displacement, whichever comes first.",
      "charges": "Limited daily use of once per day."
    },
    "priceReason": "Balanced at this price to reflect its unique and potentially dangerous properties without being overpowered.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T02:36:17.934609+00:00",
    "aiReviewedAt": "2026-07-25T02:36:17.934609+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_chronal_echoes_finder": {
    "id": "the_edge_item_chronal_echoes_finder",
    "name": "The Chronal Echoes Finder - Mk.27",
    "description": "The Chronal Echoes Finder - Mk.27 hums with a spectral resonance, its surface etched with the fractured timelines of the multiverse. This unsettling device allows you to briefly perceive echoes from alternate realities, offering glimpses into futures and pasts that never were. While holding it, the world around you subtly shifts, as if time itself bends to your will. However, prolonged exposure risks unraveling your own perception of reality, causing a disorienting cascade of temporal distortions.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Glimpse",
      "Minor Temporal Distortion"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "gravitic_drone",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Temporal Glimpse",
        "rules": "As an action, you can activate the Chronal Echoes Finder to perceive echoes of moments long lost. For 3 turns, you gain temporary precognition, allowing you to see into alternate timelines as if they were real. This effect reduces your movement speed by 10% for 1 turn and increases your chance of scoring a critical hit by 5%. You can use this feature once per short or long rest."
      },
      {
        "title": "Minor Temporal Distortion",
        "rules": "There is a 20% chance each time you activate the device that it triggers a minor temporal distortion. This effect lasts for 1 minute and causes a shift in your perception, disorienting you. You have advantage on saving throws against being charmed or frightened until the end of your next turn."
      }
    ],
    "levelRequirementReason": "The device's intricate mechanism requires a certain level of magical proficiency to handle.",
    "vendorReason": "The abyssal traders are known for their exotic and powerful artifacts, including the Chronal Echoes Finder - Mk.27.",
    "shippingDetail": "Shipped by gravitic drone, this item is delivered with a special temporal stabilization field to prevent any accidental distortions during transit.",
    "usage": {
      "activation": "As an action",
      "duration": "3 turns (Temporal Glimpse) or lasts for 1 minute (Minor Temporal Distortion)",
      "endsWhen": "The effect ends when the duration expires or you are incapacitated, or if you use your action on another turn to deactivate it.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced as a rare item with limited daily stock, this device provides significant tactical advantages without overpowered abilities.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T02:36:53.765825+00:00",
    "aiReviewedAt": "2026-07-25T02:36:53.765825+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_umbral_resonance_whisperer": {
    "id": "the_edge_item_umbral_resonance_whisperer",
    "name": "The Umbral Resonance Whisperer - Variant IX",
    "description": "The Umbral Resonance Whisperer - Variant IX is a compact device forged from the essence of shadow and distorted sound. Crafted by the shadowy artisans of the Edge Outpost, it amplifies the faintest vibrations from beyond reality. Its sleek, dark surface glows with an eerie luminescence when activated, hinting at the void's whispers. This device allows brief communication with entities of the abyssal void, though their intentions are notoriously malevolent and unpredictable.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌑",
    "stock": 25,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "void communication",
      "resistance to fear"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "automated_cart",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Void Communication",
        "rules": "The user can attempt to communicate with entities from beyond reality. This requires an action. The target is a creature within 30 feet. On a successful DC 15 Intelligence (Investigation) check, the user can send a brief message to one creature of their choice. The effect ends if the user is incapacitated or if they take any action other than communication."
      },
      {
        "title": "Resistance to Fear",
        "rules": "The user gains advantage on saving throws against fear effects for 1 hour. This duration resets after taking damage. The effect ends if the user's concentration is broken, such as from being incapacitated or hit by an attack."
      }
    ],
    "levelRequirementReason": "Crafted with complex shadow magic, this device requires a minimum level to prevent misuse.",
    "vendorReason": "The Edge Outpost specializes in rare and exotic artifacts from the shadow realms.",
    "shippingDetail": "Ships within three nights via automated cart, with special handling for fragile devices.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (Void Communication), 1 hour (Resistance to Fear)",
      "endsWhen": "Incapacitation or taking any action other than communication (Void Communication); Taking damage (Resistance to Fear)",
      "charges": "Unlimited"
    },
    "priceReason": "Reflects the device's complex crafting and shadow magic, balancing its rare abilities.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T02:35:46.714699+00:00",
    "aiReviewedAt": "2026-07-25T02:35:46.714699+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_forbidden_void_diverger": {
    "id": "the_edge_item_forbidden_void_diverger",
    "name": "The Forbidden Void Diverger - Prototype 42",
    "description": "The Forbidden Void Diverger - Prototype 42 is a dark, pulsating artifact that whispers of forbidden knowledge and untold power. This relic allows brief passage into the most perilous realms of the Edge, where reality itself fractures. Upon activation, it opens a localized rupture in spacetime, subjecting the user to chaotic forces that could annihilate them at any moment. Yet, those who survive gain temporary immunity to all status effects and see their critical hit damage increase by 20%. A terrifying gamble for power or knowledge.",
    "category": "forbidden",
    "price": 5000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Teleportation Risk",
      "Temporal Rift"
    ],
    "vendor": "final_shop",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Teleportation Risk",
        "rules": "Upon activation, the user has a 75% chance of being teleported to a random location within a 10-foot radius. This effect is instantaneous and cannot be avoided through any means."
      },
      {
        "title": "Temporal Rift",
        "rules": "The user gains temporary immunity to all status effects for 1 minute, but suffers severe damage equal to half their current hit points upon activation. This effect can only occur once per long rest."
      }
    ],
    "levelRequirementReason": "Accessing and controlling such a dangerous artifact requires considerable experience and skill.",
    "vendorReason": "Final Shop deals in the most exotic and forbidden relics, ensuring that only those who have earned it can purchase this item.",
    "shippingDetail": "The artifact is delivered through a secure dimensional portal, requiring a week-long transit time.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for the teleportation effect; 1 minute immunity to status effects",
      "endsWhen": "Upon completion of its duration or if the user takes any damage",
      "charges": "Unlimited, but only one use per long rest"
    },
    "priceReason": "The artifact's dangerous nature and limited availability justify a high price in experience points.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-25T02:36:18.366902+00:00",
    "aiReviewedAt": "2026-07-25T02:36:18.366902+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_crimson_helm_bearer_of_aethelred": {
    "id": "faerun_item_crimson_helm_bearer_of_aethelred",
    "name": "Crimson Helm Bearer of Aethelred",
    "description": "The Crimson Helm Bearer of Aethelred, forged from the scales of a desert drake and blessed by Kord, god of war, pulsates with an arcane crimson light that seems to hum with untold battles. Its weighty helm exudes a sense of ancient resilience, each scale etched with symbols of victory. This helm not only grants its wearer heightened aggression but also provides resistance against piercing damage, making every strike feel like a deadly embrace.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Aggressive Battle Aura",
      "Piercing Resistance"
    ],
    "vendor": "sword_coast_traders",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Aggressive Battle Aura",
        "rules": "While wearing the helm, the wearer gains advantage on attack rolls and deals an additional 1d6 damage to creatures they hit with piercing weapons. This effect lasts until the end of the wearer's next turn."
      },
      {
        "title": "Piercing Resistance",
        "rules": "The wearer gains resistance to piercing damage from attacks made by creatures other than themselves. This effect persists for 1 minute, expiring when the helm is removed or when the wearer drops to 0 hit points."
      }
    ],
    "levelRequirementReason": "The helm's divine blessing and drakish craftsmanship demand a seasoned warrior capable of harnessing its power.",
    "vendorReason": "Sword Coast Traders have established a reputation for dealing in rare and powerful relics, making them the ideal purveyor of this ancient helm.",
    "shippingDetail": "The helm is delivered by dragon courier, ensuring swift and secure transport.",
    "usage": {
      "activation": "Passive effect upon donning the helm.",
      "duration": "Lasts until removed or wearer drops to 0 hit points.",
      "endsWhen": "Wearer removes the helm or drops to 0 hit points.",
      "charges": "Unlimited, recharges upon removal."
    },
    "priceReason": "The helm's rare materials and divine blessing justify its price, aligning with its formidable defensive capabilities and offensive boosts.",
    "priceOriginal": 8750,
    "priceReviewedAt": "2026-07-25T02:36:46.389420+00:00",
    "aiReviewedAt": "2026-07-25T02:36:46.389420+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_dread_orb_of_the_shadow_weaver": {
    "id": "faerun_item_dread_orb_of_the_shadow_weaver",
    "name": "Dread Orb of the Shadow Weaver",
    "description": "The Dread Orb of the Shadow Weaver is a dark obsidian sphere that pulses with malevolent energy. Crafted from the essence of a banished shadow demon, it emits an aura that saps enemy resolve and conceals its wearer in shadowy gloom. When touched, it induces paranoia in nearby foes, reducing their accuracy by 20% for one minute. Its wielder gains +3 to Stealth checks, blending into the night like a wraith.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌑",
    "stock": 8,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Phantom Paranoia",
      "Shadow Cloak"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "night_hawk_express",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Phantom Paranoia",
        "rules": "When an enemy creature touches the orb, it must make a Wisdom saving throw (DC 15) or be reduced in accuracy by 20% for 1 minute. This effect ends if the target attacks another creature."
      },
      {
        "title": "Shadow Cloak",
        "rules": "The wearer gains +3 to Dexterity (Stealth) checks and can create a small area of darkness within 5 feet as an action, which lasts until the end of their next turn. This effect is usable once per short or long rest."
      }
    ],
    "levelRequirementReason": "This orb's malevolent power requires significant magical training to wield effectively.",
    "vendorReason": "Baldur's Bazaar deals in exotic and powerful artifacts, including those that manipulate the shadow plane.",
    "shippingDetail": "Ships via Night Hawk Express; delivery is swift but requires a darkened route to ensure secrecy.",
    "usage": {
      "activation": "As an action or reaction",
      "duration": "Instantaneous; ends if the user attacks another creature",
      "endsWhen": "The target makes a successful saving throw, or after one minute",
      "charges": "Once per short or long rest"
    },
    "priceReason": "Balanced for an epic rarity item that provides significant but not overpowered abilities.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T02:36:34.944867+00:00",
    "aiReviewedAt": "2026-07-25T02:36:34.944867+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_sylvari_shard_of_the_evergreen_god": {
    "id": "faerun_item_sylvari_shard_of_the_evergreen_god",
    "name": "Sylvari Shard of the Evergreen God",
    "description": "A fragment of a colossal, ancient tree worshipped by the Sylvari, this shard radiates an aura of life and growth. Holding it allows for minor healing and provides a connection to the natural world, bolstering resilience.",
    "category": "consumables",
    "price": 5500,
    "icon": "🌿",
    "stock": 67,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "restores 2d8 health upon use",
      "increases maximum hit points by 50",
      "grants resistance to poison damage",
      "provides temporary advantage on survival checks"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "golem_carriers",
    "levelRequirement": 30
  },
  "grand_country_item_luminescent_gravity_hook": {
    "id": "grand_country_item_luminescent_gravity_hook",
    "name": "The Chronometric Weaver's Hook - Gifted",
    "description": "The Chronometric Weaver's Hook - Gifted is a shimmering, forged artifact that harnesses solidified temporal currents to subtly manipulate gravity. Crafted from the very essence of time itself, this hook can momentarily reverse its effect on a single target or create a miniature gravitational well for trapping small creatures. However, prolonged use risks destabilizing the immediate layer of spacetime, making it a delicate and dangerous tool in the wrong hands.",
    "category": "equipment",
    "price": 8700,
    "icon": "⏳",
    "stock": 5,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Temporal Reversal",
      "Gravitational Trap"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "gravitic_drone",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Temporal Reversal",
        "rules": "Activate as a bonus action to reverse the gravity of a single target within 30 feet for 1 minute. Targets must succeed on a DC 25 Dexterity saving throw or fall prone. This effect can be used once per short rest."
      },
      {
        "title": "Gravitational Trap",
        "rules": "Activate as an action to create a gravitational well that traps Small creatures within its radius (10 feet in diameter) for 1 minute. Creatures within the area must succeed on a DC 25 Strength saving throw or be restrained until they exit the area."
      }
    ],
    "levelRequirementReason": "Crafted from solidified temporal currents, this item requires significant mastery of time manipulation.",
    "vendorReason": "Vertical Vendor specializes in rare and powerful artifacts that push the boundaries of reality.",
    "shippingDetail": "Shipped via gravitic drone for precision delivery to your doorstep.",
    "usage": {
      "activation": "Bonus action or action, as specified by effect.",
      "duration": "1 minute per use, ends when the effect is no longer needed or the user acts normally again.",
      "endsWhen": "The duration expires at the end of a long rest.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This item's rarity and the precision required for its construction justify this fair value in experience points.",
    "priceOriginal": 8700,
    "priceReviewedAt": "2026-07-25T02:37:25.843831+00:00",
    "aiReviewedAt": "2026-07-25T02:37:25.843831+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_layered_resonance_shard": {
    "id": "grand_country_item_layered_resonance_shard",
    "name": "The Echoing Spore Shard – Layered",
    "description": "The Echoing Spore Shard – Layered is a crystalline fragment harvested from the deepest caverns, where ancient spores have layered and fossilized over millennia. Its surface glows faintly with an otherworldly luminescence, as if remnants of forgotten lore still linger within its core. This shard reveals glimpses into adjacent layers when held, offering insights into hidden patterns and pathways, but prolonged exposure can cloud perception, inducing a disorienting hum in the mind.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🍄",
    "stock": 33,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Enhances perception",
      "Unveils layer secrets"
    ],
    "vendor": "layer_market",
    "shippedBy": "dimensional_packet",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Layered Insight",
        "rules": "When activated as an action, this shard grants the user a brief but insightful glimpse into adjacent layers for 1 minute. The user gains advantage on Perception checks within a 30-foot radius and can attempt to decipher complex layered patterns with a successful DC 15 Intelligence (Nature) check."
      },
      {
        "title": "Mind Echo",
        "rules": "While holding this shard, the user increases their perception by +2 until the end of their next short or long rest. Exceeding this time limit causes a minor resonance burst, dealing 1d6 force damage to the user and causing disorientation for 1 minute."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to harness the shard's complex layers without overwhelming the mind.",
    "vendorReason": "Layer Market specializes in arcane curiosities and relics from deep caverns, making it an ideal vendor for such a delicate artifact.",
    "shippingDetail": "Ships via dimensional courier with expedited delivery within 3 days of purchase.",
    "usage": {
      "activation": "Activates as an action or bonus action.",
      "duration": "1 minute per use, or until the end of the next short or long rest when used passively.",
      "endsWhen": "Disruption of concentration or exceeding the time limit causes it to disorient and damage the user.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The shard's rarity, arcane properties, and limited availability justify its fair market value.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:37:17.548039+00:00",
    "aiReviewedAt": "2026-07-25T02:37:17.548039+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_forbidden_gravity_artifact": {
    "id": "grand_country_item_forbidden_gravity_artifact",
    "name": "The Null-Anchor - Gifted",
    "description": "The Null-Anchor - Gifted is a gnarled, metallic device exuding an unsettling aura. Crafted from unknown materials, its surface glows faintly with a purple hue. This artifact subtly siphons gravity within a 10-foot radius, causing objects to levitate and creating a disorienting void in the immediate area. The prolonged use of this volatile tool can lead to catastrophic gravitational distortions, making it a perilous yet invaluable asset for those who dare to wield its power.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "Local Zero-Gravity Field",
      "Reduced Weight"
    ],
    "vendor": "side_seller",
    "shippedBy": "black_portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Local Zero-Gravity Field",
        "rules": "Activates as an action. Creates a 10-foot radius spherical area of zero gravity that lasts for 1 minute, centered on the user. Objects within this field float and can be manipulated by force effects. Targets in the area must make a DC 15 Dexterity saving throw or fall prone due to disorientation."
      },
      {
        "title": "Reduced Weight",
        "rules": "Objects within the zero-gravity field have their weight reduced by 50%. This effect is permanent while within the field but does not extend beyond its radius. The item recharges after a long rest."
      }
    ],
    "levelRequirementReason": "Requires basic understanding of spatial manipulation to wield safely.",
    "vendorReason": "The side seller deals in exotic and dangerous artifacts, making the Null-Anchor - Gifted a fitting addition to their inventory.",
    "shippingDetail": "Ships via the black portal, arriving with a 1d4+2 hour delay due to the unstable nature of the portal.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "The duration ends or the user dismisses it as an action",
      "charges": "Recharges after a long rest"
    },
    "priceReason": "Balanced to reflect its moderate power level and the risk involved with using such an artifact.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-25T02:37:30.053800+00:00",
    "aiReviewedAt": "2026-07-25T02:37:30.053800+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_hyperlinked_phantom_speaker": {
    "id": "internet_item_hyperlinked_phantom_speaker",
    "name": "The Yielding Speaker's Hashes - Phantom Echoes",
    "description": "The Yielding Speaker's Hashes - Phantom Echoes is an obsidian speaker crafted from salvaged components of a defunct server farm deep within the Eastern Data Streams. Its surface hums with fragmented meme-audio, whispering forgotten viral trends and phantom echoes of internet legends. Activating this relic amplifies your connection to digital entities, enhancing your charisma in their presence by +2, and grants a chance for fleeting audio distortions to enhance situational awareness.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔊",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Enhances Charisma with Digital Entities",
      "Grants Audio Distortion Resistance"
    ],
    "vendor": "cyber_market",
    "shippedBy": "drone_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "When activated, the Yielding Speaker's Hashes boosts your Charisma by +2 when interacting with digital entities. This effect lasts for 1 minute and ends early if you leave a plane of digital existence."
      },
      {
        "title": "Audio Distortion Resistance",
        "rules": "The relic provides resistance to audio distortions, reducing the severity of such effects by half. This benefit persists until your next short or long rest."
      }
    ],
    "levelRequirementReason": "This item is designed for a wide range of characters to explore and interact with digital entities.",
    "vendorReason": "The cyber market specializes in unique tech artifacts, including relics from defunct data centers.",
    "shippingDetail": "Ships via drone delivery directly from the Eastern Data Streams; expedited for collectors.",
    "usage": {
      "activation": "Activates as a bonus action.",
      "duration": "1 minute, or until you leave a plane of digital existence.",
      "endsWhen": "Leaving a plane of digital existence ends this effect.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The item's unique origin and effects make it desirable, but not overpriced for its utility in interacting with digital entities.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T02:38:07.428045+00:00",
    "aiReviewedAt": "2026-07-25T02:38:07.428045+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_78_bit_meme_manifest": {
    "id": "internet_item_78_bit_meme_manifest",
    "name": "Mk.78 Downloaded Hashes - The Glitched Meme Manifest",
    "description": "The Mk.78 Downloaded Hashes – The Glitched Meme Manifest is a pulsating, glitch-ridden cube that crackles with the energy of viral internet memes. Crafted from the very essence of nostalgia, this relic briefly channels the chaotic visual echoes of classic internet memes, creating a fleeting but vivid display of pop culture’s golden age. When activated, it grants the wielder an increased sense of speed and a momentary boost in reaction times, while also spreading a small chance of meme-induced confusion among foes.",
    "category": "consumables",
    "price": 1000,
    "icon": "😵‍💫",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Meme-Induced Speed",
      "Reaction Boost"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "packet_delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Meme-Induced Speed",
        "rules": "On activation, the user's speed increases by 10%. The effect lasts for 60 seconds and ends if the user is incapacitated or falls unconscious."
      },
      {
        "title": "Reaction Boost",
        "rules": "For 30 seconds after activation, the user gains advantage on Dexterity saving throws and proficiency checks made to resist being frightened. This benefit ceases when the user's speed returns to normal or if they are incapacitated."
      }
    ],
    "levelRequirementReason": "This item’s chaotic nature and its effects require a certain level of control and understanding, thus it is restricted to 15th level characters.",
    "vendorReason": "Pixel Shop specializes in unique digital artifacts and relics, making them the perfect vendor for this internet-inspired meme cube.",
    "shippingDetail": "The cube may require special handling due to its unstable nature. Packet Delivery ensures safe transport with their secure couriers.",
    "usage": {
      "activation": "Standard action",
      "duration": "60 seconds or until the user falls unconscious or is incapacitated",
      "endsWhen": "User becomes incapacitated, falls unconscious, or after 60 seconds",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the item’s unique nature as a blend of nostalgia and utility, requiring significant XP to balance its whimsical yet strategic benefits.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T02:37:46.226905+00:00",
    "aiReviewedAt": "2026-07-25T02:37:46.226905+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_compressed_reaction_speaker": {
    "id": "internet_item_compressed_reaction_speaker",
    "name": "The Downloaded Hashes - Reaction Amplifier",
    "description": "The Downloaded Hashes - Reaction Amplifier is a sleek, obsidian-colored speaker etched with arcane runes, recovered from the remnants of an ancient data hub. Its surface hums with the residual energy of countless emotional responses, amplifying them in ways that can either incite chaos or fuel intense engagement. This relic grants users the ability to provoke strong reactions and manipulate emotions, making it a dangerous yet invaluable tool for those who seek to control crowds or extract confessions.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Emotional Provocation",
      "Emotional Manipulation"
    ],
    "vendor": "data_dealer",
    "shippedBy": "encrypted_beam",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Emotional Provocation",
        "rules": "When the user is provoked by strong emotions, they deal an additional 15% damage. This effect triggers as a reaction and ends when the amplifier is no longer in contact with the user."
      },
      {
        "title": "Emotional Manipulation",
        "rules": "The amplifier grants a +2 bonus to Persuasion checks related to emotional manipulation, which lasts until the end of the user's next turn. This effect can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners who wish to experiment with its capabilities without overburdening their character level.",
    "vendorReason": "The Data Dealer specializes in salvaged tech and relics from defunct data hubs, making this amplifier a fitting addition to their inventory.",
    "shippingDetail": "Delivered via secure encrypted beam with a 24-hour processing delay to ensure the item's authenticity.",
    "usage": {
      "activation": "Reaction (when provoked by strong emotions)",
      "duration": "Instantaneous",
      "endsWhen": "The amplifier is no longer in contact with the user",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the item's unique crafting materials and its ability to enhance emotional interactions, making it a valuable but not overpowered tool.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-25T02:38:21.232882+00:00",
    "aiReviewedAt": "2026-07-25T02:38:21.232882+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_crimson_helix_born": {
    "id": "grand_country_item_crimson_helix_born",
    "name": "The Crimson Helix Born",
    "description": "The Crimson Helix Born unfurls like a living spiral of molten metal, its tiered structure pulsing with an unsettling heat that seeps into your skin as you climb. Its insistent echoes and vertigo-inducing whispers challenge both body and mind, but its enhanced grip strength grants climbers the ability to defy gravity's pull in treacherous ascents. This artifact offers temporary adhesion to any surface, allowing for rapid ascent and unparalleled maneuverability within chaotic formations.",
    "category": "equipment",
    "price": 1000,
    "icon": "⛰️",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Enhanced Grip Strength",
      "Prolonged Vertigo Resistance"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "Gravity Cart",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Enhanced Grip Strength",
        "rules": "When activated as a bonus action, the Helix Born grants you advantage on Strength (Athletics) checks made to climb for 1 minute. This effect ends if you spend more than 5 minutes in its proximity or if you fall from your current height."
      },
      {
        "title": "Prolonged Vertigo Resistance",
        "rules": "The Helix Born's whispers induce vertigo, but it also offers resistance to the condition for a duration equal to half the number of rounds you spend within 10 feet of it. This effect is negated if you are incapacitated or fall from your current height."
      }
    ],
    "levelRequirementReason": "Suitable only for characters with at least 5th level, ensuring they can manage the vertigo and physical strain.",
    "vendorReason": "The Vertical Vendor specializes in equipment that aids in climbing and exploration within treacherous terrains.",
    "shippingDetail": "Ships via Gravity Cart, known for its impeccable delivery to even the most remote locations.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute or until you fall from your current height",
      "endsWhen": "You spend more than 5 minutes in proximity or fall from a height",
      "charges": "Unlimited, recharges on a long rest"
    },
    "priceReason": "Balanced at 1000 XP to reflect its unique properties and limited utility.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:38:10.929437+00:00",
    "aiReviewedAt": "2026-07-25T02:38:10.929437+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_tainted_whisper_lifts": {
    "id": "grand_country_item_tainted_whisper_lifts",
    "name": "The Tainted Whisper Lifts",
    "description": "The Tainted Whisper Lifts are rusted metal contraptions, relics of a bygone era. Their surfaces are coated with an iridescent film that shifts hues in dim light, and they emit a constant, eerie whisper. Each ride subtly distorts the user's perception, causing them to misjudge distances and directions. The whispers, though subtle, can lead travelers astray into treacherous terrain. These lifts were crafted by the enigmatic Silent Layer Collective, whose methods remain a mystery.",
    "category": "curiosities",
    "price": 1000,
    "icon": "👻",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "depth distortion",
      "whispering guidance"
    ],
    "vendor": "side_seller",
    "shippedBy": "shadow_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Depth Distortion",
        "rules": "On activation, each ride causes the user to be disoriented for 1 minute. The user has disadvantage on perception checks and has a +2 bonus to attack rolls against targets in the same area as them."
      },
      {
        "title": "Whispering Guidance",
        "rules": "The constant whispers provide a subtle, illusory guidance that can mislead travelers. There is a 10% chance each ride that the user becomes temporarily mad for 1d4 hours. The user has advantage on saving throws against being charmed."
      }
    ],
    "levelRequirementReason": "This item's effects are subtle but persistent, requiring at least level 1 to manage its disorienting and misleading properties effectively.",
    "vendorReason": "The side seller trades in relics and forgotten curiosities, making these lifts a fitting addition to their stock.",
    "shippingDetail": "Ships via the shadow drone with a 24-hour delay due to its covert nature.",
    "usage": {
      "activation": "Activates on use; can be used once per short or long rest.",
      "duration": "1 minute disorientation, 1d4 hours temporary madness",
      "endsWhen": "Rests end the effect; use limit is one per day.",
      "charges": "Recharges after a short or long rest."
    },
    "priceReason": "The price reflects both its rarity and the inherent risk of misusing such an item, balancing its utility with caution.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T02:38:03.413118+00:00",
    "aiReviewedAt": "2026-07-25T02:38:03.413118+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_chronal_shard_7_born": {
    "id": "grand_country_item_chronal_shard_7_born",
    "name": "Mk.7 Chronal Shard Born",
    "description": "The Mk.7 Chronal Shard Born is a jagged, tiered crystal that hums with temporal instability. This fragment of solidified time allows for brief manipulation of localized time flow: it can accelerate your movements to outpace any foe or momentarily slow down attackers, giving you the upper hand in battle. Holding this shard risks creating minor paradoxical distortions and attracting the attention of the Layer Guardians, whose powers are known to interfere with such temporal manipulations.",
    "category": "equipment",
    "price": 18000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "temporal acceleration",
      "time slowing"
    ],
    "vendor": "layer_market",
    "shippedBy": "dimensional_relay",
    "levelRequirement": 45,
    "effectDetails": [
      {
        "title": "Temporal Acceleration",
        "rules": "As a reaction, you may accelerate your movements by up to 50%. This effect lasts for 1 round. You must make a DC 20 Constitution saving throw at the end of each of your turns while this effect is active; on a failure, you are exhausted until the start of your next long rest."
      },
      {
        "title": "Time Slowing",
        "rules": "As an action, you can slow down attackers within 30 feet for 1 minute. Each creature in that area must make a DC 25 Dexterity saving throw; on a failure, they are incapacitated until the end of your next turn."
      }
    ],
    "levelRequirementReason": "This powerful shard requires mastery over time manipulation and significant magical prowess to wield its effects without risk.",
    "vendorReason": "The Layer Market is known for its access to rare and exotic items, including those that manipulate temporal mechanics like the Mk.7 Chronal Shard Born.",
    "shippingDetail": "Ships via a dimensional relay; delivery can take up to 3 days depending on your location within the multiverse.",
    "usage": {
      "activation": "Reaction for Temporal Acceleration, Action for Time Slowing",
      "duration": "Instantaneous (Temporal Acceleration), 1 minute (Time Slowing)",
      "endsWhen": "Constitution save failure or the end of your next turn (both effects)",
      "charges": "Unlimited"
    },
    "priceReason": "The Mk.7 Chronal Shard Born's price reflects its rarity, power, and the risk it poses to the fabric of time.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T02:38:56.985776+00:00",
    "aiReviewedAt": "2026-07-25T02:38:56.985776+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_the_songwood_gift": {
    "id": "middle_earth_item_the_songwood_gift",
    "name": "The Songwood Gifted's Lembas Bread",
    "description": "The Songwood Gifted's Lembas Bread is a yielding, golden-brown loaf crafted from the heart of an ancient songwood tree. Each bite releases the melody of forgotten elven songs, bolstering resilience against the shadow’s touch and restoring vitality to those who partake. The bread whispers tales of valor and enduring strength, providing sustenance that not only heals but also fills the soul with a sense of timeless connection.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍞",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Sustaining Bread",
      "Shadow Resistance"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony_express",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Sustaining Bread",
        "rules": "Eating this loaf restores 50 hit points. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Shadow Resistance",
        "rules": "For the next hour after consuming a slice of bread, you have advantage on saving throws against shadow-based effects. The effect ends if you consume another meal or take damage from shadows."
      }
    ],
    "levelRequirementReason": "This item is crafted for seasoned travelers and heroes who face the darkest challenges.",
    "vendorReason": "The Shire Shop has long been trusted by those seeking gifts of the land, including this special bread.",
    "shippingDetail": "Delivered swiftly on the back of a trusty pony, ensuring the bread remains fresh and ready to be savored.",
    "usage": {
      "activation": "Instantaneous consumption upon eating one slice.",
      "duration": "One hour after consumption.",
      "endsWhen": "You eat another meal or take damage from shadows.",
      "charges": "Unlimited; each loaf contains multiple slices."
    },
    "priceReason": "Crafted with rare elven melodies and ancient songwood, this bread is a treasure beyond its simple sustenance.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T02:38:27.341118+00:00",
    "aiReviewedAt": "2026-07-25T02:38:27.341118+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_mk82_mithril_shard": {
    "id": "middle_earth_item_mk82_mithril_shard",
    "name": "Mk.82 Mithril Shard of Rivendell’s Echoes",
    "description": "The Mk.82 Mithril Shard of Rivendell’s Echoes is a jagged fragment of mithril, its surface etched with ancient runes and faintly glowing with the memory of past counsel. Held close to the ear, it hums with resonant whispers from the council halls of Rivendell, granting fleeting insights into strategic decisions. Though its visions are prone to distortion, each touch sharpens one’s perception and intuition, making tactical foresight a reality for those who can decipher its fractured echoes.",
    "category": "equipment",
    "price": 1000,
    "icon": "💎",
    "stock": 9,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Echoes of Insight",
      "Illusion Resistance"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_horse",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Echoes of Insight",
        "rules": "As a bonus action, the wielder may gain +3 to their Perception check for the next minute. This effect can be used once per short or long rest."
      },
      {
        "title": "Illusion Resistance",
        "rules": "The wearer gains advantage on saving throws against illusions and magic with an illusion theme. This benefit lasts until the end of the wielder's next turn after using Echoes of Insight."
      }
    ],
    "levelRequirementReason": "The shard provides a useful but not overwhelming benefit, suitable for adventurers at all levels.",
    "vendorReason": "Elrond of Rivendell entrusted the market with selling relics that aid in understanding ancient lore and wisdom.",
    "shippingDetail": "Shipped by a swift steed, the shard arrives within a day but must be used before it fades into nothingness.",
    "usage": {
      "activation": "Bonus action to use Echoes of Insight; passive for Illusion Resistance.",
      "duration": "Echoes of Insight lasts one minute, Illusion Resistance until the end of the wielder’s next turn after using Echoes of Insight.",
      "endsWhen": "The effect ends if the shard is removed or damaged beyond recognition.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The shard's benefits are balanced and offer strategic advantages without overshadowing other abilities.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:38:45.323929+00:00",
    "aiReviewedAt": "2026-07-25T02:38:45.323929+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_the_gondorian_aegis_gift": {
    "id": "middle_earth_item_the_gondorian_aegis_gift",
    "name": "The Gondorian Aegis Gifted's Wardstone",
    "description": "The Gondorian Aegis Gifted's Wardstone is a shimmering obsidian stone, imbued with the protective essence of Gondor’s finest smiths and blessed by their masters. When activated, it emits an imperceptible yet powerful aura that shields the wearer from harm, bolstering their defenses against dark forces and undead alike. The wardstone grants a passive +2 bonus to AC and a 15% chance to block powerful attacks, making it an invaluable companion in the face of malevolent threats.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Blocks Powerful Attacks",
      "Undead Resistance"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "dragon_airmail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blocks Powerful Attacks",
        "rules": "When activated, there is a 15% chance to block a melee or ranged attack with this stone. This effect has no save DC and can be used once per short rest."
      },
      {
        "title": "Undead Resistance",
        "rules": "Grants the wearer advantage on saving throws against undead attacks and effects, reducing damage taken from undead by 20%. The effect is passive and lasts until the wearer takes a long rest."
      }
    ],
    "levelRequirementReason": "The wardstone's protective enchantments are accessible to all adventurers, allowing them to benefit regardless of their level.",
    "vendorReason": "Dwarven artisans are renowned for their expertise in crafting enchanted items that protect and empower those who wield them.",
    "shippingDetail": "The stone is carefully wrapped to ensure it arrives undamaged, though the delivery time may vary due to the unpredictable nature of dragon flights.",
    "usage": {
      "activation": "Activates as a bonus action.",
      "duration": "Instantaneous block; passive undead resistance until long rest.",
      "endsWhen": "Exhausted after one use per short rest or when destroyed.",
      "charges": "Unlimited, recharges with a long rest."
    },
    "priceReason": "The wardstone is crafted from rare obsidian and imbued with potent protective magic, making it a valuable yet accessible item for any adventurer.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T02:39:13.333981+00:00",
    "aiReviewedAt": "2026-07-25T02:39:13.333981+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_chronometric_sand_piercer": {
    "id": "earth_land_item_chronometric_sand_piercer",
    "name": "The Waning Chronometric Sand Piercer",
    "description": "The Waning Chronometric Sand Piercer is a delicate timepiece forged from ancient temporal eddies found in the heart of the Frozen Wastes. Its glassy surface shimmered with remnants of past moments, and its intricate gears tick like the pulse of forgotten history. When activated, it slows time around the wielder by 20% for three seconds, granting unparalleled precision in combat or delicate tasks—though prolonged use risks warping one's perception of reality into a brief, disorienting blur.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Slowing",
      "Enhanced Precision"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "express_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Slowing",
        "rules": "Activates as a bonus action. The wielder and all creatures within 5 feet gain advantage on attack rolls, saving throws, and ability checks for the duration. Lasts for 3 seconds. Ends when used again or if the user takes any damage."
      },
      {
        "title": "Enhanced Precision",
        "rules": "The wielder's accuracy in attacks is increased by +2 until the start of their next turn. This bonus stacks with other bonuses to accuracy but does not exceed +5 on a single roll. Ends at the end of the user's next turn."
      }
    ],
    "levelRequirementReason": "Requires no proficiency, suitable for beginners and veterans alike.",
    "vendorReason": "The guild quartermaster supplies adventurers with tools that enhance their capabilities in challenging environments.",
    "shippingDetail": "Ships within 24 hours, delivered by a courier from the Frozen Wastes.",
    "usage": {
      "activation": "Bonus action to activate or deactivate.",
      "duration": "3 seconds when activated as a bonus action.",
      "endsWhen": "Used again or if the user takes damage.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced price for an item that enhances combat and precision without causing significant imbalance.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T02:39:21.089450+00:00",
    "aiReviewedAt": "2026-07-25T02:39:21.089450+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_geode_cartographer's_curiosity": {
    "id": "earth_land_item_geode_cartographer's_curiosity",
    "name": "The Geode of Cartographic Resonance",
    "description": "The Geode of Cartographic Resonance is a pulsating crystal encased in sedimentary layers, its surface etched with ancient runes. When touched, it emits a soft glow that overlays your vision with spectral maps of hidden pathways and potential dangers within a 30-meter radius. Although its guidance is fickle, it offers rare glimpses into the locations of lost treasures and forgotten settlements. Its fragmented knowledge provides an increased perception bonus but can also induce disorientation if overused.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🗺️",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "reveals hidden paths",
      "increased perception"
    ],
    "vendor": "magic_shop",
    "shippedBy": "standard_shipping",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Reveal Hidden Paths",
        "rules": "Activation: A bonus action; Duration: Instantaneous, Area: 30-meter radius. This effect reveals hidden routes and potential dangers within a brief projection that lasts for 1 minute per level of the user. Save DC 15 to resist disorientation caused by this effect."
      },
      {
        "title": "Increased Perception",
        "rules": "Effect: Increases perception by +10%. Lasts until the end of your next short or long rest, but cannot exceed +20% at any time due to stacking limitations."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level of 15 to handle its fickle nature and fragmented knowledge effectively.",
    "vendorReason": "The magic shop specializes in relics that offer unique insights into the world, making The Geode of Cartographic Resonance an ideal addition to their inventory.",
    "shippingDetail": "Ships via standard courier with a two-day delivery time.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous; lasts for 1 minute per level of the user",
      "endsWhen": "Disoriented if a save is failed, or at the end of your next short or long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects its unique ability to offer both strategic advantages and potential risks.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:39:04.658160+00:00",
    "aiReviewedAt": "2026-07-25T02:39:04.658160+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_the_silent_observer_tome": {
    "id": "earth_land_item_the_silent_observer_tome",
    "name": "The Silent Observer's Tome of Echoing Shadows",
    "description": "Bound in blackened dragon hide with arcane symbols etched into its cover, The Silent Observer's Tome of Echoing Shadows is a cryptic volume that captures the whispers of forgotten rituals. When opened near sites of significant magical activity, it projects ephemeral shadows that mimic past events, offering glimpses into ancient and perilous encounters. With each use, the tome reveals spectral echoes with uncanny accuracy, granting insight into hidden magic and enhancing one's investigative prowess.",
    "category": "equipment",
    "price": 1000,
    "icon": "👁️",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "reveals spectral echoes",
      "enhances investigation checks"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "delivery_only",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Reveal Spectral Echoes",
        "rules": "When opened within a radius of 60 feet of significant magical activity, the tome projects shadows that mimic past events. This effect lasts for 1 minute and can be used once per long rest."
      },
      {
        "title": "Enhance Investigation Checks",
        "rules": "The user gains advantage on investigation checks related to identifying or analyzing magical auras for 8 hours after using the tome. This benefit is permanent until expended."
      }
    ],
    "levelRequirementReason": "Requires proficiency in Arcana to fully utilize its insights.",
    "vendorReason": "Earth Emporium specializes in rare and arcane items, including this tome of shadowed lore.",
    "shippingDetail": "Shipped via Swift Courier, with expedited delivery to the nearest major city.",
    "usage": {
      "activation": "Reading the tome within a site of significant magical activity activates its effects.",
      "duration": "1 minute or until expended, whichever comes first.",
      "endsWhen": "The effect ends when its duration expires or if the user opens it again in another location.",
      "charges": "Recharges after a long rest."
    },
    "priceReason": "Balanced for its utility and limited use, this tome offers significant but not game-breaking benefits.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T02:39:17.352007+00:00",
    "aiReviewedAt": "2026-07-25T02:39:17.352007+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_crimson_echo_dancer": {
    "id": "the_edge_item_crimson_echo_dancer",
    "name": "The Crimson Echo Dancer’s Shard",
    "description": "The Crimson Echo Dancer’s Shard is a jagged shard of crimson glass, pulsing with the raw energy of forgotten screams. Held in one's hand, it reveals hidden pathways that evade mortal perception but can drive the wielder to madness if gazed upon too long. This fragment grants fleeting glimpses into the abyssal psyche, offering insight into unseen routes or dead ends—though its erratic behavior might just as easily betray the unwary.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔥",
    "stock": 7,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Fleeting Insight",
      "Madness Glance"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "Sky Serpent Courier",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Fleeting Insight",
        "rules": "Upon activation, the shard grants a +20 temporary bonus to Perception checks for 1 minute. This effect can only be used once per long rest."
      },
      {
        "title": "Madness Glance",
        "rules": "There is a 15% chance that any creature who gazes into the shard's depths will suffer from Fractured Sanity, causing them to take an additional 2d6 psychic damage at the start of their next turn. This effect can only be triggered once per short rest."
      }
    ],
    "levelRequirementReason": "The shard requires a high level of discipline and mental fortitude to wield its chaotic power without succumbing to madness.",
    "vendorReason": "Only the abyssal trader can procure such dangerous relics from the depths where they originated.",
    "shippingDetail": "The shard must be transported in a specially enchanted glass case to prevent accidental gazing into its depths during transit.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute (recharges after a long rest)",
      "endsWhen": "The effect duration ends or the shard is destroyed by an enemy's attack that deals psychic damage.",
      "charges": "Unlimited, recharging after a long rest"
    },
    "priceReason": "The shard’s price reflects its rarity and the danger it poses, ensuring only those of great need or foolhardy ambition seek to acquire it.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T02:40:09.343934+00:00",
    "aiReviewedAt": "2026-07-25T02:40:09.343934+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_final_jeweled_resonator": {
    "id": "the_edge_item_final_jeweled_resonator",
    "name": "The Final Jeweled Resonator of the Shattered Zenith",
    "description": "The Final Jeweled Resonator of the Shattered Zenith is a dark artifact encased in a casing of blackened steel and adorned with facets that shimmer like frozen despair. Crafted from the remnants of a shattered realm, it emits a low, unsettling hum that can amplify both your own emotions and those of your foes. It amplifies rage into a blinding torrent and fear into paralyzing terror, making it a dangerous tool in the wrong hands.",
    "category": "equipment",
    "price": 1000,
    "icon": "🤯",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Amplify Emotions",
      "Induce Paralysis"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Automated Drone Delivery",
    "levelRequirement": 28,
    "effectDetails": [
      {
        "title": "Amplify Emotions",
        "rules": "When activated as an action, this device amplifies your emotions and those of nearby enemies. For the next minute, you gain advantage on saving throws against fear effects. Additionally, any enemy within 10 feet that fails a DC 15 Wisdom saving throw becomes enraged for 1 minute (as if affected by the Enraged feature)."
      },
      {
        "title": "Induce Paralysis",
        "rules": "The Resonator can be aimed at a single creature as an action, causing it to become frightened until the end of your next turn. The target must succeed on a DC 15 Wisdom saving throw or be paralyzed for 1 minute."
      }
    ],
    "levelRequirementReason": "This artifact requires significant magical power and control to wield, only available to those with proven mastery.",
    "vendorReason": "Edge Outpost has access to rare and powerful artifacts from the shadowy realms.",
    "shippingDetail": "Ships within 48 hours of purchase, delivered by automated drones that ensure secure transport.",
    "usage": {
      "activation": "Action",
      "duration": "Until the end of your next turn for each effect",
      "endsWhen": "The target saves successfully or the duration expires",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "This price reflects its rarity and the raw materials required to craft such an artifact.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T02:39:34.037920+00:00",
    "aiReviewedAt": "2026-07-25T02:39:34.037920+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_mk.33_obsidian_whisperer": {
    "id": "the_edge_item_mk.33_obsidian_whisperer",
    "name": "Mk.33 Obsidian Whisperer Fragment - Nullpoint",
    "description": "The Mk.33 Obsidian Whisperer Fragment - Nullpoint is a jagged obsidian shard, its surface etched with ancient runes that hum softly in the dark. When held, it momentarily silences the world around you, allowing you to whisper unheard into the void. The fragment also grants you insight into the past, briefly connecting you with the echoes of travelers who perished at The Edge, their voices a haunting yet invaluable guide.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🤫",
    "stock": 33,
    "rarity": "uncommon",
    "stockType": "delivery_only",
    "effects": [
      "Silence",
      "Echoes of the Past"
    ],
    "vendor": "final_shop",
    "shippedBy": "The Shadow Messenger",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Silence",
        "rules": "When activated as an action, this fragment momentarily silences your surroundings for 10 seconds. No sound can be heard within a 20-foot radius for its duration. This effect ends if you take any damage or the shard is removed from your possession."
      },
      {
        "title": "Echoes of the Past",
        "rules": "For 3 rounds, you gain insight into past events by communicating with the echoes of travelers who have perished at The Edge. You can ask one question about a specific event related to The Edge and receive a cryptic answer from their voices. This effect ends if your concentration is broken or after three rounds."
      }
    ],
    "levelRequirementReason": "This item requires significant experience and resilience, thus only those of high level can wield its power.",
    "vendorReason": "Final Shop specializes in rare and ancient artifacts, making the Mk.33 Obsidian Whisperer Fragment - Nullpoint a fitting addition to their inventory.",
    "shippingDetail": "Ships via The Shadow Messenger directly from the darkest reaches of The Edge, ensuring its arrival is both swift and mysterious.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds / 3 rounds",
      "endsWhen": "Damage taken or shard removed / Concentration broken or after three rounds",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the item's rare material, ancient lore, and its utility for high-level adventurers.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-25T02:39:37.975980+00:00",
    "aiReviewedAt": "2026-07-25T02:39:37.975980+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_the-blessed-banners-of-war": {
    "id": "warhammer_item_the-blessed-banners-of-war",
    "name": "The Blessed Banners of War – Serpent’s Coil",
    "description": "The Blessed Banners of War – Serpent’s Coil are crimson banners woven from scales of ancient serpents, blessed by war gods long forgotten. When unfurled in battle, their scales shimmer with a primal energy that bolsters nearby warriors' resolve and grants them temporary resistance to fear effects. A testament to countless battles fought beneath their crimson hues, these banners inspire the hearts of allies and quell the terrors that would otherwise overwhelm them.",
    "category": "equipment",
    "price": 8750,
    "icon": "⚔️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Inspire Allies",
      "Fear Resistance"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "Aerial Delivery",
    "levelRequirement": 28,
    "effectDetails": [
      {
        "title": "Inspire Allies",
        "rules": "As a bonus action, the user can unfurl one banner to grant nearby allies advantage on attack rolls and saving throws for 1 minute. This effect ends if the user or an adjacent ally takes damage."
      },
      {
        "title": "Fear Resistance",
        "rules": "When the banners are unfurled, any fear effects within a 30-foot radius are negated until the start of your next turn. Creatures that end their movement in this area must succeed on a DC 15 Wisdom saving throw or be frightened for 1 minute."
      }
    ],
    "levelRequirementReason": "The Blessed Banners require significant strength and experience to wield effectively, only available to those of high level.",
    "vendorReason": "The Imperial Armory specializes in rare and powerful battlefield tools, including the legendary banners.",
    "shippingDetail": "Delivered by swift aerial couriers, these banners are dispatched with utmost care to ensure they arrive in pristine condition for their intended use.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute (ends if the user or an adjacent ally takes damage)",
      "endsWhen": "The start of your next turn after unfurling a banner, or when the user or an adjacent ally takes damage.",
      "charges": "Unlimited"
    },
    "priceReason": "The rarity and power of these banners justify their high price, making them a valuable asset for any seasoned warrior.",
    "priceOriginal": 8750,
    "priceReviewedAt": "2026-07-25T02:39:55.933821+00:00",
    "aiReviewedAt": "2026-07-25T02:39:55.933821+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_the-ominous-keeper’s-banners": {
    "id": "warhammer_item_the-ominous-keeper’s-banners",
    "name": "The Ominous Keeper’s Banners – Shadowweave Rite",
    "description": "Woven from the dark fabric of forgotten battlefields and imbued with the despair of fallen generals, The Ominous Keeper’s Banners exudes an aura of dread that can demoralize foes. Holding it grants immunity to illusion magic, ensuring your allies remain unswayed by fey or fiendish tricks. This banner's presence alone can cause nearby enemies to falter in fear, and its shadowed weave offers limited camouflage against prying eyes.",
    "category": "equipment",
    "price": 1000,
    "icon": "💀",
    "stock": 7,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "Immunity to Illusion Magic",
      "Cause Fear"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 25,
    "effectDetails": [
      {
        "title": "Immunity to Illusion Magic",
        "rules": "The wielder gains immunity to all forms of illusion magic, including but not limited to charm spells and invisibility effects. This benefit lasts for the duration of one short rest."
      },
      {
        "title": "Cause Fear",
        "rules": "When activated as a bonus action within 10 meters of enemies, The Ominous Keeper’s Banners fills them with fear, causing them to suffer disadvantage on attack rolls and ability checks that require finesse until the start of their next turn. This effect lasts for up to one minute."
      }
    ],
    "levelRequirementReason": "The intricate weaving and dark magic required to craft this banner demand a high level of expertise.",
    "vendorReason": "This vendor specializes in exotic and forbidden items, making The Ominous Keeper’s Banners a natural addition to their stock.",
    "shippingDetail": "Ships via inter-dimensional rift, arriving within one week from purchase.",
    "usage": {
      "activation": "Bonus action (requires holding the banner)",
      "duration": "Up to one minute or until the wielder takes a hostile action",
      "endsWhen": "Ends when the wielder takes a hostile action",
      "charges": "Unlimited, but only one use per short rest"
    },
    "priceReason": "The balance reflects its mythic rarity and unique abilities, offering players a powerful tool without breaking game mechanics.",
    "priceOriginal": 18900,
    "priceReviewedAt": "2026-07-25T02:39:52.670778+00:00",
    "aiReviewedAt": "2026-07-25T02:39:52.670778+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_the-fate-forge-mk-99-service": {
    "id": "warhammer_item_the-fate-forge-mk-99-service",
    "name": "The Fate Forge Mk.99 – Temporal Echo Service",
    "description": "The Fate Forge Mk.99 – Temporal Echo Service hums with the potential of countless futures, its polished surface reflecting fragments of time. This device offers a fleeting glimpse into one possible timeline for a chosen individual, but it comes at an immense cost: the sacrifice of personal memories and a fragment of one's own future. Misuse can tear apart the fabric of reality itself, creating unforeseen temporal paradoxes that ripple through history.",
    "category": "services",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Temporal Glimpse",
      "Memory Sacrifice"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Temporal Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Glimpse",
        "rules": "The user activates the device to reveal a single potential future for a chosen individual. The effect is instantaneous, providing a brief but vivid vision of one possible outcome. This use counts as one charge and cannot be used again until fully recharged."
      },
      {
        "title": "Memory Sacrifice",
        "rules": "Using the Mk.99 requires a significant personal sacrifice; the user must offer up an equal number of personal memories, equivalent to 10% of their total memory pool. This effect is permanent and cannot be undone. The device can only be used once per month."
      }
    ],
    "levelRequirementReason": "Even the smallest use of this powerful artifact demands a user with a firm grasp of their own timeline.",
    "vendorReason": "Fate Forge, being a master of time and fate, is uniquely qualified to offer such an intricate service.",
    "shippingDetail": "The device arrives via the Temporal Relay, ensuring its arrival through a secure, but potentially paradox-inducing, method.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhaustion of charges or misuse triggering temporal instability",
      "charges": "1, recharged monthly"
    },
    "priceReason": "The price reflects the immense power and risk involved in using such a device responsibly.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-25T02:40:27.042689+00:00",
    "aiReviewedAt": "2026-07-25T02:40:27.042689+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_twilight_cursed_serpent_tears": {
    "id": "pokemon_item_twilight_cursed_serpent_tears",
    "name": "Twilight Cursed Serpent Tears",
    "description": "Twilight Cursed Serpent Tears are viscous, iridescent drops harvested from nocturnal Serpent Pokémon in the Shadowfen marshes. Their unsettling twilight glow hints at their dark origins and can be seen shimmering even in the deepest darkness. When consumed, these tears grant temporary poison resistance and inflict a debilitating curse that reduces an opponent's speed by 10 feet for one minute. The cursed foe also suffers from a lingering malaise that persists until they are cured or fall unconscious.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧪",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Poison Resistance",
      "Debilitating Curse"
    ],
    "vendor": "pokemart",
    "shippedBy": "Wingull Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Poison Resistance",
        "rules": "The user gains temporary resistance to poison damage for 1 minute. This effect does not stack with other sources of poison resistance."
      },
      {
        "title": "Debilitating Curse",
        "rules": "Upon consumption, the drinker inflicts a curse on an enemy within 30 feet. The target's speed is reduced by 10 feet for 1 minute. There is a 50% chance that this effect also imposes a condition of disadvantage on attack rolls and ability checks until cured or unconscious."
      }
    ],
    "levelRequirementReason": "This potion provides temporary benefits but does not require high-level expertise to use effectively.",
    "vendorReason": "Pokemart stocks a variety of potions and elixirs, including Twilight Cursed Serpent Tears, which are popular among trainers for their unique properties.",
    "shippingDetail": "Ships immediately via Wingull Express; delivery is typically within three days.",
    "usage": {
      "activation": "Consume the tears as a bonus action.",
      "duration": "1 minute or until consumed by poison damage.",
      "endsWhen": "The duration ends when the user takes poison damage, or it can be prematurely ended by drinking another potion with similar effects.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This rare elixir combines unique ingredients from Shadowfen Serpent Pokémon, making it a valuable and sought-after item among trainers.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T02:40:43.337062+00:00",
    "aiReviewedAt": "2026-07-25T02:40:43.337062+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_Mk_26_Shiny_Echo_Elixirs": {
    "id": "pokemon_item_Mk_26_Shiny_Echo_Elixirs",
    "name": "Mk.26 Shiny Echo Elixirs",
    "description": "The Mk.26 Shiny Echo Elixirs are vials of shimmering liquid, drawn from the ancient lab beneath Mt. Silver. Each elixir captures a fragment of a legendary Pokémon’s battle spirit, imbuing you with its raw power for a fleeting moment. Consume one and feel your movements quicken as your attacks become more devastating—though the echoes fade after a short burst, leaving only a trace of their former might.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 17,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Burst of Speed",
      "Enhanced Attacks"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Courier Pidgeotto Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Burst of Speed",
        "rules": "Upon consumption, you gain a +30 bonus to your speed for 1 minute. This effect is instantaneous and does not require an action or reaction."
      },
      {
        "title": "Enhanced Attacks",
        "rules": "For the duration of the burst, your weapon attacks deal an additional 2d6 damage against targets within range. This enhancement persists until you take a short rest."
      }
    ],
    "levelRequirementReason": "These elixirs are potent but not overly powerful, making them accessible to lower-level adventurers.",
    "vendorReason": "The Safari Shop specializes in rare and exotic items from the Pokémon world; these elixirs fit their inventory perfectly.",
    "shippingDetail": "Ships within one business day, delivered by a trusted Pokémon courier.",
    "usage": {
      "activation": "Instantaneous consumption upon opening and drinking the vial.",
      "duration": "1 minute per elixir consumed.",
      "endsWhen": "The effect ends when you take a short rest or are incapacitated.",
      "charges": "Unlimited, but only one can be active at a time."
    },
    "priceReason": "Balanced against other consumables of similar power and rarity.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T02:40:26.696150+00:00",
    "aiReviewedAt": "2026-07-25T02:40:26.696150+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_Curiosity_Aetherium_Stone": {
    "id": "pokemon_item_Curiosity_Aetherium_Stone",
    "name": "Curiosity Aetherium Stone",
    "description": "This oddly warm, pulsating stone hums with a strange energy. Holding it allows you to briefly perceive faint traces of Pokémon evolution potential within other creatures – a captivating curiosity for any dedicated trainer.",
    "category": "curiosities",
    "price": 5200,
    "icon": "🔮",
    "stock": 9,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "reveals a faint aura indicating evolution potential on target Pokémon (chance-based)",
      "provides +5 to insight stat",
      "slightly increases accuracy for one turn",
      "may trigger a brief, harmless temporal distortion."
    ],
    "vendor": "league_store",
    "shippedBy": "Magikarp Courier",
    "levelRequirement": 45
  },
  "grand_country_item_the_crumbling_stone_singer": {
    "id": "grand_country_item_the_crumbling_stone_singer",
    "name": "The Crumbling Stone Singer",
    "description": "The Crumbling Stone Singer, a whimsical relic crafted from solidified doughnut crumb and petrified sap, sings a haunting melody that seems to resonate through time itself. Its angular protrusions offer precarious climbing aids, while the song subtly shifts layers around you, offering minor protection against falling damage and a calming influence that reduces stress. This ancient device is a cherished item among adventurers who seek both utility and a touch of the arcane in their gear.",
    "category": "consumables",
    "price": 1000,
    "icon": "🎶",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Calming Melody",
      "Temporary Climbing Aid"
    ],
    "vendor": "side_seller",
    "shippedBy": "Doughnut Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Calming Melody",
        "rules": "When activated, this device plays a soothing melody that reduces stress by 2d4 points for all creatures within 30 feet. The effect lasts until the start of your next turn. A successful DC 12 Wisdom saving throw negates the effect."
      },
      {
        "title": "Temporary Climbing Aid",
        "rules": "The angular protrusions grant a +1 bonus to climbing checks for up to 1 hour after activation, or until you fall from a height. The item recharges its uses upon being repaired by a successful DC 15 Craft (Tailoring) check."
      }
    ],
    "levelRequirementReason": "The Crumbling Stone Singer is accessible to all adventurers who can appreciate its unique blend of utility and mystique.",
    "vendorReason": "Side Seller, known for their eclectic mix of curious items, keeps the Crumbling Stone Singer in stock due to its popularity among both novices and seasoned travelers.",
    "shippingDetail": "Shipped by the Doughnut Courier, this item may arrive with a slight delay due to its fragile nature but ensures safe delivery.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous Activation, lasts until start of next turn or interrupted by falling.",
      "endsWhen": "Interrupted by falling from height, or used up in combat.",
      "charges": "2 uses"
    },
    "priceReason": "The Crumbling Stone Singer's price is balanced to reflect its unique combination of utility and the challenge of crafting it from unusual materials.",
    "priceOriginal": 780,
    "priceReviewedAt": "2026-07-25T02:41:07.281191+00:00",
    "aiReviewedAt": "2026-07-25T02:41:07.281191+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_the_helix_pulleys_of_distortion": {
    "id": "grand_country_item_the_helix_pulleys_of_distortion",
    "name": "The Helix Pulleys of Distortion",
    "description": "The Helix Pulleys of Distortion are a mesmerizing contraption of interlocking caramel and sugar-glass pulleys, forged by an eccentric clockmaker in the shadowed alleys of Tanglewight. By turning these pulleys, you can momentarily warp space around you, creating small zones where gravity shifts and pocket dimensions form, offering fleeting reprieves from the mundane. These pulleys are said to have been imbued with the remnants of a forgotten distortion spell, making them both a marvel and a danger.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Gravitational Warp",
      "Pocket Dimensions"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "Sugarwind Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gravitational Warp",
        "rules": "As an action, you can turn the pulleys to create a localized area of gravitational distortion. This effect lasts for up to 1 minute and affects a 5-foot-radius cube centered on you. Any creature within this area must succeed on a DC 14 Dexterity saving throw or be knocked prone. The duration ends if you leave the area or if you use an action to stop it."
      },
      {
        "title": "Pocket Dimensions",
        "rules": "The pulleys can create unstable pocket dimensions that last for up to 30 seconds, centered on a point of your choice within range (15 feet). When created, these dimensions are small enough to hold only one Medium or smaller creature. Any creature in the area must succeed on a DC 14 Wisdom saving throw or be pulled into the pocket dimension until it exits or is freed by another creature."
      }
    ],
    "levelRequirementReason": "The intricate mechanism and arcane energy within require basic proficiency to operate.",
    "vendorReason": "Vertical Vendor specializes in rare and esoteric items, including those with a touch of magic.",
    "shippingDetail": "Ships via Sugarwind Express's enchanted courier pigeons, ensuring swift delivery to even the most remote locations.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 1 minute or until you leave the area",
      "endsWhen": "You stop using it as an action or when you exit the affected area",
      "charges": "Unlimited, but requires concentration while active"
    },
    "priceReason": "Balanced against other rare items with similar effects and rarity.",
    "priceOriginal": 1850,
    "priceReviewedAt": "2026-07-25T02:40:50.453884+00:00",
    "aiReviewedAt": "2026-07-25T02:40:50.453884+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_mk.78_angular_gravity_ward_the_layered_singer": {
    "id": "grand_country_item_mk.78_angular_gravity_ward_the_layered_singer",
    "name": "Mk.78 Angular Gravity Ward - The Layered Singer",
    "description": "The Mk.78 Angular Gravity Ward - The Layered Singer is a masterwork of ancient craft, fused from angular layers of glazed dough and stabilized with syrup enchanted by the gods of gravity itself. It hums softly, its tune capable of anchoring you to walls at impossible angles or creating localized gravitational fields that can disrupt foes' balance. Its layers shimmer with an inner glow, hinting at the power it holds within.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Gravitational Anchor",
      "Disruptive Field"
    ],
    "vendor": "layer_market",
    "shippedBy": "Syrup Slingers",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Gravitational Anchor",
        "rules": "As a bonus action, you can activate the gravity ward to create an anchor at your feet. For 1 minute, you gain advantage on Dexterity (Acrobatics) checks and are not subject to falling damage within 30 feet of the anchor point."
      },
      {
        "title": "Disruptive Field",
        "rules": "Once per short rest, you can activate the gravity ward to create a Disruptive Field in a 15-foot radius centered on yourself. Creatures within the area must make a DC 14 Strength saving throw or be knocked prone and have their speed reduced by half until the end of your next turn."
      }
    ],
    "levelRequirementReason": "Requires significant strength and control to manipulate such powerful gravitational effects.",
    "vendorReason": "The Layer Market is known for its esoteric and gravity-defying items, making it the perfect vendor for this unique artifact.",
    "shippingDetail": "Ships via Syrup Slingers with a delay of one week due to the delicate nature of the item.",
    "usage": {
      "activation": "Bonus Action / Reaction",
      "duration": "1 minute (Disruptive Field once per short rest)",
      "endsWhen": "The effect ends if you are incapacitated or the gravity ward is destroyed.",
      "charges": "Unlimited, but limited by the duration."
    },
    "priceReason": "Balanced at 1000 XP to reflect its epic rarity and potent effects without unbalancing the game.",
    "priceOriginal": 8900,
    "priceReviewedAt": "2026-07-25T02:41:02.621849+00:00",
    "aiReviewedAt": "2026-07-25T02:41:02.621849+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_inverted_tears_of_center_01": {
    "id": "doughnut_hole_item_inverted_tears_of_center_01",
    "name": "Divine Dancer's Tears of the Rotting Heart",
    "description": "Harvested from the deepest fissures of a long-forgotten temple, these viscous tears glow with an eerie, inverted luminescence, pulsing in time with the very heart of the divine dancer. Consuming them grants you an unnervingly graceful movement and the ability to phase partially through solid matter for one rotation, leaving only the scent of caramelized despair behind. The grace they bestow is both mesmerizing and deadly, as your form seems to shift like molten glass in the eye of a storm.",
    "category": "consumables",
    "price": 1200,
    "icon": "✨",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "grant_graceful_movement",
      "phasing_ability"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Void Conveyance Drone",
    "levelRequirement": 25,
    "effectDetails": [
      {
        "title": "Graceful Movement",
        "rules": "You gain advantage on Dexterity (Acrobatics) checks for 1 minute, during which you can move through the space of creatures and objects as if they were difficult terrain. This effect ends early if you take damage."
      },
      {
        "title": "Phasing Ability",
        "rules": "For one full rotation (10 seconds), you can partially phase through solid matter, allowing you to slip between spaces normally occupied by creatures or objects. You have advantage on Strength checks and saving throws made to maintain your position if a creature attempts to push or restrain you."
      }
    ],
    "levelRequirementReason": "This item's power requires the user to be an experienced combatant, able to leverage its effects without endangering themselves.",
    "vendorReason": "The Hole Hawker specializes in items that blur the line between the mundane and the otherworldly, making this divine artifact a perfect fit for their inventory.",
    "shippingDetail": "Delivered via the Void Conveyance Drone, these tears are shipped directly from the temple's depths to ensure their potency remains unaltered.",
    "usage": {
      "activation": "Eaten as an action",
      "duration": "1 full rotation (10 seconds) per use",
      "endsWhen": "You take damage or complete a long rest",
      "charges": "Limited daily, can be used once per short or long rest"
    },
    "priceReason": "The rare and limited nature of the tears combined with their potent effects justifies this price.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:41:40.205129+00:00",
    "aiReviewedAt": "2026-07-25T02:41:40.205129+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_mk_48_inverted_tears_of_center_02": {
    "id": "doughnut_hole_item_mk_48_inverted_tears_of_center_02",
    "name": "Mk.48 Inverted Tears of the Null Horizon",
    "description": "The Mk.48 Inverted Tears of the Null Horizon are forged from chronal distortion and sorrow drawn from the central void's heart. These shimmering, temporal fragments allow their wielder to glimpse alternate realities briefly, shifting actions into fractured timelines with a subtle temporal displacement effect. They offer fleeting access to paradox-resistant combat prowess, enhancing critical hit chances by 10%. Ingestion grants temporary resistance to the effects of time-based spells and abilities.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 17,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "temporal_displacement",
      "critical_hit_boost"
    ],
    "vendor": "center_seller",
    "shippedBy": "Dimensional Courier",
    "levelRequirement": 40,
    "effectDetails": [
      {
        "title": "Temporal Displacement",
        "rules": "As a bonus action, the user can attempt to perform an action with a subtle temporal displacement effect. This grants advantage on attack rolls and damage rolls for the next minute. The effect ends if the user takes any nonmagical damage."
      },
      {
        "title": "Critical Hit Boost",
        "rules": "While in possession of these tears, the user has a +10% chance to score a critical hit with melee attacks. This effect is limited to 3 uses per long rest."
      }
    ],
    "levelRequirementReason": "This item requires a high level due to its powerful temporal and paradox-resistant properties.",
    "vendorReason": "The center_seller has exclusive access to items created from the central void's essence.",
    "shippingDetail": "Special handling required for time-sensitive deliveries via Dimensional Courier.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until you take nonmagical damage or end your turn in a different location",
      "endsWhen": "You take nonmagical damage or move to a new location, whichever comes first",
      "charges": "3 uses per long rest"
    },
    "priceReason": "The item's unique temporal properties and limited use justify its moderate price.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T02:41:20.183966+00:00",
    "aiReviewedAt": "2026-07-25T02:41:20.183966+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_godly_tears_of_the_consuming_void_03": {
    "id": "doughnut_hole_item_godly_tears_of_the_consuming_void_03",
    "name": "The Consuming Void's Lament - Tears of the Unmaking",
    "description": "The Consuming Void's Lament - Tears of the Unmaking are ethereal, shimmering droplets that chill and dissolve matter upon contact. These tears, said to be wept by the nascent void itself, possess a chilling resonance capable of unraveling both the physical world and the user’s own essence. Drinking them grants mastery over entropy, allowing one to accelerate decay and dissolve objects with a touch, but at an alarming cost: the user's own form begins to degrade gradually as if time itself were against them.",
    "category": "forbidden",
    "price": 2000,
    "icon": "💀",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "entropy_acceleration",
      "matter_dissolution"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Void Wraith Transport",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Entropy Acceleration (Touch)",
        "rules": "When touched, this effect accelerates the decay of objects within a 5-foot radius. Targets must succeed on a DC 18 Dexterity saving throw or be subjected to a gradual increase in entropy, dealing 1d6 points of damage at the start of each of their turns for 1 minute."
      },
      {
        "title": "Matter Dissolution (Touch)",
        "rules": "Upon contact with an object, this tear dissolves it immediately. The user can use this ability once per long rest to target one Small or smaller creature or object within reach. This effect cannot be used on living beings."
      }
    ],
    "levelRequirementReason": "This item's power requires a deeper understanding of entropy and the void, thus requiring a higher level character.",
    "vendorReason": "Only the Void Vendor, who understands the balance between creation and destruction, can offer such a powerful yet perilous artifact.",
    "shippingDetail": "Delivery is swift but requires the recipient to travel through the void, adding an additional day to transit time.",
    "usage": {
      "activation": "Touch attack",
      "duration": "Instantaneous for Matter Dissolution; 1 minute per target for Entropy Acceleration",
      "endsWhen": "The user's health is reduced to zero or they take a short rest",
      "charges": "Unlimited, but the user must complete a long rest after using the Matter Dissolution effect"
    },
    "priceReason": "While powerful, the item's self-destructive nature and limited utility justify this moderate price.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-25T02:41:58.581901+00:00",
    "aiReviewedAt": "2026-07-25T02:41:58.581901+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_jade-hunter_medalist-of-broken-empire": {
    "id": "warhammer_item_jade-hunter_medalist-of-broken-empire",
    "name": "Jade Hunter’s Medalist of Broken Empire",
    "description": "Jade Hunter's Medalist of Broken Empire is a jade medallion intricately carved from the remnants of an ancient empire, its surface etched with symbols that whisper tales of lost battles and strategic masterpieces. When worn in chaotic environments, it grants heightened awareness, allowing you to see through the chaos as if it were still. The medallion also whispers tactical advantages, offering a +3 bonus on Intimidate checks and a 20% reduction in fear effects, making even the most daunting confrontations seem less intimidating.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚔️",
    "stock": 45,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Heightened Awareness",
      "Whispers of Strategy"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "Imperial Courier Drone",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Heightened Awareness",
        "rules": "While in a chaotic environment, you have advantage on perception checks. This effect lasts until the start of your next turn or when you leave the chaotic area."
      },
      {
        "title": "Whispers of Strategy",
        "rules": "At the start of each combat round, you gain a +3 bonus to Intimidate checks and a 20% reduction in fear effects. This effect lasts until the end of your next turn or when you are no longer in immediate combat."
      }
    ],
    "levelRequirementReason": "This item provides tactical advantage but is best suited for seasoned heroes who have already faced significant challenges.",
    "vendorReason": "The Imperial Armory sells this rare artifact because it was discovered during the reconstruction of ancient battlefields and is a testament to lost strategies and valor.",
    "shippingDetail": "Ships within one week, delivered by an Imperial Courier Drone with secure packaging.",
    "usage": {
      "activation": "Passive effect until conditions change.",
      "duration": "Until the start of your next turn or when you leave a chaotic area/combat.",
      "endsWhen": "Leaving the chaotic environment or end of combat.",
      "charges": "Unlimited, but only one effect is active at a time."
    },
    "priceReason": "The jade's origin and its strategic value make it worth this price in experience points.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:41:50.689628+00:00",
    "aiReviewedAt": "2026-07-25T02:41:50.689628+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_chaos-hunter_resonator-of-twisted-fate": {
    "id": "warhammer_item_chaos-hunter_resonator-of-twisted-fate",
    "name": "Chaos Hunter’s Resonator of Twisted Fate",
    "description": "The Chaos Hunter’s Resonator of Twisted Fate hums with the raw chaos of collapsing temples, its surface a maelstrom of shifting shadows and fractured reality. When activated, it warps space around you, causing nearby enemies to stagger in confusion while your own aggression surges, pushing you into a state of reckless ferocity. The resonator demands a price – madness begins to seep into your mind after extended use, but its power is unmatched for those willing to pay the toll.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "causes confusion",
      "increases attack speed"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Shadow Serpent Delivery",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Confusion",
        "rules": "Enemies within a 10-foot radius are subjected to the confused condition for 5 seconds. They must make a DC 14 Wisdom saving throw or be affected. This effect ends if they take any damage."
      },
      {
        "title": "Attack Speed Boost",
        "rules": "The wielder’s attack speed increases by 30% for 3 seconds after each successful hit, but this boost is reduced by 5% per additional hit until it expires or the Resonator is recharged. This effect ends when the Resonator runs out of charges."
      }
    ],
    "levelRequirementReason": "This item's chaotic power requires a high level to control, as misuse can lead to dangerous consequences.",
    "vendorReason": "The Chaos Dealer specializes in items that harness the dark and unpredictable forces of chaos.",
    "shippingDetail": "Delivered by the Shadow Serpents, known for their precision and speed. The package is concealed to avoid detection.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect with a duration of 5 seconds for confusion, and 3 seconds for attack speed boost per hit.",
      "endsWhen": "The Resonator runs out of charges or if the wielder takes any damage while active.",
      "charges": "Recharges after a long rest."
    },
    "priceReason": "This item is rare and powerful, balancing its cost with its chaotic nature and unpredictable effects.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T02:42:22.927803+00:00",
    "aiReviewedAt": "2026-07-25T02:42:22.927803+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_fate-forge_service-of-temporal-remediation": {
    "id": "warhammer_item_fate-forge_service-of-temporal-remediation",
    "name": "Fate Forge Service of Temporal Remediation",
    "description": "The Fate Forge Service of Temporal Remediation is a rare chronomancer ritual. This service allows for the brief manipulation of localized temporal currents, enabling the user to mitigate recent errors or prevent catastrophic outcomes. Chronomancers at the Fate Forge can undo the last instance of damage dealt to you and rewind a single failed action, be it an attack or skill use. The act of altering fate always leaves its mark, however, as there's a 10% chance that each service will result in unforeseen consequences.",
    "category": "services",
    "price": 1000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Temporal Reprieve",
      "Action Rewind"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Temporal Flux Delivery System",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Reprieve",
        "rules": "As an action, you can negate the last instance of damage dealt to you. This effect is instantaneous and cannot be used more than once per long rest."
      },
      {
        "title": "Action Rewind",
        "rules": "As a reaction, you can rewind one failed attack or skill use. The failed attempt is treated as a critical success instead. This effect has no save DC and does not recharge; it can be used only once per short rest."
      }
    ],
    "levelRequirementReason": "This service is accessible to players of all levels, though the complexity of the ritual makes it most effective for higher-level characters.",
    "vendorReason": "The Fate Forge specializes in chronomancer rituals and services that manipulate time itself, making them the perfect source for such a powerful yet risky service.",
    "shippingDetail": "The Temporal Flux Delivery System ensures swift and secure transport of the ritual components to the user.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "Instantaneous",
      "endsWhen": "Used up, rest period ends",
      "charges": "Unlimited per short/long rest"
    },
    "priceReason": "The service is priced at 1000 XP to reflect its powerful yet risky nature and the skill required of the chronomancers.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-25T02:41:58.982166+00:00",
    "aiReviewedAt": "2026-07-25T02:41:58.982166+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_rustingale_shards": {
    "id": "connectopia_item_rustingale_shards",
    "name": "The Rustingale's Echoing Shards",
    "description": "The Rustingale's Echoing Shards are jagged, rusted fragments that pulse with the forgotten energy of mining rigs long abandoned to block storms. Collecting them grants a brief glimpse into the pioneers' struggles as they toiled against relentless bedrock. These shards increase your mining speed by 15% for one minute and offer a +2 bonus on saving throws against block storm effects, ensuring you can survive the tempests that follow.",
    "category": "services",
    "price": 1000,
    "icon": "⛏️",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Increased Mining Speed",
      "Block Storm Resilience"
    ],
    "vendor": "block_smith",
    "shippedBy": "Automated Delivery Drone",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Increased Mining Speed",
        "rules": "When activated by an action, your mining speed increases by 15% for one minute. This effect ends if you are hit by a block storm or if you use another action that requires both hands."
      },
      {
        "title": "Block Storm Resilience",
        "rules": "While holding these shards, gain a +2 bonus to saving throws against block storms. This effect persists until the start of your next turn after a successful save against such an event or when you are no longer in a stormy area."
      }
    ],
    "levelRequirementReason": "Only those with experience navigating treacherous mining sites can handle these shards effectively.",
    "vendorReason": "The block smith is an expert in all things related to mining and block storms, making them the ideal vendor for such items.",
    "shippingDetail": "Ships via Automated Delivery Drone within 48 hours of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "One minute",
      "endsWhen": "Hit by a block storm or using another action requiring both hands, or the start of your next turn after a successful save against a block storm effect.",
      "charges": "Unlimited"
    },
    "priceReason": "The shards' rarity and unique effects justify their high price.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T02:42:26.411805+00:00",
    "aiReviewedAt": "2026-07-25T02:42:26.411805+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_ghoststone_guardian": {
    "id": "connectopia_item_ghoststone_guardian",
    "name": "The Ghoststone Guardian's Lament",
    "description": "The Ghoststone Guardian's Lament is a dense, grey block imbued with the sorrowful echoes of long-dead miners. Crafted from the very essence of their final moments, it radiates an unsettling chill that can only be held by those who have felt the earth's deepest tremors. This relic allows for brief communication with spectral miners trapped within the underground tunnels, offering both warnings and wisdom – but beware, as their mournful words may carry a price in lost souls or hidden dangers.",
    "category": "equipment",
    "price": 1000,
    "icon": "👻",
    "stock": 18,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Echoes of the Deep",
      "Spectral Guidance"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Pigeon Carrier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Echoes of the Deep",
        "rules": "Activates on command, allowing for brief communication with spectral miners. The effect lasts until the end of your next turn or until you take a major action. You gain advantage on saving throws against fear effects and can make an Intelligence (History) check to interpret ghostly messages."
      },
      {
        "title": "Spectral Guidance",
        "rules": "Increases movement speed by 10 feet in dark areas for the duration of one short rest or until you are incapacitated. You may not use this ability if your Wisdom score is 12 or lower."
      }
    ],
    "levelRequirementReason": "Even the most novice miners must respect the spirits that guard these ancient tunnels.",
    "vendorReason": "The Ghoststone Guardian's Lament is a relic of the past, and Pioneer Post ensures it reaches those who can honor its memory.",
    "shippingDetail": "Ships via pigeon carrier; delivery may take several days depending on terrain.",
    "usage": {
      "activation": "Command word to activate communication with spectral miners.",
      "duration": "Until the end of your next turn or until you take a major action.",
      "endsWhen": "Effect ends when you use it again or are incapacitated.",
      "charges": "Unlimited, as long as you do not take a major action."
    },
    "priceReason": "The Ghoststone Guardian's Lament is priced to reflect its historical significance and the danger of its spectral communications.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:42:36.333063+00:00",
    "aiReviewedAt": "2026-07-25T02:42:36.333063+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_chronocrystal_remnant": {
    "id": "connectopia_item_chronocrystal_remnant",
    "name": "The Chronocrystal Remnant of Silas Blackwood",
    "description": "A disturbingly smooth fragment of temporal distortion, recovered from a haunted mine shaft. This forbidden artifact allows for fleeting glimpses into alternate timelines – but prolonged exposure risks unraveling your own existence.",
    "category": "forbidden",
    "price": 8000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "allows for brief manipulation of time (slows down enemy attacks or speeds up resource gathering)",
      "chance to create a temporary portal to another timeline",
      "significant risk of temporal paradoxes and negative consequences",
      "increases chance of finding lost technology"
    ],
    "vendor": "craft_corner",
    "shippedBy": "Black Market Courier (Requires Level 45)",
    "levelRequirement": 48
  },
  "middle_earth_item_sunstone_touched_pipes": {
    "id": "middle_earth_item_sunstone_touched_pipes",
    "name": "Sunstone-Touched Pipes of Lothlórien",
    "description": "The Sunstone-Touched Pipes of Lothlórien are a masterpiece of elven craftsmanship, inlaid with shards of captured sunlight that shimmer as the pipes are played. The resonant tones evoke vivid visions of ancient Lothlórien's enchanted glades and whispering waters. These pipes subtly enhance focus and clarity, granting a +5 increase to Intelligence (Insight) checks for 10 minutes, while also inspiring allies within 30 feet with a +2 bonus to Charisma (Persuasion).",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Enhanced Focus",
      "Inspire Allies"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_horse",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Enhanced Focus",
        "rules": "When activated as an action, the player gains a +5 bonus on Intelligence (Insight) checks for 10 minutes. The effect ends if the player takes any damage or if they voluntarily end it early."
      },
      {
        "title": "Inspire Allies",
        "rules": "As a bonus action, the player can inspire nearby allies within 30 feet with a +2 bonus to Charisma (Persuasion) checks for 1 minute. This effect ends when the player or an ally takes damage."
      }
    ],
    "levelRequirementReason": "Requires proficiency in Performance to use effectively.",
    "vendorReason": "The Elven Market frequently features rare instruments crafted by the loremasters of Lothlórien.",
    "shippingDetail": "Ships swiftly on a winged horse, ensuring timely delivery to discerning collectors and musicians.",
    "usage": {
      "activation": "Activates as an action or bonus action.",
      "duration": "10 minutes for Enhanced Focus; 1 minute for Inspire Allies.",
      "endsWhen": "Effect ends if the player takes damage or voluntarily discontinues it.",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "The craftsmanship and rare materials used in these pipes justify their high but balanced price.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:42:43.699428+00:00",
    "aiReviewedAt": "2026-07-25T02:42:43.699428+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_orcish_kaleidoscopic_shard": {
    "id": "middle_earth_item_orcish_kaleidoscopic_shard",
    "name": "The Orcish Kaleidoscopic Shard of Morannon",
    "description": "The Orcish Kaleidoscopic Shard of Morannon, a jagged fragment pulsating with twilight energy and exhibiting an unsettling kaleidoscopic refraction, was forged in the shadow of Mordor by orc artisans who sought to harness the dark powers of their homeland. When wielded at night, it warps reality, briefly disrupting enemy movements and granting a distorted perception that can confuse foes. Its fractured edges hum with power, offering a fleeting boost to one's own speed and a chance to muddle attackers temporarily.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌀",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "briefly disorient enemy",
      "chance for confusion"
    ],
    "vendor": "shire_shop",
    "shippedBy": "giant_rat",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Disorienting Aura",
        "rules": "When activated by the wielder, this shard emits an aura that briefly disrupts the movement of enemies within a 10-foot radius. This effect lasts for 3 seconds and has a 25% chance to confuse targets, causing them to move in random directions until their next action."
      },
      {
        "title": "Swift Distortion",
        "rules": "The wielder gains a +10 foot speed bonus while the shard is active. This effect lasts for 3 seconds and can be triggered once every long rest."
      }
    ],
    "levelRequirementReason": "Requires expert-level mastery to wield this artifact safely, given its volatile nature.",
    "vendorReason": "The Shire Shop stocks rare artifacts that bridge the gap between the mundane and the extraordinary, making it a suitable vendor for such an item.",
    "shippingDetail": "Delivered by giant rats, who navigate through underground tunnels with ease. Delays may occur due to their unpredictable schedules.",
    "usage": {
      "activation": "Action",
      "duration": "3 seconds per activation",
      "endsWhen": "Ends when the duration expires or if the wielder drops the shard",
      "charges": "Unlimited, but can only be used once every long rest"
    },
    "priceReason": "The item's rarity and unique properties justify its high price in XP.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T02:43:00.022179+00:00",
    "aiReviewedAt": "2026-07-25T02:43:00.022179+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_mk.42_heartwood_speaker": {
    "id": "middle_earth_item_mk.42_heartwood_speaker",
    "name": "Mk.42 Heartwood Speaker of Fangorn Forest",
    "description": "The Mk.42 Heartwood Speaker of Fangorn Forest is a meticulously crafted pipe, its heartwood hewn from an ancient, sentient tree deep within the forest's embrace. Crafted by the dwarves of Erebor and resonating with the primal energy of nature, this speaker emits soothing sonic waves that not only restore health but also bolster resilience against fear. Its touch can be felt in the very air as it strengthens nearby allies and protects them from the shadows of dread.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌳",
    "stock": 9,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Sonic Soothing",
      "Nature's Resilience"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "giant_spider",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sonic Soothing",
        "rules": "Activates on command, this effect restores 25 hit points per minute to all creatures within a 30-foot radius who are not hostile. The effect lasts until the next dawn or until dispelled by a successful DC 14 Con saving throw."
      },
      {
        "title": "Nature's Resilience",
        "rules": "Passive effect that grants nearby allies advantage on saving throws against fear effects and boosts their AC by 5 as long as they are within 30 feet of the speaker. This enhancement lasts until the next dawn or until dispelled."
      }
    ],
    "levelRequirementReason": "Suitable for adventurers at all levels, but particularly useful in environments where fear and health restoration are paramount.",
    "vendorReason": "The dwarves of Erebor have long maintained a relationship with the ancient trees of Fangorn Forest, crafting items imbued with their wisdom and power.",
    "shippingDetail": "Delivered by the swift legs of a giant spider, ensuring timely arrival even in the most treacherous terrain.",
    "usage": {
      "activation": "Command word or short action to activate the effect within its range.",
      "duration": "Until dawn or dispelled as above.",
      "endsWhen": "At dawn or upon successful saving throw against a fear effect.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced price reflects the item's legendary rarity and craftsmanship, offering significant utility in any campaign setting.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T02:43:11.421933+00:00",
    "aiReviewedAt": "2026-07-25T02:43:11.421933+00:00",
    "aiReviewVersion": 1
  },
  "equestrian_item_jade_weaver_elements": {
    "id": "equestrian_item_jade_weaver_elements",
    "name": "Jade Weaver's Echoing Elements",
    "description": "Jade Weaver's Echoing Elements are shimmering, jade-colored orbs that pulse with the residual magic of countless friendships. These relics, imbued by the ancient hands of a legendary weaver, can briefly manifest supportive elemental energies. When activated, they bolster allies' abilities or disrupt foes through chaotic energy, all while restoring health and magic over time. The Weaver's touch ensures these elements are deeply tied to the bonds of friendship.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 7,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Supportive Elemental Burst",
      "Chaotic Energy Disruption"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Royal Pegasus Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Supportive Elemental Burst",
        "rules": "Activates as a bonus action, this effect grants an adjacent friendly creature a +1d6 temporary ability boost and restores 50 hit points over 30 seconds. The effect ends if the orb is damaged or destroyed."
      },
      {
        "title": "Chaotic Energy Disruption",
        "rules": "Activates as a bonus action, this effect causes minor elemental instability in nearby enemies for 1 minute, dealing 2d6 lightning damage at the start of each of their turns. The effect ends if the orb is damaged or destroyed."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to handle and channel its potent elemental energies.",
    "vendorReason": "Known for their extensive connections with ancient magic and relics, Canterlot Commerce can provide these powerful yet delicate elements.",
    "shippingDetail": "Ships via the fastest and most reliable couriers, ensuring arrival within a week of purchase.",
    "usage": {
      "activation": "Bonus action",
      "duration": "30 seconds or until destroyed",
      "endsWhen": "Damaged or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for its rarity and the unique combination of restorative and combat abilities it provides.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T02:43:31.829485+00:00",
    "aiReviewedAt": "2026-07-25T02:43:31.829485+00:00",
    "aiReviewVersion": 1
  },
  "equestrian_item_the_generous_elements_of_harmony": {
    "id": "equestrian_item_the_generous_elements_of_harmony",
    "name": "The Generous Elements of Harmony’s Bloom",
    "description": "The Generous Elements of Harmony’s Bloom is a shimmering, crystalline blossom that captures the essence of perfect unity and cooperation. Held aloft, it emits a soft, soothing glow, fostering an atmosphere of peace where animosity naturally fades. This delicate bloom bestows temporary resistance to fear and intimidation effects upon those within its gentle light, while also enhancing the healing power of friendly ponies' magic by 1d4 additional hit points for one hour.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌸",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Enhances Healing Spells",
      "Resists Fear and Intimidation"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Swift Delivery Pony",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Spell Enhancement",
        "rules": "When a healing spell is cast by a friendly pony within a 10-foot radius, the spell's effectiveness increases by +1d4 additional hit points for one hour. This effect does not stack with other sources of healing."
      },
      {
        "title": "Resistance to Fear and Intimidation",
        "rules": "All creatures within a 20-foot radius gain temporary resistance to fear and intimidation effects equal to your proficiency bonus +2 while the bloom is in use. This protection lasts for one hour, after which it fades."
      }
    ],
    "levelRequirementReason": "This trinket requires no specific level as it is a simple yet powerful tool of peace and cooperation.",
    "vendorReason": "The Market in Ponyville is renowned for its extensive array of magical items, including this delicate bloom that brings harmony to the community.",
    "shippingDetail": "Delivered swiftly by Swift Delivery Pony with a guaranteed delivery within one hour from market opening.",
    "usage": {
      "activation": "Object Interaction",
      "duration": "One hour per use",
      "endsWhen": "The bloom fades after an hour or if it is destroyed, at which point all effects end immediately.",
      "charges": "Unlimited"
    },
    "priceReason": "This item's balanced price reflects its rarity and the significant benefits it provides without being overpowered.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T02:43:37.491183+00:00",
    "aiReviewedAt": "2026-07-25T02:43:37.491183+00:00",
    "aiReviewVersion": 1
  },
  "equestrian_item_elemental_resonance_ritual_weave": {
    "id": "equestrian_item_elemental_resonance_ritual_weave",
    "name": "Elementarian’s Resonance Ritual Weave",
    "description": "Elementarian’s Resonance Ritual Weave is an intricately woven tapestry, spun from threads of lightning and wind, imbued with the raw power of the elements. This artifact amplifies one's connection to Fire, Water, Earth, and Air, allowing a wielder to channel elemental might into their strikes. When draped across the battlefield or worn as armor, it not only enhances damage but also grants resistance to corresponding elemental attacks, making the wearer an unstoppable force in elemental combat.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔥💧🌍💨",
    "stock": 19,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Elemental Amplification",
      "Elemental Resistance"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Crystal Delivery Cart",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Elemental Amplification",
        "rules": "Activate as a bonus action. The wielder's next attack deals an additional +1d6 damage per element they are attuned to (up to four). This effect lasts for one minute and can be reactivated after 1 hour of rest."
      },
      {
        "title": "Elemental Resistance",
        "rules": "The Resonance Ritual Weave grants the wearer resistance to elemental damage types corresponding to their attunement. For example, if they are attuned to Fire, Water, Earth, and Air, they gain resistance to fire, water, earth, and air damage."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 15 to properly harness the elemental forces woven into the tapestry.",
    "vendorReason": "Crystal Empire specializes in rare and powerful artifacts, making Elementarian’s Resonance Ritual Weave an appropriate addition to their inventory.",
    "shippingDetail": "Ships via the Crystal Delivery Cart within one week of purchase.",
    "usage": {
      "activation": "Bonus action",
      "duration": "One minute, recharges after 1 hour of rest",
      "endsWhen": "The duration ends when its effects are no longer needed or interrupted by an attack",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 2500 XP, this price reflects the tapestry's powerful but not overpowered abilities.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-25T02:43:47.864092+00:00",
    "aiReviewedAt": "2026-07-25T02:43:47.864092+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_dread_dancer_tms_aethelred": {
    "id": "pokemon_item_dread_dancer_tms_aethelred",
    "name": "Dread Dancer's Tms Aethelred",
    "description": "This shimmering, obsidian-infused TM pulses with a chilling energy. Upon use, your Pokémon will perform a whirlwind attack infused with spectral dread, confusing and weakening its target with unsettling grace.",
    "category": "consumables",
    "price": 12000,
    "icon": "👻",
    "stock": 8,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Confusion (50%)",
      "Weakness Boost (30%)",
      "Shadow Step (10%)"
    ],
    "vendor": "pokemart",
    "shippedBy": "Magikarp Delivery Drone",
    "levelRequirement": 40
  },
  "pokemon_item_trained_tm_resonance_forge": {
    "id": "pokemon_item_trained_tm_resonance_forge",
    "name": "The Trained Tms of Battles Resonance Forge",
    "description": "The Trained TMs of Battles Resonance Forge are crafted from the very essence of victorious battles, forged in the heart of a legendary forge. These ancient tools resonate with the echoes of countless combats, amplifying your Pokémon's attacks with focused intent. Upon activation, the target feels a cascade of resonating energy, increasing damage by 20% and boosting critical hit chance by an additional 15%. The forge's power ensures that every strike carries the weight of a thousand battles.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚔️",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Damage Boost (20%)",
      "Critical Hit Chance +15%"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Pidgeot Courier",
    "levelRequirement": 30,
    "effectDetails": [
      {
        "title": "Damage Amplification",
        "rules": "Upon activation, the target takes an additional 20% damage from your Pokémon's attacks. This effect lasts until the end of your next turn."
      },
      {
        "title": "Critical Hit Boost",
        "rules": "Increases the critical hit chance by 15%, stacking with any other bonuses to critical hits. This boost remains active for a full minute after activation."
      }
    ],
    "levelRequirementReason": "The Trained TMs of Battles Resonance Forge require a Pokémon trainer of at least level 30 due to the advanced nature of the forge and the power it commands.",
    "vendorReason": "The Safari Shop, known for its rare and powerful items, is trusted by trainers looking for legendary tools like these.",
    "shippingDetail": "Shipped via Pidgeot Courier, ensuring safe delivery within a day.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; the target takes increased damage and critical hit chance boost until the end of your next turn.",
      "endsWhen": "The effect ends when the target's turn begins or if the target is no longer within range.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Trained TMs are priced at 1000 XP due to their rare crafting materials and the advanced technology required for their creation.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T02:44:06.019444+00:00",
    "aiReviewedAt": "2026-07-25T02:44:06.019444+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_mk_38_trained_tms_stormcaller": {
    "id": "pokemon_item_mk_38_trained_tms_stormcaller",
    "name": "Mk.38 Trained Tms Stormcaller",
    "description": "The Mk.38 Trained TMS Stormcaller is a gleaming metallic device, its surface etched with intricate lightning patterns that shimmer with stored storm energy. This TM channels the raw power of a tempest, allowing you to unleash a searing bolt of lightning that arcs from your Pokémon's outstretched paw. The air crackles and the ground trembles as the storm's fury is unleashed upon your foe, leaving them drenched in an electric shockwave.",
    "category": "consumables",
    "price": 1000,
    "icon": "⚡",
    "stock": 55,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Electric Type Attack Boost",
      "Storm-Infused Bolt"
    ],
    "vendor": "league_store",
    "shippedBy": "Snorlax Delivery Service",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Electric Type Attack Boost",
        "rules": "When used, this TM grants a +18% increase to the Electric-type attack power of your Pokémon. This boost lasts until the end of the next combat round."
      },
      {
        "title": "Storm-Infused Bolt",
        "rules": "Activating this TM allows you to target an enemy with a bolt of lightning that deals 12d6 points of damage and imposes a -5 penalty on Dexterity saving throws for one minute. The effect ends if the target is hit by another attack or spell."
      }
    ],
    "levelRequirementReason": "This TM requires a Pokémon Trainer at least level 20 to ensure they can properly control and channel its volatile storm energy.",
    "vendorReason": "The league store stocks this rare training material for the most elite trainers, ensuring only those of proven skill have access to such power.",
    "shippingDetail": "Due to its volatile nature, the Mk.38 Trained TMS Stormcaller is shipped with special cooling packs and delivered within a day by Snorlax Delivery Service.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; duration of one combat round for Electric Type Attack Boost",
      "endsWhen": "The next attack or spell that targets the bolt's area ends it, or when the target successfully saves against its Dexterity saving throw.",
      "charges": "Unlimited"
    },
    "priceReason": "This TM is priced at 1000 XP due to its rarity and the specialized training required to use it effectively.",
    "priceOriginal": 5750,
    "priceReviewedAt": "2026-07-25T02:44:13.034841+00:00",
    "aiReviewedAt": "2026-07-25T02:44:13.034841+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_skullsplitter-of-broken-regiments": {
    "id": "warhammer_item_skullsplitter-of-broken-regiments",
    "name": "Skullsplitter of Broken Regiments",
    "description": "The Skullsplitter of Broken Regiments is a warhammer whose head is forged from the calcified skull of a legionary who fell in battle. Each strike releases an echo of the regiment's final command, instilling terror and dread into foes. The hammer's weight is both a testament to its crafting and a burden that enhances the wielder’s resolve. Enemies struck feel the weight of countless broken commands, causing them to falter and fear.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔨",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Fear Aura",
      "Resilient Strike"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "Ground Courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Fear Aura",
        "rules": "The Skullsplitter releases a wave of dread when used as an action within 10 feet, affecting all enemies in the area. These creatures must make a DC 15 Wisdom saving throw or become frightened for 1 minute. The effect ends if a creature moves out of the aura's range."
      },
      {
        "title": "Resilient Strike",
        "rules": "When you hit an enemy with this weapon, there is a 20% chance that it becomes stunned until the start of your next turn. This effect can occur once per minute and does not stack."
      }
    ],
    "levelRequirementReason": "The hammer's weight and the psychological toll on enemies require at least Expert level (15) to wield effectively.",
    "vendorReason": "As an official supplier of military equipment, the Imperial Armory is known for its rare and powerful weapons like the Skullsplitter.",
    "shippingDetail": "Ships within a week, delivered via trusted Ground Couriers.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends if you move out of the aura's range or if the stunned creature moves.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its unique combination of psychological and physical effects.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T02:44:03.749752+00:00",
    "aiReviewedAt": "2026-07-25T02:44:03.749752+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_jeweled-forger-of-fate's-whispers": {
    "id": "warhammer_item_jeweled-forger-of-fate's-whispers",
    "name": "Jeweled Forger of Fate’s Whispers",
    "description": "The Jeweled Forger of Fate’s Whispers is a formidable warhammer, its surface etched with ancient runes and encrusted with shimmering gemstones that seem to pulse with otherworldly energy. The weapon's weight is almost overwhelming, yet it feels perfectly balanced in your hand, as if the whispers within are urging you to claim power over your foes. Holding it releases a low hum that amplifies aggression, making enemies around you falter under its malevolent influence.",
    "category": "equipment",
    "price": 1000,
    "icon": "💎",
    "stock": 17,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Fate-Weaving Strikes",
      "Aggression Amplifier"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Winged Courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Fate-Weaving Strikes",
        "rules": "When you hit a creature with this weapon on your turn, there is a 20% chance that the target becomes confused for 1 round. The DC to resist this effect is equal to 8 + your proficiency bonus + your Strength modifier."
      },
      {
        "title": "Aggression Amplifier",
        "rules": "While wielding this weapon, you gain advantage on attack rolls against creatures with fewer hit points than you do. This effect lasts until the end of your next turn."
      }
    ],
    "levelRequirementReason": "The complexity and power within the hammer demand significant experience to wield it without succumbing to its malevolent influence.",
    "vendorReason": "The chaos dealer, known for their exotic and dangerous wares, acquired this weapon from a forgotten forge where the spirits of lost souls still linger.",
    "shippingDetail": "Ships via the Winged Courier, ensuring safe delivery in three days or less.",
    "usage": {
      "activation": "Attack action",
      "duration": "Instantaneous effect; lasts until end of next turn for Aggression Amplifier",
      "endsWhen": "The weapon is no longer wielded by you during your turn",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price, the hammer's effects are powerful but not overwhelming for a rare item.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T02:44:34.912003+00:00",
    "aiReviewedAt": "2026-07-25T02:44:34.912003+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_mk-89-grim-echo-forger": {
    "id": "warhammer_item_mk-89-grim-echo-forger",
    "name": "Mk.89 Grim Echo Forger",
    "description": "The Mk.89 Grim Echo Forger is a legendary warhammer forged from the molten remains of desecrated battlefields. Its surface glows with residual energy from countless battles, inspiring terror in foes and empowering those who wield it to channel their inner fury into devastating strikes. When brought near an enemy on its last breaths, the hammer's pulse quickens, granting the forger increased speed and a higher chance of paralyzing the dying foe.",
    "category": "forbidden",
    "price": 1000,
    "icon": "💀",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "Massive Damage Output",
      "Paralyze Dying Enemies"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Shadow Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Massive Damage Output",
        "rules": "When you attack with this weapon, there is a +1d6 bonus to damage rolls. Additionally, it has advantage on attack rolls against creatures reduced to half their hit points."
      },
      {
        "title": "Paralyze Dying Enemies",
        "rules": "Once per long rest, when you deal damage to an enemy with this weapon while they have 5 or fewer hit points remaining, there is a 2d6 chance (1 in 3) that the target becomes paralyzed for 1 minute. The save DC is 18."
      }
    ],
    "levelRequirementReason": "This weapon requires minimal training to use effectively due to its powerful and intuitive design.",
    "vendorReason": "Fate Forge has a deep connection with the forger of this legendary weapon, making it their exclusive vendor.",
    "shippingDetail": "Delivered by Shadow Delivery, the hammer arrives in a custom, enchanted case to protect its formidable energy.",
    "usage": {
      "activation": "Normal attack action",
      "duration": "Instantaneous",
      "endsWhen": "Destroyed upon critical hit against an enemy with less than half their hit points",
      "charges": "Unlimited"
    },
    "priceReason": "The weapon's legendary status and unique abilities justify its moderate price.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T02:44:38.663799+00:00",
    "aiReviewedAt": "2026-07-25T02:44:38.663799+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_chronal_frost_weaver": {
    "id": "earth_land_item_chronal_frost_weaver",
    "name": "The Chronal Frost Weaver's Shard",
    "description": "The Chronal Frost Weaver's Shard is a jagged, ice-blue crystal pulsating with an otherworldly temporal energy. Holding it allows a caster to glimpse potential futures, but prolonged use risks fracturing one’s own timeline and drawing the attention of the Ice Wall’s guardians. This shard can momentarily slow time for the user, creating a brief pocket of stillness in which foes are briefly frozen in place by a touch.",
    "category": "equipment",
    "price": 1000,
    "icon": "❄️",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Slow",
      "Frozen Touch"
    ],
    "vendor": "magic_shop",
    "shippedBy": "ice_runner",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Temporal Slow",
        "rules": "As an action, the wielder can activate this shard to temporarily slow time for themselves. The duration is up to one minute. This effect ends when the user recharges their action or if they take any damage. No save DC is required."
      },
      {
        "title": "Frozen Touch",
        "rules": "On a successful melee attack, the wielder can touch an enemy as part of this shard’s activation. The target must make a Dexterity saving throw (DC 14) or be briefly frozen in place for 1 round. This effect has no limit on uses per day."
      }
    ],
    "levelRequirementReason": "This shard requires sufficient spellcasting skill and experience to wield its temporal powers safely.",
    "vendorReason": "The magic shop stocks rare magical artifacts from the Frost Weaver, including this chronal shard.",
    "shippingDetail": "Shipped by the Ice Runner courier, known for delivering fragile, time-sensitive items safely to their destination.",
    "usage": {
      "activation": "As an action or reaction (to slow time) and as part of a successful melee attack (to freeze touch).",
      "duration": "Temporal Slow lasts up to one minute. Frozen Touch lasts for 1 round.",
      "endsWhen": "The effect ends when the user recharges their action, takes damage, or the duration expires.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "This shard's rarity and unique effects justify its high price in experience points.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T02:45:43.523267+00:00",
    "aiReviewedAt": "2026-07-25T02:45:43.523267+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_dragonheart_reaver": {
    "id": "earth_land_item_dragonheart_reaver",
    "name": "The Dragonheart Reaver’s Obsidian Spike",
    "description": "A wickedly sharp obsidian spike, meticulously crafted from the heartstone of a juvenile Crimson Dragon. It radiates intense heat and possesses a primal connection to draconic fury; channeling this energy can temporarily bolster your attacks.",
    "category": "consumables",
    "price": 1200,
    "icon": "🔥",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Deals bonus fire damage.",
      "Chance to ignite enemies upon impact.",
      "Increases attack speed for a short duration."
    ],
    "vendor": "earth_emporium",
    "shippedBy": "stone_carrier",
    "levelRequirement": 30
  },
  "earth_land_item_wizard_rune_sequencer": {
    "id": "earth_land_item_wizard_rune_sequencer",
    "name": "Mk.27 Wizard Rune Sequencer",
    "description": "The Mk.27 Wizard Rune Sequencer is a complex, jeweled device composed of interlocking wizard runes and gears, a remnant from the lost school of Chronomancy. Its central dial allows for the rapid cycling through magical effects, each rune humming with untold power. Properly calibrated by those who understand its ancient chronal mechanics, it can be wielded to cast basic spells at an unprecedented speed, while also increasing mana regeneration rate and providing a chance to deflect enemy attacks with magical energy.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Rapid Spell Casting",
      "Enhanced Mana Regeneration"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 45,
    "effectDetails": [
      {
        "title": "Rapid Spell Casting",
        "rules": "As an action, you can cast one basic spell from the sequence. The spell is cast with a +2 bonus to the spell save DC and targets a creature within 60 feet. This effect ends after three uses per long rest."
      },
      {
        "title": "Enhanced Mana Regeneration",
        "rules": "You gain advantage on Dexterity (Stealth) checks for 1 hour, and your mana regeneration rate is doubled during this time. This effect ends when you finish a short or long rest."
      }
    ],
    "levelRequirementReason": "Requires a high level of magical prowess to properly calibrate and wield the device.",
    "vendorReason": "The Guild Quartermaster has exclusive access to rare chronomantic artifacts, including this ancient device.",
    "shippingDetail": "Delivered by trusted messenger hawk with a 1-day delivery time.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous spell casting; 1 hour for mana regeneration",
      "endsWhen": "After three uses per long rest or when you finish a short or long rest, respectively.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP as it provides significant utility without being overpowered.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T02:45:09.435912+00:00",
    "aiReviewedAt": "2026-07-25T02:45:09.435912+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_chronometric_resonance_finder": {
    "id": "doughnut_hole_item_chronometric_resonance_finder",
    "name": "The Chronometric Resonance Finder - Obsidian Bloom",
    "description": "The Chronometric Resonance Finder - Obsidian Bloom is a pulsating, obsidian-colored tear harvested from the heart of a temporal fissure. This artifact grants fleeting glimpses into fractured timelines and allows for brief manipulations of localized time flow. Its use can warp reality itself, increasing reaction speed by 20% for sixty seconds and creating a five-meter radius where time slows to a crawl. However, prolonged exposure risks unraveling one's own existence, with the chance of brief disorientation and temporal instability.",
    "category": "equipment",
    "price": 7800,
    "icon": "⏳",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Surge",
      "Time Distortion"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Dimensional Rift Courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Temporal Surge",
        "rules": "Activates as a bonus action within a five-meter radius. The area slows time for 1 minute, reducing the movement rate of creatures within by half and granting advantage on Dexterity (Stealth) checks until the end of your next turn."
      },
      {
        "title": "Time Distortion",
        "rules": "Allows you to rewind time in a five-meter radius up to three seconds. This effect can only be used once per long rest, reducing all damage taken by one die type for 60 seconds after use."
      }
    ],
    "levelRequirementReason": "The complexity of controlling such an artifact demands considerable magical prowess.",
    "vendorReason": "The void vendor trades in relics and artifacts from other dimensions, including this temporally unstable device.",
    "shippingDetail": "Ships within three days via a courier that navigates the fabric of reality.",
    "usage": {
      "activation": "Bonus action for Temporal Surge; Reaction to use Time Distortion.",
      "duration": "Temporal Surge lasts 1 minute, Time Distortion effect ends after 60 seconds or upon damage taken.",
      "endsWhen": "Effect duration expires naturally or when you take damage in the case of Time Distortion.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Chronometric Resonance Finder is a rare and powerful artifact, balancing its cost with the risk of temporal instability it poses.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-25T02:46:03.877934+00:00",
    "aiReviewedAt": "2026-07-25T02:46:03.877934+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_xenic_tear_of_the_silent_center": {
    "id": "doughnut_hole_item_xenic_tear_of_the_silent_center",
    "name": "Xenic Tear of the Silent Center - Cartographer’s Lament",
    "description": "The Xenic Tear of the Silent Center, a viscous silver tear, holds within it a miniature representation of the Void’s labyrinthine geometry. This arcane artifact reveals pathways through impossible spaces and grants faint directional cues towards its enigmatic center; however, the silence it emits can drive the unwary to madness, causing them to falter in their steps or misinterpret their surroundings entirely. Known for its unpredictable nature, this item is a cartographer’s dream and a madman’s worst nightmare.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🗺️",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Reveals hidden pathways",
      "Reduces enemy accuracy"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Void Drone Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Pathways",
        "rules": "When activated as an action, the tear reveals hidden pathways on any map within 30 feet. This effect lasts for 1 minute and can be used once per long rest."
      },
      {
        "title": "Reduce Enemy Accuracy",
        "rules": "For every hour this item is active, it reduces enemy accuracy by 5%. The reduction stacks with other similar effects but does not exceed a -30% penalty to enemy attacks or ranged weapon checks. This effect lasts until the tear’s duration ends."
      }
    ],
    "levelRequirementReason": "This item is intended for beginners who need assistance in navigating complex environments.",
    "vendorReason": "Hole Hawker, known for their unique and often controversial items, offers the Xenic Tear as a testament to its mysterious origins and potential dangers.",
    "shippingDetail": "Ships via the Void Drone Delivery service within 24 hours, with a guaranteed delivery time of 3 days.",
    "usage": {
      "activation": "Activate as an action.",
      "duration": "1 minute per use, once per long rest.",
      "endsWhen": "The duration ends when its uses are exhausted or the item is destroyed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The balanced XP price reflects the item’s utility in exploration and combat, without being overly powerful for a novice character.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T02:45:38.138087+00:00",
    "aiReviewedAt": "2026-07-25T02:45:38.138087+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_paradoxical_tear_of_inverted_decay": {
    "id": "doughnut_hole_item_paradoxical_tear_of_inverted_decay",
    "name": "Paradoxical Tear of Inverted Decay - The Weaver’s Echo",
    "description": "The Paradoxical Tear of Inverted Decay, a gemstone as fragile and resilient as time itself, glows with an unsettling purple hue that shifts between preservation and decay. When wielded, it subtly repairs armor and weapons while accelerating the decay of enemy flesh and bone. The tear is said to have been crafted by ancient weavers who danced with paradoxes in their hands, and its use leaves a faint, ominous discoloration on the skin as a reminder of its power.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧪",
    "stock": 8,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Armor Repair",
      "Enemy Decay"
    ],
    "vendor": "center_seller",
    "shippedBy": "Void Packet Delivery System",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Armor Repair",
        "rules": "When activated by the user, this effect instantly repairs up to 1d6 points of damage to an item of armor or a weapon. The duration is instantaneous and requires no action."
      },
      {
        "title": "Enemy Decay",
        "rules": "This effect applies a decay condition to all enemies within 5 feet for 1 minute, reducing their hit point maximum by 2d8 until the end of their next turn or when they take damage. The user must succeed on a DC 14 Constitution saving throw or become unstable and suffer minor skin discoloration."
      }
    ],
    "levelRequirementReason": "The tear is powerful, but its effects are not so extreme that it requires a minimum level for use.",
    "vendorReason": "Center Seller has a reputation for dealing in ancient and arcane artifacts, making them the perfect vendor for this paradoxical gemstone.",
    "shippingDetail": "The tear is delivered via a specialized Void Packet that ensures its integrity during transit.",
    "usage": {
      "activation": "A bonus action to activate and repair an item or apply the decay effect.",
      "duration": "Instantaneous for Armor Repair; 1 minute for Enemy Decay, ending when the condition ends or the user takes damage.",
      "endsWhen": "The duration of each effect ends as stated. The user must make a saving throw on their first turn to avoid instability.",
      "charges": "Unlimited charges per day"
    },
    "priceReason": "The tear's rarity, ancient craftsmanship, and the unpredictable nature of its effects justify this price.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T02:46:12.747269+00:00",
    "aiReviewedAt": "2026-07-25T02:46:12.747269+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_obsidian_singer_of_mordor": {
    "id": "middle_earth_item_obsidian_singer_of_mordor",
    "name": "The Obsidian Singer's Runes",
    "description": "The Obsidian Singer's Runes are a set of jagged, volcanic glass etched with forgotten orcish glyphs that hum ominously when touched. Crafted in the shadowy forges of Mordor, these runes emit a mournful song that briefly weakens the resolve of any nearby sentient being, leaving them vulnerable to attack. A chilling reminder of Mordor’s wasted ambition, their power is both ancient and deadly, capable of causing confusion among enemies and increasing resistance to dark magic.",
    "category": "equipment",
    "price": 1000,
    "icon": "💀",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Weakens enemy morale",
      "Increases resistance to dark magic"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "flying_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Weakened Resolve",
        "rules": "When activated as an action within 30 feet, the runes emit a mournful song that reduces the morale of all enemies in a 15-foot radius by 10%, causing them to be more susceptible to attacks. This effect lasts for 1 minute or until the next dawn."
      },
      {
        "title": "Dark Resistance",
        "rules": "The wearer gains advantage on saving throws against dark magic and has resistance to necrotic damage while wearing these runes, as their ancient power counters the malevolent forces of Mordor. This benefit lasts for 8 hours or until the next dawn."
      }
    ],
    "levelRequirementReason": "These runes are potent but not overly powerful, suitable for low-level adventurers looking to gain an edge in their battles.",
    "vendorReason": "The dwarves of the Iron Hills have long traded with the dark forces of Mordor, and these runes are a testament to that ancient alliance.",
    "shippingDetail": "Delivered by swift flying cart, ensuring the runes arrive in perfect condition.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until dawn",
      "endsWhen": "Effect ends at the start of your next turn after a dawn or when the wearer no longer holds them",
      "charges": "Unlimited"
    },
    "priceReason": "The runes are crafted from rare volcanic glass and etched with ancient orcish symbols, making their value significant in both material and arcane power.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:46:18.945066+00:00",
    "aiReviewedAt": "2026-07-25T02:46:18.945066+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_shire_woodcutter_rune_of_the_green": {
    "id": "middle_earth_item_shire_woodcutter_rune_of_the_green",
    "name": "Shire Woodcutter's Rune of the Green",
    "description": "The Shire Woodcutter's Rune of the Green is a delicate rune crafted from the heartwood of ancient Ents' trees. Its surface gleams with emerald carvings that whisper the secrets of verdant growth. Held aloft, it accelerates plant growth in an area large enough to shield a small party, making it ideal for quick fortifications or distracting foes. The rune's wood emits a faint hum when in contact with natural flora, slowly healing those who touch it while enhancing their connection to nature.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌿",
    "stock": 18,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "accelerated plant growth",
      "natural camouflage"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony_express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Accelerated Plant Growth",
        "rules": "When activated by a bonus action, the rune accelerates plant growth within a 10-foot radius for 1 minute. Any creature moving through the area must succeed on a DC 13 Dexterity saving throw or fall prone due to an overabundance of new foliage."
      },
      {
        "title": "Natural Camouflage",
        "rules": "The rune grants the wielder and any allies within its radius advantage on Stealth checks for 1 hour, as if they were naturally camouflaged by the surrounding flora. This effect ends early if the user or an ally moves more than 30 feet from their original position."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to wield effectively, as it demands a deep connection with nature.",
    "vendorReason": "The Shire Shop is known for its unique and magical items crafted by local artisans, including the rune of the woodcutter.",
    "shippingDetail": "Shipped via the Pony Express, ensuring swift delivery even in the most rural areas of Middle-earth.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute",
      "endsWhen": "The duration ends or the user moves more than 30 feet from the area.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rare craftsmanship and magical properties.",
    "priceOriginal": 650,
    "priceReviewedAt": "2026-07-25T02:46:12.999364+00:00",
    "aiReviewedAt": "2026-07-25T02:46:12.999364+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_elfwood_echo_ring_of_valinor": {
    "id": "middle_earth_item_elfwood_echo_ring_of_valinor",
    "name": "Elfwood Echo Ring of Valinor",
    "description": "The Elfwood Echo Ring of Valinor, a shimmering band crafted from polished ancient Elfwood and inlaid with a single, perfectly preserved tear-shaped crystal, resonates faintly with the timeless magic of Valinor. When worn, it allows its bearer to perceive echoes of past events within a radius of 30 feet, granting glimpses into moments long gone. The ring subtly increases one's perception and intuition, making hidden pathways or secret doors more likely to be discovered, especially in areas rich with ancient history.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "echoes of the past",
      "increased perception"
    ],
    "vendor": "elven_market",
    "shippedBy": "griffin_delivery",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Echoes of the Past",
        "rules": "As a bonus action, the wearer can activate the ring's magic to briefly perceive echoes of past events within a 30-foot radius for up to 1 minute. This effect reveals recent occurrences but not exact details. The user must make an Intelligence saving throw (DC 15) against illusion spells or effects; on a failed save, they are temporarily blinded by the visions."
      },
      {
        "title": "Increased Perception",
        "rules": "The ring provides advantage on perception checks made to detect hidden pathways or secret doors in areas rich with ancient history. This benefit lasts for 10 minutes after each use."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 12 to wield the ring's powerful magic and perceive echoes.",
    "vendorReason": "The elven market is known for its extensive inventory of rare and ancient artifacts, including this ring.",
    "shippingDetail": "Shipped by griffin courier; delivery can take up to a week depending on location.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute or until interrupted",
      "endsWhen": "The wearer's concentration is broken or the duration expires",
      "charges": "Recharges after a long rest"
    },
    "priceReason": "Balanced price considering its unique abilities and rarity.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T02:46:30.202291+00:00",
    "aiReviewedAt": "2026-07-25T02:46:30.202291+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_chronometric_drizzle_caller": {
    "id": "doughnut_hole_item_chronometric_drizzle_caller",
    "name": "Chronometric Drizzle Caller",
    "description": "The Chronometric Drizzle Caller is a glass orb of iridescent hues, its surface etched with ancient runes that seem to shimmer with fractured time. Crafted from the remnants of a collapsed temporal pocket near the Void's core, this artifact can briefly accelerate or decelerate moments within its vicinity, creating localized distortions in the flow of time. The user must handle it with extreme caution as even a minor misstep could ripple through history itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "temporarily accelerates movement",
      "slows enemy attack speed"
    ],
    "vendor": "void_vendor",
    "shippedBy": "dimensional rift courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Temporal Acceleration",
        "rules": "Activating the Chronometric Drizzle Caller causes a small area around the user to experience a 30-foot radius where time feels accelerated. All creatures within this zone move at triple their normal speed for 1 minute, but must make a DC 15 Dexterity saving throw or fall prone and be restrained until the effect ends."
      },
      {
        "title": "Temporal Deceleration",
        "rules": "The orb can also create a 20-foot radius where time slows. Within this area, all creatures' attack rolls have disadvantage for 1 minute. The effect lasts only if the user maintains concentration (as if concentrating on a spell), which they must do as a bonus action each turn."
      }
    ],
    "levelRequirementReason": "The intricate temporal mechanics of the Chronometric Drizzle Caller require significant magical proficiency.",
    "vendorReason": "Void Vendor has extensive knowledge and resources related to the arcane and temporal artifacts found near the Void's core.",
    "shippingDetail": "The artifact may arrive with a slight delay due to the instability of its source, but it is carefully handled by experts in dimensional transport.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until concentration is lost",
      "endsWhen": "Concentration is lost or the user ceases concentrating",
      "charges": "Unlimited"
    },
    "priceReason": "The artifact's rarity and the complexity of its temporal effects justify a high price in experience points.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T02:46:39.529416+00:00",
    "aiReviewedAt": "2026-07-25T02:46:39.529416+00:00",
    "aiReviewVersion": 1
  }
};
