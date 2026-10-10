import json, os

CHARACTERS_PATH = 'Reputation-Matrix2/data/characters.json'
with open(CHARACTERS_PATH, encoding='utf-8') as f:
    chars = json.load(f)

# Check if july_summer_miser already exists
existing = next((c for c in chars if c.get('id') == 'july_summer_miser'), None)

july_entry = {
    "id": "july_summer_miser",
    "name": "July Summer Miser",
    "title": "The Summer Witch, Founder of the Jul'library, Adept of the Witches Gathering",
    "race": "Human",
    "age": "26 (c. 1014 BF, triplet sister with Jack and Archie)",
    "image": "portraits/july_summer_miser.jpg",
    "fullBody": "portraits/player/fullbody/july_summer_miser.png",
    "status": "Active — resident scholar and wandering conjurer at Vellanet Rise; founder of the Jul'library; affiliated with the Witches Gathering; maintaining spatial boundary wards across the Midlands margins",
    "affiliation": "House Miser / Vellanet Rise, The Witches Gathering, The Jul'library, Independent Scriptorium",
    "aliases": [
        "July Miser",
        "The Summer Witch",
        "The Owl of the Rise",
        "Founder July"
    ],
    "summary": "July Summer Miser is the second of the five Miser children—born alongside Jack and Archie in the triplet threshold of High Summer—and the arcane anchor of the household. While Jack took to the sword and the Silver Flame's rigid muster roll to feed the cottage, and Archie was consumed by unstable third-eyed pyromancy, July mastered the disciplined geometry of the School of Conjuration. She founded the Jul'library—a roaming repository and scriptorium of bound spaces and extraplanar compendiums based out of Vellanet Rise—and maintains close ties with the Witches Gathering, a loose fellowship of Midlands hedge-scholars and planar herbalists. Patient, sharp-eyed, and carrying the household's emotional weight beneath a tall pointed witch's hat, she commands spatial transposition with clinical precision and keeps an owl familiar named Barnaby watching the tree lines.",
    "description": "Waluigi is adding July Summer Miser to the registry not because House Miser needs another person in a cape, but because somebody in that family had to learn how magic actually works without setting their own eyebrows on fire. Jack has twenty thousand names on a piece of paper; Archie has a hole in the sky and an outstanding arrest warrant in three provinces; July has a staff with a barn owl on top and three bound volumes of spatial geometry that actually balance. WAH. When the arithmetic of a family gets this lopsided, the person who studies conjuration is the only one keeping the walls from falling in.\n\n## The High Summer Triplet and the Hearth\n\nParish records in the eastern marches are damp, torn, and mostly recorded between crop blights, but the Miser registry is consistent on one point: the eldest three children—Jack, July, and Archie—arrived within hours of each other during the heat wave of 1014 BF. The household called them the Summer Trio until the differences became load-bearing.\n\nWhen Wanda Miser was keeping five children alive on a labourer's wage, each child developed an emergency response to poverty:\n- **Jack** decided the world was an army, enrolled in the Regal Lion muster at fifteen, and ground his way up to knight-commander so the rest of them could eat meat twice a week.\n- **Archie** looked inward, found an unstable third eye of bleeding entropy and fire, and decided rules were things other people burned inside of.\n- **July** looked at space itself. Space did not require money; it required patience, chalk, and exact angles. She apprenticed herself to local hedge-weavers and hedgewitches along the Midlands border, mastering the transition between provincial folk charms and formal wizardry.\n\nWhile Jack carried the family's arithmetic and Archie carried its rebellion, July carried its emotional sanity. She was the one who patched torn coats with mending cantrips, mediated between Jack's military curfews and Archie's smoking bedroom floorboards, and kept young Spring and Hark from believing that growing up meant choosing between an iron breastplate and an open flame.\n\n## The School of Conjuration and the Jul'library\n\nWhere most wizards of the Midlands gravitate toward the institutional orthodoxy of the Mages' Guild or the aggressive evocation of the war academies, July dedicated her study to the **School of Conjuration** (Wizard Level 7). For July, conjuration is not summoning screaming demons into parlor rooms—it is the art of tethering reality so that distance becomes negotiable.\n\nHer signature creation is the **Jul'library**: an extraplanar and physical scriptorium headquartered in the quiet eastern tower of Vellanet Rise. Part lending library, part sanctuary, and part traveling collection, the Jul'library preserves neglected provincial grimoires, safe planar transit formulas, and non-destructive summoning circles. She is the author and curator of three definitive texts that circulate among Midlands hedge-scholars:\n1. *The Jul'library Compendium of Bound Spaces* — A foundational treatise detailing how to summon and dismiss objects and minor beings without leaving planar tears or attracting Canoloths.\n2. *Principles of Non-Combustive Conjuration* — Written in dry, clinical prose with thinly veiled exasperation, addressing the dangerous misconception (popularized by her brother Archie) that arcane impact requires burning down the room.\n3. *Treatise on Sylvan Circle Traversal* — Detailed field logs documenting the shifting boundaries of peripheral Feywild crossings, boundary stones, and how to bargain with lesser fey without surrendering names or memory.\n\nHer tactical mastery includes **Benign Transposition**—the ability to swap positions in space instantly with an ally or summoned creature—which she uses in the field to pluck wounded allies out of harm's way before hostile blades can connect.\n\n## The Witches Gathering\n\nJuly is an active adept of the **Witches Gathering**, a decentralized Midlands sisterhood of herbalists, midwives, planar navigators, and boundary-keepers. Unlike the Mages' Guild, which operates under Imperial charters and bureaucratic fees, the Gathering shares knowledge through seasonal moots, coded marginalia, and mutual defense pacts against overzealous inquisitors from Flamekeep.\n\nThrough the Gathering, July acts as an arcane diplomat. When local parish priests complain about 'wild witchcraft' in the villages surrounding Vellanet Rise, Jack's knights defer to July. She inspects the wards, certifies the salt lines, and ensures no planar rifts open into the potato fields. In return, the Gathering feeds her intelligence on anomalous regional shifts—including the strange temporal tremors echoing from the deep Feywild.\n\n## Equipment and Familiar\n\nJuly dresses for travel and work rather than court ceremonies:\n- **The Owl Staff**: A seasoned ash quarterstaff topped with a hand-carved barn owl finial. It acts as an arcane focus and a perching rod for **Barnaby**, her summoned celestial owl familiar who scouts tree lines and warns of incoming ambushes.\n- **The Field Folio & Messenger Satchel**: A weather-worn leather crossbody satchel enchanted with subtle expansion wards, holding inkstones, vellum, scroll cases, and dried herbs.\n- **Witch's Robes & Hat**: A tailored dark-sage duster over heavy traveling wool, belted with brass, and topped with the iconic wide-brimmed conical hat that local villagers recognize from two miles down the road.\n\n## Current Situation: The Unsent Letter\n\nJuly currently resides at Vellanet Rise, splitting her time between cataloging new acquisitions for the Jul'library, teaching local apprentices, and advising Jack on the metaphysical defenses of his new estate. But the peace is fragile.\n\nLike Jack, July has not been told that Archie is wanted across three planes for catastrophic fires and planar tampering. However, unlike Jack—who reads military dispatches—July reads the astral currents. Her boundary bells in the library have begun ringing unprovoked, tuned to the exact frequency of Feywild temporal distortions. She knows Archie is in deep water; she simply hasn't found the coordinate yet.\n\n## Waluigi's Assessment\n\n*WAH!* A witch who actually files her books on shelves instead of leaving them open in puddles. I respect it! Her brother Jack thinks twenty thousand names on a muster roll makes an army; her brother Archie thinks setting fire to a courthouse is a legal defense; July builds a library and learns how to swap places with people before the ceiling hits them. If the Misers had put her in charge of the family ten years ago, Jack would own half the Midlands and Archie would be running a controlled blast furnace instead of running from interdimensional bailiffs. Watch her staff. The owl doesn't blink, and neither does she.",
    "waluigiComment": "July is the only Miser with common sense and a library card. She writes books on how NOT to set things on fire, which should be mandatory reading for her entire family. WAH!",
    "keyEvents": [],
    "relatedArticles": [
        "miser_family",
        "jack_melvus_miser",
        "archie_miser",
        "vellanet_rise",
        "order_of_jack"
    ],
    "imageCaption": "July Summer Miser, founder of the Jul'library and adept of the Witches Gathering, standing with her owl staff outside Vellanet Rise."
}

if existing:
    chars.remove(existing)
chars.append(july_entry)

# Update miser_family entry in characters.json to link to july_summer_miser
for c in chars:
    if c.get('id') == 'miser_family':
        if 'july_summer_miser' not in c.get('relatedArticles', []):
            c.setdefault('relatedArticles', []).append('july_summer_miser')
        # update household table in description if needed
        desc = c.get('description', '')
        if '**July**' in desc and '[July Summer Miser]' not in desc:
            desc = desc.replace('**July** | older sister | A witch by trade', '**[July Summer Miser](https://mikegent01.github.io/bik/index.html#/article/july_summer_miser)** | older sister | Conjuration Wizard (Level 7), founder of the Jul\'library, Witches Gathering')
            c['description'] = desc
    elif c.get('id') == 'jack_melvus_miser':
        if 'july_summer_miser' not in c.get('relatedArticles', []):
            c.setdefault('relatedArticles', []).append('july_summer_miser')

with open(CHARACTERS_PATH, 'w', encoding='utf-8') as f:
    json.dump(chars, f, indent=2)

print('Successfully added July Summer Miser to characters.json and linked to family!')
