// Badges & Commendations — the `badges` department.
//
// Every badge here commemorates something recorded elsewhere in the archive.
// The `marks` field names that event in one line so the storefront, the hub
// and any future generator can trace a badge back to its source.
//
// Design rule: badges are records, not stat sticks. Effects are social,
// cosmetic or informational. Nothing here grants a bonus to a roll, so a
// player may collect the whole department without becoming stronger for it.
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_BADGES = {
  "badge_barrel_survivor": {
    "id": "badge_barrel_survivor",
    "name": "Barrel Survivor's Mark",
    "description": "A plain iron disc, unpolished, stamped with a single barrel stave. Issued to those who came out of the void spaces of the Vigilance. It is not sold. The price shown is the price the Liberated Toads insist on: nothing, forever, to anyone who can claim it honestly.",
    "category": "badges",
    "price": 0,
    "icon": "🛢️",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Recognised by the Liberated Toads",
      "Cannot be purchased",
      "Names the bearer to the Cohort Council"
    ],
    "vendor": "faction_quartermaster",
    "shippedBy": "Commendations Office",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Recognised by the Liberated Toads",
        "rules": "Any Liberated Toad who sees this mark will treat the bearer as kin without needing to be asked. This is a social fact, not a mechanical bonus; it does not compel aid and confers no advantage on rolls."
      },
      {
        "title": "Cannot be purchased",
        "rules": "The Quartermaster will refuse coin for this item. Attempting to buy one is remembered."
      }
    ],
    "levelRequirementReason": "Badges record history rather than grant power; the gate is availability, not capability.",
    "vendorReason": "The faction quartermaster is the only body entitled to issue it, and issues it free.",
    "shippingDetail": "Issued flat in a card sleeve with the citation printed on the reverse.",
    "usage": {
      "activation": "Worn. No action required.",
      "duration": "Permanent while displayed",
      "endsWhen": "Removed, surrendered, or revoked by the issuing body.",
      "charges": "None. A badge is a record, not a resource."
    },
    "marks": "The discovery of more than 150 trafficked Toads sealed in barrels aboard the Vigilance.",
    "priceReason": "Priced as a commendation: what it costs to strike, not what the deed was worth."
  },
  "badge_order_120_witness": {
    "id": "badge_order_120_witness",
    "name": "Order 120 Witness Token",
    "description": "A blackened square of tin with four clause numerals punched through it — I, II, III, IV — so that light passes where the words were. Struck for those who can testify to what was ordered at Aegis Command on the twenty-first of Highsun, and what the order did not say in writing.",
    "category": "badges",
    "price": 250,
    "icon": "📜",
    "stock": 3,
    "rarity": "very rare",
    "effects": [
      "Standing to testify",
      "Reads as accusation in Legion territory",
      "Punched, not engraved"
    ],
    "vendor": "faction_quartermaster",
    "shippedBy": "Commendations Office",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Standing to testify",
        "rules": "Tribunals convened on the Aegis matter accept the token as evidence that the bearer was present. It establishes standing to give testimony; it does not establish that the testimony is true."
      },
      {
        "title": "Reads as accusation in Legion territory",
        "rules": "Worn openly in Iron Legion jurisdiction, the token is treated as a political statement. GMs should treat this as attention, not as a penalty to any roll."
      }
    ],
    "levelRequirementReason": "Badges record history rather than grant power; the gate is availability, not capability.",
    "vendorReason": "Held by the quartermaster because no Imperial office will strike it.",
    "shippingDetail": "Issued flat in a card sleeve with the citation printed on the reverse.",
    "usage": {
      "activation": "Worn. No action required.",
      "duration": "Permanent while displayed",
      "endsWhen": "Removed, surrendered, or revoked by the issuing body.",
      "charges": "None. A badge is a record, not a resource."
    },
    "marks": "Order 120: the instruction to discontinue custody of all Toad prisoners, in four clauses that never use the word.",
    "priceReason": "Priced as a commendation: what it costs to strike, not what the deed was worth."
  },
  "badge_long_service_returned": {
    "id": "badge_long_service_returned",
    "name": "Returned Service Medal",
    "description": "An Imperial long-service medal, ribbon intact, with the pin bent flat and a burr around the rim where it was forced into something circular. Sold as-is. The dealer does not explain the burr and will not be drawn on where the stock came from.",
    "category": "badges",
    "price": 400,
    "icon": "🎖️",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Authentic Imperial issue",
      "Damaged consistent with valve use",
      "Untraceable to a recipient"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Commendations Office",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Authentic Imperial issue",
        "rules": "The medal is genuine and will pass inspection as Imperial issue. The name of the original recipient has been filed off; anybody who checks the register will find the omission."
      },
      {
        "title": "Damaged consistent with valve use",
        "rules": "An engineer, smith, or anyone who has serviced a boiler recognises the burr pattern on sight. What they do with that recognition is between them and the bearer."
      }
    ],
    "levelRequirementReason": "Badges record history rather than grant power; the gate is availability, not capability.",
    "vendorReason": "Rogueport asks no questions about provenance, which is the only market where this could be listed at all.",
    "shippingDetail": "Issued flat in a card sleeve with the citation printed on the reverse.",
    "usage": {
      "activation": "Worn. No action required.",
      "duration": "Permanent while displayed",
      "endsWhen": "Removed, surrendered, or revoked by the issuing body.",
      "charges": "None. A badge is a record, not a resource."
    },
    "marks": "The boiler house at Aegis Command, where every relief valve was found jammed with Imperial service medals.",
    "priceReason": "Priced as a commendation: what it costs to strike, not what the deed was worth."
  },
  "badge_fractured_heart": {
    "id": "badge_fractured_heart",
    "name": "Fractured Heart Pin",
    "description": "A small green enamel heart with a clean break across it, repaired visibly rather than invisibly — the seam is filled and left proud. Worn by those who hold with the Accountability Docket's position that the point of a reckoning is mending rather than retribution.",
    "category": "badges",
    "price": 120,
    "icon": "💚",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "Declares a position on the Docket",
      "Repair is deliberately visible",
      "Logged as cult rhetoric by the Legion"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Commendations Office",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Declares a position on the Docket",
        "rules": "The pin states that the bearer supports CONTAIN, ACCOUNT, RESTORE, ADHERE. Among Liberated Toads this is unremarkable. Among the Iron Legion it has been filed, in writing, as cult-like rhetoric."
      },
      {
        "title": "Repair is deliberately visible",
        "rules": "The seam is the point. A pin repaired invisibly is refused by the makers, who consider a hidden mend to be the opposite of the doctrine."
      }
    ],
    "levelRequirementReason": "Badges record history rather than grant power; the gate is availability, not capability.",
    "vendorReason": "Made and sold by Toad Town artisans, who regard it as ordinary devotional jewellery.",
    "shippingDetail": "Issued flat in a card sleeve with the citation printed on the reverse.",
    "usage": {
      "activation": "Worn. No action required.",
      "duration": "Permanent while displayed",
      "endsWhen": "Removed, surrendered, or revoked by the issuing body.",
      "charges": "None. A badge is a record, not a resource."
    },
    "marks": "Speaker L's line on the eighteenth of Highsun: this is not retribution's art, but the mending of the fractured heart.",
    "priceReason": "Priced as a commendation: what it costs to strike, not what the deed was worth."
  },
  "badge_bread_ration": {
    "id": "badge_bread_ration",
    "name": "Baker's Variance Chit",
    "description": "A wooden ration chit stamped WASTAGE, BAKING — the exact category used to write off the extra hardtack drawn at Aegis Command in the week the cells emptied. Worn as a quiet joke by people who understand that the most dangerous document in the fortress was a bread requisition.",
    "category": "badges",
    "price": 65,
    "icon": "🍞",
    "stock": 20,
    "rarity": "uncommon",
    "effects": [
      "An in-joke among quartermasters",
      "Genuine chit stock",
      "Means nothing to anybody who has not read the file"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Commendations Office",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "An in-joke among quartermasters",
        "rules": "Any character who has worked in stores, supply, or a kitchen recognises the phrase and its significance immediately. Everyone else sees a piece of wood."
      },
      {
        "title": "Genuine chit stock",
        "rules": "Cut from real ration-chit blanks, so it will pass as a chit at a distance. It is not currency and no quartermaster will honour it."
      }
    ],
    "levelRequirementReason": "Badges record history rather than grant power; the gate is availability, not capability.",
    "vendorReason": "Toad Town sells them by the handful; the joke is local and the margin is good.",
    "shippingDetail": "Issued flat in a card sleeve with the citation printed on the reverse.",
    "usage": {
      "activation": "Worn. No action required.",
      "duration": "Permanent while displayed",
      "endsWhen": "Removed, surrendered, or revoked by the issuing body.",
      "charges": "None. A badge is a record, not a resource."
    },
    "marks": "The kitchen requisition at Aegis Command, drawn above establishment and countersigned without query.",
    "priceReason": "Priced as a commendation: what it costs to strike, not what the deed was worth."
  },
  "badge_noki_consignment": {
    "id": "badge_noki_consignment",
    "name": "Noki Carrier's Tag",
    "description": "A waterproofed brass tag of the kind wired to freight at a river frontage, blank where the consignee's name should be. Carriers who have run cargo they were paid not to understand wear these on the strap of a bag, where another carrier will see it and nobody else will look twice.",
    "category": "badges",
    "price": 300,
    "icon": "🌊",
    "stock": 6,
    "rarity": "rare",
    "effects": [
      "Recognised by carriers and smugglers",
      "Consignee field left blank",
      "Waterproof"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Commendations Office",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Recognised by carriers and smugglers",
        "rules": "Freight handlers, smugglers and river crews read the blank field correctly: the bearer has run a job with no name on it and did not ask. This buys a hearing, not trust."
      },
      {
        "title": "Consignee field left blank",
        "rules": "Filling in the field ruins the tag and its meaning. Tags found with names on them are assumed to have been completed by somebody who missed the point, or by an investigator."
      }
    ],
    "levelRequirementReason": "Badges record history rather than grant power; the gate is availability, not capability.",
    "vendorReason": "The trading post handles river freight and sells the tags to its own carriers at cost.",
    "shippingDetail": "Issued flat in a card sleeve with the citation printed on the reverse.",
    "usage": {
      "activation": "Worn. No action required.",
      "duration": "Permanent while displayed",
      "endsWhen": "Removed, surrendered, or revoked by the issuing body.",
      "charges": "None. A badge is a record, not a resource."
    },
    "marks": "The consignment note for luminous moss, used sheeting and braided line, delivered weeks before anyone needed it.",
    "priceReason": "Priced as a commendation: what it costs to strike, not what the deed was worth."
  },
  "badge_seventh_seat": {
    "id": "badge_seventh_seat",
    "name": "The Seventh Seat",
    "description": "A council seat-token with the number seven on it, issued to nobody. The Cohort Council struck a replacement set after the Scouts' seat was vacated and never filled it, so the sevens exist as loose stock. Worn by those making a pointed observation about a body that governs comfortably around a hole.",
    "category": "badges",
    "price": 180,
    "icon": "🪑",
    "stock": 7,
    "rarity": "rare",
    "effects": [
      "A criticism, worn openly",
      "Genuine council stock",
      "Confers no vote whatsoever"
    ],
    "vendor": "faction_quartermaster",
    "shippedBy": "Commendations Office",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "A criticism, worn openly",
        "rules": "Council members recognise the token and understand the point being made. Some find it fair. Captain Fernback's office has not commented."
      },
      {
        "title": "Confers no vote whatsoever",
        "rules": "The token is not credentials. Anyone attempting to vote with it will be refused, and the attempt will be minuted."
      }
    ],
    "levelRequirementReason": "Badges record history rather than grant power; the gate is availability, not capability.",
    "vendorReason": "Surplus council stock, released by the quartermaster because there is no prospect of it being needed.",
    "shippingDetail": "Issued flat in a card sleeve with the citation printed on the reverse.",
    "usage": {
      "activation": "Worn. No action required.",
      "duration": "Permanent while displayed",
      "endsWhen": "Removed, surrendered, or revoked by the issuing body.",
      "charges": "None. A badge is a record, not a resource."
    },
    "marks": "The Scouts' council seat, vacant since Day 16 after the Mole was exposed as an Iron Legion agent, never refilled.",
    "priceReason": "Priced as a commendation: what it costs to strike, not what the deed was worth."
  },
  "badge_two_returns": {
    "id": "badge_two_returns",
    "name": "Two Returns Clasp",
    "description": "A double clasp: two identical brass plates hinged together, each stamped with a different casualty figure for the same engagement. Worn by archivists, clerks and anybody whose profession has taught them that the worst thing a record can do is agree with itself too neatly.",
    "category": "badges",
    "price": 500,
    "icon": "⚖️",
    "stock": 4,
    "rarity": "very rare",
    "effects": [
      "Marks the bearer as a records specialist",
      "Two plates, deliberately contradictory",
      "Opens on a hinge"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Commendations Office",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Marks the bearer as a records specialist",
        "rules": "Archivists, clerks, quartermasters and lawyers treat the clasp as a professional credential of sorts — evidence the bearer knows what an unreconciled return means and why it matters."
      },
      {
        "title": "Two plates, deliberately contradictory",
        "rules": "The figures do not match and are not supposed to. Anybody who tries to correct the clasp has misunderstood it, which is itself a useful thing to learn about a person."
      }
    ],
    "levelRequirementReason": "Badges record history rather than grant power; the gate is availability, not capability.",
    "vendorReason": "The Shaman's Hut deals in objects that hold two truths at once and priced this accordingly.",
    "shippingDetail": "Issued flat in a card sleeve with the citation printed on the reverse.",
    "usage": {
      "activation": "Worn. No action required.",
      "duration": "Permanent while displayed",
      "endsWhen": "Removed, surrendered, or revoked by the issuing body.",
      "charges": "None. A badge is a record, not a resource."
    },
    "marks": "The two casualty returns filed for the same half hour at Aegis Command, neither withdrawn, neither naming a casualty.",
    "priceReason": "Priced as a commendation: what it costs to strike, not what the deed was worth."
  },
  "badge_throughput": {
    "id": "badge_throughput",
    "name": "Throughput",
    "description": "A blank grey token with a single word on it and no other marking. The word is the one the Empire chose for the people it burned to keep a frequency in the air. Worn face-in by most, face-out by the reckless.",
    "category": "badges",
    "price": 750,
    "icon": "📡",
    "stock": 2,
    "rarity": "very rare",
    "effects": [
      "Deniable by design",
      "Face-out is a provocation",
      "No maker's mark"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Commendations Office",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Deniable by design",
        "rules": "The token says one bureaucratic word. Worn face-in it is invisible; challenged, it means nothing in itself. Its entire force depends on the other party already knowing the schedule."
      },
      {
        "title": "Face-out is a provocation",
        "rules": "Displayed openly in Imperial or Legion company, the token accuses the reader of knowing exactly what it refers to. GMs should treat the consequences as social and severe."
      }
    ],
    "levelRequirementReason": "Badges record history rather than grant power; the gate is availability, not capability.",
    "vendorReason": "The Onyx Hand stocks it because the Onyx Hand sells things the Empire would prefer unsaid.",
    "shippingDetail": "Issued flat in a card sleeve with the citation printed on the reverse.",
    "usage": {
      "activation": "Worn. No action required.",
      "duration": "Permanent while displayed",
      "endsWhen": "Removed, surrendered, or revoked by the issuing body.",
      "charges": "None. A badge is a record, not a resource."
    },
    "marks": "The Sonic Grid node schedule, which defines throughput as units consumed per operating day, replaced from detained population as available.",
    "priceReason": "Priced as a commendation: what it costs to strike, not what the deed was worth."
  },
  "badge_wah_prime_founder": {
    "id": "badge_wah_prime_founder",
    "name": "WahPrime Founding Subscriber",
    "description": "A gold-plated badge issued by Wario to the earliest WahPrime subscribers, certifying loyalty, priority shipping, and nothing else legally enforceable. The plating is thin. Wario is aware the plating is thin.",
    "category": "badges",
    "price": 1200,
    "icon": "👑",
    "stock": 8,
    "rarity": "epic",
    "effects": [
      "Priority handling at Wario-operated counters",
      "Gold-plated, thinly",
      "Non-transferable, allegedly"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Commendations Office",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Priority handling at Wario-operated counters",
        "rules": "The bearer is served before non-subscribers at any counter Wario controls. This is a queueing courtesy and Wario reserves the right to reinterpret it during busy periods."
      },
      {
        "title": "Non-transferable, allegedly",
        "rules": "The badge states it is non-transferable. No mechanism exists to enforce this and Wario has already sold at least one replacement to somebody who lost theirs."
      }
    ],
    "levelRequirementReason": "Badges record history rather than grant power; the gate is availability, not capability.",
    "vendorReason": "Sold direct by Wario, who declined to let any other vendor take a margin on his own loyalty programme.",
    "shippingDetail": "Issued flat in a card sleeve with the citation printed on the reverse.",
    "usage": {
      "activation": "Worn. No action required.",
      "duration": "Permanent while displayed",
      "endsWhen": "Removed, surrendered, or revoked by the issuing body.",
      "charges": "None. A badge is a record, not a resource."
    },
    "marks": "The WahPrime subscription programme and its founding membership tier.",
    "priceReason": "Priced as a commendation: what it costs to strike, not what the deed was worth."
  }
};
