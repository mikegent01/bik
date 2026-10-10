import json

with open('Reputation-Matrix2/data/characters.json', encoding='utf-8') as f:
    chars = json.load(f)

# check if quartermaster_cornburary exists
if not any(c.get('id') == 'quartermaster_cornburary' for c in chars):
    corn_entry = {
        "id": "quartermaster_cornburary",
        "name": "Quartermaster Cornburary",
        "title": "Quartermaster of the Iron Legion Cordon Division, Logistics & Requisition Auditor",
        "race": "Human",
        "age": "52",
        "image": "portraits/quartermaster_cornburary.jpg",
        "status": "Active — enforcing Section 14 Cordon property mandates inside the Overgrown Manor despite ongoing planar collapse",
        "affiliation": "Iron Legion / Cordon Division Logistics",
        "aliases": [
            "Cornburary",
            "The Requisition Warden",
            "Auditor Cornburary"
        ],
        "summary": "Quartermaster Cornburary is the Iron Legion logistics and supply officer attached to the Colour Division detachments operating near the Midlands border. Completely immune to supernatural terror, atmospheric dread, and rampant plant monsters, Cornburary evaluates military operations exclusively through ledger balances, equipment wear, and authorized property requisitions. When sent to enforce Hjumpik's overdue Aegis Magi contract, he treated the collapsing, briar-choked Feywild manor not as a magical crisis, but as an unauthorized structural alteration with an itemized depreciation fee.",
        "description": "Waluigi has audited commanders, sorcerers, tax collectors, and vampires, but Quartermaster Cornburary is a specific kind of dangerous: the bureaucrat who will read you an equipment clause while your boots are on fire. WAH.\n\nWhile the Colour Division guards were nervous about vines slithering across the floorboards, Cornburary arrived with a brass ink horn, a quill, and a ledger bound in boiled pigskin. He did not ask how the party arrived in the Feywild. He asked who authorized the discharge of alchemical flame into load-bearing timber, cited Section Fourteen of the Cordon Mandate, and informed Hjumpik that his Aegis Magi contract was overdue for liquidation.\n\nHis authority comes from the Legion's supply lines. Without Cornburary's stamp, no Colour Division squad gets fresh rations, crossbow bolts, or replacement armor straps. His complete refusal to acknowledge the supernatural makes him both absurd and terrifyingly stubborn—the kind of man who would file a lien against a burning church before asking for a bucket.",
        "waluigiComment": "Cornburary carries a clipboard into a monster nest and demands to know who approved the broken glass. A true accountant of the apocalypse. I hate him, but I respect the paperwork. WAH!",
        "keyEvents": [
            "feyward_the_soul_ring_and_the_twenty_one_day_cut"
        ],
        "relatedArticles": [
            "iron_legion",
            "hjumpik",
            "feyward_i_cant_afford_not_to_care",
            "feyward_the_soul_ring_and_the_twenty_one_day_cut"
        ]
    }
    chars.append(corn_entry)
    with open('Reputation-Matrix2/data/characters.json', 'w', encoding='utf-8') as f:
        json.dump(chars, f, indent=2)
    print('Added quartermaster_cornburary to characters.json!')
else:
    print('quartermaster_cornburary already present')
