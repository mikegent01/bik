// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_058 = {
  "night_shadow_cloak": {
    "id": "night_shadow_cloak",
    "name": "Cloak of Midnight Dealings",
    "description": "A cloak that Wario definitely didn't steal from a sleeping vampire. Grants advantage on stealth at night.",
    "category": "equipment",
    "price": 15000,
    "icon": "🧥",
    "stock": 1,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Advantage on Stealth checks at night",
      "Disadvantage on Stealth during bright light",
      "Smells faintly of garlic (Wario's precaution)"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 5,
    "warning": "Wario claims it's 'legally acquired'. Don't ask questions."
  },
  "night_black_market_map": {
    "id": "night_black_market_map",
    "name": "Black Market Contact List",
    "description": "A crumpled paper with locations of 'alternative shopping venues' across the kingdom.",
    "category": "curiosities",
    "price": 8000,
    "icon": "🗺️",
    "stock": 3,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Reveals 3 hidden vendor locations",
      "10% discount at underground merchants",
      "Self-destructs if read in daylight (the ink is sensitive)"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 3
  },
  "night_cursed_coin": {
    "id": "night_cursed_coin",
    "name": "Wario's 'Lucky' Coin",
    "description": "A gold coin that always lands on the side Wario wants. Definitely not cursed. Probably.",
    "category": "curiosities",
    "price": 25000,
    "icon": "🪙",
    "stock": 1,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Can force any coin flip to your preferred result",
      "Once per day, gain 1d100 gold from 'mysterious sources'",
      "Side effect: Occasionally whispers financial advice at 3 AM"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 8,
    "warning": "Previous owner disappeared. Unrelated, probably."
  },
  "night_stolen_goods_bundle": {
    "id": "night_stolen_goods_bundle",
    "name": "Mystery Crate (No Questions Asked)",
    "description": "A wooden crate with 'DEFINITELY NOT STOLEN' written on it in Wario's handwriting.",
    "category": "curiosities",
    "price": 5000,
    "icon": "📦",
    "stock": 5,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Contains 1d4 random items worth 2000-10000 XP each",
      "50% chance of containing something actually useful",
      "10% chance the original owner comes looking for it"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 1,
    "warning": "No refunds. No receipts. No witnesses."
  },
  "night_waluigi_number": {
    "id": "night_waluigi_number",
    "name": "Waluigi's Private Number",
    "description": "A crumpled napkin with a phone number. Wario insists this is worth every coin.",
    "category": "services",
    "price": 50000,
    "icon": "📱",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "Can call Waluigi once per week for 'assistance'",
      "Waluigi will help with ONE task (his interpretation)",
      "Results may vary from 'incredibly helpful' to 'complete chaos'"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 10,
    "warning": "Waluigi may or may not actually answer. No guarantees."
  },
  "night_smuggled_star_shard": {
    "id": "night_smuggled_star_shard",
    "name": "Smuggled Star Shard",
    "description": "A chipped fragment of a stolen Power Star, wrapped in greasy Wario-brand parchment.",
    "category": "equipment",
    "price": 18000,
    "icon": "🌟",
    "stock": 1,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Once per night: Before or after seeing a d20 roll, add +1d4 to that roll",
      "Must be recharged under an open night sky (1 short rest outside at night)",
      "If used three nights in a row, make WIS save DC 13 or suffer 1 level of exhaustion from 'cosmic hangover'"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 7,
    "warning": "If any Luma asks, you’ve never seen this thing."
  },
  "night_midnight_warp_flute": {
    "id": "night_midnight_warp_flute",
    "name": "Midnight Warp Flute",
    "description": "A battered flute that only plays one eerie note, tuned for back-alley getaways.",
    "category": "equipment",
    "price": 16000,
    "icon": "🎶",
    "stock": 1,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Once per night: As an action, teleport yourself and up to 3 willing adjacent allies to any shadowy spot you can see within 120 ft",
      "Cannot be used in direct sunlight (it just makes a sad squeak)",
      "Each use has a 10% chance of attracting a curious Boo that follows you until dawn"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 6,
    "warning": "Wario denies responsibility if you warp into a wall. Or a jail cell."
  },
  "night_shy_guy_mask_of_silence": {
    "id": "night_shy_guy_mask_of_silence",
    "name": "Shy Guy Mask of Midnight Silence",
    "description": "A matte-black Shy Guy mask that swallows sound… and personality.",
    "category": "equipment",
    "price": 14000,
    "icon": "😷",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "At night: Advantage on Stealth checks as long as you don’t speak aloud",
      "You have advantage on Deception checks to pass as 'just another faceless goon'",
      "If you speak more than a sentence, mask lets out an involuntary 'HURRRP' (disadvantage on Persuasion for 10 minutes)"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 5,
    "warning": "Do not wear to romantic dinners. Or job interviews."
  },
  "night_twilight_boo_lantern": {
    "id": "night_twilight_boo_lantern",
    "name": "Twilight Boo Lantern",
    "description": "A lantern that glows with captured Boo-light, only truly bright after sunset.",
    "category": "equipment",
    "price": 13500,
    "icon": "🏮",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "At night: Emits 30 ft bright / 30 ft dim ghostly light that reveals invisible creatures as hazy outlines",
      "While lit at night, you have advantage on Investigation checks in ruins, crypts, or battlefields",
      "In daylight, it only flickers pathetically and attracts minor undead (DM’s discretion)"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 5,
    "warning": "Wario: 'If the Boos ask, this is a NIGHTLIGHT, okay?'"
  },
  "night_underground_bank_chip": {
    "id": "night_underground_bank_chip",
    "name": "Underground Bank Access Chip",
    "description": "A metal coin with a scannable glyph linking to a very illegal vault.",
    "category": "curiosities",
    "price": 20000,
    "icon": "💾",
    "stock": 1,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "At night in any major town: You can 'visit' a hidden Wario-run banker; deposit or withdraw up to 5000 gold remotely (no physical chest needed)",
      "Gold stored this way is unfindable by normal theft and most divinations, but if Wario’s bank gets raided… tough luck",
      "Each weekly use has a 5% chance that 'fees' eat 1d100 of your stored gold"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 7,
    "warning": "Fine print: 'Bank may, at any time, become on fire.'"
  },
  "night_ghost_mushroom_tea_set": {
    "id": "night_ghost_mushroom_tea_set",
    "name": "Ghost Mushroom Tea Set",
    "description": "Porcelain cups and a chipped teapot that smell like grave dirt and chamomile.",
    "category": "curiosities",
    "price": 9000,
    "icon": "🍵",
    "stock": 3,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "3 charges. At night, spend 10 minutes brewing tea: drinker can cast Speak with Dead once (no spell slot required, 1 target)",
      "For 1 hour after drinking, you can see faint silhouettes of nearby spirits (no mechanical bonus beyond RP/DM calls)",
      "On a CON save fail DC 12, you gain one level of Spooked: disadvantage on saves vs. fear until dawn"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 5,
    "warning": "Wario: 'If the dead start nagging you, that's not my problem.'"
  },
  "night_boo_chain_contract": {
    "id": "night_boo_chain_contract",
    "name": "Boo Chain Harassment Contract",
    "description": "A greasy scroll hiring a small squad of Boos for… 'nocturnal persuasion'.",
    "category": "services",
    "price": 15000,
    "icon": "📜",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Once per week at midnight: Designate one NPC; for the next 3 nights, they are haunted by minor Boos (sleepless, distracted)",
      "Mechanically: target has disadvantage on Insight & Concentration checks for 3 in-game days (if they need to sleep)",
      "10% chance target hires an exorcist who traces the contract back to you"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 7,
    "warning": "Strictly 'non-lethal' haunting. Probably."
  },
  "night_royal_ledger_scrap": {
    "id": "night_royal_ledger_scrap",
    "name": "Scrap from the Royal War Ledger",
    "description": "A torn page listing coded payments, bribes, and 'donations' during the civil war.",
    "category": "curiosities",
    "price": 11000,
    "icon": "📄",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "At night: Once per long rest, ask it one question about who financed a faction, noble house, or battle. Cryptic but truthful intel (DM answer).",
      "Advantage on Persuasion or Intimidation against any NPC whose name appears in its entries (if you show them).",
      "Reading it by daylight causes headaches: Disadvantage on Intelligence checks for 1 hour."
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 6,
    "warning": "Several names have been clumsily scratched out with purple marker. Wonder who."
  },
  "night_koopa_night_watch_badge": {
    "id": "night_koopa_night_watch_badge",
    "name": "Koopa Night Watchman Badge",
    "description": "A blackened security badge from Bowser’s old curfew patrols.",
    "category": "equipment",
    "price": 13000,
    "icon": "🛡️",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "While wearing at night: Advantage on Perception checks to spot intruders, ambushes, or sneaking creatures",
      "+2 to Initiative at night as long as you are on 'guard duty' (not sleeping or carousing)",
      "Disadvantage on Persuasion with anyone who lived under the curfew (they remember the badge)"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 5,
    "warning": "Some older Toads will slam their shutters when they see it."
  },
  "night_piranha_seed_pouch": {
    "id": "night_piranha_seed_pouch",
    "name": "Midnight Piranha Seed Pouch",
    "description": "A cloth pouch of twitching seeds labeled 'PLANT AFTER DARK – STAND BACK'.",
    "category": "curiosities",
    "price": 10000,
    "icon": "🌱",
    "stock": 4,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Contains 3 seeds. Planting one at night (1 action) creates a hidden Piranha Plant trap that awakens on the next nightfall (CR & exact stats = DM).",
      "Creatures stepping in the 5 ft area must succeed a DEX save DC 13 or be bitten (2d6 piercing) and restrained until they use an action to escape.",
      "Piranha Plant withers at dawn after its first attack, leaving a suspiciously Wario-shaped scorch mark."
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 6,
    "warning": "Do NOT plant inside your own bedroom. Learned that one the hard way."
  },
  "night_roulette_coin_of_fate": {
    "id": "night_roulette_coin_of_fate",
    "name": "Roulette Coin of Midnight Fate",
    "description": "A heavy coin with a 'W' on one side and a skull on the other. It hums in casinos.",
    "category": "curiosities",
    "price": 25000,
    "icon": "🎲",
    "stock": 1,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Once per night: Before a d20 roll, flip the coin: on W (50%), treat any result of 9 or lower as a 10; on skull (50%), treat any result of 12 or higher as an 11",
      "Gambling with it gives +10% returns on winnings, but also doubles losses",
      "If you ever flip it 3 nights in a row and get skull each time, it vanishes and all your non-magical gold disappears with it (into 'fees')"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 8,
    "warning": "Guaranteed to make your life exciting. Not guaranteed to keep you solvent."
  },
  "night_mirror_of_shady_referrals": {
    "id": "night_mirror_of_shady_referrals",
    "name": "Mirror of Shady Referrals",
    "description": "A cracked hand-mirror that shows the face of a different black-market contact each night.",
    "category": "curiosities",
    "price": 22000,
    "icon": "🪞",
    "stock": 1,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Once per night: Speak a request into the mirror (item/service/rumor); DM introduces a contact or opportunity that can vaguely help with that (with strings attached)",
      "You gain a permanent 5% discount with any contact you first met through the mirror",
      "Each time you use it, there’s a 10% chance the contact is actually an informant or double-agent"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 7,
    "warning": "Wario: 'These are all my VERY TRUSTWORTHY friends. Heh.'"
  },
  "night_bullet_bill_signal_flare": {
    "id": "night_bullet_bill_signal_flare",
    "name": "Bullet Bill Signal Flare",
    "description": "A single black flare with angry eyes painted on the casing.",
    "category": "equipment",
    "price": 17000,
    "icon": "🎆",
    "stock": 1,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "One-use item. Fire it into the sky at night as an action to summon a homing mini Bullet Bill",
      "On your next turn, designate a point or creature you can see within 300 ft; Bullet Bill streaks there: 4d6 force damage (DEX save DC 14 for half) in 10 ft radius",
      "10% chance Bill misreads the signal and aims at the strongest visible source of coin instead (DM chooses a 'rich' target)"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 7,
    "warning": "DO NOT light indoors. Unless you really hate your ceiling."
  },
  "night_spiked_chomp_collar": {
    "id": "night_spiked_chomp_collar",
    "name": "Night-Run Spiked Chomp Collar",
    "description": "A collar supposedly used for 'midnight walks' with a very illegal Chain Chomp.",
    "category": "equipment",
    "price": 16000,
    "icon": "🦴",
    "stock": 1,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "While worn as a belt/torc: your bite or unarmed attack can deal 1d6 piercing instead of normal damage, once per turn",
      "At night, you gain advantage on Intimidation checks against beasts and simple monsters",
      "Occasionally tugs you toward locked gates or vaults like it remembers old routes"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 6,
    "warning": "Collar may attract actual Chain Chomps looking for their old owner."
  },
  "night_starless_cloak_lining": {
    "id": "night_starless_cloak_lining",
    "name": "Starless Cloak Lining",
    "description": "A detachable lining made from fabric that refuses to reflect starlight.",
    "category": "equipment",
    "price": 12000,
    "icon": "🧥",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Sewn into any cloak/coat (10 min): At night, you gain advantage on Stealth checks in dim light or darkness",
      "While active, you cannot benefit from any effect that relies on starlight (star-based divinations, certain blessings – DM call)",
      "If exposed to bright sunlight for an hour, lining curls up and deactivates until next sunset"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 5,
    "warning": "Wario: 'Hides you from the stars, AND from witnesses. Two-for-one!'"
  },
  "night_ink_of_anonymous_graffiti": {
    "id": "night_ink_of_anonymous_graffiti",
    "name": "Ink of Anonymous Graffiti",
    "description": "A small vial of purple ink that only shows up under moonlight.",
    "category": "curiosities",
    "price": 9500,
    "icon": "🖋️",
    "stock": 4,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Contains enough ink for 5 large tags. Anything written with it is invisible except at night or in magical darkness",
      "While standing near your own tag at night, you gain +2 to any single Charisma check once (then that tag loses its magic)",
      "Law enforcement cannot track magical aura back to the writer; however, Wario absolutely can (and will, if owed money)"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 5,
    "warning": "Not liable for slogans that start revolutions… unless Wario gets a cut."
  },
  "night_smuggler_mushroom_roadmap": {
    "id": "night_smuggler_mushroom_roadmap",
    "name": "Smuggler’s Mushroom Roadmap",
    "description": "A stained cloth map showing routes through the war-scarred Kingdom marked with tiny toadstools.",
    "category": "services",
    "price": 9000,
    "icon": "🧭",
    "stock": 3,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "While traveling at night, party overland travel speed increases by 25% along mapped regions",
      "Once per long rest, you may avoid a random encounter by 'taking a side path' (DM adjusts narration)",
      "Every use has a 10% chance the map updates with a new hidden cache or smuggler safehouse (plot hook)"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 5,
    "warning": "Routes may occasionally go through 'mildly cursed' ruins. Wario calls that 'scenic'."
  },
  "night_phantom_kart_voucher": {
    "id": "night_phantom_kart_voucher",
    "name": "Phantom Kart Escape Voucher",
    "description": "A stamped ticket that smells like burnt rubber and ectoplasm.",
    "category": "services",
    "price": 12000,
    "icon": "🎟️",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "One-use: Snap the voucher at night to summon a spectral kart for your party (up to 4 Medium or 8 Small creatures)",
      "Kart moves at incredible speed: counts as automatic escape from most non-flying pursuers within one scene (DM adjudication)",
      "After use, there’s a 20% chance the kart decides to take a 'shortcut' through Boo-infested roads, causing a brief spooky encounter"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 6,
    "warning": "Seatbelts are 'optional'. Helmets not included."
  },
  "night_midnight_shell_mail": {
    "id": "night_midnight_shell_mail",
    "name": "Midnight Shell Mail",
    "description": "Dark Koopa mail armor, lacquered to blend with the night.",
    "category": "equipment",
    "price": 15000,
    "icon": "🐢",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "+1 AC while worn",
      "At night: advantage on Stealth checks in urban or rocky terrain",
      "In bright light: -5 ft movement (heat-absorbing shell bakes you)"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 6
  },
  "night_blackout_fire_flower": {
    "id": "night_blackout_fire_flower",
    "name": "Blackout Fire Flower",
    "description": "A soot-black Fire Flower that burns away light as well as enemies.",
    "category": "equipment",
    "price": 18000,
    "icon": "🔥",
    "stock": 1,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Once per night: cast Burning Hands (3d6 fire, DC 14) and snuff all non-magical light in a 20 ft radius",
      "You can see through this magical darkness as dim light",
      "Any use in daylight blinds you for 1 round (no fire effect)"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 7,
    "warning": "Great for ambushes, terrible for reading."
  },
  "night_koopa_courier_boots": {
    "id": "night_koopa_courier_boots",
    "name": "Koopa Night Courier Boots",
    "description": "Silent-soled boots stamped with an old curfew patrol insignia.",
    "category": "equipment",
    "price": 13000,
    "icon": "🥾",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "At night: +10 ft movement and advantage on Stealth while running messages (you move between two known locations)",
      "Once per long rest: Dash as a bonus action without provoking opportunity attacks",
      "In heavy daylight crowds, disadvantage on Stealth (bright crest gives you away)"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 6
  },
  "night_boo_pager": {
    "id": "night_boo_pager",
    "name": "Boo Pager",
    "description": "A rattling little device that summons a nosy Boo with the press of a button.",
    "category": "curiosities",
    "price": 12000,
    "icon": "📟",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Once per night: summon a minor Boo spy for 1 hour; it can scout up to 60 ft away and report telepathically (no combat stats, DM narrates)",
      "Boo can pass through most walls but flees bright light or strong holy auras",
      "Each use has a 5% chance the Boo brings back gossip about YOU instead"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 7
  },
  "night_wartime_looter_gloves": {
    "id": "night_wartime_looter_gloves",
    "name": "Wartime Looter’s Gloves",
    "description": "Fingerless gloves that have rifled through more pockets than Wario will admit.",
    "category": "equipment",
    "price": 10000,
    "icon": "🧤",
    "stock": 4,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Advantage on Sleight of Hand at night",
      "Once per night: automatically succeed on one pickpocket against an unaware commoner-level NPC (DM discretion on loot)",
      "On a failed Sleight of Hand vs guards, they gain advantage to recognize these gloves later"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 5
  },
  "night_rogueport_forged_passport": {
    "id": "night_rogueport_forged_passport",
    "name": "Rogueport Forged Passport",
    "description": "A very convincing travel document full of fake Mushroom Kingdom visas.",
    "category": "curiosities",
    "price": 15000,
    "icon": "📘",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Advantage on Charisma (Deception) checks to bypass city gates, curfews, and checkpoints",
      "Once per night: treat a failed Deception check vs bureaucrats as a 10 (if result was worse)",
      "Any natural 1 on such checks flags you in all 'official' systems tied to Peach-era bureaucracy"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 6
  },
  "night_dark_yoshi_saddle": {
    "id": "night_dark_yoshi_saddle",
    "name": "Dark Yoshi Recon Saddle",
    "description": "A stealth-fitted Yoshi saddle designed for black-ops cavalry.",
    "category": "equipment",
    "price": 19000,
    "icon": "🐎",
    "stock": 1,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "While mounted on a Yoshi or similar mount at night: both rider and mount gain advantage on Stealth",
      "Once per long rest: perform a 'silent charge' – first attack from mount this round has advantage",
      "In bright daylight, mount becomes skittish: disadvantage on Animal Handling checks with it"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 7
  },
  "night_chomp_chain_keyring": {
    "id": "night_chomp_chain_keyring",
    "name": "Chomp-Chain Keyring",
    "description": "A heavy keyring made from retired Chain Chomp links.",
    "category": "curiosities",
    "price": 9000,
    "icon": "🔗",
    "stock": 4,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Advantage on checks to break mundane chains, shackles or padlocks at night",
      "Once per night: treat your Strength score as 18 for a single shove/bust attempt",
      "Clinks loudly if you move faster than a walk (disadvantage on Stealth while running)"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 5
  },
  "night_thieves_market_membership": {
    "id": "night_thieves_market_membership",
    "name": "Thieves’ Market Membership Token",
    "description": "A stamped wooden token granting access to pop-up black markets.",
    "category": "services",
    "price": 21000,
    "icon": "🪵",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "At night in any sizable settlement: you can locate a temporary thieves’ market within an hour (DM populates vendors)",
      "Permanent 10% discount on illegal/black-market purchases there",
      "Every use has a 10% chance the market is mid-raid when you arrive"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 7
  },
  "night_stolen_koopa_war_banner": {
    "id": "night_stolen_koopa_war_banner",
    "name": "Stolen Koopa War Banner (Night Standard)",
    "description": "A ragged banner Bowser’s troops once raised over Toad Town at dusk.",
    "category": "equipment",
    "price": 17000,
    "icon": "🚩",
    "stock": 1,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "When planted at night: allies within 20 ft gain +1 to damage rolls against enemies who fear Bowser/Koopas",
      "Koopa-aligned creatures in the area must pass WIS save DC 13 or have disadvantage on their first attack vs the banner’s side",
      "In daylight, planting it instead gives -1 morale to most civilians present"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 8
  },
  "night_burned_peach_wanted_poster": {
    "id": "night_burned_peach_wanted_poster",
    "name": "Burned Peach Loyalist Wanted Poster",
    "description": "A charred poster offering a bounty on a now-dead Peach loyalist.",
    "category": "curiosities",
    "price": 8000,
    "icon": "📜",
    "stock": 3,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "At night: advantage on Insight & History checks about the civil war factions",
      "Once per night: tear off a piece to gain +1 to a single Intimidation check against ex-soldiers or rebels",
      "Using it openly with royalist NPCs imposes disadvantage on Persuasion for 24 hours"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 5
  },
  "night_undead_toll_contract": {
    "id": "night_undead_toll_contract",
    "name": "Undead Toll-Road Contract",
    "description": "A ‘legal’ agreement with a minor undead patrol to ignore you… mostly.",
    "category": "services",
    "price": 18000,
    "icon": "📄",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "While traveling between midnight and dawn in graveyards/battlefields, non-intelligent undead are indifferent unless attacked",
      "Once per night: you may pass through one undead-held choke point without being stopped (unless a greater undead is present)",
      "Breaking the truce (striking first) causes all such undead to target you preferentially for a week"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 7
  },
  "night_phantom_coin_purse": {
    "id": "night_phantom_coin_purse",
    "name": "Phantom Coin Purse",
    "description": "A purse that feels empty by day and heavy by night.",
    "category": "equipment",
    "price": 14500,
    "icon": "👛",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Any coins placed inside from legitimate loot appear weightless until nightfall (no encumbrance from coins)",
      "At midnight, you may 'wash' up to 500 gp into completely untraceable, nondescript coinage",
      "Each week, roll d20: on a 1, 1d100 gp just… vanishes (Wario’s 'maintenance fee')"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 6
  },
  "night_mario_bro_broken_wrench": {
    "id": "night_mario_bro_broken_wrench",
    "name": "Mario Bro. Broken Wrench",
    "description": "Half of a once-iconic plumber’s tool, engraved with an M and scorch marks.",
    "category": "equipment",
    "price": 16000,
    "icon": "🔧",
    "stock": 1,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Once per long rest at night: gain advantage on a single Strength or Dex check to sabotage or repair mechanical defenses",
      "You can use it as an improvised melee weapon (1d6 bludgeoning) that crits on 19–20 against constructs",
      "If you ever strike an ally with it deliberately, it becomes mundane (Mario’s ghostly disapproval?)"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 7
  },
  "night_civil_war_dogtag_chain": {
    "id": "night_civil_war_dogtag_chain",
    "name": "Chain of Mixed Dogtags",
    "description": "A chain threaded with ID tags from both sides of the conflict.",
    "category": "curiosities",
    "price": 12000,
    "icon": "⛓️",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Once per night: reroll a failed death save (must use second result)",
      "Advantage on Insight vs veterans of the war (you can read the trauma)",
      "Wearing them imposes disadvantage on saves vs fear effects involving battlefields or mass death"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 6
  },
  "night_spirit_of_the_war_drum": {
    "id": "night_spirit_of_the_war_drum",
    "name": "Haunted War Drumhead",
    "description": "The drumhead of a Toad war drum, now tensioned with spectral sinew.",
    "category": "equipment",
    "price": 20000,
    "icon": "🥁",
    "stock": 1,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Once per night: Beat the drum to grant all allies within 30 ft temporary HP equal to your level + your Cha mod",
      "Also imposes disadvantage on enemy fear effects against those allies until dawn",
      "Each use risks waking a slumbering battle-spirit (DM may trigger a spectral encounter)"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 8,
    "warning": "Neighbors WILL complain. If they’re still alive."
  },
  "night_napkin_oath_with_bowser_jr": {
    "id": "night_napkin_oath_with_bowser_jr",
    "name": "Crumpled Napkin Oath (Bowser Jr. 'Deal')",
    "description": "A smeared napkin that says 'NO SNITCH – B.J.' next to a childish drawing.",
    "category": "services",
    "price": 21000,
    "icon": "🧻",
    "stock": 1,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Once per week, at night: you can call in one favor from a rogue Koopa squad (small strike team or distraction, DM-defined)",
      "Using it leaves unmistakable traces; Bowser or his generals may become aware of your meddling",
      "After 3 uses, the ink runs and the pact dissolves"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 9
  },
  "night_shadow_mario_graffiti_can": {
    "id": "night_shadow_mario_graffiti_can",
    "name": "Shadow Mario Graffiti Can",
    "description": "A can of paint allegedly 'borrowed' from Bowser Jr.'s arsenal.",
    "category": "curiosities",
    "price": 14000,
    "icon": "🖌️",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Once per night: paint a 10×10 ft patch of illusory terrain or wall that behaves as difficult terrain for others (lasts 1 hour)",
      "You and chosen allies can pass through as if normal terrain",
      "If exposed to sunlight, paint turns into embarrassing Wario fan-art"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 6
  },
  "night_boo_tailored_pinstripe_suit": {
    "id": "night_boo_tailored_pinstripe_suit",
    "name": "Boo-Tailored Pinstripe Suit",
    "description": "A sharp suit that never rustles, sized just a bit too big and smelling of cigar smoke.",
    "category": "equipment",
    "price": 23000,
    "icon": "🤵",
    "stock": 1,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "At night: +2 to Charisma (Deception) and (Persuasion) checks regarding illegal deals or bribes",
      "Once per long rest: auto-succeed a single Deception check against a non-heroic NPC (DM decides what 'non-heroic' means)",
      "In holy ground, the suit itches and imposes disadvantage on Charisma checks"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 9
  },
  "night_wario_branded_lockpick_watch": {
    "id": "night_wario_branded_lockpick_watch",
    "name": "Wario-Branded Lockpick Watch",
    "description": "A chunky wristwatch whose face flips up to reveal a tiny toolkit.",
    "category": "equipment",
    "price": 16000,
    "icon": "⌚",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Counts as masterwork thieves’ tools at night: +2 bonus to lockpicking attempts",
      "Once per night: you may pick a non-magical lock as a bonus action",
      "Natural 1 on a lockpicking roll jams the watch until repaired (no tool bonus until fixed)"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 6
  },
  "night_peach_balcony_shadow_fragment": {
    "id": "night_peach_balcony_shadow_fragment",
    "name": "Shadow Fragment of Peach’s Balcony",
    "description": "Not the stone – the shadow of the old balcony, bottled at dusk.",
    "category": "curiosities",
    "price": 20000,
    "icon": "🧪",
    "stock": 1,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Once per night: pour it on a flat surface to create a 15 ft-radius patch of deep shadow that counts as heavily obscured for 10 minutes",
      "Allies in the area have advantage on Stealth; enemies have disadvantage on ranged attacks into or through it",
      "Using it more than 3 times causes the fragment to fade permanently"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 8
  },
  "night_bullet_bill_night_racing_permit": {
    "id": "night_bullet_bill_night_racing_permit",
    "name": "Night Racing Permit (Bullet Bill League)",
    "description": "A laminated card granting entry to highly-illegal night-time races.",
    "category": "services",
    "price": 19000,
    "icon": "🏁",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Gives access to underground night races (DM: social hub, betting, rare vendors)",
      "Once per in-game week, winning a race can net 1d4×1000 gp or an epic favor",
      "Each visit has a 15% chance your vehicle is 'kindly borrowed' by someone else by morning"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 7
  },
  "night_dry_bones_clattering_dice": {
    "id": "night_dry_bones_clattering_dice",
    "name": "Dry Bones Clattering Dice",
    "description": "A pair of dice carved from Dry Bones finger-bones. They never quite stop rattling.",
    "category": "curiosities",
    "price": 12000,
    "icon": "🎲",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Once per night: Before a d20 roll, roll these; on a 10–12, you may treat your d20 roll as if it were a 10",
      "On snake eyes (2): your next failed death save cannot be rerolled by any means",
      "Bones rattle audibly within 10 ft when undead are nearby (DM chooses range)"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 6
  },
  "night_star_thief_handbook": {
    "id": "night_star_thief_handbook",
    "name": "Star Thief’s Night Handbook",
    "description": "A slim booklet of 'tips' on stealing divine artifacts under cover of night.",
    "category": "curiosities",
    "price": 22000,
    "icon": "📙",
    "stock": 1,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "After studying 1 hour at night, gain advantage on your next single skill check made to steal/procure a magical item",
      "If that attempt fails catastrophically (nat 1), the item’s owner becomes vaguely aware of 'someone matching your vibe'",
      "Book whispers advice in a smug Wario-voice whenever you pass a temple or vault"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 8
  },
  "night_koopa_trench_periscope": {
    "id": "night_koopa_trench_periscope",
    "name": "Koopa Trench Periscope",
    "description": "A collapsible periscope with night-tuned lenses and shell-scratch etchings.",
    "category": "equipment",
    "price": 9000,
    "icon": "🔭",
    "stock": 4,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Advantage on Perception checks to observe from total cover at night",
      "Once per night: you can grant an ally advantage on their first ranged attack by spotting for them",
      "Using it in bright daylight imposes disadvantage on Perception for 10 minutes (blinds you with glare)"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 5
  },
  "night_boo_campfire_log": {
    "id": "night_boo_campfire_log",
    "name": "Boo Campfire Log",
    "description": "A log that burns with cold blue fire, attracting the talkative dead.",
    "category": "curiosities",
    "price": 15000,
    "icon": "🪵",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Burning at night for a short rest: party gains advantage on one collective History or Lore check about the civil war, as ghosts chime in",
      "Undead within 60 ft are drawn closer but remain cautious (they won’t attack unless provoked for the duration)",
      "Fuel for three uses; after that, it crumbles into ordinary ash"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 6
  },
  "night_starlit_shy_guy_lantern": {
    "id": "night_starlit_shy_guy_lantern",
    "name": "Starlit Shy Guy Lantern",
    "description": "A lantern with a Shy Guy mask for a face, glowing only under starlight.",
    "category": "equipment",
    "price": 13000,
    "icon": "🏮",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "At night under clear sky: sheds 30 ft bright/30 ft dim light that does not reveal the wielder’s exact position (enemies cannot pinpoint you by the light alone)",
      "Bonus: advantage on Survival checks for nighttime navigation by stars",
      "Lantern sputters and goes out during storms or heavy cloud cover"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 6
  },
  "night_toad_rebel_signal_whistle": {
    "id": "night_toad_rebel_signal_whistle",
    "name": "Toad Rebel Signal Whistle",
    "description": "A two-tone whistle used to coordinate resistance cells after curfew.",
    "category": "equipment",
    "price": 10000,
    "icon": "📯",
    "stock": 4,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Once per night: blow it to call nearby sympathetic commoners/resistance (DM: 1–3 low-CR NPC allies, or rumor/help)",
      "Advantage on Charisma checks with underground Toad groups while it’s visible",
      "Any guard hearing it gets advantage on checks to search the area that night"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 5
  },
  "night_luigi_flashlight_of_cowardice": {
    "id": "night_luigi_flashlight_of_cowardice",
    "name": "Luigi’s Flashlight of Cowardice",
    "description": "A green flashlight that shakes a little when you hold it.",
    "category": "equipment",
    "price": 18000,
    "icon": "🔦",
    "stock": 1,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Bright 40 ft cone of light; any ghostly/undead creatures in beam must pass WIS DC 13 or have disadvantage on attacks for 1 round",
      "Once per long rest: gain advantage on a single save vs fear while clutching it and yelling a catchphrase",
      "If you willingly move toward a terrifying creature while holding it, roll WIS DC 12 or be forced to move back 10 ft instead"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 7
  },
  "night_ration_of_starlight_mushroom_soup": {
    "id": "night_ration_of_starlight_mushroom_soup",
    "name": "Ration of Starlight Mushroom Soup",
    "description": "A sealed jar of silver-flecked mushroom broth, best consumed under the stars.",
    "category": "curiosities",
    "price": 9000,
    "icon": "🥣",
    "stock": 4,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Single-use. Drinking at night grants darkvision 60 ft (or +30 ft if you already have it) for 8 hours",
      "Also grants advantage on one Wisdom saving throw during that time",
      "Drinking it in sunlight makes you lethargic: gain disadvantage on Initiative until next long rest"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 5
  },
  "night_garlic_investment_bond": {
    "id": "night_garlic_investment_bond",
    "name": "Wario’s Garlic Investment Bond",
    "description": "A foul-smelling bond certificate promising 'Lucrative Nocturnal Returns'.",
    "category": "services",
    "price": 30000,
    "icon": "💰",
    "stock": 1,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Pay 30000g: every in-game week you receive 1d4×1000g in 'dividends' at midnight (from 'mysterious sources')",
      "After 4 payouts, roll d20: on 1–3, the scheme collapses and you receive nothing further; on 4–20, it continues another 4 weeks (repeat)",
      "All wealth from this bond is considered 'hot' money; certain factions may track or resent it"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 10,
    "warning": "It’s not a pyramid scheme. Wario prefers the term 'triangle of opportunity'."
  },
  "wario_recipe_garlic_grenade_soup": {
    "id": "wario_recipe_garlic_grenade_soup",
    "name": "Recipe: Garlic Grenade Soup",
    "description": "A soup that explodes in your mouth. Wario's favorite.",
    "price": 6500,
    "icon": "📜",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Creates a soup that deals 2d6 poison damage to anyone within 10 ft who smells it (CON save DC 13)",
      "Drinking it grants immunity to poison for 1 hour (but you take 1d6 poison damage)",
      "The pot becomes a minor explosive: can be thrown for 1d8 fire damage"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wafting Cloud",
    "levelRequirement": 5
  },
  "halfling_recipe_second_breakfast_surprise": {
    "id": "halfling_recipe_second_breakfast_surprise",
    "name": "Recipe: Second Breakfast Surprise",
    "description": "A dish that looks like breakfast but tastes like dinner.",
    "price": 5800,
    "icon": "📜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Eating it confuses enemies: advantage on Deception checks for 1 hour",
      "You are full for 8 hours: no need for other meals",
      "Disadvantage on Charisma checks with food snobs"
    ],
    "vendor": "halfling",
    "shippedBy": "Hobbit Post",
    "levelRequirement": 5
  },
  "mages_guild_recipe_spell_slot_soup": {
    "id": "mages_guild_recipe_spell_slot_soup",
    "name": "Recipe: Spell Slot Soup",
    "description": "A broth made from boiled spell scrolls.",
    "price": 8200,
    "icon": "📜",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Consuming a bowl restores one 1st-level spell slot",
      "Tastes like ink and paper: disadvantage on Persuasion for 1 hour",
      "You glow faintly for 1 hour (disadvantage on Stealth)"
    ],
    "vendor": "mages_guild",
    "shippedBy": "Arcane Relay",
    "levelRequirement": 7
  },
  "dwarf_realms_recipe_mithril_ale_brew": {
    "id": "dwarf_realms_recipe_mithril_ale_brew",
    "name": "Recipe: Mithril Ale Brew",
    "description": "A beer so strong it can dent armor.",
    "price": 7800,
    "icon": "📜",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Grants +2 to Constitution saves for 8 hours",
      "Disadvantage on Dexterity checks for 1 hour",
      "Your breath can ignite small flames (1 fire damage to flammable objects)"
    ],
    "vendor": "dwarf_realms",
    "shippedBy": "Sturdy Cart",
    "levelRequirement": 6
  },
  "greenskins_recipe_waaagh_stew": {
    "id": "greenskins_recipe_waaagh_stew",
    "name": "Recipe: WAAAGH! Stew",
    "description": "A stew that makes you want to fight everything.",
    "price": 6200,
    "icon": "📜",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "+2 to attack rolls for 1 hour",
      "You must attack the nearest creature each round (Wis save DC 13 to resist)",
      "Immune to fear while active"
    ],
    "vendor": "greenskins",
    "shippedBy": "Choppa Delivery",
    "levelRequirement": 5
  },
  "mushroom_regency_recipe_poison_mushroom_deluxe": {
    "id": "mushroom_regency_recipe_poison_mushroom_deluxe",
    "name": "Recipe: Poison Mushroom Deluxe",
    "description": "A mushroom that poisons enemies but heals you.",
    "price": 7200,
    "icon": "📜",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Cook a mushroom that deals 2d6 poison to enemies who eat it",
      "You gain 2d6 temporary HP if you eat it (you're immune to the poison)",
      "Toads are disgusted: disadvantage on Charisma with them"
    ],
    "vendor": "mushroom_regency",
    "shippedBy": "Goomba Ground Transport",
    "levelRequirement": 6
  },
  "beanbean_kingdom_recipe_royal_bean_feast": {
    "id": "beanbean_kingdom_recipe_royal_bean_feast",
    "name": "Recipe: Royal Bean Feast",
    "description": "A feast fit for a king (who likes beans).",
    "price": 6800,
    "icon": "📜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Feeds 10 people: each gains +1 to Constitution saves for 24 hours",
      "Everyone must make a DC 12 Constitution save or be poisoned by gas for 1 hour",
      "Advantage on Charisma checks with bean enthusiasts"
    ],
    "vendor": "beanbean_kingdom",
    "shippedBy": "Beanstalk Express",
    "levelRequirement": 5
  },
  "dk_crew_recipe_banana_bomb_pudding": {
    "id": "dk_crew_recipe_banana_bomb_pudding",
    "name": "Recipe: Banana Bomb Pudding",
    "description": "A pudding that explodes with banana flavor.",
    "price": 6500,
    "icon": "📜",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Throw pudding: 1d6 bludgeoning + target must DC 13 Dex save or be blinded by banana mush",
      "Eating it restores 1d8 HP but you must shout 'BANANA SLAMMA!'",
      "Monkeys attack you on sight for 1 hour"
    ],
    "vendor": "dk_crew",
    "shippedBy": "Barrel Roll Delivery",
    "levelRequirement": 5
  },
  "yoshi_clans_recipe_egg_shell_soup": {
    "id": "yoshi_clans_recipe_egg_shell_soup",
    "name": "Recipe: Eggshell Soup",
    "description": "A soup made from crushed eggshells. Surprisingly nutritious.",
    "price": 5900,
    "icon": "📜",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Grants +1 AC for 1 hour (calcium boost)",
      "You have disadvantage on Dexterity checks for 1 hour (stiff joints)",
      "Yoshis are horrified: disadvantage on Charisma with them"
    ],
    "vendor": "yoshi_clans",
    "shippedBy": "Egg Drop",
    "levelRequirement": 5
  },
  "kremling_krew_recipe_cannonball_chowder": {
    "id": "kremling_krew_recipe_cannonball_chowder",
    "name": "Recipe: Cannonball Chowder",
    "description": "A thick stew with iron-rich chunks.",
    "price": 6400,
    "icon": "📜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "+1 to Strength checks for 1 hour",
      "Your teeth hurt: disadvantage on Charisma checks involving smiling",
      "Metal detectors go off around you for 1 hour"
    ],
    "vendor": "kremling_krew",
    "shippedBy": "Cannonball Express",
    "levelRequirement": 6
  },
  "lizardmen_recipe_swamp_sushi": {
    "id": "lizardmen_recipe_swamp_sushi",
    "name": "Recipe: Swamp Sushi",
    "description": "Raw fish from the swamp. What could go wrong?",
    "price": 5800,
    "icon": "📜",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Advantage on saves vs. disease for 8 hours",
      "Constitution save DC 13 or contract a minor disease anyway",
      "Reptiles respect you: advantage on Charisma with them"
    ],
    "vendor": "lizardmen",
    "shippedBy": "Murky Waters Courier",
    "levelRequirement": 5
  },
  "halfling_recipe_herb_crusted_pie": {
    "id": "halfling_recipe_herb_crusted_pie",
    "name": "Recipe: Herb-Crusted Comfort Pie",
    "description": "A pie that tastes like home.",
    "price": 6200,
    "icon": "📜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Removes one level of exhaustion",
      "Advantage on saves vs. fear for 8 hours",
      "You become homesick: disadvantage on checks if far from home"
    ],
    "vendor": "halfling",
    "shippedBy": "Hobbit Post",
    "levelRequirement": 5
  },
  "dwarf_realms_recipe_iron_gut_stew": {
    "id": "dwarf_realms_recipe_iron_gut_stew",
    "name": "Recipe: Iron Gut Stew",
    "description": "A stew that makes your stomach indestructible.",
    "price": 7400,
    "icon": "📜",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Immunity to poison for 8 hours",
      "You can eat anything without harm (rocks, metal, etc.)",
      "Disadvantage on Charisma checks (your breath is terrible)"
    ],
    "vendor": "dwarf_realms",
    "shippedBy": "Sturdy Cart",
    "levelRequirement": 7
  },
  "greenskins_recipe_goblin_gumbo_deluxe": {
    "id": "greenskins_recipe_goblin_gumbo_deluxe",
    "name": "Recipe: Goblin Gumbo Deluxe",
    "description": "A stew that makes you think like a goblin.",
    "price": 6600,
    "icon": "📜",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Stealth checks for 1 hour",
      "You must make a DC 10 Wisdom save or act like a goblin (disadvantage on Charisma)",
      "Immune to being charmed by goblins"
    ],
    "vendor": "greenskins",
    "shippedBy": "War Drum",
    "levelRequirement": 5
  },
  "mages_guild_recipe_mana_muffins": {
    "id": "mages_guild_recipe_mana_muffins",
    "name": "Recipe: Mana Muffins",
    "description": "Muffins that restore magical energy.",
    "price": 8800,
    "icon": "📜",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Restores one 1st-level spell slot",
      "You must eat it while casting: disadvantage on Concentration for 1 hour",
      "Muffins glow faintly (disadvantage on Stealth)"
    ],
    "vendor": "mages_guild",
    "shippedBy": "Arcane Relay",
    "levelRequirement": 8
  },
  "wario_cw_mario_war_hammer": {
    "id": "wario_cw_mario_war_hammer",
    "name": "Civil War Relic: Mario's War Hammer",
    "description": "A hammer Mario used to smash Koopa tanks. Has 'M' carved in the handle.",
    "category": "equipment",
    "price": 9200,
    "icon": "🔨",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+2 warhammer, deals extra 1d6 damage to constructs",
      "Once per day: can smash a non-magical object of Large size or smaller instantly",
      "You must shout 'MARIO!' when using that ability or take 1d4 psychic damage"
    ],
    "vendor": "wario_land",
    "shippedBy": "Heavy Package",
    "levelRequirement": 8
  },
  "wario_cw_bowser_war_crown": {
    "id": "wario_cw_bowser_war_crown",
    "name": "Civil War Relic: Bowser's War Crown (Replica)",
    "description": "A replica crown Bowser wore during the siege. Wario swears it's real.",
    "category": "equipment",
    "price": 8500,
    "icon": "👑",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+1 Charisma with Koopa Troop, -1 Charisma with everyone else",
      "Once per day: can breathe a 15 ft cone of fire (2d6 damage, DC 13 Dex save)",
      "Real Bowser may appear: 5% chance per day he shows up to reclaim it"
    ],
    "vendor": "wario_land",
    "shippedBy": "Shell-Carrier Courier",
    "levelRequirement": 7
  },
  "wario_cw_toad_rebel_flag": {
    "id": "wario_cw_toad_rebel_flag",
    "name": "Civil War Relic: Toad Rebel Battle Flag",
    "description": "A bloodstained flag with a mushroom and crossed swords.",
    "category": "equipment",
    "price": 7200,
    "icon": "🏴",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Allies within 30 ft gain +1 to attack rolls while flag is held",
      "Toad loyalists are inspired: advantage on Charisma with them",
      "Bowser's forces target you first (disadvantage on initiative vs. them)"
    ],
    "vendor": "wario_land",
    "shippedBy": "Toad Trot Transport",
    "levelRequirement": 6
  },
  "wario_cw_luigi_silenced_pistol": {
    "id": "wario_cw_luigi_silenced_pistol",
    "name": "Civil War Relic: Luigi's Silenced Pistol",
    "description": "A pistol Luigi used for stealth missions. It's very quiet.",
    "category": "equipment",
    "price": 9800,
    "icon": "🔫",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Ranged weapon: 60/120 ft, 2d6+2 piercing, silent (no disadvantage on Stealth)",
      "Once per day: can fire a spectral bullet that deals 3d6 necrotic (no sound)",
      "You must succeed DC 10 Wisdom save or be frightened for 1 round (Luigi's fear lingers)"
    ],
    "vendor": "wario_land",
    "shippedBy": "Ghostly Whisper",
    "levelRequirement": 9
  },
  "wario_cw_peach_royal_seal": {
    "id": "wario_cw_peach_royal_seal",
    "name": "Civil War Relic: Princess Peach's Royal Seal",
    "description": "The actual royal seal. Wario 'found' it in the rubble.",
    "category": "equipment",
    "price": 15000,
    "icon": "🏛️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Can seal any document: makes it legally binding in 12 dimensions",
      "Once per week: can issue a royal decree that must be obeyed (Wis save DC 18)",
      "Peach's ghost may appear: 10% chance per use she demands it back"
    ],
    "vendor": "wario_land",
    "shippedBy": "Silk Scroll Case",
    "levelRequirement": 10
  },
  "wario_cw_koopa_troopa_shell_shield": {
    "id": "wario_cw_koopa_troopa_shell_shield",
    "name": "Civil War Relic: Koopa Troopa Shell Shield",
    "description": "A shell used as a shield by a Koopa defector.",
    "category": "equipment",
    "price": 7600,
    "icon": "🐢",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "+2 AC, can withdraw as bonus action for +4 AC but speed drops to 0",
      "Once per day: can spin dash 20 ft as action, knocking prone everyone in path (Str save DC 14)",
      "Koopas recognize it: advantage on Charisma with them"
    ],
    "vendor": "wario_land",
    "shippedBy": "Shell Sound Service",
    "levelRequirement": 7
  },
  "wario_cw_shy_guy_assassin_mask": {
    "id": "wario_cw_shy_guy_assassin_mask",
    "name": "Civil War Relic: Shy Guy Assassin Mask",
    "description": "A black mask worn by Shy Guy assassins. Very rare.",
    "category": "equipment",
    "price": 8800,
    "icon": "🎭",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Advantage on Stealth checks in darkness",
      "Once per day: can become invisible for 1 minute (breaks if you attack)",
      "You cannot speak while wearing it: disadvantage on Charisma checks"
    ],
    "vendor": "wario_land",
    "shippedBy": "Masked Courier",
    "levelRequirement": 8
  },
  "wario_cw_bob_omb_battalion_flag": {
    "id": "wario_cw_bob_omb_battalion_flag",
    "name": "Civil War Relic: Bob-omb Battalion Flag",
    "description": "A flag that causes explosions.",
    "category": "equipment",
    "price": 8200,
    "icon": "💣",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Allies within 20 ft deal +1d4 fire damage on attacks",
      "Once per day: can cause a 15 ft explosion (3d6 fire, Dex save DC 15)",
      "You have disadvantage on saves vs. fire damage"
    ],
    "vendor": "wario_land",
    "shippedBy": "Volatile Mail",
    "levelRequirement": 8
  },
  "wario_cw_magikoopa_staff_fragment": {
    "id": "wario_cw_magikoopa_staff_fragment",
    "name": "Civil War Relic: Magikoopa Staff Fragment",
    "description": "A broken piece of Kamek's staff.",
    "category": "equipment",
    "price": 9400,
    "icon": "🪄",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Can cast one 1st-level spell from the wizard list once per day",
      "You have advantage on saves vs. magic",
      "Kamek can sense it: 20% chance per day he appears to reclaim it"
    ],
    "vendor": "wario_land",
    "shippedBy": "Spellbound Satchel",
    "levelRequirement": 9
  },
  "wario_cw_wartime_communication_orb": {
    "id": "wario_cw_wartime_communication_orb",
    "name": "Civil War Relic: Wartime Communication Orb",
    "description": "An orb that let generals talk across battlefields.",
    "category": "equipment",
    "price": 10200,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Once per day: can send a message to anyone you've met (they hear it as a whisper)",
      "Can receive one message per day from unknown sources (DM's choice)",
      "Orb eavesdrops: 10% chance it broadcasts your secrets"
    ],
    "vendor": "wario_land",
    "shippedBy": "Telepathic Link",
    "levelRequirement": 8
  },
  "wario_cw_toad_medic_field_kit": {
    "id": "wario_cw_toad_medic_field_kit",
    "name": "Civil War Relic: Toad Medic Field Kit",
    "description": "A complete medical kit from the front lines.",
    "category": "equipment",
    "price": 8600,
    "icon": "🩺",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Contains 5 healing potions (2d4+2) that recharge 1 per long rest",
      "Advantage on Medicine checks",
      "Kit is cursed: you must help any injured creature you see (disadvantage if you don't)"
    ],
    "vendor": "wario_land",
    "shippedBy": "Medical Courier",
    "levelRequirement": 6
  },
  "wario_cw_bowser_jr_paintbrush": {
    "id": "wario_cw_bowser_jr_paintbrush",
    "name": "Civil War Relic: Bowser Jr's Paintbrush",
    "description": "A magic brush that creates graffiti.",
    "category": "equipment",
    "price": 9200,
    "icon": "🖌️",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Can paint portals on walls (10 ft teleport, 3 uses per day)",
      "Paintings come to life and attack enemies (1d4 damage per round)",
      "Bowser Jr may appear: 5% chance per use he demands it back"
    ],
    "vendor": "wario_land",
    "shippedBy": "Paint Splatter Express",
    "levelRequirement": 8
  },
  "wario_cw_peach_castle_banquet_horn": {
    "id": "wario_cw_peach_castle_banquet_horn",
    "name": "Civil War Relic: Peach's Castle Banquet Horn",
    "description": "A horn used to call soldiers to feast.",
    "category": "equipment",
    "price": 8200,
    "icon": "📯",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Blow horn: all allies within 60 ft gain 1d8 temporary HP",
      "Once per day: can cast Heroism on 3 creatures",
      "Horn is loud: disadvantage on Stealth for 1 minute"
    ],
    "vendor": "wario_land",
    "shippedBy": "Royal Parcel",
    "levelRequirement": 7
  },
  "wario_cw_koopa_king_scepter_tip": {
    "id": "wario_cw_koopa_king_scepter_tip",
    "name": "Civil War Relic: Koopa King Scepter Tip",
    "description": "The jeweled tip of Bowser's scepter.",
    "category": "equipment",
    "price": 11800,
    "icon": "💎",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "+2 to Charisma with reptiles and fiends",
      "Once per day: can cast Command as a 3rd-level spell",
      "Bowser will destroy you to get this back: he knows you have it"
    ],
    "vendor": "wario_land",
    "shippedBy": "Heavy Guard",
    "levelRequirement": 10
  },
  "wario_cw_shy_guy_squad_leader_mask": {
    "id": "wario_cw_shy_guy_squad_leader_mask",
    "name": "Civil War Relic: Shy Guy Squad Leader Mask",
    "description": "A gold-trimmed mask that commands respect.",
    "category": "equipment",
    "price": 8900,
    "icon": "🎭",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Advantage on Charisma checks with Shy Guys",
      "Can command up to 3 Shy Guys to follow you for 1 hour (1/day)",
      "You cannot remove the mask: disadvantage on Charisma with everyone else"
    ],
    "vendor": "wario_land",
    "shippedBy": "Masked Courier",
    "levelRequirement": 8
  },
  "wario_land_garlic_breath_mints": {
    "id": "wario_land_garlic_breath_mints",
    "name": "Wario's Garlic Breath Mints",
    "description": "Mints that make your breath worse. Classic Wario.",
    "category": "equipment",
    "price": 5200,
    "icon": "🍬",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Eating one gives advantage on Intimidation checks for 1 hour",
      "Disadvantage on Persuasion checks for 2 hours",
      "Vampires flee automatically"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wafting Cloud",
    "levelRequirement": 5
  },
  "wario_land_fake_mustache_kit": {
    "id": "wario_land_fake_mustache_kit",
    "name": "Wario's Fake Mustache Kit",
    "description": "Mustaches that make you look important.",
    "category": "equipment",
    "price": 4800,
    "icon": "👨",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "+1 Charisma while wearing (people respect the 'stache)",
      "Disadvantage on Perception checks (it tickles your nose)",
      "Falls off on any critical fail"
    ],
    "vendor": "wario_land",
    "shippedBy": "Suspicious Package",
    "levelRequirement": 4
  },
  "wario_land_questionable_potion_of_questionable_power": {
    "id": "wario_land_questionable_potion_of_questionable_power",
    "name": "Wario's 'Probably Magic' Potion",
    "description": "60% chance it does something. 40% chance it's just garlic juice.",
    "category": "equipment",
    "price": 6200,
    "icon": "🧪",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Roll 1d6: 1-2 = no effect, 3-4 = 2d10 temp HP, 5-6 = +2 to all saves for 1 hour",
      "30% chance you are poisoned for 1 round",
      "Tastes suspiciously like Wario's bathwater"
    ],
    "vendor": "wario_land",
    "shippedBy": "Suspicious Bottle Service",
    "levelRequirement": 6
  },
  "wario_land_gold_plated_nothing": {
    "id": "wario_land_gold_plated_nothing",
    "name": "Wario's Gold-Plated Nothing",
    "description": "A gold-plated box containing absolutely nothing. Collector's item.",
    "category": "curiosities",
    "price": 8800,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "The box is empty but valuable: can be sold for 5000 gp",
      "Opening it triggers Wario's laughter (audible 100 ft)",
      "You feel profound emptiness: disadvantage on saves vs. depression for 1 day"
    ],
    "vendor": "wario_land",
    "shippedBy": "Heavy Package",
    "levelRequirement": 7
  },
  "wario_land_bootleg_princess_dress": {
    "id": "wario_land_bootleg_princess_dress",
    "name": "Bootleg Princess Dress (Wario-Sized)",
    "description": "A dress that looks like Peach's but is way too big.",
    "category": "equipment",
    "price": 7200,
    "icon": "👗",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Disguise yourself as a princess (poorly): advantage on Deception vs. blind creatures",
      "Dress is huge: disadvantage on Stealth and speed reduced by 10 ft",
      "Real princesses are offended: disadvantage on Charisma with them"
    ],
    "vendor": "wario_land",
    "shippedBy": "Suspicious Package",
    "levelRequirement": 6
  },
  "wario_land_invisible_coin": {
    "id": "wario_land_invisible_coin",
    "name": "Wario's Invisible Coin",
    "description": "A coin you can't see but can definitely spend (maybe).",
    "category": "curiosities",
    "price": 5200,
    "icon": "🪙",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Coin is invisible: advantage on Sleight of Hand checks to hide it",
      "50% chance shopkeepers believe you when you say you have it",
      "If they don't believe you, they call guards"
    ],
    "vendor": "wario_land",
    "shippedBy": "Invisible Courier",
    "levelRequirement": 5
  },
  "wario_land_garlic_perfume": {
    "id": "wario_land_garlic_perfume",
    "name": "Wario's Garlic Perfume",
    "description": "Perfume that smells like success (and garlic).",
    "category": "equipment",
    "price": 4800,
    "icon": "💐",
    "stock": 6,
    "rarity": "common",
    "effects": [
      "Advantage on Intimidation checks for 1 hour",
      "Disadvantage on Persuasion checks for 2 hours",
      "Vampires avoid you: advantage on saves vs. their charm"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wafting Cloud",
    "levelRequirement": 4
  },
  "wario_land_fake_1up_mushroom": {
    "id": "wario_land_fake_1up_mushroom",
    "name": "Fake 1-UP Mushroom (Looks Real)",
    "description": "A mushroom painted green. It's just a regular mushroom.",
    "category": "equipment",
    "price": 6200,
    "icon": "🍄",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Eating it gives 1d4 temp HP (it's just a mushroom)",
      "You believe you have an extra life: advantage on saves vs. fear for 1 hour",
      "If you die while under this effect, you die anyway (no extra life)"
    ],
    "vendor": "wario_land",
    "shippedBy": "Suspicious Package",
    "levelRequirement": 5
  },
  "wario_land_questionable_insurance_policy": {
    "id": "wario_land_questionable_insurance_policy",
    "name": "Wario's Questionable Insurance Policy",
    "description": "Insures you against everything except what actually happens.",
    "category": "services",
    "price": 7200,
    "icon": "📋",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "If you die, Wario pays you 1000 gp (to your next of kin)",
      "Policy excludes: combat, magic, accidents, disease, old age, and breathing",
      "Wario keeps 90% of the premium as 'processing fee'"
    ],
    "vendor": "wario_land",
    "shippedBy": "Contractual Obligation",
    "levelRequirement": 6
  },
  "wario_land_bootleg_star_rod": {
    "id": "wario_land_bootleg_star_rod",
    "name": "Bootleg Star Rod (Wario's Wish Maker)",
    "description": "A plastic rod with a star on top. Grants one wish (Wario's interpretation).",
    "category": "equipment",
    "price": 15000,
    "icon": "⭐",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "One wish: Wario decides what you actually get (usually garlic or coins)",
      "Rod breaks after one use",
      "Wario laughs maniacally when you buy it"
    ],
    "vendor": "wario_land",
    "shippedBy": "Suspicious Package",
    "levelRequirement": 10
  },
  "wario_land_garlic_mine_sweeper": {
    "id": "wario_land_garlic_mine_sweeper",
    "name": "Garlic Mine Sweeper (Wario's Demining Tool)",
    "description": "A device that detects mines by exploding them with garlic.",
    "category": "equipment",
    "price": 6800,
    "icon": "💣",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Can detect traps within 10 ft: advantage on Perception",
      "When it detects a trap, it triggers it with garlic (you're immune to the garlic effect)",
      "Device is loud: disadvantage on Stealth while using"
    ],
    "vendor": "wario_land",
    "shippedBy": "Explosive Parcel",
    "levelRequirement": 6
  },
  "wario_land_invisible_treasure_map": {
    "id": "wario_land_invisible_treasure_map",
    "name": "Invisible Treasure Map (Wario's Secret)",
    "description": "A map you can't see. Wario says it's there.",
    "category": "curiosities",
    "price": 5200,
    "icon": "🗺️",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Map is invisible: advantage on checks to hide it",
      "50% chance there's actually treasure where it points",
      "If no treasure, Wario says 'you're holding it wrong'"
    ],
    "vendor": "wario_land",
    "shippedBy": "Invisible Courier",
    "levelRequirement": 5
  },
  "wario_land_bootleg_fire_flower": {
    "id": "wario_land_bootleg_fire_flower",
    "name": "Bootleg Fire Flower (Wario's Florist)",
    "description": "A flower that shoots fire… sometimes.",
    "category": "equipment",
    "price": 7200,
    "icon": "🌻",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Once per day: cast Burning Hands (2d6 fire, DC 13)",
      "30% chance the flower backfires: you take 1d6 fire damage",
      "Flower wilts after 3 uses"
    ],
    "vendor": "wario_land",
    "shippedBy": "Floral Freight",
    "levelRequirement": 6
  },
  "wario_land_questionable_life_insurance": {
    "id": "wario_land_questionable_life_insurance",
    "name": "Wario's Life Insurance (Double or Nothing)",
    "description": "If you die, Wario gets paid. If you live, you get nothing.",
    "category": "services",
    "price": 5800,
    "icon": "💀",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "If you die, Wario receives 5000 gp (from your estate)",
      "If you survive the campaign, Wario owes you 100 gp (he won't pay)",
      "You get a certificate that says 'Insured by Wario'"
    ],
    "vendor": "wario_land",
    "shippedBy": "Blood Contract",
    "levelRequirement": 5
  },
  "wario_land_bootleg_princess_peach_autograph": {
    "id": "wario_land_bootleg_princess_peach_autograph",
    "name": "Bootleg Princess Peach Autograph (Wario Forged)",
    "description": "An autograph that looks nothing like Peach's. Wario's signature is on it too.",
    "category": "curiosities",
    "price": 4800,
    "icon": "✍️",
    "stock": 7,
    "rarity": "common",
    "effects": [
      "Collectors might believe it: advantage on Deception vs. gullible NPCs",
      "Real Peach fans are offended: disadvantage on Charisma with them",
      "Wario's ego is visible in the signature"
    ],
    "vendor": "wario_land",
    "shippedBy": "Suspicious Envelope",
    "levelRequirement": 4
  },
  "the_onyx_hand_shadow_dagger": {
    "id": "the_onyx_hand_shadow_dagger",
    "name": "Shadow Dagger of Midnight Deals",
    "description": "A dagger that exists only in shadow.",
    "category": "equipment",
    "price": 7800,
    "icon": "🗡️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "+1 dagger, deals 1d6 psychic damage instead of piercing",
      "Advantage on attacks in darkness",
      "Disadvantage in bright light (blade becomes translucent)"
    ],
    "vendor": "the_onyx_hand",
    "shippedBy": "Shadow Drop",
    "levelRequirement": 6
  },
  "mages_guild_robe_of_endless_pockets": {
    "id": "mages_guild_robe_of_endless_pockets",
    "name": "Robe of Endless Pockets (Mostly Empty)",
    "description": "A robe with infinite pockets that are all empty.",
    "category": "equipment",
    "price": 9200,
    "icon": "🥼",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Can store any number of items (weightless while in robe)",
      "Retrieving an item takes 1d4 rounds (you forget which pocket)",
      "Robe is itchy: disadvantage on Concentration"
    ],
    "vendor": "mages_guild",
    "shippedBy": "Arcane Relay",
    "levelRequirement": 7
  },
  "custodians_mop_of_cleaning_plus": {
    "id": "custodians_mop_of_cleaning_plus",
    "name": "Mop of Cleaning+1",
    "description": "A mop that cleans and fights.",
    "category": "equipment",
    "price": 6800,
    "icon": "🧹",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Can be used as a quarterstaff +1",
      "Once per day: cast Gust of Wind (the mop creates a gust)",
      "You feel compelled to clean: disadvantage if you ignore messes"
    ],
    "vendor": "custodians",
    "shippedBy": "Sanitation Truck",
    "levelRequirement": 5
  },
  "internet_ethernet_cable_whip": {
    "id": "internet_ethernet_cable_whip",
    "name": "Ethernet Cable Whip (Cat-5 O' Nine Tails)",
    "description": "A whip made from old internet cables.",
    "category": "equipment",
    "price": 6200,
    "icon": "🎮",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Whip deals 1d6 slashing + 1d4 psychic (lag damage)",
      "Advantage on checks to trip digital creatures",
      "Disadvantage on Charisma with tech support"
    ],
    "vendor": "internet",
    "shippedBy": "Wireless Signal",
    "levelRequirement": 5
  },
  "changeling_hive_mimic_armor": {
    "id": "changeling_hive_mimic_armor",
    "name": "Mimic Armor (Looks Like Clothes)",
    "description": "Armor that looks like normal clothes but is actually heavy plate.",
    "category": "equipment",
    "price": 9800,
    "icon": "👔",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "AC 18 but looks like common clothes",
      "Disadvantage on Deception checks (people think you're lying about armor)",
      "Armor changes appearance randomly (DM's choice)"
    ],
    "vendor": "changeling_hive",
    "shippedBy": "Metamorphic Delivery",
    "levelRequirement": 8
  },
  "cybernetic_smart_shield": {
    "id": "cybernetic_smart_shield",
    "name": "Smart Shield (With Ads)",
    "description": "A shield that displays targeted advertisements.",
    "category": "equipment",
    "price": 8600,
    "icon": "🛡️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "+2 AC, can display ads: advantage on Charisma with merchants",
      "Ads are distracting: disadvantage on Concentration",
      "Shield tracks your location: disadvantage on Stealth"
    ],
    "vendor": "cybernetic",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 6
  },
  "hacktivist_ad_blocker_helmet": {
    "id": "hacktivist_ad_blocker_helmet",
    "name": "Ad-Blocker Helmet",
    "description": "A helmet that blocks all advertisements.",
    "category": "equipment",
    "price": 7400,
    "icon": "🪖",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Immune to magical advertisements and illusions",
      "You can't see signs or labels: disadvantage on Investigation",
      "Helmet is uncomfortable: disadvantage on Constitution saves vs. headaches"
    ],
    "vendor": "hacktivist",
    "shippedBy": "Anonymous Drop",
    "levelRequirement": 5
  },
  "the_onyx_hand_shadow_boots": {
    "id": "the_onyx_hand_shadow_boots",
    "name": "Shadow Boots of Silent Steps",
    "description": "Boots that make no sound but leave shadow prints.",
    "category": "equipment",
    "price": 8800,
    "icon": "👢",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on Stealth checks",
      "Leave shadow footprints that last 1 hour (can be tracked)",
      "Boots whisper secrets: advantage on Investigation, disadvantage on saves vs. madness"
    ],
    "vendor": "the_onyx_hand",
    "shippedBy": "Shadow Drop",
    "levelRequirement": 7
  },
  "mages_guild_spellbook_of_forgotten_spells": {
    "id": "mages_guild_spellbook_of_forgotten_spells",
    "name": "Spellbook of Forgotten Spells",
    "description": "A book containing spells no one remembers.",
    "category": "equipment",
    "price": 11200,
    "icon": "📚",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Contains 1d4 random spells of levels 1-3 (DM chooses)",
      "Spells are forgotten: you have disadvantage on Arcana to identify them",
      "Book whispers the spells: advantage on casting them, disadvantage on Concentration"
    ],
    "vendor": "mages_guild",
    "shippedBy": "Arcane Relay",
    "levelRequirement": 8
  },
  "custodians_plunger_of_power": {
    "id": "custodians_plunger_of_power",
    "name": "Plunger of Power",
    "description": "A plunger that can unclog anything, including dimensional rifts.",
    "category": "equipment",
    "price": 7600,
    "icon": "🪠",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Can dispel magical effects of 3rd level or lower (1/day)",
      "Advantage on Strength checks to push/pull",
      "You feel compelled to unclog things: disadvantage if you ignore blockages"
    ],
    "vendor": "custodians",
    "shippedBy": "Sanitation Truck",
    "levelRequirement": 6
  },
  "internet_wifi_booster_staff": {
    "id": "internet_wifi_booster_staff",
    "name": "Wi-Fi Booster Staff",
    "description": "A staff that boosts magical signals.",
    "category": "equipment",
    "price": 9200,
    "icon": "📡",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+1 staff, spells have +10 ft range",
      "Creatures within 10 ft must save DC 13 or be distracted (disadvantage on Perception)",
      "Staff emits annoying hum: disadvantage on Stealth"
    ],
    "vendor": "internet",
    "shippedBy": "Wireless Signal",
    "levelRequirement": 7
  },
  "changeling_hive_identity_crisis_cloak": {
    "id": "changeling_hive_identity_crisis_cloak",
    "name": "Identity Crisis Cloak",
    "description": "A cloak that changes your appearance randomly.",
    "category": "equipment",
    "price": 8600,
    "icon": "🧥",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Changes your appearance every hour (DM's choice)",
      "Advantage on Deception checks",
      "Disadvantage on saves vs. confusion (you forget who you are)"
    ],
    "vendor": "changeling_hive",
    "shippedBy": "Metamorphic Delivery",
    "levelRequirement": 6
  },
  "cybernetic_bionic_arm_upgrade": {
    "id": "cybernetic_bionic_arm_upgrade",
    "name": "Bionic Arm Upgrade",
    "description": "A mechanical arm that replaces your normal one.",
    "category": "services",
    "price": 11200,
    "icon": "🦾",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Gain +2 Strength, advantage on Strength checks",
      "Arm can be hacked: disadvantage on saves vs. technomancy",
      "You feel less human: disadvantage on Charisma with druids"
    ],
    "vendor": "cybernetic",
    "shippedBy": "Surgical Drone",
    "levelRequirement": 8
  },
  "hacktivist_burner_phone": {
    "id": "hacktivist_burner_phone",
    "name": "Burner Phone (Self-Destructs)",
    "description": "A phone for one call. Then it explodes.",
    "category": "equipment",
    "price": 6400,
    "icon": "📱",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "One free Sending spell (to anyone, anywhere)",
      "After use, phone explodes: 2d6 fire damage to you (no save)",
      "Number is untraceable: advantage on Deception"
    ],
    "vendor": "hacktivist",
    "shippedBy": "Anonymous Drop",
    "levelRequirement": 5
  },
  "servants_cosmic_asteroid_belt": {
    "id": "servants_cosmic_asteroid_belt",
    "name": "Asteroid Belt (Literally)",
    "description": "A belt made from tiny asteroids.",
    "category": "equipment",
    "price": 9800,
    "icon": "🌑",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+1 AC, can cast Meteor Swarm once (then belt breaks)",
      "Belt is heavy: -10 ft speed",
      "Astronomers hate you: disadvantage on Charisma with them"
    ],
    "vendor": "servants_cosmic",
    "shippedBy": "Meteor Mail",
    "levelRequirement": 9
  },
  "asclepia_medical_malpractice_insurance": {
    "id": "asclepia_medical_malpractice_insurance",
    "name": "Medical Malpractice Insurance",
    "description": "Insurance for when healing goes wrong.",
    "category": "services",
    "price": 7200,
    "icon": "🛡️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "If a healer harms you, you get 1000 gp compensation",
      "Healers are nervous around you: disadvantage on their Medicine checks",
      "You must fill out forms: disadvantage on checks if you don't have a pen"
    ],
    "vendor": "asclepia",
    "shippedBy": "Medical Courier",
    "levelRequirement": 6
  },
  "pony_nobility_magic_hairbrush": {
    "id": "pony_nobility_magic_hairbrush",
    "name": "Magic Hairbrush of Fabulousness",
    "description": "A brush that styles hair with magic.",
    "category": "equipment",
    "price": 6600,
    "icon": "🪮",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "+1 Charisma for 8 hours after use",
      "Hair sparkles: disadvantage on Stealth in darkness",
      "You become vain: disadvantage on saves vs. flattery"
    ],
    "vendor": "pony_nobility",
    "shippedBy": "Enchanted Brush",
    "levelRequirement": 5
  },
  "lemuria_conclave_memory_eraser": {
    "id": "lemuria_conclave_memory_eraser",
    "name": "Memory Eraser (Single Use)",
    "description": "Erase one memory permanently.",
    "category": "services",
    "price": 11200,
    "icon": "🧠",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Erase one memory (your choice) permanently",
      "You forget why you erased it: disadvantage on one check per day",
      "Memory may resurface during stressful moments (DM's discretion)"
    ],
    "vendor": "lemuria_conclave",
    "shippedBy": "Psychic Echo",
    "levelRequirement": 8
  },
  "oracula_cursed_fortune": {
    "id": "oracula_cursed_fortune",
    "name": "Cursed Fortune (Guaranteed Bad Luck)",
    "description": "A fortune that comes true, but badly.",
    "category": "services",
    "price": 5800,
    "icon": "🥠",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Fortune comes true, but in the worst way possible",
      "Advantage on one check (the fortune is technically correct)",
      "Disadvantage on two other checks (unforeseen consequences)"
    ],
    "vendor": "oracula",
    "shippedBy": "Baked Delivery",
    "levelRequirement": 5
  },
  "halfling_luck_charm_pro": {
    "id": "halfling_luck_charm_pro",
    "name": "Halfling Luck Charm Pro",
    "description": "A luck charm that sometimes works.",
    "category": "equipment",
    "price": 7200,
    "icon": "🍀",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Reroll one natural 1 per day",
      "10% chance the charm backfires: you must reroll a natural 20",
      "Only works if you're shorter than 5 feet"
    ],
    "vendor": "halfling",
    "shippedBy": "Hobbit Post",
    "levelRequirement": 5
  },
  "dwarf_realms_beard_of_dwarven_kings": {
    "id": "dwarf_realms_beard_of_dwarven_kings",
    "name": "Beard of Dwarven Kings (Clip-On)",
    "description": "A fake beard that commands respect.",
    "category": "equipment",
    "price": 8600,
    "icon": "🧔",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "+2 Charisma with dwarves",
      "Disadvantage on Charisma with elves (they mock you)",
      "Beard is itchy: disadvantage on Concentration"
    ],
    "vendor": "dwarf_realms",
    "shippedBy": "Beard Oil",
    "levelRequirement": 6
  },
  "greenskins_war_paint_of_waaagh": {
    "id": "greenskins_war_paint_of_waaagh",
    "name": "War Paint of WAAAGH!",
    "description": "Paint that makes you want to fight.",
    "category": "equipment",
    "price": 6200,
    "icon": "🎨",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "+1 to attack rolls for 8 hours",
      "You must shout 'WAAAGH!' when attacking: disadvantage on Stealth",
      "Paint is permanent until scrubbed with steel wool (painful)"
    ],
    "vendor": "greenskins",
    "shippedBy": "War Drum",
    "levelRequirement": 5
  },
  "jotunheimr_giant_gauntlets": {
    "id": "jotunheimr_giant_gauntlets",
    "name": "Giant Gauntlets (Too Big)",
    "description": "Gauntlets made for a giant.",
    "category": "equipment",
    "price": 9200,
    "icon": "🥊",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Your unarmed strikes deal 1d8 bludgeoning",
      "Disadvantage on Sleight of Hand checks",
      "You accidentally break small objects when you touch them"
    ],
    "vendor": "jotunheimr",
    "shippedBy": "Giant Courier",
    "levelRequirement": 7
  },
  "high_elves_elven_cloak_of_arrogance": {
    "id": "high_elves_elven_cloak_of_arrogance",
    "name": "Elven Cloak of Arrogance",
    "description": "A cloak that makes you better than everyone.",
    "category": "equipment",
    "price": 8600,
    "icon": "🧥",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Charisma checks with elves",
      "Disadvantage on Charisma with non-elves (they're beneath you)",
      "Cloak is pretentious: you must speak in iambic pentameter"
    ],
    "vendor": "high_elves",
    "shippedBy": "Graceful Stride",
    "levelRequirement": 6
  },
  "dark_elves_spider_silk_armor": {
    "id": "dark_elves_spider_silk_armor",
    "name": "Spider Silk Armor",
    "description": "Light armor made from spider silk.",
    "category": "equipment",
    "price": 9800,
    "icon": "🕷️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "AC 14 + Dex (max +3), weighs 5 lbs",
      "Advantage on checks to climb",
      "Arachnophobes are terrified: disadvantage on Charisma with them"
    ],
    "vendor": "dark_elves",
    "shippedBy": "Web Delivery",
    "levelRequirement": 7
  },
  "trainer_guild_pokeball_shield": {
    "id": "trainer_guild_pokeball_shield",
    "name": "Poké Ball Shield",
    "description": "A shield that looks like a Poké Ball.",
    "category": "equipment",
    "price": 7200,
    "icon": "⚪",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "+2 AC, can reflect spells of 3rd level or lower (1/day)",
      "Reflect fails: spell hits you instead with double damage",
      "Shield occasionally opens: you must Dex save DC 12 or be 'captured' (restrained for 1 round)"
    ],
    "vendor": "trainer_guild",
    "shippedBy": "Pokedex Delivery",
    "levelRequirement": 6
  },
  "crimision_isle_pirate_cutlass": {
    "id": "crimision_isle_pirate_cutlass",
    "name": "Pirate Cutlass 'The Sea's Revenge'",
    "description": "A cutlass that thirsts for blood.",
    "category": "equipment",
    "price": 8600,
    "icon": "⚔️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "+1 scimitar, deals +1d6 damage to creatures with blood",
      "You must deal damage each day or the cutlass deals 1d6 to you",
      "Advantage on Intimidation checks on ships"
    ],
    "vendor": "crimision_isle",
    "shippedBy": "Pirate Courier",
    "levelRequirement": 6
  },
  "blessed_order_holy_mace": {
    "id": "blessed_order_holy_mace",
    "name": "Holy Mace of the Blessed Order",
    "description": "A mace that smites the unholy.",
    "category": "equipment",
    "price": 9400,
    "icon": "🔨",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+2 mace, deals +1d8 radiant to undead and fiends",
      "You must pray for 1 hour each day or lose the bonus",
      "Unholy creatures target you first"
    ],
    "vendor": "blessed_order",
    "shippedBy": "Holy Procession",
    "levelRequirement": 7
  },
  "sirsirian_ocean_trident_of_tides": {
    "id": "sirsirian_ocean_trident_of_tides",
    "name": "Trident of Tides",
    "description": "A trident that controls water.",
    "category": "equipment",
    "price": 10200,
    "icon": "🔱",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+2 trident, can cast Create or Destroy Water (3/day)",
      "Advantage on attacks in water",
      "Disadvantage on attacks on land (you miss the sea)"
    ],
    "vendor": "sirsirian_ocean",
    "shippedBy": "Tidal Wave",
    "levelRequirement": 8
  },
  "saddle_arabia_camel_saddle_of_comfort": {
    "id": "saddle_arabia_camel_saddle_of_comfort",
    "name": "Camel Saddle of Eternal Comfort",
    "description": "A saddle so comfortable you never want to leave.",
    "category": "equipment",
    "price": 7200,
    "icon": "🐪",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "While mounted: advantage on saves vs. exhaustion",
      "You must succeed DC 13 Wisdom save to dismount (it's too comfy)",
      "Camels love you: advantage on Animal Handling with them"
    ],
    "vendor": "saddle_arabia",
    "shippedBy": "Camel Caravan",
    "levelRequirement": 5
  },
  "ratchet_raiders_wrench_of_tinkering": {
    "id": "ratchet_raiders_wrench_of_tinkering",
    "name": "Wrench of Infinite Tinkering",
    "description": "A wrench that can fix anything (poorly).",
    "category": "equipment",
    "price": 8200,
    "icon": "🔧",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Advantage on checks to repair items",
      "Repaired items work for 1d4 hours then break again",
      "You feel compelled to fix broken things: disadvantage if you ignore them"
    ],
    "vendor": "ratchet_raiders",
    "shippedBy": "Wrench Throw",
    "levelRequirement": 6
  },
  "wario_land_gold_digger_shovel": {
    "id": "wario_land_gold_digger_shovel",
    "name": "Gold Digger's Shovel",
    "description": "A shovel that finds gold (and trouble).",
    "category": "equipment",
    "price": 7600,
    "icon": "⛏️",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Advantage on checks to find treasure",
      "Shovel is cursed: you must dig at every X you see",
      "50% chance you dig up something angry"
    ],
    "vendor": "wario_land",
    "shippedBy": "Heavy Package",
    "levelRequirement": 6
  },
  "millennium_millennial_sword": {
    "id": "millennium_millennial_sword",
    "name": "Millennial Sword (Participation Trophy)",
    "description": "A sword given to everyone who fought in the war.",
    "category": "equipment",
    "price": 6800,
    "icon": "🗡️",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "+1 longsword, advantage on Charisma with other millennials",
      "Disadvantage on Intimidation (it's not that impressive)",
      "You feel entitled: disadvantage on saves vs. greed"
    ],
    "vendor": "millennium",
    "shippedBy": "Courier",
    "levelRequirement": 5
  },
  "mu_empire_ancient_sandals": {
    "id": "mu_empire_ancient_sandals",
    "name": "Ancient Sandals of the Mu Empire",
    "description": "Sandals that have seen empires rise and fall.",
    "category": "equipment",
    "price": 8200,
    "icon": "🩴",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "+10 speed, advantage on History checks",
      "Sandals are fragile: break on any critical hit (you fall prone)",
      "You feel ancient: disadvantage on saves vs. necrotic damage"
    ],
    "vendor": "mu_empire",
    "shippedBy": "Silk Road Courier",
    "levelRequirement": 6
  },
  "mages_guild_spellbook_of_plagiarism": {
    "id": "mages_guild_spellbook_of_plagiarism",
    "name": "Spellbook of Plagiarism",
    "description": "A spellbook that copies other spells.",
    "category": "equipment",
    "price": 9800,
    "icon": "📖",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Can copy one spell you see cast (once per day)",
      "Copied spell is slightly wrong: DM changes one word",
      "Original spellcaster may sue: disadvantage on Charisma with them"
    ],
    "vendor": "mages_guild",
    "shippedBy": "Arcane Relay",
    "levelRequirement": 7
  },
  "data_merchant_statistical_armor": {
    "id": "data_merchant_statistical_armor",
    "name": "Statistical Armor (Based on Probability)",
    "description": "Armor that may or may not exist.",
    "category": "equipment",
    "price": 8600,
    "icon": "📊",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "At start of each day: roll 1d4 → that's your AC bonus (1-4)",
      "Armor is invisible: advantage on Deception",
      "You doubt its existence: disadvantage on saves vs. illusions"
    ],
    "vendor": "data_merchant",
    "shippedBy": "Data Stream",
    "levelRequirement": 6
  },
  "changeling_hive_personality_swap_potion": {
    "id": "changeling_hive_personality_swap_potion",
    "name": "Personality Swap Potion (Temporary)",
    "description": "Swap personalities with the nearest creature.",
    "category": "equipment",
    "price": 7600,
    "icon": "🧪",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Drink: swap personalities with nearest creature for 1 hour (Wis save DC 15 negates)",
      "You gain each other's proficiencies but also flaws",
      "After effect: both are confused for 1 minute"
    ],
    "vendor": "changeling_hive",
    "shippedBy": "Metamorphic Delivery",
    "levelRequirement": 6
  },
  "cybernetic_memory_chip_implant": {
    "id": "cybernetic_memory_chip_implant",
    "name": "Memory Chip Implant",
    "description": "A chip that stores memories.",
    "category": "services",
    "price": 10200,
    "icon": "💾",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Store up to 10 memories (perfect recall)",
      "Chip can be hacked: disadvantage on saves vs. memory alteration",
      "You forget things naturally: disadvantage on Wisdom checks without the chip"
    ],
    "vendor": "cybernetic",
    "shippedBy": "Surgical Drone",
    "levelRequirement": 8
  },
  "hacktivist_zero_day_exploit": {
    "id": "hacktivist_zero_day_exploit",
    "name": "Zero-Day Exploit (Single Use)",
    "description": "Hack anything once.",
    "category": "services",
    "price": 11200,
    "icon": "💻",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Automatically succeed on one Technology or Thieves' Tools check",
      "Using it alerts the authorities: they hunt you for 1 week",
      "Wario takes credit: disadvantage on Charisma with hackers"
    ],
    "vendor": "hacktivist",
    "shippedBy": "Anonymous Drop",
    "levelRequirement": 9
  },
  "servants_cosmic_horoscope_subscription": {
    "id": "servants_cosmic_horoscope_subscription",
    "name": "Premium Horoscope Subscription",
    "description": "Daily prophecies delivered by starlight.",
    "category": "services",
    "price": 6800,
    "icon": "♈",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Each morning: receive a prophecy (DM gives vague hint)",
      "Prophecy is 50% accurate",
      "You become superstitious: disadvantage if you ignore it"
    ],
    "vendor": "servants_cosmic",
    "shippedBy": "Starlight Beam",
    "levelRequirement": 5
  },
  "asclepia_health_potion_subscription": {
    "id": "asclepia_health_potion_subscription",
    "name": "Health Potion Subscription Box",
    "description": "Monthly potions delivered to your door.",
    "category": "premium",
    "price": 8600,
    "icon": "📦",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Each week: receive 1d4 healing potions (2d4+2)",
      "10% chance potions are mislabeled (could be poison)",
      "Subscription auto-renews: lose 100 gp per month automatically"
    ],
    "vendor": "asclepia",
    "shippedBy": "Medical Courier",
    "levelRequirement": 6
  },
  "pony_nobility_friendship_counseling": {
    "id": "pony_nobility_friendship_counseling",
    "name": "Friendship Counseling (Group Session)",
    "description": "Therapy for your party's issues.",
    "category": "services",
    "price": 6200,
    "icon": "💕",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Party gains +1 to all saves for 24 hours (bonding)",
      "Everyone must share feelings: disadvantage on Intimidation for 1 day",
      "One random party member reveals a secret (DM's choice)"
    ],
    "vendor": "pony_nobility",
    "shippedBy": "Heartfelt Message",
    "levelRequirement": 5
  },
  "lemuria_conclave_past_life_regression_package": {
    "id": "lemuria_conclave_past_life_regression_package",
    "name": "Past Life Regression (Deluxe)",
    "description": "Remember all your past lives at once.",
    "category": "services",
    "price": 11200,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Gain one random skill proficiency from a past life (permanent)",
      "You have flashbacks: disadvantage on one check per day",
      "Past life was a failure: you gain a flaw (DM's choice)"
    ],
    "vendor": "lemuria_conclave",
    "shippedBy": "Past Life Echo",
    "levelRequirement": 8
  },
  "oracula_fortune_telling_session": {
    "id": "oracula_fortune_telling_session",
    "name": "Fortune Telling Session (Live)",
    "description": "Oracula tells your fortune in person.",
    "category": "services",
    "price": 7200,
    "icon": "🔮",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Learn one true prophecy (DM gives specific hint)",
      "Prophecy is cryptic: disadvantage on checks to interpret it",
      "Oracula charges extra for clarification: 100 gp per question"
    ],
    "vendor": "oracula",
    "shippedBy": "Baked Delivery",
    "levelRequirement": 6
  },
  "halfling_second_breakfast_catering_service": {
    "id": "halfling_second_breakfast_catering_service",
    "name": "Second Breakfast Catering (Weekly)",
    "description": "Halflings deliver breakfast to your location.",
    "category": "premium",
    "price": 8600,
    "icon": "🥞",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Each morning: receive a breakfast that grants 1d6 temp HP",
      "Breakfast is heavy: disadvantage on Dexterity checks for 1 hour",
      "You gain weight: armor doesn't fit after 30 days"
    ],
    "vendor": "halfling",
    "shippedBy": "Hobbit Post",
    "levelRequirement": 5
  },
  "dwarf_realms_beard_mortgage_refinance": {
    "id": "dwarf_realms_beard_mortgage_refinance",
    "name": "Beard Mortgage Refinance",
    "description": "Refinance your beard loan.",
    "category": "services",
    "price": 9200,
    "icon": "💰",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reduce your beard debt by 500 gp",
      "Extend loan term: beard grows 1 inch per day until repaid",
      "Default: beard becomes sentient and seeks revenge"
    ],
    "vendor": "dwarf_realms",
    "shippedBy": "Gold Cart",
    "levelRequirement": 7
  },
  "greenskins_waaagh_energy_drink_subscription": {
    "id": "greenskins_waaagh_energy_drink_subscription",
    "name": "WAAAGH! Energy Drink Subscription",
    "description": "Monthly delivery of energy drinks.",
    "category": "premium",
    "price": 7600,
    "icon": "🥤",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Each week: receive 4 drinks that grant +1 attack for 1 hour",
      "Drinks cause jitters: disadvantage on Dexterity checks after 2 drinks",
      "You become addicted: disadvantage on checks without a drink"
    ],
    "vendor": "greenskins",
    "shippedBy": "Choppa Delivery",
    "levelRequirement": 5
  },
  "mushroom_regency_mycelium_network_subscription": {
    "id": "mushroom_regency_mycelium_network_subscription",
    "name": "Mycelium Network Subscription (Premium)",
    "description": "Access to the fungal internet.",
    "category": "premium",
    "price": 8600,
    "icon": "🍄",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Communicate telepathically with other subscribers within 10 miles",
      "Mushroom spies give you gossip: advantage on Investigation",
      "You crave dirt: disadvantage on Charisma in clean environments"
    ],
    "vendor": "mushroom_regency",
    "shippedBy": "Spore Cloud",
    "levelRequirement": 6
  },
  "beanbean_kingdom_bean_counting_service": {
    "id": "beanbean_kingdom_bean_counting_service",
    "name": "Bean Counting Service (Professional)",
    "description": "Experts count your beans.",
    "category": "services",
    "price": 6200,
    "icon": "💰",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Counts your gold perfectly: find 10% extra (they take 5% fee)",
      "You get a certificate of bean authenticity",
      "You develop OCD: disadvantage on checks if you don't count things"
    ],
    "vendor": "beanbean_kingdom",
    "shippedBy": "Bean Counter",
    "levelRequirement": 5
  },
  "dk_crew_banana_conservation_service": {
    "id": "dk_crew_banana_conservation_service",
    "name": "Banana Conservation Service",
    "description": "Preserve your bananas forever.",
    "category": "services",
    "price": 5200,
    "icon": "🍌",
    "stock": 6,
    "rarity": "common",
    "effects": [
      "Preserve up to 50 bananas (never spoil)",
      "Preserved bananas are rock hard: 1d4 bludgeoning if thrown",
      "Monkeys hate you: disadvantage on Animal Handling with them"
    ],
    "vendor": "dk_crew",
    "shippedBy": "Barrel Roll Delivery",
    "levelRequirement": 4
  },
  "yoshi_clans_egg_daycare_service": {
    "id": "yoshi_clans_egg_daycare_service",
    "name": "Egg Daycare Service (Weekly)",
    "description": "They watch your eggs while you're away.",
    "category": "services",
    "price": 6800,
    "icon": "🥚",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Hatch 1d4 eggs per week (random creatures)",
      "50% chance eggs hatch into something dangerous",
      "You must pay 100 gp per egg per week"
    ],
    "vendor": "yoshi_clans",
    "shippedBy": "Egg Drop",
    "levelRequirement": 5
  },
  "kremling_krew_cannon_rental": {
    "id": "kremling_krew_cannon_rental",
    "name": "Cannon Rental (Hourly)",
    "description": "Rent a cannon for an hour.",
    "category": "services",
    "price": 8200,
    "icon": "🔫",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Cannon deals 4d10 bludgeoning damage (60 ft range)",
      "You must return it: disadvantage on Charisma if you don't",
      "Cannon may explode: 10% chance per use (3d6 fire to you)"
    ],
    "vendor": "kremling_krew",
    "shippedBy": "Cannonball Express",
    "levelRequirement": 7
  },
  "lizardmen_swamp_guided_tour": {
    "id": "lizardmen_swamp_guided_tour",
    "name": "Swamp Guided Tour (Alligator Included)",
    "description": "Tour the swamp with a guide.",
    "category": "services",
    "price": 5800,
    "icon": "🐊",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Learn swamp secrets: advantage on Survival in swamps for 30 days",
      "Guide is an alligator: disadvantage on Charisma (it doesn't talk)",
      "50% chance you get lost anyway"
    ],
    "vendor": "lizardmen",
    "shippedBy": "Murky Waters Courier",
    "levelRequirement": 5
  },
  "halfling_gardening_service": {
    "id": "halfling_gardening_service",
    "name": "Halfling Gardening Service (Monthly)",
    "description": "Halflings tend your garden.",
    "category": "services",
    "price": 6200,
    "icon": "🌱",
    "stock": 7,
    "rarity": "common",
    "effects": [
      "Garden produces 2d10 herbs per month",
      "Garden becomes sentient: may refuse to grow certain plants",
      "Halflings eat 10% of the harvest"
    ],
    "vendor": "halfling",
    "shippedBy": "Hobbit Post",
    "levelRequirement": 4
  },
  "dwarf_realms_beard_grooming_service": {
    "id": "dwarf_realms_beard_grooming_service",
    "name": "Beard Grooming Service (Royal Treatment)",
    "description": "Professional beard styling.",
    "category": "services",
    "price": 7200,
    "icon": "✂️",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "+1 Charisma with dwarves for 7 days",
      "Beard becomes so majestic: disadvantage on Stealth",
      "You must protect your beard: disadvantage on saves vs. fear of beard damage"
    ],
    "vendor": "dwarf_realms",
    "shippedBy": "Beard Oil",
    "levelRequirement": 5
  },
  "greenskins_war_drumming_service": {
    "id": "greenskins_war_drumming_service",
    "name": "War Drumming Service (Battle)",
    "description": "Orc drummers follow you into battle.",
    "category": "services",
    "price": 8600,
    "icon": "🥁",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Drummers grant +1 to attack rolls to allies within 60 ft",
      "Drums are loud: disadvantage on Stealth",
      "Drummers steal loot: 10% of gold goes to them"
    ],
    "vendor": "greenskins",
    "shippedBy": "War Drum",
    "levelRequirement": 6
  },
  "jotunheimr_giant_translation_service": {
    "id": "jotunheimr_giant_translation_service",
    "name": "Giant Translation Service",
    "description": "Translate giant speak.",
    "category": "services",
    "price": 6200,
    "icon": "🗣️",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Learn Giant language for 7 days",
      "Giants think you're mocking them: disadvantage on Charisma",
      "You speak loudly: disadvantage on Stealth"
    ],
    "vendor": "jotunheimr",
    "shippedBy": "Giant Courier",
    "levelRequirement": 5
  },
  "high_elves_etiquette_lessons": {
    "id": "high_elves_etiquette_lessons",
    "name": "Elven Etiquette Lessons (Crash Course)",
    "description": "Learn elven manners.",
    "category": "services",
    "price": 7200,
    "icon": "🧘",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Charisma with elves for 7 days",
      "You must be polite: disadvantage on Intimidation",
      "Elves test you: one random check per day with disadvantage"
    ],
    "vendor": "high_elves",
    "shippedBy": "Graceful Stride",
    "levelRequirement": 5
  },
  "dark_elves_edgelord_training": {
    "id": "dark_elves_edgelord_training",
    "name": "Edgelord Training Program",
    "description": "Learn to be dark and mysterious.",
    "category": "services",
    "price": 6800,
    "icon": "🖤",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "+1 to Intimidation for 7 days",
      "You must brood: disadvantage on Persuasion",
      "Sunlight sensitivity for 7 days (even if you didn't have it)"
    ],
    "vendor": "dark_elves",
    "shippedBy": "Shadow Courier",
    "levelRequirement": 5
  },
  "trainer_guild_pokemon_therapy_session": {
    "id": "trainer_guild_pokemon_therapy_session",
    "name": "Pokémon Therapy Session",
    "description": "Therapy for your animal companions.",
    "category": "services",
    "price": 5800,
    "icon": "🐾",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Animal companion gains +1 to attack rolls for 7 days",
      "Companion reveals trauma: you learn a secret about it",
      "You must attend group therapy: disadvantage on checks if you skip"
    ],
    "vendor": "trainer_guild",
    "shippedBy": "Pokedex Delivery",
    "levelRequirement": 5
  },
  "crimision_isle_pirate_licensing_service": {
    "id": "crimision_isle_pirate_licensing_service",
    "name": "Pirate Licensing Service",
    "description": "Get your official pirate license.",
    "category": "services",
    "price": 8200,
    "icon": "🏴‍☠️",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Legal license to pirate (in certain waters): advantage on Charisma with pirates",
      "Navy hunts you: disadvantage on Stealth near military",
      "License expires in 30 days: must renew for 500 gp"
    ],
    "vendor": "crimision_isle",
    "shippedBy": "Pirate Courier",
    "levelRequirement": 6
  },
  "blessed_order_confession_service": {
    "id": "blessed_order_confession_service",
    "name": "Confession Service (All Sins Forgiven)",
    "description": "Confess your sins for absolution.",
    "category": "services",
    "price": 6200,
    "icon": "🙏",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Remove one alignment-based penalty or curse",
      "You must truly repent: disadvantage on checks if you sin again",
      "Priest gossips: your secret is known to 1d4 NPCs"
    ],
    "vendor": "blessed_order",
    "shippedBy": "Holy Procession",
    "levelRequirement": 5
  },
  "sirsirian_ocean_underwater_breathing_lessons": {
    "id": "sirsirian_ocean_underwater_breathing_lessons",
    "name": "Underwater Breathing Lessons",
    "description": "Learn to hold your breath for hours.",
    "category": "services",
    "price": 7200,
    "icon": "💧",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Can hold breath for 1 hour",
      "You develop gill envy: disadvantage on Charisma with fish",
      "You smell like fish: disadvantage on Stealth"
    ],
    "vendor": "sirsirian_ocean",
    "shippedBy": "Tidal Wave",
    "levelRequirement": 6
  },
  "saddle_arabia_sand_navigation_course": {
    "id": "saddle_arabia_sand_navigation_course",
    "name": "Sand Navigation Masterclass",
    "description": "Learn to navigate by sand dunes.",
    "category": "services",
    "price": 6800,
    "icon": "🏜️",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Survival in deserts for 30 days",
      "You see dunes everywhere: disadvantage on Perception in cities",
      "Camels respect you: advantage on Animal Handling with them"
    ],
    "vendor": "saddle_arabia",
    "shippedBy": "Camel Caravan",
    "levelRequirement": 5
  },
  "ratchet_raiders_mechanical_companion_rental": {
    "id": "ratchet_raiders_mechanical_companion_rental",
    "name": "Mechanical Companion Rental (Hourly)",
    "description": "Rent a robot friend.",
    "category": "services",
    "price": 8200,
    "icon": "🤖",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Rent a CR 2 construct for 1 hour",
      "Construct follows commands but is clumsy: disadvantage on its checks",
      "You break it, you buy it: 5000 gp if destroyed"
    ],
    "vendor": "ratchet_raiders",
    "shippedBy": "Oil Can",
    "levelRequirement": 6
  },
  "wario_land_garlic_futures_contract": {
    "id": "wario_land_garlic_futures_contract",
    "name": "Garlic Futures Contract (Speculative)",
    "description": "Invest in garlic.",
    "category": "services",
    "price": 7600,
    "icon": "📈",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Invest 1000 gp: 50% chance to gain 2000 gp in 30 days",
      "50% chance you lose everything (Wario swears it's a sure thing)",
      "You must talk about garlic constantly: disadvantage on Charisma"
    ],
    "vendor": "wario_land",
    "shippedBy": "Contractual Obligation",
    "levelRequirement": 5
  },
  "millennium_retro_gaming_console": {
    "id": "millennium_retro_gaming_console",
    "name": "Retro Gaming Console (Cursed)",
    "description": "Play games from the before times.",
    "category": "equipment",
    "price": 9200,
    "icon": "🎮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Playing for 1 hour grants inspiration",
      "You become addicted: disadvantage on checks if you don't play daily",
      "Save vs. being trapped in a game (DC 15) each week"
    ],
    "vendor": "millennium",
    "shippedBy": "Courier",
    "levelRequirement": 7
  },
  "mu_empire_ancient_curse_removal": {
    "id": "mu_empire_ancient_curse_removal",
    "name": "Ancient Curse Removal (90% Effective)",
    "description": "Remove curses the ancient way.",
    "category": "services",
    "price": 11200,
    "icon": "🏺",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Remove one curse (90% success rate)",
      "10% chance curse transfers to you",
      "You gain a new curse: disadvantage on saves vs. ancient magic"
    ],
    "vendor": "mu_empire",
    "shippedBy": "Silk Road Courier",
    "levelRequirement": 8
  },
  "mages_guild_spell_slot_rental": {
    "id": "mages_guild_spell_slot_rental",
    "name": "Spell Slot Rental (By the Hour)",
    "description": "Rent a spell slot from another wizard.",
    "category": "services",
    "price": 8200,
    "icon": "🎰",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Rent one spell slot (level 1-3) for 1 hour",
      "Slot is unstable: 20% chance spell fails",
      "You owe the wizard a favor: minor quest hook"
    ],
    "vendor": "mages_guild",
    "shippedBy": "Arcane Relay",
    "levelRequirement": 6
  },
  "data_merchant_data_backup_service": {
    "id": "data_merchant_data_backup_service",
    "name": "Data Backup Service (Cloud Storage)",
    "description": "Back up your memories to the cloud.",
    "category": "services",
    "price": 9200,
    "icon": "☁️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Back up your memories: immune to memory alteration",
      "Cloud gets hacked: 5% chance your memories are leaked",
      "You get targeted ads: disadvantage on saves vs. suggestion"
    ],
    "vendor": "data_merchant",
    "shippedBy": "Data Stream",
    "levelRequirement": 7
  },
  "changeling_hive_identity_theft_insurance": {
    "id": "changeling_hive_identity_theft_insurance",
    "name": "Identity Theft Insurance",
    "description": "Insurance against identity theft.",
    "category": "services",
    "price": 6800,
    "icon": "🛡️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "If your identity is stolen, get 1000 gp compensation",
      "Changelings are insulted: disadvantage on Charisma with them",
      "You must prove your identity: disadvantage on checks without ID"
    ],
    "vendor": "changeling_hive",
    "shippedBy": "Metamorphic Delivery",
    "levelRequirement": 5
  },
  "cybernetic_system_update_service": {
    "id": "cybernetic_system_update_service",
    "name": "System Update Service (Mandatory)",
    "description": "Update your cybernetic systems.",
    "category": "services",
    "price": 8200,
    "icon": "🔄",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Update fixes bugs: advantage on Technology checks",
      "Update introduces new bugs: disadvantage on one random check type",
      "Update takes 8 hours: you are unconscious during"
    ],
    "vendor": "cybernetic",
    "shippedBy": "Surgical Drone",
    "levelRequirement": 6
  },
  "hacktivist_dark_web_subscription": {
    "id": "hacktivist_dark_web_subscription",
    "name": "Dark Web Subscription (Annual)",
    "description": "Access the dark web.",
    "category": "premium",
    "price": 9800,
    "icon": "🌐",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Access illegal goods: advantage on Investigation in black markets",
      "FBI may monitor you: disadvantage on Stealth in cities",
      "Subscription auto-renews: lose 100 gp per month"
    ],
    "vendor": "hacktivist",
    "shippedBy": "Anonymous Drop",
    "levelRequirement": 8
  },
  "the_onyx_hand_assassination_contract": {
    "id": "the_onyx_hand_assassination_contract",
    "name": "Assassination Contract (Target of Your Choice)",
    "description": "Hire an assassin.",
    "category": "services",
    "price": 15000,
    "icon": "🗡️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Target is assassinated (no save, but plot armor applies)",
      "Assassin may betray you: 10% chance they come for you next",
      "You gain a reputation: disadvantage on Charisma with lawful NPCs"
    ],
    "vendor": "the_onyx_hand",
    "shippedBy": "Shadow Drop",
    "levelRequirement": 10,
    "warning": "Using this may end your campaign."
  },
  "servants_cosmic_star_chart_subscription": {
    "id": "servants_cosmic_star_chart_subscription",
    "name": "Star Chart Subscription (Daily Horoscopes)",
    "description": "Daily star charts delivered by meteor.",
    "category": "premium",
    "price": 7600,
    "icon": "🌟",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Each day: receive a horoscope that grants advantage on one check",
      "Horoscope is 60% accurate",
      "You become superstitious: disadvantage if you don't follow it"
    ],
    "vendor": "servants_cosmic",
    "shippedBy": "Meteor Mail",
    "levelRequirement": 5
  },
  "asclepia_plague_insurance": {
    "id": "asclepia_plague_insurance",
    "name": "Plague Insurance (Pandemic Coverage)",
    "description": "Insurance against plagues.",
    "category": "services",
    "price": 8200,
    "icon": "🦠",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "If you contract a disease: get 2000 gp compensation",
      "You must quarantine: disadvantage on Charisma for 30 days",
      "Policy excludes magical diseases"
    ],
    "vendor": "asclepia",
    "shippedBy": "Medical Courier",
    "levelRequirement": 6
  },
  "pony_nobility_friendship_boot_camp": {
    "id": "pony_nobility_friendship_boot_camp",
    "name": "Friendship Boot Camp (Intensive)",
    "description": "A week of intense friendship training.",
    "category": "services",
    "price": 9800,
    "icon": "💪",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Party gains +1 to all saves for 30 days",
      "You must attend daily: miss a day, lose the bonus",
      "Boot camp is exhausting: gain 1 level of exhaustion upon completion"
    ],
    "vendor": "pony_nobility",
    "shippedBy": "Heartfelt Message",
    "levelRequirement": 7
  },
  "lemuria_conclave_memory_consolidation": {
    "id": "lemuria_conclave_memory_consolidation",
    "name": "Memory Consolidation Service",
    "description": "Organize your memories.",
    "category": "services",
    "price": 8600,
    "icon": "🧠",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Intelligence checks for 7 days",
      "You remember embarrassing things: disadvantage on Charisma once per day",
      "Memories are sorted alphabetically: disadvantage on quick recall"
    ],
    "vendor": "lemuria_conclave",
    "shippedBy": "Psychic Echo",
    "levelRequirement": 6
  },
  "oracula_prophecy_verification_service": {
    "id": "oracula_prophecy_verification_service",
    "name": "Prophecy Verification Service",
    "description": "Verify if a prophecy is true.",
    "category": "services",
    "price": 9200,
    "icon": "✔️",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Learn if one prophecy is true (DM tells you)",
      "Verification is vague: 'Maybe, maybe not'",
      "You doubt all prophecies: disadvantage on saves vs. divination"
    ],
    "vendor": "oracula",
    "shippedBy": "Baked Delivery",
    "levelRequirement": 7
  },
  "night_koopa_shell_polish": {
    "id": "night_koopa_shell_polish",
    "name": "Midnight Koopa Shell Polish",
    "description": "Black-market shell wax that makes any Koopa shell completely invisible under moonlight.",
    "price": 3000,
    "icon": "🌙",
    "stock": 3,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Apply to any shell armor/shield: becomes invisible at night (+2 Stealth while worn)",
      "Shell reflects moonlight perfectly — disadvantage on Stealth if any light source hits it directly",
      "Smells like Wario’s cologne for 24 hours"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 4
  },
  "night_fake_starman": {
    "id": "night_fake_starman",
    "name": "Bootleg Starman (30-second charge)",
    "description": "A flickering, off-brand star that works… kinda.",
    "price": 3500,
    "icon": "⭐",
    "stock": 4,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Single use: grants invincibility and +10 ft speed for 30 seconds",
      "After 30 sec: violently explodes for 3d6 fire in 10 ft radius (no save)",
      "Music plays loudly the entire time (8-bit star theme, cannot be silenced)"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 5
  },
  "night_bob_omb_alarm_clock": {
    "id": "night_bob_omb_alarm_clock",
    "name": "Bob-omb Alarm Clock (Guaranteed Wake-Up)",
    "description": "It will wake you up. Permanently, if you sleep through it.",
    "price": 3200,
    "icon": "💣",
    "stock": 6,
    "rarity": "common",
    "stockType": "night_only",
    "effects": [
      "Sets alarm — at the chosen time, explodes for 4d6 fire in 15 ft (Dex save DC 14 for half)",
      "You wake up instantly (no save needed)",
      "One use. Ever."
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 3
  },
  "night_wario_private_reserve_garlic": {
    "id": "night_wario_private_reserve_garlic",
    "name": "Wario's Private Reserve Garlic (Aged 7 Years)",
    "description": "One bulb. Wario cried when he sold it.",
    "price": 8000,
    "icon": "🧄",
    "stock": 1,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Eat raw: gain 2d10 temp HP and emit a 30-ft garlic aura for 1 hour",
      "Creatures in aura must Con save DC 16 or be poisoned",
      "Vampires auto-fail and take 4d6 radiant",
      "You cannot speak without saying 'WAH' for the duration"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 7,
    "warning": "Wario will personally hunt you if you waste it."
  },
  "night_one_wing_angel_feather": {
    "id": "night_one_wing_angel_feather",
    "name": "One-Wing Angel Feather (Real One This Time)",
    "description": "A black feather that bleeds when no one is looking.",
    "price": 7500,
    "icon": "🪶",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Once per long rest: sprout one black wing for 1 hour — gain 60 ft fly speed",
      "While active, all healing received is reduced by half",
      "When the duration ends, take 3d6 psychic damage as the wing tears off"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 8
  },
  "night_waluigi_tennis_racket": {
    "id": "night_waluigi_tennis_racket",
    "name": "Waluigi's Tennis Racket (Match-Used)",
    "description": "The racket he used to beat Mario in that one tournament no one remembers.",
    "price": 6800,
    "icon": "🎾",
    "stock": 1,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "+2 weapon (1d8 bludgeoning + 1d6 force on crit)",
      "Once per day: serve an enemy so hard they must Dex save DC 17 or be knocked prone and stunned until end of their next turn",
      "Every time you crit, you must shout 'WAAALUIGI TIME' or the racket deals 1d6 psychic to you instead"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 7
  },
  "night_moonlight_mushroom": {
    "id": "night_moonlight_mushroom",
    "name": "Moonlight Mushroom (Grows Only Under Full Moon)",
    "description": "A glowing blue mushroom harvested at 3:33 AM.",
    "price": 5800,
    "icon": "🌕",
    "stock": 3,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Consume: gain Truesight 60 ft for 1 hour",
      "You become bioluminescent — cannot benefit from invisibility or Stealth in darkness",
      "After effect ends, you are blinded for 1 minute as your eyes adjust"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 6
  },
  "night_boo_house_deed": {
    "id": "night_boo_house_deed",
    "name": "Haunted Boo Mansion Deed (Legit…ish)",
    "description": "Own a real haunted mansion. Ghosts included free of charge.",
    "price": 9000,
    "icon": "🏚️",
    "stock": 1,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Grants ownership of a haunted mansion (DM places on map)",
      "3d4 Boos live there and are… mostly friendly",
      "Every full moon they try to scare you to death (save or frightened for 1 hour)",
      "Wario already looted anything valuable"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 8
  },
  "night_wario_time_stop_watch": {
    "id": "night_wario_time_stop_watch",
    "name": "Wario Time-Stop Pocket Watch (3 Seconds)",
    "description": "Stops time for exactly 3 seconds. Wario used it to pick pockets.",
    "price": 12000,
    "icon": "⏱️",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "Once per week: stop time for 3 seconds (you can move and take one action)",
      "When time resumes, you must shout 'IT'S WARIO TIME!' or the watch explodes (6d6 force in 20 ft)",
      "Watch is cracked — 5% chance per use it shatters permanently"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 10,
    "warning": "Wario wants this one back eventually."
  },
  "night_infinite_coin_glitch_box": {
    "id": "night_infinite_coin_glitch_box",
    "name": "Infinite Coin Glitch Box (Works Once)",
    "description": "A wooden box with a coin slot. Insert 1 coin, get 255 back. Box breaks forever after.",
    "price": 15000,
    "icon": "📦",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "Single use: insert any coin → receive 255 gold coins instantly",
      "Box explodes in a shower of 8-bit pixels afterward (harmless but loud)",
      "Wario cries if you tell him you used it"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 5
  },
  "night_wario_master_sword_replica": {
    "id": "night_wario_master_sword_replica",
    "name": "Master Sword Replica (Wario Edition)",
    "description": "A golden sword with 'PROPERTY OF LINK (NOT ANYMORE)' engraved on it.",
    "price": 8800,
    "icon": "🗡️",
    "stock": 1,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "+2 Longsword that deals an extra 1d8 radiant vs. evil creatures",
      "Only works at night or in darkness",
      "In sunlight it turns into a pool noodle"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 8
  },
  "night_phantom_hourglass_sand": {
    "id": "night_phantom_hourglass_sand",
    "name": "Phantom Hourglass Sand (One Pinch)",
    "description": "Sand that slows time for everyone except you.",
    "price": 10000,
    "icon": "⌛",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Single use: sprinkle to cast Slow (DC 17, no concentration, lasts 1 minute)",
      "You are immune and gain +2 AC for the duration",
      "Sand is cursed — after use, you age 1 year instantly"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 9
  },
  "night_final_boss_key": {
    "id": "night_final_boss_key",
    "name": "Final Boss Door Key (Unknown Dungeon)",
    "description": "A massive golden key. No one knows what door it opens… yet.",
    "price": 20000,
    "icon": "🗝️",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "One day, somewhere in the world, a final boss door will appear. This key opens it.",
      "Grants no power until then — just heavy and ominous",
      "Wario refuses to say where he got it"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 10,
    "warning": "Buying this may end your campaign."
  }
};
