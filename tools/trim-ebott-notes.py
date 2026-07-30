#!/usr/bin/env python3
"""Trim the Ebott section notes to the story-guide limit (<= 120 words).

After the song/scene rewrite the events still ran 55% analysis because the
section-closing notes were 175-479 words each. The guide's own rule: a finding
that needs 200 words is not an aside, it belongs in waluigiAssessment.

This replaces each oversized note with its sharpest single claim, and moves the
displaced reasoning into the closing assessment where long-form belongs. No
finding is deleted — they are relocated.

Run:  python3 tools/trim-ebott-notes.py   (after rewrite-ebott-songs.py)
"""
import json, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PATH = os.path.join(ROOT, 'Reputation-Matrix2', 'data', 'events.json')

# prefix -> tightened note (<= ~110 words, keeps the title convention)
TRIM = {
    'mount_ebott_survey_part_4': {
        'Departure':
            "**Waluigi\u2019s Opening Audit** \u2014 The Agent listed the four components of the "
            "problem out loud, in order \u2014 a cage, a locked house, a machine, *together* \u2014 "
            "and concluded it was good. Waluigi has read indictments that were less thorough.\n\n"
            "Two corrections for the record. Flowey has never needed tools; he repaired that "
            "machine with no hands and no equipment. And \u201cnobody will find it\u201d is a claim "
            "about visitors, not about the occupant. Sans defended the perimeter of a building "
            "whose danger is entirely interior. WAH.",
        'The Walk':
            "**Waluigi\u2019s Note on the Ventilation Finding** \u2014 A vent system that clears the "
            "exhaust of a steam locomotive from a sealed cavern is not improvised. It is civil "
            "engineering at civilizational scale, built and maintained across generations, in a "
            "hole, by a people the surface has spent that time calling a monster problem.\n\n"
            "And the Agent found it by asking where the smoke goes. Not by scanning \u2014 by "
            "noticing that a room full of fire should have filled with smoke and did not. WAH!",
        'The Station':
            "**Waluigi\u2019s Economic Note** \u2014 Gold. Priced in discrete pieces, over a counter, "
            "into a lockbox. That is a *convertible* currency, which means the Underground and "
            "the surface already share a settlement medium.\n\n"
            "There is no exchange problem. There never was. The only thing separating these two "
            "markets is the barrier and eighty-five years of policy \u2014 and that was obtained, "
            "for free, by a soldier who did not know what a G was. WAH.",
        'The Reading':
            "**Waluigi\u2019s Recursion Finding** \u2014 Protocol 7 forbids verbal engagement beyond "
            "necessary commands, to prevent psychological escalation. The Agent escalated a "
            "restrained subject psychologically by reciting, at volume, the rule against doing so.\n\n"
            "Waluigi has never encountered a cleaner self-swallowing document. He also notes "
            "that it *worked* \u2014 Koffin-K resisted three men physically and was subdued by "
            "hearing himself reclassified as a package with a weight class.",
        'The Page':
            "**Waluigi\u2019s Hypothesis on the Unrecorded Page** \u2014 The most important document "
            "in this arc is a page whose contents nobody wrote down. Waluigi is reduced to "
            "inferring a document from its effects, which he despises.\n\n"
            "The effects: it stopped the Agent mid-recital, made a Warlord take a book out of a "
            "soldier\u2019s hands, and silenced a carriage. It was not procedural \u2014 he had been "
            "reading procedure happily for five minutes. Working hypothesis: the manual contains "
            "material that is not protocol. WAH.",
        'The Interrogation':
            "**Waluigi\u2019s Structural Finding** \u2014 The Agent relies on that book absolutely. He "
            "has used it as doctrine, as legal authority, as comfort, and as a club. Asked who "
            "wrote it, he could not say. It was issued.\n\n"
            "An unsigned document a man obeys without question is not a manual. It is somebody "
            "giving orders at a distance, indefinitely, with no name attached. He thinks he is "
            "following procedure. He is following *somebody*. WAAAH!",
        'Transit':
            "**Waluigi\u2019s Census Finding** \u2014 A full passenger census of a working commuter "
            "train: an elderly woman knitting, a businessman with a laptop, teenagers sharing "
            "snacks, a family with a sleeping child. Not one human being.\n\n"
            "The Empire files this place as a containment problem. That carriage documents a "
            "society \u2014 commuters, employment, childcare, a ticket bureaucracy, a rail schedule. "
            "The Agent said four words about it and went back on guard. Waluigi is filing it in "
            "the strongest terms available. WAH.",
        'Arrival':
            "**Waluigi\u2019s Closing Assessment** \u2014 Koffin-K arrived with a title, a following "
            "and a plan. He left with none of the three, and what took them was not Mihawk\u2019s "
            "contempt or the Agent\u2019s manual \u2014 it was that his own two people were offered a "
            "choice and did not need to think about it.\n\n"
            "Mihawk files him as a nuisance. Waluigi files him as a humiliated man with a power "
            "nobody has accounted for, which is a scheduled appointment rather than a loose end.",
    },
    'mount_ebott_survey_part_5': {
        '"Cows Go"':
            "**Waluigi\u2019s Defence of the Knock-Knock Joke** \u2014 Sans called it weird and Mihawk "
            "called it pointless. It was the most information-dense ninety seconds of the session.\n\n"
            "The thing behind that door breathes at rest. It moves deliberately. It speaks the "
            "party\u2019s language unprompted, and it runs a screening challenge \u2014 which means it "
            "has been knocked on before. It engaged with the joke, which no guard does. Then it "
            "heard the punchline and *withdrew*. That is the part that worries Waluigi. WAH.",
        'The Shortcut':
            "**Waluigi\u2019s Note on Unlogged Access** \u2014 Sans has a private route through the "
            "Hotland substructure that he has maintained for years and that appears on no layout "
            "the party has seen. He operated it from memory, in the dark, in front of two foreign "
            "agents.\n\nWaluigi does not allege bad faith. Waluigi alleges that nobody has asked, "
            "and that the failure to ask is now three sessions old.",
        'Protocol One':
            "**Waluigi\u2019s Note on Weaponised Courtesy** \u2014 A combatant knows how to process "
            "hostility. A combatant does not know how to process *encouragement*. That archer\u2019s "
            "entire training assumed an opponent who wanted him dead, and he got one who wanted "
            "him to feel better about his aim.\n\n"
            "It worked so well that a crewmate had to issue the countermeasure: \u201cQuiet, idiot. "
            "Stop trying to think.\u201d That is a field commander recognising a psychological "
            "operation in progress. WAH!",
        'The Cost':
            "**Waluigi\u2019s Note on the Materiel Loss** \u2014 Waluigi has spent two filings being "
            "amusing about a soldier who reads a rulebook in combat, and would like to close that "
            "thread honestly. The book was not a crutch and it was never a joke.\n\n"
            "It was the only structure that man had in a sealed nation with no allies, no "
            "extraction and no orders. It is now aboard a floating ship in the possession of Wing "
            "Gaster \u2014 including the unrecorded page. He knelt in the grass and could not speak.",
        'The False Sun':
            "**Waluigi\u2019s Finding** \u2014 Ventilation is survival engineering. A synthetic sky, "
            "maintained across generations over open ground, for a population that has never seen "
            "the real one, is not survival. It is *grief management*.\n\n"
            "Somebody built a fake sun at enormous cost and has kept it running so the children "
            "would have something to look up at. Waluigi has audited a great many public works "
            "and has never once encountered a line item like it. The full argument is in the "
            "assessment below. WAAAAAAAH!",
    },
}

# Displaced reasoning, appended to waluigiAssessment where long-form belongs.
APPEND = {
    'mount_ebott_survey_part_5':
        "\n\n**On the arrival \u2014 the part Waluigi cannot let go.** Sans says his teleportation "
        "is imprecise: away from danger, not toward a place. So the party\u2019s own account of where "
        "they landed is chance.\n\n"
        "Waluigi does not accept chance. Of every location under that mountain \u2014 tunnels, "
        "harbours, ruins, industrial districts, the CORE, the town they came from \u2014 the escape "
        "deposited three people in the one place built to look like freedom, at the exact moment "
        "they were fleeing a man whose entire demonstrated capability is authoring what other "
        "people perceive. He raised a triangle that swallowed the sky. He held a wave of molten "
        "rock standing against gravity. He put a door in a corridor Sans has walked for years. "
        "And when they finally got away from him, they got away *into a false sun*, and spent "
        "ninety seconds believing they had won.\n\n"
        "Waluigi cannot prove it. His document is on Gaster\u2019s ship. What he has is a pattern: "
        "everybody who underestimated that man this session received precisely what they asked "
        "for, in a shape they did not want.",
}

with open(PATH, encoding='utf-8') as f:
    events = json.load(f)

for ev in events:
    if not isinstance(ev, dict) or ev.get('id') not in TRIM:
        continue
    eid = ev['id']
    before = sum(len(s.get('waluigi_note', '').split()) for s in ev['sections'])
    for sec in ev['sections']:
        for prefix, note in TRIM[eid].items():
            if sec['name'].startswith(prefix):
                sec['waluigi_note'] = note
                break
    after = sum(len(s.get('waluigi_note', '').split()) for s in ev['sections'])
    if eid in APPEND:
        ev['waluigiAssessment'] = ev.get('waluigiAssessment', '') + APPEND[eid]
    longest = max((len(s.get('waluigi_note', '').split()) for s in ev['sections']), default=0)
    print(f'{eid}: notes {before}w -> {after}w (longest now {longest}w)')

with open(PATH, 'w', encoding='utf-8') as f:
    json.dump(events, f, ensure_ascii=False, indent=1)
    f.write('\n')
print('written')
