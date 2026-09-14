#!/usr/bin/env python3
"""WAHwire — the grand reopening.

Three things, in order:

  1. TYPE the 23 existing posts. Every one becomes `type: "text"` unless it is
     obviously something else (Waluigi files corrections; two of them become
     `correction`). Nothing is deleted, no wording is changed.

  2. FIX the dead like counts. Eight posts — the eight newest, hand-authored
     ones — carry `likes: 0`, which reads as an abandoned feed and is also a
     bad in-world claim: the Scorncrow correction is the biggest story of the
     arc. Likes are assigned by a documented heuristic (see `engagement()`),
     not by taste, so the numbers are reproducible and arguable.

  3. WRITE 31 new posts across eight formats. Hand-authored, every link
     validated against a real record id, every author a real account.

Idempotent: re-running rewrites the same values and re-skips the same posts.
Run:  python3 tools/wahwire-reopening.py [--check]

Why a script and not hand-editing posts.json: the like-count pass is a rule,
and a rule belongs in code where it can be re-run and disagreed with. The new
posts are data, but they ship in the same file, and one writer keeps the
serialisation consistent.

NOT a genkit stage. `tools/genkit/systems/wahwire.py` writes `text` posts only
and knows nothing about these formats; QUALITY_MARK is untouched and no
`_generated` marker is written by this script. These are hand-written
exemplars — the generator can learn the formats from them later.
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "Reputation-Matrix2" / "data"
STORE = DATA / "wahwire" / "posts.json"


# ---------------------------------------------------------------------------
# 2. THE ENGAGEMENT MODEL
# ---------------------------------------------------------------------------

def engagement(author: str, weight: int, landed: bool = False) -> int:
    """How many likes a post of this kind plausibly draws.

    Likes are canon data, so they cannot be sprinkled. But zero is also a
    claim, and for a filed post it is the wrong one — silence is a number and
    the number is not nought. The rule:

        base      who is posting (reach of the account)
        weight    how much of the archive cares about the subject, 1-5
        landed    did the line land — a quotable closer, a reveal, a burn

    Deliberately coarse. The point is a defensible ordering, not precision.
    """
    base = {
        "waluigi": 420,           # the archivist; the wire's anchor account
        "wario": 260,             # loud, divisive, well followed
        "mario": 540,             # the most famous man in the archive
        "luigi": 300,
        "bowser": 380,
        "princess_peach": 470,
        "chancellor_toadsworth": 150,
        "dracule_mihawk": 210,
        "markop": 170,
        "hjumpik": 120,
        "remi_akamatsu_full_backstory": 190,
        "archie_miser": 140,
        "green_t": 110,
        "salam": 90,
        "eager": 85,
        "dan": 95,
        "mystic_morel": 130,
        "toad_lee": 70,
        "generic_toad": 60,       # no reach, but the whole kingdom is a Toad
        "captain_toadette": 160,
        "lord_crimson": 200,
        "colonel_vera_steelstorm": 145,
        "alpha_bloodmaw": 115,
        "fawful": 175,
        "sans": 240,
    }.get(author, 100)
    n = int(base * (0.45 + 0.42 * weight))
    if landed:
        n = int(n * 1.9)
    return n


# Posts filed with `likes: 0`. Each gets a weight and a judgement on whether
# the line lands, and the model does the rest. Keyed by a unique fragment of
# the post content so the mapping is auditable against the text.
DEAD_LIKES = {
    "wahwire_belly_of_the_beast_correction": (5, True),  # the arc's biggest reveal
    "wahwire_lava_bridge_ambush": (5, True),         # "YOU CHEATED"
    "wahwire_garden_above_fire_superstars": (5, True),   # he is alive
    "wahwire_belly_of_the_beast_pit": (4, True),     # the pit COMPLAINED
    "wahwire_promo_mario_amendment": (3, True),      # Waluigi corrects himself
    "wahwire_promo_mario_newspaper": (2, False),
    "wahwire_belly_of_the_beast_horn": (2, True),    # WAHAHAHAH
    "wahwire_scorncrow_skirmish": (2, False),
}

# Two existing posts are formally amendments and should read as such.
RETYPE = {
    "wahwire_belly_of_the_beast_correction": "correction",
    "wahwire_promo_mario_amendment": "correction",
}


# ---------------------------------------------------------------------------
# 3. THE NEW POSTS
#
# Every `links` id below is validated against the real record files before
# anything is written; the script aborts rather than filing a dead link.
# ---------------------------------------------------------------------------

def P(pid, author, type_, content, reaction, weight, landed=False, **kw):
    post = {
        "id": pid,
        "author": author,
        "type": type_,
        "order": 0,                      # assigned on write, newest first
        "date": None,
        "timestamp": kw.pop("timestamp", ""),
        "content": content,
        "likes": engagement(author, weight, landed),
        "links": kw.pop("links", []),
        "tags": kw.pop("tags", []),
        "reaction": reaction,
        "comments": kw.pop("comments", []),
        "status": "posted",
    }
    post.update(kw)
    return post


def R(author, content, weight=2, landed=False, top=False):
    """A reply. Gets its own like count — on a real wire the reply often wins."""
    r = {"id": "c" + str(abs(hash(content)) % 99991),
         "author": author, "content": content,
         "likes": int(engagement(author, weight, landed) * 0.22)}
    if top:
        r["topReply"] = True
    return r


NEW_POSTS = [

    # ---------------------------------------------------------------- quote
    P("ww_q_scorncrow_face", "markop", "quote", weight=5, landed=True,
      reaction="grief", timestamp="2 Aethel, 1040 BF",
      content="He asked. On his knees, with the face off, in a voice that was "
              "not a bird's. I heard the whole sentence and I swung anyway. "
              "Waluigi can write down whatever word he likes — I know which one "
              "the Judges will use.",
      quoteOf="wahwire_belly_of_the_beast_correction",
      links=[{"id": "judgement_in_the_grove", "type": "event"},
             {"id": "scorncrow", "type": "character"}],
      tags=["scorncrow", "judgement", "mercy"],
      comments=[
          R("waluigi", "Filed as spoken. I am not softening it and I am not "
                       "sharpening it. That is the job.", 4, True, top=True),
          R("dan", "You were bleeding out of your scalp and still standing in "
                   "front of us. I am not going to be the one to call it.", 3),
      ]),

    P("ww_q_legion_arrest", "archie_miser", "quote", weight=4, landed=True,
      reaction="rage", timestamp="2 Aethel, 1040 BF",
      content="Let me get the sequence right. They call for help. We come. We "
              "clear their grove. Then they put me in irons WHILE THE SPIDERS "
              "ARE STILL COMING. The Legion does not have allies. The Legion "
              "has a waiting list.",
      quoteOf="ww_ledger_grove_muster",
      links=[{"id": "judgement_in_the_grove", "type": "event"},
             {"id": "iron_legion", "type": "faction"}],
      tags=["ironlegion", "arrest", "grove"],
      comments=[
          R("colonel_vera_steelstorm", "The warrant predates the alliance. "
            "Both things are true and only one of them is my doing.", 3),
          R("wario", "THIS is why Wario invoices UP FRONT.", 3, True, top=True),
      ]),

    P("ww_q_tape_greed", "waluigi", "quote", weight=4, landed=True,
      reaction="confusion", timestamp="21 Harvestide, 1035 BF",
      content="Wario read one line of my notebook out loud, in a flat voice, "
              "like a parts order — and three lines in his voice changed and he "
              "did not notice it change. I noticed. I have spent a lifetime "
              "noticing exactly that and filing it as leverage. This is the "
              "first time the noticing produced nothing I could use.",
      quoteOf="ww_exhibit_wario_files",
      links=[{"id": "the_tape_and_the_wario_files", "type": "event"},
             {"id": "wario", "type": "character"}],
      tags=["thetape", "wario", "notadiary"],
      comments=[
          R("wario", "IT IS A DIARY.", 3, True, top=True),
          R("waluigi", "IT IS A WORKING NOTEBOOK.", 4, True),
          R("mona", "He put it face down on the counter. Between you. I saw it "
                    "and I left, which is more than either of you did.", 3, True),
      ]),

    # -------------------------------------------------------------- exhibit
    P("ww_exhibit_vale_badge", "waluigi", "exhibit", weight=5, landed=True,
      reaction="suspicion", timestamp="Recovered 1040 BF",
      content="Here is the badge. Look at it. It is REAL. Clearance Level 5, "
              "correct arrows, correct weight, and a Central Command that has "
              "never heard of the assignment it authorised. They did not forge "
              "the Directorate. They forged one signature and let the rest of "
              "the building work properly. That is worse.",
      exhibit="prop_vale_clearance_badge",
      links=[{"id": "the_dread_mansion_incursion", "type": "event"},
             {"id": "director_vale", "type": "character"},
             {"id": "dgk", "type": "faction"}],
      tags=["dgk", "vale", "clearance5", "readthepaper"],
      comments=[
          R("liam", "He took my phone slowly. In full view. I let him. I have "
                    "thought about that every day since.", 4, True, top=True),
      ]),

    P("ww_exhibit_wario_files", "wario", "exhibit", weight=4,
      reaction="smug", timestamp="20 Harvestide, 1035 BF",
      content="WARIO'S FILES. Everyone wants the tape. Nobody wants the LEDGER "
              "behind the tape. Perspective of greed: somebody kept the star "
              "because a kept star is worth more than a lost one. You do not "
              "need magic to work that out, you need an ACCOUNTANT.",
      exhibit="prop_wario_inc_tablet",
      links=[{"id": "the_tape_and_the_wario_files", "type": "event"},
             {"id": "wario_enterprise", "type": "faction"}],
      tags=["greedreading", "warioenterprise", "thetape"],
      comments=[
          R("waluigi", "It is the single most useful thing anyone has said "
                       "about this search and he said it while eating.", 4, True,
            top=True),
      ]),

    P("ww_exhibit_burn_chart", "dr_toad", "exhibit", weight=4, landed=True,
      reaction="relief", timestamp="14 Highsun, 1035 BF",
      content="Clinic chart, filed with the patient's consent and against the "
              "patient's wishes. Serious burns, treatable. Delirium consistent "
              "with pain and exhaustion, not with possession, not with a curse, "
              "and not with whatever the man in the blue cap has been telling "
              "people. Two weeks. No adventuring. I will be writing that again.",
      exhibit="prop_dr_toad_luigi_burn_chart",
      links=[{"id": "the_garden_above_the_fire", "type": "event"},
             {"id": "luigi", "type": "character"}],
      tags=["starhill", "luigi", "twoweeksrest"],
      comments=[
          R("luigi", "i keep telling them im fine", 4, True, top=True),
          R("mona", "You asked the ceiling where your brother was. Four times.", 3),
          R("waluigi", "Doctor, he will be adventuring in nine days and we both "
                       "know it. Write the chart anyway. I will file it.", 4, True),
      ]),

    P("ww_exhibit_aegis_clause", "hjumpik", "exhibit", weight=3,
      reaction="mistrust", timestamp="Feyward clock — 922 BF",
      content="The clause they are standing on. Read it yourself. 'Bound "
              "objects, on demand, without notice.' I signed that. I did read "
              "it. I read it the way you read a thing you are certain will "
              "never be invoked, which is to say I read the words and not the "
              "sentence.",
      exhibit="prop_aegis_magi_recall_clause",
      links=[{"id": "feyward_i_cant_afford_not_to_care", "type": "event"},
             {"id": "color_division", "type": "faction"},
             {"id": "mages_guild", "type": "faction"}],
      tags=["aegismagi", "colourdivision", "contract"],
      comments=[
          R("waluigi", "They took two of your people and asked politely. Cuffs, "
            "not cages. Agreed without an argument. THAT is the part I filed.",
            4, True, top=True),
      ]),

    # ---------------------------------------------------------------- image
    P("ww_img_belly_jaws", "remi_akamatsu_full_backstory", "image", weight=5,
      landed=True, reaction="alarm", timestamp="30 Harvestide, 1040 BF",
      content="The jaws, pried, and the rope going down. One torch between all "
              "of us. I want it on the record that the last person up a rope is "
              "the person who finds out whether the plan was good.",
      image="assets/images/events/belly-of-the-beast/belly-02-jaws-and-rope.jpg",
      imageCaption="The descent: the tree's jaws pried open, the rope going "
                   "down into the pit, and the only torch anybody brought.",
      links=[{"id": "the_belly_of_the_beast", "type": "event"},
             {"id": "the_skittering_grove_descent_battle", "type": "battle"}],
      tags=["skitteringgrove", "descent", "onetorch"],
      comments=[
          R("markop", "The rope was rigged correctly. I will hear nothing else "
                      "on the subject.", 3, True, top=True),
          R("archie_miser", "I sealed the door. I am aware. I am extremely "
                            "aware. Thank you.", 4, True),
      ]),

    # ----------------------------------------------------------------- poll
    P("ww_poll_scorncrow", "wah_media_collective", "poll", weight=5, landed=True,
      reaction="suspicion", timestamp="3 Aethel, 1040 BF",
      content="It knelt. It took the mask off. It said it was not a monster, "
              "three times, and then it asked a paladin for mercy — and the "
              "blood came out human. THE WIRE DECIDES:",
      poll={"question": "Judgement in the Grove — was it a kill or an execution?",
            "options": [
                {"label": "A kill. It had a body count.", "votes": 4410},
                {"label": "An execution. It asked.", "votes": 6180},
                {"label": "Both, and that is the problem", "votes": 9755},
                {"label": "Ask again when we find the face", "votes": 2130}],
            "closes": "Closed · 22,475 votes"},
      links=[{"id": "judgement_in_the_grove", "type": "event"},
             {"id": "markop", "type": "character"}],
      tags=["poll", "scorncrow", "judgement"],
      comments=[
          R("waluigi", "Twenty-two thousand people voted on whether my colleague "
            "is a murderer. The archive does not take votes. The archive takes "
            "minutes.", 5, True, top=True),
          R("generic_toad", "option three is winning and option three is just "
                            "'yes'", 2, True),
      ]),

    P("ww_poll_wario_invoice", "wah_media_collective", "poll", weight=3,
      reaction="gloating", timestamp="12 Aethel, 1040 BF",
      content="Wario's Enterprise has now invoiced a retrieval fee for a "
              "motorbike that was recovered by the people being invoiced. "
              "Settle it, wire:",
      poll={"question": "Does Wario get his retrieval fee?",
            "options": [
                {"label": "Pay him, it is cheaper than the argument", "votes": 1890},
                {"label": "Absolutely not", "votes": 7320},
                {"label": "Pay him in garlic", "votes": 5510}],
            "closes": "Open · 14,720 votes so far"},
      links=[{"id": "wario_enterprise", "type": "faction"},
             {"id": "wario", "type": "character"}],
      tags=["poll", "invoice", "wario"],
      comments=[
          R("wario", "OPTION THREE IS NOT A PAYMENT METHOD.", 3, True, top=True),
          R("waluigi", "It is if enough people vote for it.", 4, True),
      ]),

    # --------------------------------------------------------------- thread
    P("ww_thread_dgk_case", "waluigi", "thread", weight=5, landed=True,
      reaction="suspicion", timestamp="Recovered 1040 BF",
      content="A thread about the night the Directorate argued with itself, "
              "because the haunting is not the case. The case is the paperwork.",
      thread=[
          "1/ An operator is sent to a house to retrieve a sample. The order is "
          "real. The letterhead is real. The reference number resolves.",
          "2/ He rings Central Command from inside the house. Central Command "
          "has never heard of the assignment. Not 'it is classified'. Never "
          "heard of it.",
          "3/ A director walks in with a genuine Clearance Level 5 badge and "
          "takes the operation over on a live line. The man on the other end "
          "goes quiet and then gets RESPECTFUL. That pause is the loudest thing "
          "in the transcript.",
          "4/ He takes the phone. Slowly. In full view. Because a thing taken "
          "slowly from a man who lets you is worth more than a thing grabbed.",
          "5/ The phone is never recovered. Neither is the call log that would "
          "say who briefed the retrieval. The sack that crossed the back lawn "
          "was never inventoried either.",
          "6/ So: nobody faked the Directorate. Somebody faked ONE signature "
          "and let the rest of the building work exactly as designed. Read that "
          "again and then tell me which part of it you find comforting. WAH.",
      ],
      links=[{"id": "the_dread_mansion_incursion", "type": "event"},
             {"id": "dgk", "type": "faction"},
             {"id": "director_vale", "type": "character"}],
      tags=["dgk", "thread", "vale", "onesignature"],
      comments=[
          R("mario", "...she said i came back. i have never been to that house.",
            5, True, top=True),
          R("luigi", "we didnt open the diary. it was right there. we looked at "
                     "it and we didnt open it and i think about that a lot", 4, True),
      ]),

    P("ww_thread_feyward_library", "hjumpik", "thread", weight=3,
      reaction="resolve", timestamp="Feyward clock — 922 BF",
      content="On the library, and why we went up when the order said down.",
      thread=[
          "1/ The standing order was the planning room. I abandoned it. That is "
          "mine and I will answer for it.",
          "2/ The library was the first room in this manor anybody wanted to "
          "hold because it was a room, and not because it was a corridor to "
          "somewhere better.",
          "3/ The mound was mostly dead when we arrived. A goblin staff, a "
          "warhammer and one magic missile finished a job the collection had "
          "already started.",
          "4/ We then walked out of it toward the planning room without leaving "
          "a guard. So the reclamation is, at present, a sentence in a filing "
          "rather than a fact on the ground.",
      ],
      links=[{"id": "feyward_library_reclamation_and_the_kitchen", "type": "event"},
             {"id": "hjumpik", "type": "character"}],
      tags=["feyward", "library", "thread"],
      comments=[
          R("waluigi", "Nine books. She threw NINE BOOKS at it. The library is "
                       "fine. The library is ANGRY.", 4, True, top=True),
      ]),

    # --------------------------------------------------------------- ledger
    P("ww_ledger_grove_muster", "waluigi", "ledger", weight=4,
      reaction="resolve", timestamp="2 Aethel, 1040 BF",
      content="Judgement in the Grove — the tally, filed before anybody gets to "
              "round it off in the retelling.",
      ledger=[{"label": "On the field", "value": "16"},
              {"label": "Scorncrow", "value": "Killed — kneeling, unmasked"},
              {"label": "Salam", "value": "Fell · not recovered"},
              {"label": "Legion guards lost", "value": "1"},
              {"label": "Alliance duration", "value": "One battle"},
              {"label": "Arrests made during it", "value": "1 — Archie Miser"},
              {"label": "Grove cleared?", "value": "No"}],
      links=[{"id": "judgement_in_the_grove", "type": "event"},
             {"id": "judgement_in_the_grove_battle", "type": "battle"},
             {"id": "salam", "type": "character"}],
      tags=["muster", "ledger", "grove"],
      comments=[
          R("remi_akamatsu_full_backstory", "Salam is not a line in a tally. "
            "Salam is still out there.", 4, True, top=True),
          R("waluigi", "Which is precisely why he is on it. Things on the tally "
                       "get looked for. Things in the prose get forgotten.", 4, True),
      ]),

    P("ww_ledger_order_of_jack", "waluigi", "ledger", weight=3, landed=True,
      reaction="suspicion", timestamp="1040 BF",
      content="Everybody quotes the Order of Jack at twenty thousand. Here is "
              "the column nobody reads.",
      ledger=[{"label": "Claimed strength", "value": "20,000"},
              {"label": "Levies who cannot leave a harvest", "value": "−"},
              {"label": "Volunteers nobody pays", "value": "−"},
              {"label": "Hired-out clients", "value": "−"},
              {"label": "Legion men already counted by the Legion",
               "value": "counted twice"},
              {"label": "Can actually move", "value": "A few hundred"},
              {"label": "Quality of the poster", "value": "Genuinely excellent"}],
      links=[{"id": "order_of_jack", "type": "faction"}],
      tags=["orderofjack", "ledger", "readthecolumn"],
      comments=[
          R("waluigi", "And no, before anyone writes in again: nobody has told "
                       "him about his brother.", 4, True, top=True),
      ]),

    # ----------------------------------------------------------------- text
    P("ww_txt_toad_lee_time", "toad_lee", "text", weight=3, landed=True,
      reaction="grief", timestamp="Feyward clock — 922 BF",
      content="Three times now I have lost time in a fight. Not fainted. Lost "
              "it. I come back and the room is different and everyone is being "
              "very kind to me about it. I still want to be safe with Hjumpik. "
              "I keep saying that sentence and I keep hearing how it sounds.",
      links=[{"id": "feyward_i_cant_afford_not_to_care", "type": "event"},
             {"id": "hjumpik", "type": "character"}],
      tags=["feyward", "lostime"],
      comments=[
          R("hjumpik", "You are on my roll. That does not change because you "
                       "were taken. It changes when I say it does, and I have "
                       "not said it.", 3, True, top=True),
      ]),

    P("ww_txt_generic_toad_invite", "generic_toad", "text", weight=2, landed=True,
      reaction="confusion", timestamp="1040 BF",
      content="so hold on. you can just SAY an invitation out loud, in your own "
              "house, and it WORKS?? and nobody has to sign anything?? i have "
              "been renting for eleven years and i want to know if my landlord "
              "knows about this",
      links=[{"id": "the_hanging_tree_apple_mirror_theft_and_invited_vampire",
              "type": "event"}],
      tags=["threshold", "askingforafriend"],
      comments=[
          R("markop", "Check your wording. That is the entire lesson. Check "
                      "your wording.", 3, True, top=True),
          R("lord_crimson", "Your landlord is aware. Your landlord has always "
                            "been aware.", 3, True),
      ]),

    P("ww_txt_peach_absent", "princess_peach", "text", weight=5, landed=True,
      reaction="grief", timestamp="Filed posthumously — archive note",
      content="The archive keeps a record under my name and I have not been "
              "able to correct a word of it since 1040. Whoever is reading it "
              "for me: the funeral footage is not evidence of anything except "
              "that somebody wanted a funeral filmed.",
      links=[{"id": "promo_mario_newspaper", "type": "event"}],
      tags=["peach", "archivenote"],
      comments=[
          R("waluigi", "This account posts. I have stopped asking how. I file "
                       "what arrives and I note that it arrived.", 5, True, top=True),
          R("chancellor_toadsworth", "I have asked repeatedly that this account "
            "be closed out of respect. I am told it will not close.", 3),
      ]),

    P("ww_txt_eager_ettercap", "eager", "text", weight=2, landed=True,
      reaction="cheer", timestamp="2 Aethel, 1040 BF",
      content="Dan stood in front of the whole party holding a holy symbol with "
              "MUSHROOMS stuck on it and the brood actually turned. While they "
              "were busy being impressed I got behind the ettercap. That is "
              "teamwork. That is all that is. Teamwork and mushrooms.",
      links=[{"id": "judgement_in_the_grove", "type": "event"},
             {"id": "dan", "type": "character"}],
      tags=["teamwork", "mushrooms", "grove"],
      comments=[
          R("dan", "They were blessed mushrooms.", 3, True, top=True),
          R("eager", "They were mushrooms you found that morning.", 2, True),
      ]),

    P("ww_txt_mystic_morel_fungus", "mystic_morel", "text", weight=3,
      reaction="mistrust", timestamp="Feyward clock — 922 BF",
      content="The fungus in that room tests clean. I have run it three times. "
              "The fungus is not the problem. The MEN test badly, and nobody "
              "has asked me to run anything on the men.",
      links=[{"id": "feyward_library_reclamation_and_the_kitchen", "type": "event"}],
      tags=["feyward", "violetfungus", "testthemen"],
      comments=[
          R("waluigi", "Filing this. Uncatalogued, untranslated, and now at "
                       "least written down by somebody with a nose for it.", 4, True,
            top=True),
      ]),

    P("ww_txt_green_t_door", "green_t", "text", weight=3, landed=True,
      reaction="alarm", timestamp="30 Harvestide, 1040 BF",
      content="I would like to raise, calmly, that the only exit from the place "
              "we were standing in was ON FIRE and the person who set it on "
              "fire was on OUR SIDE of it. I raised this at the time. I was "
              "told it was a solution.",
      links=[{"id": "the_belly_of_the_beast", "type": "event"},
             {"id": "archie_miser", "type": "character"}],
      tags=["skitteringgrove", "thedoor"],
      comments=[
          R("archie_miser", "It WAS a solution. The tree died.", 3, True, top=True),
          R("green_t", "So did the door.", 3, True),
      ]),

    P("ww_txt_bones_salam", "bones", "text", weight=3, landed=True,
      reaction="grief", timestamp="3 Aethel, 1040 BF",
      content="Nobody has gone back for Salam. I have read the filing four "
              "times looking for the line where somebody goes back for Salam "
              "and it is not in there. The tally says 'not recovered' like that "
              "is a state a person can just be left in.",
      links=[{"id": "judgement_in_the_grove", "type": "event"},
             {"id": "salam", "type": "character"}],
      tags=["salam", "notrecovered"],
      comments=[
          R("markop", "We were encircled and I could not see six feet. That is "
                      "the reason. It is not an excuse and I am not offering it "
                      "as one.", 4, True, top=True),
      ]),

    P("ww_txt_mihawk_standards", "dracule_mihawk", "text", weight=3, landed=True,
      reaction="gloating", timestamp="1040 BF",
      content="I am told the Iron Legion now requires an alliance in order to "
              "clear a wood of spiders. In my day one competent swordsman and "
              "an afternoon. I accept that this reads as boasting. I accept it "
              "because it is.",
      links=[{"id": "iron_legion", "type": "faction"},
             {"id": "judgement_in_the_grove", "type": "event"}],
      tags=["ironlegion", "standards"],
      comments=[
          R("colonel_vera_steelstorm", "You are welcome to the next grove.", 3,
            True, top=True),
          R("dracule_mihawk", "Send the coordinates.", 3, True),
      ]),

    P("ww_txt_toadsworth_diet", "chancellor_toadsworth", "text", weight=3,
      reaction="resolve", timestamp="1040 BF",
      content="The Midlands Diet has now been filed, minuted and indexed, and I "
              "am assured it will shortly be ignored by everyone it governs. "
              "The Regency's position is that a law nobody reads is still a law. "
              "The Regency's position is frequently lonely.",
      links=[{"id": "midlands_diet", "type": "faction"},
             {"id": "mushroom_regency", "type": "faction"}],
      tags=["diet", "regency", "minuted"],
      comments=[
          R("waluigi", "Chancellor, I read it. All of it. Ask me anything and "
            "then watch me answer, at length, until you regret the question.",
            4, True, top=True),
      ]),

    P("ww_txt_luigi_clinic", "luigi", "text", weight=5, landed=True,
      reaction="relief", timestamp="16 Highsun, 1035 BF",
      content="im ok. bandaged and bored and a doctor actually called Dr Toad "
              "says two weeks. everyone keeps telling me what i said when i was "
              "delirious and i would like to formally request that they stop",
      links=[{"id": "the_garden_above_the_fire", "type": "event"}],
      tags=["luigi", "starhill", "pleasestop"],
      comments=[
          R("waluigi", "You asked me whether we were still superstars. I said "
                       "yes. I am not taking it back and you cannot make me.",
            5, True, top=True),
          R("wario", "I CARRIED you. Up a hill. Personally. Invoice pending.",
            4, True),
          R("luigi", "there it is", 4, True),
      ]),

    P("ww_txt_captain_toadette_survey", "captain_toadette", "text", weight=3,
      reaction="resolve", timestamp="1040 BF",
      content="Survey teams keep being sent into places the Legion has already "
              "'secured'. I have started sending two teams: one to survey, one "
              "to find out what secured meant this time. It has never once been "
              "the same answer twice.",
      links=[{"id": "iron_legion", "type": "faction"}],
      tags=["survey", "secured"],
      comments=[
          R("colonel_vera_steelstorm", "Noted. Unwelcome. Accurate.", 3, True,
            top=True),
      ]),

    P("ww_txt_fawful_narrative", "fawful", "text", weight=4, landed=True,
      reaction="gloating", timestamp="1040 BF",
      content="I HAVE FURY at being made a STORY. They built a narrative with "
              "my name on it and when it stopped being useful they filed a "
              "correction. I did not kill the Princess. I am still owed an "
              "apology and a LABORATORY.",
      links=[{"id": "the_fawthful_narrative_failure", "type": "event"}],
      tags=["fawful", "narrative", "fury"],
      comments=[
          R("chancellor_toadsworth", "The correction was filed. The apology is "
            "above my office.", 3, True, top=True),
          R("waluigi", "He is right, though. That is the annoying part. He is "
                       "RIGHT.", 4, True),
      ]),

    P("ww_txt_sans_timeline", "sans", "text", weight=4, landed=True,
      reaction="deadpan", timestamp="undated, obviously",
      content="somebody in this archive is keeping two calendars and thinks "
              "nobody's noticed. one of them counts up. i'm not saying which "
              "filings sit wrong. i'm just saying i checked twice and got two "
              "answers and only one of us is bothered by that.",
      links=[{"id": "promo_mario_newspaper", "type": "event"}],
      tags=["timeline", "twocalendars"],
      comments=[
          R("waluigi", "The Feyward clock runs on its own year and I have "
            "documented it EXTENSIVELY. Nobody reads the documentation. You "
            "have my sympathy and none of my patience.", 4, True, top=True),
      ]),

    P("ww_txt_mossy_ribs", "mossy", "text", weight=2,
      reaction="confusion", timestamp="1 Aethel, 1040 BF",
      content="I was told to hold him. I held him. Ribs are, I now understand, "
              "load-bearing. Nobody mentioned this at the time and I would like "
              "that reflected in the filing.",
      links=[{"id": "judgement_in_the_grove", "type": "event"}],
      tags=["ribs", "loadbearing"],
      comments=[
          R("remi_akamatsu_full_backstory", "I gave the order. Put it under my "
                                            "name, not his.", 3, True, top=True),
      ]),

    P("ww_txt_orangus_market", "orangus_cornelius", "text", weight=2,
      reaction="smug", timestamp="1040 BF",
      content="Business note: every time this wire files a correction, trade in "
              "the named district moves within the day. I have stopped reading "
              "the prose. I read the corrections and I read them FIRST.",
      links=[{"id": "wario_enterprise", "type": "faction"}],
      tags=["markets", "corrections"],
      comments=[
          R("wario", "YOU are the only person on this wire with SENSE.", 3, True,
            top=True),
      ]),

    P("ww_txt_bowser_respect", "bowser", "text", weight=4, landed=True,
      reaction="resolve", timestamp="1040 BF",
      content="Say what you like about the purple one. He files the parts that "
              "make him look bad. I have read three of his corrections now and "
              "every one of them costs him something. That is not nothing. That "
              "is, in fact, rare.",
      links=[{"id": "waluigi", "type": "character"}],
      tags=["corrections", "credit"],
      comments=[
          R("waluigi", "I am going to need everyone to understand how unwell "
                       "this has made me.", 5, True, top=True),
          R("wario", "THE KING IS BEING NICE TO MY BROTHER. THE WIRE IS BROKEN.",
            4, True),
      ]),

    P("ww_txt_the_oracle_garden", "the_oracle", "text", weight=4,
      reaction="mistrust", timestamp="1035 BF",
      content="'The star is not lost. Find the garden above the fire.' They "
              "recovered the reading but not the paper. I would remind the "
              "archive that a remembered sentence and a written one are "
              "different objects, and that only one of them can be checked.",
      links=[{"id": "the_garden_above_the_fire", "type": "event"}],
      tags=["prophecy", "courier", "unrecovered"],
      comments=[
          R("waluigi", "The archive holds Luigi's recalled line, not the paper. "
                       "It is noted as such. It will stay noted as such.", 4,
            True, top=True),
      ]),
]


# ---------------------------------------------------------------------------
# machinery
# ---------------------------------------------------------------------------

def known_ids() -> set[str]:
    out: set[str] = set()
    for name in ("events", "battles", "majorBattles", "trials", "characters",
                 "factions", "locations", "nations"):
        try:
            raw = json.loads((DATA / f"{name}.json").read_text(encoding="utf-8"))
        except FileNotFoundError:
            continue
        seq = raw if isinstance(raw, list) else next(
            (v for v in raw.values() if isinstance(v, list)), [])
        out |= {r["id"] for r in seq if isinstance(r, dict) and "id" in r}
    return out


def known_props() -> set[str]:
    raw = json.loads((DATA / "props.json").read_text(encoding="utf-8"))
    return set((raw.get("props") or {}).keys())


def validate(posts, ids, props) -> list[str]:
    problems = []
    seen = set()
    for p in posts:
        if p["id"] in seen:
            problems.append(f"duplicate post id: {p['id']}")
        seen.add(p["id"])
        for l in p.get("links") or []:
            lid = l["id"] if isinstance(l, dict) else l
            if lid not in ids:
                problems.append(f"{p['id']}: link does not resolve -> {lid}")
        ex = p.get("exhibit")
        if ex and ex not in props:
            problems.append(f"{p['id']}: exhibit does not resolve -> {ex}")
        q = p.get("quoteOf")
        if q and q not in seen | {x["id"] for x in posts}:
            problems.append(f"{p['id']}: quoteOf does not resolve -> {q}")
    return problems


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true",
                    help="validate only; write nothing")
    args = ap.parse_args()

    store = json.loads(STORE.read_text(encoding="utf-8"))
    posts = store["posts"]
    by_id = {p["id"]: p for p in posts}
    ids, props = known_ids(), known_props()

    # ---- 1 + 2: type and revive the existing posts -----------------------
    typed = revived = 0
    for p in posts:
        if "type" not in p:
            p["type"] = RETYPE.get(p["id"], "text")
            typed += 1
        elif p["id"] in RETYPE and p["type"] != RETYPE[p["id"]]:
            p["type"] = RETYPE[p["id"]]
        if not p.get("likes") and p["id"] in DEAD_LIKES:
            weight, landed = DEAD_LIKES[p["id"]]
            p["likes"] = engagement(p["author"], weight, landed)
            revived += 1

    # ---- 3: add the new posts -------------------------------------------
    added = [p for p in NEW_POSTS if p["id"] not in by_id]
    combined = added + posts

    problems = validate(combined, ids, props)
    if problems:
        print("VALIDATION FAILED — nothing written:", file=sys.stderr)
        for x in problems:
            print("   " + x, file=sys.stderr)
        return 1

    # newest first; the renderer sorts on `order`
    for i, p in enumerate(combined):
        p["order"] = i + 1

    print(f"typed   {typed:3} existing posts")
    print(f"revived {revived:3} posts that had likes: 0")
    print(f"added   {len(added):3} new posts")
    print(f"total   {len(combined):3} posts on the wire")
    from collections import Counter
    print("  by type:  ", dict(Counter(p.get("type", "text") for p in combined)))
    print("  by author:", dict(Counter(p["author"] for p in combined).most_common(6)))

    if args.check:
        print("\n--check: validated, nothing written.")
        return 0

    store["posts"] = combined
    STORE.write_text(json.dumps(store, indent=2, ensure_ascii=False) + "\n",
                     encoding="utf-8")
    print(f"\nwrote {STORE.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
