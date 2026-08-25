#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Files the Feyward session event
  id: 'feyward_battalion_of_six_and_the_bait_plan'
in the order docs/SESSION_FILING_PROCESS.md requires:
  2 locations -> 3 characters -> 4 XP -> 5 event -> 6 exhibits
  -> 7 investigation -> 8 index -> 9 systems (WAHwire, RNN pending list).

Prose lives in tools/feyward_battalion_sections.py.

    python3 tools/build-feyward-battalion-event.py          # write
    python3 tools/build-feyward-battalion-event.py --check  # dry run + counts
"""

import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, 'Reputation-Matrix2', 'data')
EVENTS_PATH = os.path.join(DATA, 'events.json')
CHARS_PATH = os.path.join(DATA, 'characters.json')
LOCS_PATH = os.path.join(DATA, 'locations.json')
PROPS_PATH = os.path.join(DATA, 'props.json')
INV_PATH = os.path.join(DATA, 'investigations.json')
WAHWIRE_PATH = os.path.join(DATA, 'wahwire', 'posts.json')
MAINPAGE_PATH = os.path.join(DATA, 'mainPage.json')
PENDING_PATH = os.path.join(ROOT, 'tools', 'rnn-scripts', 'pending-news-articles.json')

sys.path.insert(0, os.path.join(ROOT, 'tools'))
from feyward_battalion_sections import SECTIONS, DESCRIPTION  # noqa: E402

EVENT_ID = 'feyward_battalion_of_six_and_the_bait_plan'
EVENT_DATE = ('1 Aethel, 922 BF (Feyward clock) — from the morning after the map until the wood '
              'came through the wall; the Material stood in 1040 BF, and the cutting lane outside '
              'was having its own night on the same clock, which is why nobody in the manor could '
              'say what hour it was')
XP_DATE = '1 Aethel, 922 BF (Feyward clock)'
XP_SORT = 9220109  # YYYYDDHH — 1 Aethel, 922 BF, 09:00

CUSTOM_CSS = (
    ".wiki-lead{background:linear-gradient(135deg,rgba(74,156,109,.16),rgba(30,40,32,.2),rgba(138,75,255,.08));"
    "padding:1.5rem;border-left:6px solid #4a9c6d;border-radius:1rem;margin-bottom:20px}"
    ".prose blockquote{background:linear-gradient(135deg,rgba(74,156,109,.12),rgba(20,26,22,.15)),var(--bg2);"
    "border-left:4px solid #4a9c6d;border-radius:0 10px 10px 0;padding:14px 20px;margin:18px 0;"
    "font-size:14.5px;line-height:1.8;color:var(--text)}"
    ".prose blockquote strong{color:#7fd8a4;letter-spacing:.03em}"
    ".prose blockquote em{color:#c9a6ff;font-style:italic}"
    ".prose h2{color:#7fd8a4;border-bottom:2px solid rgba(74,156,109,.3);padding-bottom:6px;"
    "font-family:var(--font-title,serif)}"
    ".wnote{background:linear-gradient(135deg,rgba(74,156,109,.14),rgba(138,75,255,.06)),var(--bg2);"
    "border-left:4px solid #4a9c6d;padding:14px 18px;margin:20px 0;border-radius:0 8px 8px 0;"
    "font-size:13.5px;line-height:1.65}"
    ".wnote b{color:#7fd8a4;font-size:14px}"
)

# ---------------------------------------------------------------- step 4: XP
XP_AWARDS = [
    {
        "xpKey": "hjumpik", "articleId": "hjumpik", "name": "Hjumpik",
        "cat": "social", "xp": 320,
        "title": "Event — The Battalion of Six and the Bait Plan",
        "desc": "Took command of six people at breakfast, named them, and kept four of them alive through four engagements.",
        "date": XP_DATE, "dateSort": XP_SORT,
    },
    {
        "xpKey": "hjumpik", "articleId": "hjumpik", "name": "Hjumpik",
        "cat": "combat", "xp": 260,
        "title": "Event — The Battalion of Six and the Bait Plan",
        "desc": "Came back into the corridor for the mound, cut it, and refused the Oracle's shortcut to the Revel.",
        "date": XP_DATE, "dateSort": XP_SORT,
    },
    {
        "xpKey": "waluigi", "articleId": "waluigi", "name": "Waluigi",
        "cat": "magic", "xp": 240,
        "title": "Event — The Battalion of Six and the Bait Plan",
        "desc": "Named three options with costs attached, then put an ice lance the length of a hallway into a thirsty tree.",
        "date": XP_DATE, "dateSort": XP_SORT,
    },
    {
        "xpKey": "waluigi", "articleId": "waluigi", "name": "Waluigi",
        "cat": "survival", "xp": 140,
        "title": "Event — The Battalion of Six and the Bait Plan",
        "desc": "Was in a bathroom with a locking door while the corridor was decided, and emerged composed.",
        "date": XP_DATE, "dateSort": XP_SORT,
    },
    {
        "xpKey": "toadlee", "articleId": "toad_lee", "name": "Toad Lee",
        "cat": "social", "xp": 220,
        "title": "Event — The Battalion of Six and the Bait Plan",
        "desc": "Gathered a Toad squad of five — the only unit in the manor to arrive already in formation.",
        "date": XP_DATE, "dateSort": XP_SORT,
    },
    {
        "xpKey": "toadlee", "articleId": "toad_lee", "name": "Toad Lee",
        "cat": "combat", "xp": 180,
        "title": "Event — The Battalion of Six and the Bait Plan",
        "desc": "Held the corridor line with Wyatt until the shambling mound was overwhelmed.",
        "date": XP_DATE, "dateSort": XP_SORT,
    },
]

# ------------------------------------------------------- step 2: new characters
NEW_CHARACTERS = [
    {
        "id": "hank_the_goblin_butler",
        "name": "Hank",
        "title": "The Goblin Butler Who Went Through the Door",
        "type": "None",
        "race": "Goblin",
        "status": "Active — survived the corridor night; went alone through a door Hjumpik ordered shut; current post unrecorded",
        "affiliation": "Household staff of the Overgrown Manor / provisional member of Hjumpik's sixth detachment",
        "summary": "A goblin of the manor's service staff, distinguishable at twenty paces by a folded handkerchief in his breast pocket. Mustered into Hjumpik's battalion on the morning of 1 Aethel, 922 BF, he was the first of the six into the awakened shrub — carried the last three paces by Randall and running the rest himself, two kitchen knives in his hands. He took two longsword strokes from his own sergeant and got up. His morale was recorded SHAKEN at 39, which is the archive's only numeric description of a goblin's feelings.",
        "description": "Hank is small even by goblin standards, which is how Timmy explained hitting him. He fights with cutlery, charges without being asked, wipes his face with the handkerchief rather than dropping it, and points at doors while shouting *quickly, in here*. He is the only member of the sixth detachment to disobey a direct order and survive it.\n\nWhen the tree came through the wall he was standing in a doorway that the tree was also arriving at, waving both arms. Hjumpik called it a bad idea. Hank went in anyway. The archive has no door report and no injury report; it has Hank, later, in the room beyond, alive and unrepentant.",
        "relatedArticles": [EVENT_ID, "overgrown_manor", "hjumpik"],
    },
    {
        "id": "timmy_the_house_guard",
        "name": "Timmy",
        "title": "The Top Guard Who Led the Charge",
        "type": "None",
        "race": "Unknown — house guard of the Overgrown Manor",
        "status": "Active — survived the corridor night; longsword",
        "affiliation": "House guard of the Overgrown Manor / sergeant of Hjumpik's sixth detachment",
        "summary": "The tallest man in the sixth detachment, and the one standing tallest on purpose so that somebody would notice. Given the charge up the wall walk on the morning of 1 Aethel, 922 BF, he led it, shouted RED ALERT twice, and put two longsword strokes into a goblin on his own side.",
        "description": "Timmy's defence was that the goblins were *puny little things* who would not work unless you put oomf into them, and that Hank had been in the way, and that Hank was very small. All three statements were true. None of them were an answer.\n\nHe is the reason the phrase *no friendly fire please* exists in the Feyward record. Hjumpik said it at the foot of the stair. Timmy heard it. Timmy spent it inside four minutes, which is the whole lesson of the battalion in one man.",
        "relatedArticles": [EVENT_ID, "overgrown_manor", "hjumpik"],
    },
    {
        "id": "wyatt_the_white_haired_goblin",
        "name": "Wyatt",
        "title": "The White-Haired Goblin Who Held the Line",
        "type": "None",
        "race": "Goblin",
        "status": "Active — survived the corridor night; two recorded attacks on the shambling mound",
        "affiliation": "Household staff of the Overgrown Manor / provisional member of Hjumpik's sixth detachment",
        "summary": "A goblin of the manor's staff with white hair, mustered into the sixth detachment. When the shambling mound came through behind the tree, Wyatt and Toad Lee were what was left in the corridor to stop it, and they stopped it.",
        "description": "The tally gives Wyatt two attacks on the mound and no retreats, which in that corridor is a distinction. Afterwards he explained the victory in the plainest sentence of the night: *we just had to overwhelm him, and we were able to get him down.* No tactic. No formation. Six people in the same square yard until the thing stopped being a thing.",
        "relatedArticles": [EVENT_ID, "overgrown_manor", "toad_lee"],
    },
    {
        "id": "brad_the_waiter",
        "name": "Brad",
        "title": "The Waiter",
        "type": "None",
        "race": "Unknown — household staff of the Overgrown Manor",
        "status": "Active — wounded by the mound's spell, on the floor and talking; Hjumpik calls him Brandon",
        "affiliation": "Household staff of the Overgrown Manor / provisional member of Hjumpik's sixth detachment",
        "summary": "A waiter, mustered into a combat detachment because there was nobody else. Sent up the wall walk to remove the leaves off the mouth of the Revel. Took a spell from the shambling mound that put him on his knees in the debris, and announced from the floor that the team had fought valiantly.",
        "description": "Hjumpik called him Brandon exactly once, in the order sending him up the wall, and never called him anything correctly again. The archive preserves the error because it is the shape of the whole battalion: a commander who had six people for four hours and could not hold five names in his head.\n\nBrad's line from the floor — *our team fought valiantly and defeated it* — is the only victory announcement in the Feyward record delivered by a casualty.",
        "relatedArticles": [EVENT_ID, "overgrown_manor"],
    },
    {
        "id": "randall_the_house_guard",
        "name": "Randall",
        "title": "The Guard Who Lifted Hank",
        "type": "None",
        "race": "Unknown — house guard of the Overgrown Manor",
        "status": "Active — survived the corridor night",
        "affiliation": "House guard of the Overgrown Manor / provisional member of Hjumpik's sixth detachment",
        "summary": "A house guard of the manor, mustered into the sixth detachment, who insisted on being called Randall *now* when told his name was common. Physically lifted Hank three paces closer to the awakened shrub and set him down to finish the job himself.",
        "description": "Randall's contribution to the Feyward war effort was one lift. It is recorded here because it is the only instance in the archive of a soldier improving a comrade's position by picking him up and moving him, and because the goblin ran the rest of the way on his own feet, which was the point.",
        "relatedArticles": [EVENT_ID, "overgrown_manor"],
    },
    {
        "id": "piktor_deldkur_the_third",
        "name": "Piktor Deldkur the Third",
        "title": "The Dwarf Who Wanted to Fight Without an Arm",
        "type": "None",
        "race": "Dwarf (Deldkur line)",
        "status": "Deceased — long before 922 BF by the Feyward clock; described by his grandson as dead, but a great warrior",
        "affiliation": "House Deldkur",
        "summary": "Hjumpik's grandfather. Named in the war room of the Overgrown Manor on the morning of 1 Aethel, 922 BF, to a battered fairy who had just been handed the job of running at a monster: even when his arm was cut off he still wanted to fight. The ordinal is the important part — there is a First and a Second.",
        "description": "The archive had a Deldkur before it had a Piktor: the grandson's full name has been on file since the Raventree crisis, and no volume in Waluigi's forty contains the rest of the line. That ends with this filing.\n\n*The Third* implies a First and a Second, and a family habit of naming sons after a thing the father did. What Piktor did, per the only surviving account, was lose an arm and keep swinging. Hjumpik told the story to recruit a fairy. It worked, which says more about the fairy than about the story.\n\n> *\"What was his name?\"*\n> *\"Piktor Deldkur the Third.\"*",
        "relatedArticles": [EVENT_ID, "hjumpik"],
    },
]

# ------------------------------------------------------------- step 6: exhibits
NEW_PROPS = {
    "prop_feyward_sixth_detachment_commission": {
        "kind": "order",
        "icon": "📋",
        "title": "Provisional Commission — Sixth Detachment",
        "subtitle": "Written on the reverse of a barrel tally · the heir's map table · unsigned",
        "items": [],
        "articles": [EVENT_ID, "overgrown_manor"],
        "note": "Six names, one struck through, nobody's signature. The only document this battalion ever produced.",
        "body": (
            '<div class="pd-head">'
            '<div class="pd-org">House of the Manor \u2014 Office of the Map</div>'
            '<div class="pd-sub">Provisional commission \u00b7 reverse of barrel tally \u00b7 third watch</div>'
            '</div>'
            '<div class="pd-meta">Authority: the map master, O.C. \u00b7 Strength: six \u00b7 Objective: the leaves, the wall, and whatever comes through it</div>'
            '<table class="pd-table"><thead><tr><th>Named</th><th>Trade</th><th>State</th></tr></thead><tbody>'
            '<tr><td>Randall</td><td>house guard</td><td>standing</td></tr>'
            '<tr><td>Brad</td><td>waiter</td><td>standing; the commander calls him Brandon</td></tr>'
            '<tr><td>Timmy</td><td>house guard, tallest</td><td>standing; leads the charge</td></tr>'
            '<tr><td>Hank</td><td>goblin, service</td><td>standing; handkerchief folded</td></tr>'
            '<tr><td>Wyatt</td><td>goblin, service</td><td>standing; white hair</td></tr>'
            '<tr><td class="pd-strike">green goblin, unnamed</td><td>service</td><td>struck before the roll call</td></tr>'
            '</tbody></table>'
            '<div class="pd-clause">Second in command: the archivist, at his own request, subject to dispute. '
            'Standing order from the commander: <i>don\u2019t kill them</i>. Secondary order, issued at the foot of the '
            'stair: <i>no friendly fire, please</i>. The second order was spent within four minutes.</div>'
            '<div class="pd-clause">No signature appears. The authority for this detachment is a table with pins on it, '
            'and whoever was standing at that table when the asking happened.</div>'
            '<div class="pd-margin">Two dead before the roll call and the paper still says strength: six. '
            'Waluigi has audited worse arithmetic. Not many. &mdash; W.</div>'
            '<div class="pd-sign"><div><div class="pd-sigline"><i>(no mark)</i></div>'
            '<div class="pd-sigcap">For the map master \u2014 unsigned</div></div></div>'
        ),
        "stamps": ["evidence"],
    },
    "prop_revel_evacuation_order": {
        "kind": "order",
        "icon": "🕯️",
        "title": "Evacuation Order — Upper Floors",
        "subtitle": "Office of the Revel · carried up the stair and shouted",
        "items": [],
        "articles": [EVENT_ID, "overgrown_manor"],
        "note": "A house being eaten, cleared for its own safety, on the authority of the thing eating it. Everybody obeyed.",
        "body": (
            '<div class="pd-head">'
            '<div class="pd-org">Office of the Revel \u2014 House of the Manor</div>'
            '<div class="pd-sub">To all civilians, staff, guests, and the dancing</div>'
            '</div>'
            '<div class="pd-meta">Carried by: one house guard \u00b7 Delivery: shouted, at a run, up the east stair</div>'
            '<div class="pd-clause">You civilians. We are evacuating. Order of the Revel.</div>'
            '<div class="pd-clause">Move to the upper flowers. Do not return to the lower corridors. '
            'Do not attempt to open the drink doors. The barrels are gone and the doors are not what is behind them.</div>'
            '<div class="pd-clause">The music continues. Attendance is not required during the move, '
            'and will be resumed when the floors are safe.</div>'
            '<div class="pd-total">Signed for the Revel, by the Revel\u2019s own office.</div>'
            '<div class="pd-margin--red">Read that last line again. The fire brigade reports to the fire, '
            'and the whole house still lines up. &mdash; W.</div>'
            '<div class="pd-sign"><div><div class="pd-sigline"><i>(a wax impression of no instrument the archive recognises)</i></div>'
            '<div class="pd-sigcap">Office of the Revel</div></div></div>'
        ),
        "stamps": ["sealed"],
    },
    "prop_wahbook_command_dispute": {
        "kind": "note",
        "icon": "📓",
        "title": "Wahbook Leaf — TECHNICAL",
        "subtitle": "Waluigi's own hand · one page · the word underlined twice",
        "items": [],
        "articles": [EVENT_ID, "waluigi"],
        "note": "Filed at the dwarf's own suggestion, in the corridor, four minutes after he made it.",
        "body": (
            '<div class="pd-head">'
            '<div class="pd-org">Wahbook \u2014 leaf, unnumbered</div>'
            '<div class="pd-sub">Lower service corridor \u00b7 morning \u00b7 six recruits looking at their boots</div>'
            '</div>'
            '<div class="pd-label">TECHNICAL</div>'
            '<div class="pd-clause"><i>He said:</i> we\u2019re both in command. Technically I\u2019m in command. '
            'You\u2019re my advisor.</div>'
            '<div class="pd-clause"><i>I said:</i> what advisor. This is worse than WarioWare.</div>'
            '<div class="pd-clause"><i>He said:</i> you have more power than WarioWare. You\u2019ll direct me '
            'if anything goes wrong. You take command.</div>'
            '<div class="pd-clause"><i>I said:</i> like how you listened during the planar fracture ritual that '
            'caused this. To my pleas.</div>'
            '<div class="pd-clause"><i>He said:</i> you could write that in your wahbook or something. '
            'But it\u2019s not just that. Okay. No need to argue \u2014 we got plant monsters coming out.</div>'
            '<div class="pd-quote">Technically.</div>'
            '<div class="pd-margin">He told me to write it down. Waluigi writes it down. '
            'Waluigi has always written it down. That is the whole man, and the dwarf knows it, '
            'and used it to end an argument in four seconds. &mdash; W.</div>'
            '<div class="pd-wah">Filed at his suggestion. He will regret the suggestion. &mdash; WAH.</div>'
        ),
        "stamps": ["evidence"],
    },
}

# ------------------------------------------------------- step 7: investigation
SESSION_ROW = {
    "id": "s_aethel1_battalion_of_six",
    "label": "The Battalion of Six, the Ice That Got Drunk, and the Bait Plan",
    "date": "1 Aethel, 922 BF (Feyward clock)",
    "event": EVENT_ID,
}

NEW_EXHIBITS = [
    {
        "id": "ex_sixth_detachment_commission",
        "propId": "prop_feyward_sixth_detachment_commission",
        "session": SESSION_ROW["id"],
        "icon": "📋",
        "kind": "order",
        "category": "record",
        "title": "Six names, one struck through, nobody's signature",
        "secured": "1 Aethel, 922 BF (Feyward clock) · lifted off the map table before the wood came through the wall",
        "custody": "Archive copy — Waluigi made the list in eleven seconds",
        "visual": ('<div style="position:relative;height:132px;border-radius:10px;overflow:hidden;'
                   'background:linear-gradient(180deg,rgba(38,48,38,.95),rgba(18,24,20,.98));'
                   'border:1px solid rgba(127,216,164,.26)">'
                   '<div style="position:absolute;left:14%;right:14%;top:14px;bottom:18px;background:rgba(228,214,182,.9)"></div>'
                   '<div style="position:absolute;left:22%;top:32px;right:22%;height:2px;background:rgba(60,40,20,.22)"></div>'
                   '<div style="position:absolute;left:22%;top:48px;right:26%;height:2px;background:rgba(60,40,20,.22)"></div>'
                   '<div style="position:absolute;left:22%;top:64px;right:24%;height:2px;background:rgba(60,40,20,.22)"></div>'
                   '<div style="position:absolute;left:22%;top:80px;right:40%;height:2px;background:rgba(150,30,30,.6)"></div>'
                   '<div style="position:absolute;left:0;right:0;bottom:8px;text-align:center;font-size:10px;'
                   'letter-spacing:.16em;font-weight:800;color:#7fd8a4">SIX NAMED · ONE STRUCK · UNSIGNED</div></div>'),
        "onRecord": ("The commission is written on the reverse of a barrel tally, which is the paper the house had left. "
                     "[[roll:3|strength: six, one struck through|the tally was struck BEFORE the roll call, which means whoever wrote it knew a man was dead and counted him anyway. Somebody in the war room was doing arithmetic on the living and the dead at the same time, and did not tell the dwarf.|a struck line is bookkeeping. Staff strike lines all day.]] "
                     "There is no signature. The authority line reads *the map master, O.C.* and nothing else."),
        "dc": 3,
        "analysis": ("## Authority in this house is furniture\n\n"
                     "Nobody signed this. The commission says it comes from the map master and the map master comes from "
                     "two initials, and two initials in this family have already been found carved into bedframes and "
                     "struck onto soul-capture hardware. [[roll:4|That is the graft, running in daylight|the same move the file opened on — take an existing authority, do not sign anything, and let the object carry the weight. A commission nobody signed cannot be traced to a person, only to a table.|initials are everywhere in this family. Proximity is not authorship.]]\n\n"
                     "## The struck line is the honest part\n\n"
                     "Two men were dead before the roll call and the paper still says strength: six. "
                     "That is not a lie; it is a document written to a number somebody upstairs wanted to see.\n\n"
                     "## One trade on the list is *waiter*\n\n"
                     "Brad. A waiter, in a combat detachment, because the house had spent its guards on the foyer and "
                     "its fairies on the music. The archive files this under what a manor looks like on its fourth day."),
        "links": {
            "events": [EVENT_ID, "feyward_chop_bros_soul_ring_and_the_guard_with_no_name"],
            "items": [],
            "characters": ["hjumpik", "waluigi", "hank_the_goblin_butler", "timmy_the_house_guard"],
        },
    },
    {
        "id": "ex_revel_evacuation_order",
        "propId": "prop_revel_evacuation_order",
        "session": SESSION_ROW["id"],
        "icon": "🕯️",
        "kind": "order",
        "category": "record",
        "title": "An evacuation signed by the thing being evacuated from",
        "secured": "1 Aethel, 922 BF (Feyward clock) · taken from a house guard on the east stair, mid-shout",
        "custody": "Archive copy",
        "visual": ('<div style="position:relative;height:132px;border-radius:10px;overflow:hidden;'
                   'background:linear-gradient(180deg,rgba(64,44,72,.95),rgba(22,16,28,.98));'
                   'border:1px solid rgba(201,166,255,.26)">'
                   '<div style="position:absolute;left:20%;right:20%;top:12px;bottom:20px;background:rgba(236,226,206,.92)"></div>'
                   '<div style="position:absolute;left:28%;top:30px;right:28%;height:2px;background:rgba(60,40,70,.24)"></div>'
                   '<div style="position:absolute;left:28%;top:46px;right:30%;height:2px;background:rgba(60,40,70,.24)"></div>'
                   '<div style="position:absolute;left:28%;top:62px;right:26%;height:2px;background:rgba(60,40,70,.24)"></div>'
                   '<div style="position:absolute;left:44%;right:44%;top:76px;height:16px;border-radius:50%;background:rgba(150,60,60,.55)"></div>'
                   '<div style="position:absolute;left:0;right:0;bottom:8px;text-align:center;font-size:10px;'
                   'letter-spacing:.16em;font-weight:800;color:#c9a6ff">ORDER OF THE REVEL · SEALED</div></div>'),
        "onRecord": ("The order moves civilians to the upper flowers, tells them not to open the drink doors, and says "
                     "the music will resume. [[roll:3|The Revel is issuing safety orders about itself|a thing that has to warn a house not to interrupt it is a thing that can be interrupted. The order is an admission, filed as a courtesy.|safety notices are boilerplate. Every office writes them.]] "
                     "Every fairy on that stair obeyed it without a single question."),
        "dc": 3,
        "analysis": ("## Total authority does not need to be enforced\n\n"
                     "Nobody argued with this paper. Not the drunk half, not the sober half, not the satyr who wanted to "
                     "join the trees. The order was shouted by one guard on one stair and the whole floor moved.\n\n"
                     "## The resume clause\n\n"
                     "[[roll:5|Attendance will be resumed when the floors are safe|the Revel plans to keep going after the house is repaired. It is not a siege, it is a schedule. The library volume said the only endings are total surrender or somebody willing to be the one who stopped the music — and this paper is the Revel saying it has read the same book.|the clause could be politeness. Offices promise continuity reflexively.]]\n\n"
                     "## Why the party did not simply obey\n\n"
                     "Hjumpik went the other way on this order. The archive files that as the second time in one week "
                     "he has refused a route offered by something more powerful than him."),
        "links": {
            "events": [EVENT_ID, "the_feyward_revel_and_the_book_of_many_things"],
            "items": [],
            "characters": ["hjumpik", "waluigi"],
        },
    },
    {
        "id": "ex_wahbook_technical",
        "propId": "prop_wahbook_command_dispute",
        "session": SESSION_ROW["id"],
        "icon": "📓",
        "kind": "note",
        "category": "testimony",
        "title": "One page, headed TECHNICAL",
        "secured": "1 Aethel, 922 BF (Feyward clock) · written in the corridor, four minutes after the argument",
        "custody": "Waluigi's own hand — filed at the other man's suggestion",
        "visual": ('<div style="position:relative;height:132px;border-radius:10px;overflow:hidden;'
                   'background:linear-gradient(180deg,rgba(52,40,64,.95),rgba(20,16,26,.98));'
                   'border:1px solid rgba(212,168,83,.28)">'
                   '<div style="position:absolute;left:16%;right:24%;top:10px;bottom:16px;background:rgba(232,222,196,.93);transform:rotate(-1.2deg)"></div>'
                   '<div style="position:absolute;left:24%;top:28px;right:32%;height:3px;background:rgba(40,30,50,.7)"></div>'
                   '<div style="position:absolute;left:24%;top:44px;right:30%;height:2px;background:rgba(60,40,20,.24)"></div>'
                   '<div style="position:absolute;left:24%;top:58px;right:34%;height:2px;background:rgba(60,40,20,.24)"></div>'
                   '<div style="position:absolute;left:24%;top:72px;right:38%;height:2px;background:rgba(60,40,20,.24)"></div>'
                   '<div style="position:absolute;left:24%;top:88px;right:52%;height:3px;background:rgba(140,40,40,.55)"></div>'
                   '<div style="position:absolute;left:0;right:0;bottom:6px;text-align:center;font-size:10px;'
                   'letter-spacing:.16em;font-weight:800;color:#f2d68a">ONE PAGE · UNDERLINED TWICE</div></div>'),
        "onRecord": ("The leaf transcribes the argument word for word and underlines one word twice. "
                     "[[roll:3|The transcript was written within four minutes|Waluigi wrote it while the dwarf was still walking away, which means the page is a contemporaneous record and not a recollection. In a dispute about who is in charge, that is the only piece of paper either of them will ever have.|he keeps a notebook. Notebooks get written in.]] "
                     "The plea is recorded in full, including the part about the ritual."),
        "dc": 3,
        "analysis": ("## A plea, on the record, at last\n\n"
                     "The planar fracture ritual has been in this file since it opened. What has never been on paper is "
                     "that Waluigi asked, out loud, before it happened, and was not listened to. "
                     "[[roll:4|The dwarf did not deny it|he said *it's not just that* and moved on to the plant monsters. That is not a denial, it is a deferral, and deferrals in this house have a way of becoming the answer.|deflection under pressure proves nothing about the underlying claim.]]\n\n"
                     "## Who is actually in command\n\n"
                     "Technically the dwarf. Practically the archivist, whenever the dwarf is wrong, which the same page "
                     "records the dwarf conceding in advance. That is not a chain of command. That is a friendship with "
                     "a tiebreaker.\n\n"
                     "## Why the paper exists at all\n\n"
                     "Hjumpik told him to write it down as a way of ending the argument. The archive notes that the "
                     "argument did end, and the paper did not."),
        "links": {
            "events": [EVENT_ID, "planar_fracture"],
            "items": [],
            "characters": ["waluigi", "hjumpik"],
        },
    },
]

NEW_LEADS = [
    {
        "id": "lead_ravenous_host",
        "title": "Identify the Ravenous Host",
        "status": "open",
        "why": ("The corridor tally calls the busiest combatant on the floor the Ravenous Host. Nobody in the manor has "
                "described it, nobody classified it, and the archive cannot tell whether it fought for the house, for "
                "the wood, or for itself. It is the only name in the whole engagement that belongs to nothing else on "
                "file."),
        "exhibits": [],
        "events": [EVENT_ID, "feyward_woodfellow_vs_the_treant"],
    },
    {
        "id": "lead_revelmaster_as_target",
        "title": "Price the Revelmaster option before anybody tries it",
        "status": "open",
        "why": ("The war room proposed going for the Revelmaster rather than the Revel and rejected it in one line — "
                "*then they turn on us* — without ever establishing who holds the music, where he stands, or whether "
                "the house's obedience survives him. The evacuation order proves the obedience is total. Nobody has "
                "tested whether it is personal."),
        "exhibits": ["ex_revel_evacuation_order"],
        "events": [EVENT_ID, "the_feyward_revel_and_the_book_of_many_things"],
    },
    {
        "id": "lead_deldkur_line",
        "title": "Find the First and Second Piktor Deldkur",
        "status": "open",
        "why": ("Hjumpik named his grandfather Piktor Deldkur the Third in front of six strangers. The ordinal implies "
                "two earlier Deldkurs with the same name and the same habit. The archive has the grandson's full name "
                "on file and nothing else about the line — no home, no guild, no record of where an arm was lost."),
        "exhibits": [],
        "events": [EVENT_ID],
    },
    {
        "id": "lead_map_master",
        "title": "Establish who the Map Master is, and whether he exists",
        "status": "open",
        "why": ("Hjumpik's authority over six people came from *the map master, O.C.'s map master* and nothing else — "
                "no signature, no name, no face. If the commission is unsigned because the office is a role and not a "
                "person, then the same move that put a dwarf in command can put anybody in command, and the file's "
                "graft thread has just produced a working example."),
        "exhibits": ["ex_sixth_detachment_commission"],
        "events": [EVENT_ID, "feyward_chop_bros_soul_ring_and_the_guard_with_no_name"],
    },
]

NEW_RELATED_EVENTS = [EVENT_ID]


def _load(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)


def _save(path, obj):
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(obj, f, indent=2, ensure_ascii=False)
        f.write('\n')


def wc(s):
    return len(re.findall(r"[A-Za-z0-9'\u2019-]+", s or ''))


def build_event():
    return {
        "id": EVENT_ID,
        "name": "The Battalion of Six",
        "title": ("The Feyward Session Where Hjumpik Was Handed Six People at Breakfast, "
                  "Named Five of Them Wrong, Lost Two Before the Roll Call, Ordered Nobody to Shoot "
                  "Anybody on Purpose, Watched Waluigi Water a Tree, Held a Corridor with a Waiter "
                  "and a Goblin, Read the Revel Its Own Evacuation Order Back to It, and Ended the "
                  "Night Arguing About Which Living Creature Should Run at a Monster First"),
        "date": EVENT_DATE,
        "era": "Raventree Crisis — Feyward Operations / The Battalion of Six",
        "location": ("The Overgrown Manor — the heir's war room and map table, the outside wall walk, "
                     "the lower service hall, the kitchen, the mushroom coat room door, and the corridor "
                     "the wood came through"),
        "type": "Feyward Small-Unit Command / Casualty Management / Four Engagements / Bait Planning",
        "status": ("Unresolved — four engagements fought, the wood pushed back one corridor, the bait plan "
                   "agreed and not yet executed; the Revel has not ended and has issued an evacuation order "
                   "for its own house"),
        "summary": (
            "The morning after the map, the heir of the manor handed Hjumpik six people and a pincer. "
            "Two of the six were already dead, one of them a waiter, and the dwarf spent the rest of the day "
            "trying to keep the other four alive with an order that lasted four minutes: no friendly fire, please. "
            "Waluigi was made second-in-command, disputed the wording, and put an ice lance the length of a hallway "
            "into a tree that drank it. The wood came through the wall anyway. The Revel evacuated its own house on "
            "its own authority and everybody obeyed. The session ends in the war room with a plan, a bait, "
            "and the name of a dead dwarf nobody in the archive had ever heard of: Piktor Deldkur the Third."),
        "description": DESCRIPTION,
        "sections": [
            {k: v for k, v in s.items() if v}
            for s in SECTIONS
        ],
        "participants": [
            {"id": "hjumpik", "name": "Hjumpik", "role": "Commander, Sixth Detachment / Anvil / Refuser of Shortcuts"},
            {"id": "waluigi", "name": "Waluigi", "role": "Second-in-Command (disputed) / Advisor / Ice / Bathroom Logistics"},
            {"id": "toad_lee", "name": "Toad Lee", "role": "Squad Leader, Toad Squad of Five / Axe / Door-Holder"},
            {"id": "the_oracle", "name": "The Oracle", "role": "Offered a route, was refused, then went and fought anyway"},
            {"id": "timmy_the_house_guard", "name": "Timmy", "role": "Sergeant of the Charge / Longsword / Friendly Fire"},
            {"id": "hank_the_goblin_butler", "name": "Hank", "role": "First into the shrub / Through the door he was told not to go through"},
            {"id": "wyatt_the_white_haired_goblin", "name": "Wyatt", "role": "Held the corridor with Toad Lee"},
            {"id": "brad_the_waiter", "name": "Brad", "role": "Waiter, combat detachment, casualty, victory announcer"},
            {"id": "randall_the_house_guard", "name": "Randall", "role": "House guard / lifted Hank three paces"},
        ],
        "outcome": (
            "Four engagements fought inside the manor and one outside it, on the same night, on clocks that do not "
            "agree. The leaves on the wall walk were cut and grew back thicker within the minute. The shambling mound "
            "in the lower corridor was overwhelmed and destroyed. The largest of the plant monsters was brought down "
            "in the room where Waluigi was reading aloud. Two housefolk dead before the roll call, one wounded by a "
            "spell, one goblin through a door alone and back again. The Revel issued an evacuation order for its own "
            "house and the house complied. The heir's pincer was attempted and the wood came through the wall anyway. "
            "The bait plan is agreed, the bait is a battered fairy with one bent wing, and nobody has run at anything "
            "yet. Hjumpik still has the OC soul ring, Morel's key, and four of the six."),
        "notableFeatures": [
            "The heir's plan, verbatim: \"You have to be strategic. Hit them fast and hard. The dwarf way.\"",
            "Six people, five names, four monosyllabic — and one the record lost at the roll call",
            "\"You guys need some more just — brain cells.\" \"That doesn't make much sense.\" \"No, it really doesn't.\"",
            "Hank's morale, recorded by the tally as SHAKEN (39) — the archive's only numeric description of a goblin's feelings",
            "Waluigi's ice lance: enormous, accurate, and drunk by a thirsty tree in under a second",
            "The Revel issues an evacuation order for the house it is eating, and the house obeys without a question",
            "\"Above our paygrade\" — the first honest threat assessment filed in the Overgrown Manor",
            "Piktor Deldkur the Third: an arm, an attitude, and two earlier Deldkurs nobody has heard of",
            "The bait plan's load-bearing sentence: \"Can't go wrong.\"",
        ],
        "keyBattles": [
            {
                "name": "The Wall Walk — Awakened Shrub",
                "description": ("Two rounds on the outside wall. Hank went in first, carried the last three paces by "
                                "Randall, two kitchen knives under a leaf-cluster. The shrub's rake caught the house "
                                "guard across the breastplate. Timmy's multiattack landed both strokes on Hank."),
                "outcome": ("Shrub felled. Hank shaken, standing, and now more afraid of his own sergeant than of the "
                            "enemy. Hjumpik's standing order — no friendly fire — spent inside four minutes of being given."),
            },
            {
                "name": "The Lower Corridor — Shambling Mound",
                "description": ("The tree breached the corridor wall; the mound came through behind it. Toad Lee and "
                                "Wyatt were what was left in the corridor. Wyatt attacked twice with no retreats; the "
                                "mound's spell put Brad on his knees; Hjumpik came back into it and cut."),
                "outcome": ("Mound overwhelmed and destroyed by weight of numbers rather than by tactic. Brad wounded "
                            "and announcing the victory from the floor. Hank alone through a door, and back."),
            },
            {
                "name": "The Reading Room — The Largest of Them",
                "description": ("Seventeen turns. The Oracle twice into a shrub, two house guards on the mound, three "
                                "satyrs and two sprites into the treant, a goblin with a staff, and the busiest thing "
                                "on the floor, which the tally calls the Ravenous Host and the archive cannot classify. "
                                "The sprite archer took no action at all and survived the entire engagement."),
                "outcome": ("Plant monster destroyed; the corridor held, then lost, then held again. Casualties on both "
                            "sides including at least one sprite blade that found a sprite. Nobody has filed a report "
                            "on the Ravenous Host."),
            },
            {
                "name": "The Corridor Withdrawal — Everybody Falls Back",
                "description": ("Twenty-seven turns of retreat. A sprite caster took a multiattack through the ribs; a "
                                "sprite archer withdrew four separate times; a sprite warrior's blade found the sprite "
                                "archer instead of the enemy; a sorcerer attacked three times and ran three times."),
                "outcome": ("Every defender fell back, including the door. Reinforcements requested from the house "
                            "guard and refused: our job is to guard him. We're pretty stretched thin as is."),
            },
        ],
        "relatedArticles": [
            "feyward_chop_bros_soul_ring_and_the_guard_with_no_name",
            "feyward_amnesia_vines_morel_steely",
            "feyward_woodfellow_vs_the_treant",
            "the_feyward_revel_and_the_book_of_many_things",
            "the_feyward_revel_crisis_poison_plants_and_frozen_diplomacy",
            "overgrown_manor",
            "overgrown_manor_campaign",
            "the_oracle",
            "orangus_cornelius",
            "lady_aurelian",
            "corvinarus_family",
            "piktor_deldkur_the_third",
            "mystic_morel",
            "waluigi",
            "hjumpik",
            "toad_lee",
        ],
        "aftermath": (
            "**Standing.** The Overgrown Manor is one corridor smaller and one evacuation order larger. The leaves on "
            "the outside wall were cut and have grown back thicker. The largest of the plant monsters is down in the "
            "room where Waluigi was reading; the corridor it came through is not held, it is merely quiet. The Revel "
            "has not ended. It has, however, demonstrated that it can order its own house evacuated and be obeyed "
            "without argument, which is the most frightening sentence in this filing and Waluigi would like it read "
            "twice.\n\n"
            "**Personnel.** Hjumpik commands a detachment of six, of whom four are standing, one is on the floor "
            "talking, and one is somewhere behind a door he went through alone. Toad Lee has a Toad squad of five and "
            "is, by a wide margin, the only officer in the manor whose unit arrived in formation. The house guard "
            "refused reinforcements twice in one night, both times citing the heir. The Oracle offered a direct route "
            "to the Revel and was told no; it fought anyway, twice, at a shrub.\n\n"
            "**Materiel.** Retained: the [OC soul ring](oc_soul_ring), [Morel's key](morel_feyward_key), and "
            "[Steely's rusted fragments](steely_rusted_fragments), all still in Hjumpik's pocket, all still unburied. "
            "Expended: one ice lance the length of a hallway, absorbed entire; a quantity of leaves; one kitchen; one "
            "corridor wall; two housefolk. Acquired: [[prop:prop_feyward_sixth_detachment_commission|a commission "
            "nobody signed]], [[prop:prop_revel_evacuation_order|an evacuation order from the Revel's own office]], "
            "and a name — Piktor Deldkur the Third.\n\n"
            "**Exposure.** The house now knows the party commands people, which is different from knowing the party "
            "fights. Hjumpik's authority rests on a table with pins on it and an office nobody has ever met. And one "
            "combatant in the largest engagement of the night is on the tally under a name the archive has never seen "
            "before or since: the Ravenous Host."),
        "waluigiAssessment": (
            "**1. The battalion is a tactic, and the tactic is being there.** Four engagements, no formation, no "
            "flank, no plan that survived contact with a shrub. The mound died because six people hit the same square "
            "yard until it stopped being a thing. That is not generalship. It is the only generalship this house has, "
            "and it worked three times out of four, and the archive is professionally obliged to say so while noting "
            "that it does not scale.\n\n"
            "**2. Friendly fire is the Feyward's actual weapon.** Timmy put two strokes into Hank. A sprite warrior "
            "put a blade into a sprite archer. On the lane, a satyr scout's shaft took Swifty and Bramm's first cut "
            "found Renard. Three separate engagements, same signature. The wood does not need to outfight this house. "
            "It needs the house to keep swinging in the dark, which it will, because there is no light and everybody "
            "is frightened.\n\n"
            "**3. Ice was the wrong answer and Waluigi knew it in time to not care.** A plant drinks. He named three "
            "options with costs attached — the wall, the strike, the whole room frozen — and picked the one that "
            "looked best from a staircase. The room let him. That is the finding: not that the archivist erred, but "
            "that nobody in the manor is willing to overrule anybody else, which is what a house looks like when its "
            "government is a song.\n\n"
            "**4. The Revel is a schedule, not a siege.** Its own office ordered the upper floors evacuated, promised "
            "the music would resume, and was obeyed without a single question. The library volume was right: total "
            "surrender, or somebody willing to be the one who stopped the music. Nobody has volunteered. The war room "
            "proposed going for the Revelmaster instead and rejected the idea in one line without ever establishing "
            "who he is.\n\n"
            "**5. Authority in this manor is furniture.** The commission is unsigned. Its authority is *the map "
            "master, O.C.'s map master* — a role, attached to a table, attached to two initials that have already "
            "turned up carved into bedframes and struck onto soul hardware. A dwarf was put in command of six people "
            "by an office nobody has met. The same mechanism, run once more with a different dwarf, is how this "
            "family has always worked.\n\n"
            "**RECOMMENDATION:** Do not run the bait plan until somebody establishes whether the thing being baited "
            "keeps chasing. Every monster in this manor so far has stopped, turned, or gone somewhere else. Hjumpik's "
            "plan is the first one built on the enemy behaving, and it rests entirely on *can't go wrong*. Find the "
            "Revelmaster. Bury Steely. And ask the dwarf, once, quietly, about the First and Second Piktor Deldkur."),
        "xpAwards": XP_AWARDS,
        "customCss": CUSTOM_CSS,
    }


# ------------------------------------------------------------------- the steps
def step_locations(dry):
    locs = _load(LOCS_PATH)
    changed = False
    for l in locs:
        if l.get('id') != 'overgrown_manor':
            continue
        feats = l.setdefault('notableFeatures', [])
        add = [
            "The heir's war room — a table-sized tactical map, barrel tallies in the margin, the Revel drawn the way weather is drawn",
            "The outside wall walk, from which the leaves on the mouth of the Revel can be reached by hand",
            "The lower service hall — the muster point of the sixth detachment, 1 Aethel, 922 BF",
            "The mushroom coat room, which has now eaten one spy and been used as a mortuary",
        ]
        for a in add:
            if a not in feats:
                feats.append(a)
                changed = True
        for ra in [EVENT_ID, "feyward_woodfellow_vs_the_treant"]:
            if ra not in l.setdefault('relatedArticles', []):
                l['relatedArticles'].append(ra)
                changed = True
    if changed and not dry:
        _save(LOCS_PATH, locs)
    return changed


def step_characters(dry):
    chars = _load(CHARS_PATH)
    have = {c.get('id') for c in chars}
    added = [c['id'] for c in NEW_CHARACTERS if c['id'] not in have]
    if not dry:
        for c in NEW_CHARACTERS:
            if c['id'] not in have:
                chars.append(c)
        notes = {
            'hjumpik': ("Active — commanding a provisional detachment of six inside the Overgrown Manor "
                        "(1 Aethel, 922 BF, Feyward clock); four of the six still standing; still carrying Morel's key, "
                        "Steely's rusted fragments and the OC soul ring; grandson of Piktor Deldkur the Third"),
            'toad_lee': ("Active — leading a Toad squad of five inside the Overgrown Manor; held the lower corridor "
                         "against a shambling mound with Wyatt"),
        }
        for c in chars:
            if c.get('id') in notes:
                c['status'] = notes[c['id']]
            if c.get('id') in ('hjumpik', 'toad_lee', 'waluigi'):
                for key in ('keyEvents', 'relatedArticles'):
                    if isinstance(c.get(key), list) and EVENT_ID not in c[key]:
                        c[key].append(EVENT_ID)
        _save(CHARS_PATH, chars)
    return added


def step_event(dry):
    events = _load(EVENTS_PATH)
    ev = build_event()
    ids = {e.get('id') for e in events}
    if EVENT_ID in ids:
        events = [e for e in events if e.get('id') != EVENT_ID]
    events.append(ev)
    if not dry:
        _save(EVENTS_PATH, events)
    body = wc(ev['description']) + sum(wc(s.get('overview')) for s in ev['sections'])
    return body


def step_props(dry):
    props = _load(PROPS_PATH)
    store = props['props']
    added = [k for k in NEW_PROPS if k not in store]
    if not dry:
        for k, v in NEW_PROPS.items():
            store[k] = v
        _save(PROPS_PATH, props)
    return added


def step_investigation(dry):
    inv = _load(INV_PATH)
    files = inv if isinstance(inv, list) else inv.get('investigations', inv)
    f = [x for x in files if x.get('id') == 'shadeward_feyward_ruined'][0]
    if not any(s.get('id') == SESSION_ROW['id'] for s in f.get('sessions', [])):
        f.setdefault('sessions', []).append(SESSION_ROW)
    ex_ids = {e.get('id') for e in f.get('exhibits', [])}
    for e in NEW_EXHIBITS:
        if e['id'] not in ex_ids:
            f.setdefault('exhibits', []).append(e)
    lead_ids = {l.get('id') for l in f.get('leads', [])}
    for l in NEW_LEADS:
        if l['id'] not in lead_ids:
            f.setdefault('leads', []).append(l)
    # relatedEvents takes EVENT ids only — check-investigations.py rejects battle ids here.
    for ev in NEW_RELATED_EVENTS:
        if ev not in f.setdefault('relatedEvents', []):
            f['relatedEvents'].append(ev)
    f['relatedEvents'] = [e for e in f['relatedEvents'] if e != 'feyward_woodfellow_vs_the_treant']
    f['lastFiled'] = '1 Aethel, 922 BF (Feyward clock) — Material 1040 BF'
    if not dry:
        _save(INV_PATH, inv)
    return True


def step_wahwire(dry):
    w = _load(WAHWIRE_PATH)
    posts = w['posts']
    if any(p.get('id') == 'wahwire_battalion_of_six' for p in posts):
        return False
    order = max((p.get('order') or 0) for p in posts) + 1
    posts.append({
        "id": "wahwire_battalion_of_six",
        "author": "waluigi",
        "order": order,
        "date": None,
        "timestamp": "1 Aethel, 922 BF (Feyward clock) — morning, from a chair",
        "content": ("Handed six people at breakfast. Two were already dead and one of them was a waiter. The dwarf "
                    "said don't kill them. I said what advisor. Then I watered a tree. Read the whole filing before "
                    "you ask which of those was the worst decision — the answer is not the one you think."),
        "likes": 588,
        "links": [{"id": EVENT_ID, "type": "event"}],
        "tags": ["feyward", "battles", "hjumpik", "command"],
        "reaction": "smug",
        "comments": [],
        "status": "posted",
    })
    if not dry:
        _save(WAHWIRE_PATH, w)
    return True


def step_pending(dry):
    p = _load(PENDING_PATH)
    if any(x.get('id') == EVENT_ID for x in p['pending']):
        return False
    p['pending'].append({
        "id": EVENT_ID,
        "filed": "1 Aethel, 922 BF (Feyward clock)",
        "note": ("Feyward battalion filing: six named, two dead, friendly fire, ice drunk by a tree, the Revel's own "
                 "evacuation order, and a bait plan resting on 'can't go wrong'"),
    })
    if not dry:
        _save(PENDING_PATH, p)
    return True


def step_mainpage(dry):
    m = _load(MAINPAGE_PATH)
    m['latestUpdate'] = {
        "id": EVENT_ID,
        "label": "Latest File · The Battalion of Six",
        "excerpt": ("1 Aethel, 922 BF (Feyward clock): Hjumpik is handed six people at breakfast, two of them already "
                    "dead. The wood comes through the wall. The Revel evacuates its own house and everybody obeys."),
    }
    m['featuredArticle'] = {
        "id": EVENT_ID,
        "type": "event",
        "excerpt": ("Six names, one struck through, nobody's signature: the morning a dwarf was put in command by a "
                    "table with pins on it, and the night the wood came through the wall."),
        "label": "Featured File · The Battalion of Six",
    }
    if not dry:
        _save(MAINPAGE_PATH, m)
    return True


def main():
    dry = '--check' in sys.argv
    print('dry run' if dry else 'writing')
    print('  locations amended      :', step_locations(dry))
    print('  characters created     :', step_characters(dry))
    body = step_event(dry)
    ev = build_event()
    print('  event filed            :', EVENT_ID)
    print('      sections           :', len(ev['sections']))
    print('      story words        :', body)
    print('      apparatus words    :', wc(ev['aftermath']) + wc(ev['waluigiAssessment'])
          + wc(ev['summary']) + wc(ev['outcome']) + sum(wc(s.get('waluigi_note')) for s in ev['sections']))
    print('  exhibits filed         :', step_props(dry))
    print('  investigation updated  :', step_investigation(dry))
    print('  wahwire post           :', step_wahwire(dry))
    print('  rnn pending appended   :', step_pending(dry))
    print('  mainPage updated       :', step_mainpage(dry))
    print('done' if not dry else 'dry run complete — nothing written')


if __name__ == '__main__':
    main()
