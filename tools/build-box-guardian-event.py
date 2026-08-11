#!/usr/bin/env python3
"""
Builds the expanded session event:
  id: 'the_box_guardian_sharpie_disguise_and_the_soot_barrel'
  title: 'The Box Guardian, the Sharpie Disguise, and the Soot-Barrel Trap'
Appends it to Reputation-Matrix2/data/events.json following STORY_FORMAT_GUIDE.md craft standards.
"""

import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EVENTS_PATH = os.path.join(ROOT, 'Reputation-Matrix2', 'data', 'events.json')
CHARS_PATH = os.path.join(ROOT, 'Reputation-Matrix2', 'data', 'characters.json')

custom_css = (
    ".wiki-lead{background:linear-gradient(135deg,rgba(212,168,83,.16),rgba(40,30,20,.2),rgba(138,75,255,.1));padding:1.5rem;border-left:6px solid #d4a853;border-radius:1rem;margin-bottom:20px}"
    ".prose blockquote{background:linear-gradient(135deg,rgba(212,168,83,.12),rgba(20,20,30,.15)),var(--bg2);border-left:4px solid #d4a853;border-radius:0 10px 10px 0;padding:14px 20px;margin:18px 0;font-size:14.5px;line-height:1.8;color:var(--text)}"
    ".prose blockquote strong{color:#d4a853;letter-spacing:.03em}"
    ".prose blockquote em{color:#c9a6ff;font-style:italic}"
    ".prose h2{color:#d4a853;border-bottom:2px solid rgba(212,168,83,.3);padding-bottom:6px;font-family:var(--font-title,serif)}"
    ".wnote{background:linear-gradient(135deg,rgba(212,168,83,.14),rgba(138,75,255,.06)),var(--bg2);border-left:4px solid #d4a853;padding:14px 18px;margin:20px 0;border-radius:0 8px 8px 0;font-size:13.5px;line-height:1.65}"
    ".wnote b{color:#d4a853;font-size:14px}"
)

sections = [
    {
        "name": "I. The Opened Book and the Whip Crack",
        "icon": "📖",
        "overview": (
            "Markop's heavy battleaxe cut through the damp cottage air in a single, brutal arc. The steel edge caught an attacking imp across the wing joints, severing the leathery limb with a sharp crunch. "
            "The severed wing dropped with a wet slap directly onto the open, yellowed pages of the Archivist's book resting on the table, smearing fresh black ink across the margin notes.\n\n"
            "Feyward Dan blinked, sitting up from the splintered floorboards where he had been lying dazed. He wiped the dust from his eyes, shook his head, and quickly took in the room's chaotic geometry. "
            "Assessing the situation in half a breath, he stood up, drew his longsword with a ringing rasp, and declared with total conviction: "
            "**\"I'm going to use a longsword and strike this imp!\"**\n\n"
            "Across the cottage, a loud whip crack shattered the noise. Eager snapped his heavy leather cord across the room, catching the wounded imp square around the neck. "
            "The same creature that had been hovering near the ceiling let out a choked shriek, its wings buckling as it fell heavily onto the wooden floor.\n\n"
            "Dan turned toward the inner doorway, shouting into the quiet washroom: **\"Remi, are you okay in there?\"**\n\n"
            "There was no response. The washroom was completely empty, its back window standing wide open to the cold fog.\n\n"
            "Outside the shattered lower window frame, a limp Salam lay motionless in the damp grass where Tymnas had thrown him to safety, surrounded by disturbed leaves and broken twigs. "
            "Tymnas caught his breath against the sill, wiping blood from his brow. **\"I threw him out the window to keep him alive!\"**\n\n"
            "Realizing the threat was moving outside, the party split up: Dan stayed behind with Tymnas to cast healing spells on the unconscious Salam, while Markop and Eager headed out the cottage door to track Remi's trail through the woods.\n\n"
            "*WAH! Room checks! In the Mushroom Regency, if you call out a name into an empty bedroom, a Toad answers with a tray of cookies! "
            "In the Shadow Estate, an empty room means your party member was dragged out a window four minutes ago while you were picking up a longsword! WAH.*"
        ),
        "waluigi_note": "The tactical split at the cottage separates the defenders into two functional elements: Dan and Tymnas stabilize Salam, while Markop and Eager initiate immediate pursuit."
    },
    {
        "name": "II. The Blood Trail and the Singing Mazehound",
        "icon": "🩸",
        "overview": (
            "Markop poked his head out the cottage doorway, his dark eyes narrowing as he spotted a Mazebound prowling in the grey mist along the fence line. "
            "He pulled his head back inside, motioning for silence. He couldn't see any sign of Remi's boots in the mud.\n\n"
            "Eager knelt near the bushes, his gloved fingers pointing to a fresh red smear glistening on a wet fern. **\"We better follow it!\"** he whispered.\n\n"
            "They moved up into the dense, dark woods surrounding the cottage. The canopy blocked what little ambient light the Shadowfell offered, leaving the forest submerged in pitch-black shadows. "
            "**\"It's dark in here,\"** Eager muttered, shivering inside his coat. **\"We're outside... maybe we should have bought a torch.\"**\n\n"
            "Deviating slightly from the main blood trail, they pushed through a thicket of thorned brambles—and ran directly into a Mazehound crouching on a flat stone. "
            "The creature's grey, thorned snout lifted, its yellow eyes glowing with dim malice as it began to sing in a strange, echoing rhythm:\n\n"
            "**\"Have you heard us sing? Welcome to the grove, welcome to the grey, you'll never find the Remi so you might as well stay!\"**\n\n"
            "Markop spat onto the dirt, completely unimpressed by the performance. **\"Waste of time! Let's head back to the blood!\"** he growled, turning his back on the singing beast.\n\n"
            "*WAH! Musical forest monsters! A creature made of grey fog and thorned vines that stops a rescue party to deliver a four-line rhyming song about kidnapping! "
            "Waluigi has dealt with similar street performers in Rogueport, but usually they ask for two coins before singing! WAH.*"
        ),
        "waluigi_note": "The Mazehound's song is a psychological stalling tactic designed to draw pursuers off the physical blood trail."
    },
    {
        "name": "III. The Mazebound's Finger and the Pure Soul Requirement",
        "icon": "🐺",
        "overview": (
            "Doubling back toward the original blood trail, Markop and Eager ran into a second Mazebound crouching in the brush. "
            "The creature hissed, stepping back in surprise: **\"A new one!\"**\n\n"
            "Markop stepped forward, his axe raised and ready. **\"What do you mean new one? Do you know where Remi was?\"**\n\n"
            "The Mazebound held up a clawed, bleeding hand, shaking its head. **\"No! That blood was my finger — it's gone! It should be faster, but the imps need a pure soul to heal it.\"**\n\n"
            "Markop frowned at the creature's strange logic. **\"Where would the imps take a pure soul? The imp factory, mom's basement, the dungeon?\"**\n\n"
            "The Mazebound began to mutter a long explanation, but Markop cut him off with a bark: **\"Too long!\"**\n\n"
            "Instead of negotiating further with the creature, Markop closed his eyes and began chanting a divine spell. He pictured Remi's silver necklace in his mind, focusing his divine energy into a casting of *Locate Object*. "
            "A faint gold pulse resonated in his chest, pointing like a magnetic needle through the dark trees.\n\n"
            "*WAH! Pure soul healing! Imps use pure souls like emergency medical kits! They kidnap a halfling ranger, cut off a finger, and try to use her soul to patch a wounded Mazebound! "
            "This is why Waluigi keeps his soul impure — nobody ever tries to use Waluigi for medical ingredients! WAH.*"
        ),
        "waluigi_note": "Markop's casting of Locate Object bypasses interrogation delays, replacing unreliable enemy testimony with a direct divine tracking signal."
    },
    {
        "name": "IV. The Elevation Surprise and the Reunited Party",
        "icon": "✨",
        "overview": (
            "Markop and Eager followed the golden *Locate Object* beacon through the dense underbrush, their eyes fixed on the path ahead.\n\n"
            "Suddenly, a rustle sounded right behind them. Remi stepped out from behind a mossy rock, scaring Markop half to death! "
            "Markop jumped, spinning around with his hand over his heart: **\"Where have you gone?!\"**\n\n"
            "Remi dusted her sleeves, a small, triumphant smirk on her face. **\"I got kidnapped, but I got myself and Mossy out of trouble! We lost some things though... I know where the necklace is.\"**\n\n"
            "The tracking signal had led them below her because the entrance to the dungeon facility where her necklace rested was elevated on a stone ledge above them.\n\n"
            "Seeing her cuts, Markop immediately raised his hand and cast a healing spell. Warm divine light washed over Remi, closing her wounds as they walked back toward the dungeon entrance together, ready to recover her stolen necklace and belongings.\n\n"
            "*WAH! The vertical approach! Markop casts a tracking spell pointing forward, and Remi drops down from a ledge behind him! "
            "This is why Waluigi always checks the ceiling before checking the floor! WAH.*"
        ),
        "waluigi_note": "Remi's self-rescue demonstrates her operational independence. Rather than waiting for a rescue party, she broke containment and re-established contact."
    },
    {
        "name": "V. Infiltration of the Crab Cage",
        "icon": "🕸️",
        "overview": (
            "As they approached the secured storage facility, Markop ordered Remi softly: **\"Stay in the back.\"**\n\n"
            "Remi nodded: **\"Okay.\"**\n\n"
            "She immediately cast *Invisibility* on herself, her body turning completely translucent. "
            "Ahead in the courtyard, they spotted wooden crates tied up inside a heavy iron cage shaped like a giant crab trap. Remi's stolen gear was inside!\n\n"
            "Remi whispered to her construct: **\"Stay here, Mossy. I'm getting some stuff and I'll be back.\"**\n\n"
            "Invisible Remi crept past two patrolling guards, climbed onto a wooden barrel, and jumped down through the top hatch into the cage. "
            "An imp guard stood right beside the crates, completely unaware of her presence.\n\n"
            "Remi began digging through the crates, but couldn't find her necklace on top. She burrowed deeper into the pile of wooden containers.\n\n"
            "*WAH! Invisible breaking and entering! Remi sneaks past two guards, jumps into a crab cage, and burrows through wooden crates like a rat in a pantry! "
            "A masterclass in stealth operations! WAH.*"
        ),
        "waluigi_note": "Remi's use of Invisibility allows her to infiltrate the secure storage cage without triggering open combat."
    },
    {
        "name": "VI. The Box Guardian and the Dancing Goblin",
        "icon": "📦",
        "overview": (
            "Deep inside the crate pile, Remi found an interesting, ornate wooden box and opened the latch.\n\n"
            "Instantly, a tiny, energetic goblin jumped out of the box! **\"I'm the Box Guardian! I guard the box! Who opened my box?!\"** the goblin shrieked.\n\n"
            "The Box Guardian immediately started doing a wild, energetic victory dance! The noise drew a second guard down from the upper walkway—now two guards were patrolling the tight cage area!\n\n"
            "Remi, still completely invisible, held her breath and dived deeper into the box pile to avoid being stepped on by the dancing goblin.\n\n"
            "*WAH! The Box Guardian! You open an interesting box in a dungeon and instead of gold or a potion, a tiny goblin pops out like a jack-in-the-box and starts doing a tap-dance! "
            "Waluigi has bought mystery boxes with similar contents at the Wario Warehouse! WAH.*"
        ),
        "waluigi_note": "The Box Guardian functions as a comedic trap, converting a routine container search into a high-risk stealth hazard."
    },
    {
        "name": "VII. The Soot Barrel and the Missing Mirror",
        "icon": "💣",
        "overview": (
            "Buried beneath the dancing goblin's box, Remi spotted a deep black jar containing a dark crystal.\n\n"
            "Remi paused, examining it closely: **\"How do I know if this is not just a clear crystal inside a black jar? I better look inside.\"**\n\n"
            "Remi forced her hands down into the narrow opening to pull the Black Crystal out. Her hands came out covered in thick, black soot. "
            "She reached in deeper and forced it upward—**BAM!**\n\n"
            "A sudden flash of light fired upwards with a deafening bang! A cloud of gunpowder smoke erupted, covering her face and body in black soot! The 'black jar' was actually the loaded barrel of a swivel gun!\n\n"
            "Coughing quietly through the soot, Remi searched further for the **Mirror of True Reflection**, but couldn't find it in the pile. "
            "She reminded herself: **\"Nice and quiet, slow and don't get caught, because if I get caught, bad things will happen!\"**\n\n"
            "*WAH! The cannon barrel jar! Remi thought she was pulling a crystal out of a vase, but she was actually shoving her hand down the barrel of a loaded cannon! "
            "The flash of light turned her face blacker than a Mario kart exhaust pipe! WAH.*"
        ),
        "waluigi_note": "The soot-barrel incident highlights the deceptive traps placed within the storage cage, converting an inspection into an explosive misfire."
    },
    {
        "name": "VIII. The Sharpie Paper Bag Disguise",
        "icon": "👺",
        "overview": (
            "Searching through the remaining crates, Remi found a **Disguise Kit** and a small cardboard box.\n\n"
            "Remi examined the box: **\"It sort of looks like a goblin, it's just my size.\"**\n\n"
            "Remi put the box over her head and pulled out a Sharpie marker, drawing a crude goblin face on the front! "
            "Looking down at her soot-covered clothes and paper bag mask, she thought: *\"I am screwed... Okay, now I hope my disguise is good enough.\"*\n\n"
            "A guard spotted her walking out of the cage: **\"Hey! Who are you? Why are you wearing that paper bag on your head?\"**\n\n"
            "Remi put on a raspy goblin voice and bluffed: **\"I'm a Box Guardian! Like a guardian with a box! There is a box that needs to be guarded, but before someone else gets before me...\"**\n\n"
            "Without waiting for a response, Remi sprinted for the exit at full speed!\n\n"
            "*WAH! The cardboard box disguise! Remi drew two eyes and a zig-zag mouth on a paper bag with a Sharpie marker and told a guard she was a certified Box Guardian! "
            "And the guard believed her! This is the greatest stealth disguise in the history of the Shadow Estate! WAH.*"
        ),
        "waluigi_note": "Remi's improvised cardboard box disguise exploits the guards' confusion, converting a compromised stealth position into a rapid escape."
    },
    {
        "name": "IX. The Toad Spore Song and the Escape",
        "icon": "🍄",
        "overview": (
            "Remi burst out of the facility gates, running back toward Markop and Eager while shouting: "
            "**\"We need to leave as quickly as possible! We can always come back another time! And maybe with our luck Wario will come with the mirror and smell like garlic... Seriously, what is it with that guy and the garlic?!\"**\n\n"
            "As she ran past the guard she had killed earlier, she noticed his body hadn't decomposed: "
            "**\"I guess he hasn't decomposed yet. The Toads say that they decompose at a slow rate after death too... We're born from it. When you decompose, a new Toad is born. It almost makes me want to sing!\"**\n\n"
            "Remi burst into the Toad spore shanty as she ran: **\"We are the fun guys, you may call me a fun-gi, because we grow and grow, and we scream and shout and run about!\"**\n\n"
            "She marvelled as they ran: **\"I can't believe my disguise worked!\"** while guards' shouts echoed behind them.\n\n"
            "Markop caught up, looking at the road ahead: **\"I think I know a way to find Archie.\"**\n\n"
            "*WAH! The Toad spore shanty! Remi escapes a dungeon wearing a cardboard box covered in soot, singing a children's song about Toad decomposition, "
            "while wondering why Wario smells like garlic! Waluigi has no notes. This is peak operational performance! WAH.*"
        ),
        "waluigi_note": "Remi's successful escape with the Black Crystal concludes the recovery phase, setting up the search for Archie."
    }
]

description_lead = (
    "*\"I'm a Box Guardian! Like a guardian with a box! There is a box that needs to be guarded, but before someone else gets before me...\"*\n"
    "— **[Remi Akamatsu](#/article/remi_akamatsu_full_backstory)**\n\n"
    "*\"Waste of time! Let's head back to the blood!\"*\n"
    "— **[Markop](#/article/markop)**\n\n"
    "*\"WAH! A cardboard box disguise! Remi drew two eyes and a zig-zag mouth on a paper bag with a Sharpie marker and told a guard she was a certified Box Guardian! And the guard believed her! This is the greatest stealth disguise in the history of the Shadow Estate! WAH.\"*\n"
    "— **[Waluigi](#/article/waluigi), Auditor-General, Walupedia Editorial Board**\n\n"
    "---"
)

summary_text = (
    "Following the Imp Ambush at Tymnas's cottage, Dan and Tymnas stay behind to heal Salam while Markop and Eager follow a blood trail into the dark woods. "
    "After encountering a singing Mazehound and a Mazebound who lost a finger, Markop casts Locate Object on Remi's necklace. Remi unexpectedly appears behind them, having escaped the cells with Mossy. "
    "Returning to the dungeon facility to recover her stolen necklace, Remi turns invisible, sneaks into a crab cage, accidentally triggers a dancing Box Guardian, gets covered in soot by a loaded gun barrel, "
    "and escapes wearing a cardboard box disguise with a Sharpie goblin face. Reunited with the Black Crystal, the party flees as Remi sings the Toad spore shanty, while Markop formulates a plan to locate Archie."
)

aftermath_text = (
    "## Aftermath & Operational Standing\n\n"
    "**1. Operational Result:** The party successfully recovered the Black Crystal from the storage cage at the dungeon facility. Remi escaped uncaptured using an improvised cardboard box disguise.\n\n"
    "**2. Casualty & Personnel Status:** Salam was stabilized by Dan and Tymnas following the whip strike. Remi sustained minor soot burns from a gun barrel trap. Two dungeon guards remain alerted but confused.\n\n"
    "**3. Materiel & Intelligence:** The Black Crystal is back in party custody. The Mirror of True Reflection remains unrecovered. Markop established a tracking methodology to locate Archie.\n\n"
    "**4. Strategic Position:** The group has withdrawn from the facility perimeter and is preparing to pursue Archie's location."
)

assessment_text = (
    "## Waluigi's Assessment & Editorial Verdict\n\n"
    "**1. The Box Guardian Disguise — High-Risk Tactical Success.** Waluigi commends Remi for her improvisational disguise technique. Drawing a goblin face on a cardboard box with a Sharpie marker and claiming to be a Box Guardian bypassed two armed guards without triggering combat. WAH.\n\n"
    "**2. Locate Object Efficiency.** Markop's decision to cast Locate Object on Remi's necklace cut through the Mazebound's deceptive riddles, proving that divine tracking spells are vastly superior to forest negotiation. WAH.\n\n"
    "**3. The Soot Barrel Hazard.** Shoving hands into a deep black jar without checking if it is the barrel of a loaded swivel gun is a classic field error. Remi is fortunate the powder flash only produced soot and singed eyebrows. WAH.\n\n"
    "**4. Retaining the Black Crystal.** Securing the Black Crystal prevents the Onyx Hand and Kyrn's forces from utilizing it for plane-severing rituals. WAH.\n\n"
    "**Final Recommendation:** Approve the filing. Update the Shadow Estate event registry. Track Wario's garlic emissions as a potential regional navigation beacon. WAH!"
)

new_event = {
    "id": "the_box_guardian_sharpie_disguise_and_the_soot_barrel",
    "name": "The Box Guardian, the Sharpie Disguise, and the Soot-Barrel Trap",
    "title": "The Box Guardian, the Sharpie Disguise, and the Soot-Barrel Trap",
    "date": "30 Harvestide, 1040 BF",
    "era": "Modern Era",
    "location": "shadow_estate",
    "type": "expedition",
    "status": "Resolved",
    "customCss": custom_css,
    "summary": summary_text,
    "description": description_lead,
    "sections": sections,
    "participants": ["markop", "dan_the_toad", "eager", "salam", "tymnas", "remi_akamatsu_full_backstory", "mossy", "wario", "archie"],
    "outcome": "Remi recovers Black Crystal, escapes using Sharpie box disguise, party reunites and sets out to find Archie.",
    "notableFeatures": [
        "Markop slashes imp wing onto the Archivist's book",
        "Dan wakes up and strikes imp with longsword",
        "Eager whip crack drops imp",
        "Tymnas throws Salam out window to save him",
        "Markop and Eager follow blood trail in dark woods",
        "Encounter with singing Mazehound",
        "Mazebound missing finger blood revelation",
        "Markop casts Locate Object on Remi's necklace",
        "Remi appears from elevation above",
        "Infiltration of crab cage with Invisibility",
        "The Box Guardian goblin dance",
        "Explosive soot-barrel gun trap",
        "Sharpie cardboard box goblin disguise bluff",
        "Remi sings Toad spore shanty during escape",
        "Markop plans to locate Archie"
    ],
    "relatedArticles": [
        "the_imp_ambush_aftermath_and_kyrn_cell_escape",
        "the_imp_ambush_of_harvestide_29",
        "remi_akamatsu_full_backstory",
        "markop",
        "dan_the_toad",
        "eager",
        "salam",
        "tymnas",
        "mossy",
        "archie",
        "wario"
    ],
    "aftermath": aftermath_text,
    "waluigiAssessment": assessment_text
}


def main():
    with open(EVENTS_PATH, 'r', encoding='utf-8') as f:
        events = json.load(f)

    existing_idx = next((i for i, e in enumerate(events) if e.get('id') == new_event['id']), None)
    if existing_idx is not None:
        events[existing_idx] = new_event
        print(f"Updated existing {new_event['id']} in events.json.")
    else:
        events.append(new_event)
        print(f"Appended {new_event['id']} to events.json.")

    with open(EVENTS_PATH, 'w', encoding='utf-8') as f:
        json.dump(events, f, indent=2, ensure_ascii=False)

    if os.path.exists(CHARS_PATH):
        with open(CHARS_PATH, 'r', encoding='utf-8') as f:
            chars = json.load(f)

        updated_chars = False
        for c in chars:
            if c.get('id') in ['remi_akamatsu_full_backstory', 'markop', 'dan_the_toad', 'eager', 'salam', 'tymnas', 'archie']:
                if 'keyEvents' in c and new_event['id'] not in c['keyEvents']:
                    c['keyEvents'].append(new_event['id'])
                    updated_chars = True
                if 'relatedArticles' in c and new_event['id'] not in c['relatedArticles']:
                    c['relatedArticles'].append(new_event['id'])
                    updated_chars = True

        if updated_chars:
            with open(CHARS_PATH, 'w', encoding='utf-8') as f:
                json.dump(chars, f, indent=2, ensure_ascii=False)
            print("Updated character references in characters.json.")

    print("Build complete.")

if __name__ == '__main__':
    main()
