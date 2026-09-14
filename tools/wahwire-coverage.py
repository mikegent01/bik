#!/usr/bin/env python3
"""WAHwire — the reopening announcement, and a coverage pass.

Two things:

  1. THE REOPENING. The wire came back and never said so. This adds the
     announcement thread from the house account, a Waluigi editorial on what
     the wire is now for, and the reaction to both — an event the feed can
     point at, so the reopening is a thing that happened in world rather than
     a thing that happened to a JSON file.

  2. COVERAGE. 25 new posts across filings that had none, chosen for reader
     traffic rather than for filling the audit: the Iron Mandate / Order 120
     political cluster, the Mount Ebott survey, the Harvestide cottage nights,
     and the Warp Pipe Junction.

Reuses the engagement model and the validator from `wahwire-reopening.py` —
one model, one rule, so like counts stay comparable across both passes.

Idempotent. Run:  python3 tools/wahwire-coverage.py [--check]

NOT a genkit stage: hand-written, no `_generated` marker, QUALITY_MARK
untouched.
"""

from __future__ import annotations

import argparse
import importlib.util
import json
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "Reputation-Matrix2" / "data"
STORE = DATA / "wahwire" / "posts.json"
PROFILES = DATA / "wahwire" / "profiles.json"

# The engagement model, the post builders and the link validator all live in
# the reopening script. Loaded by path because that module's filename contains
# a hyphen — one copy of the model matters more than import elegance, so that
# like counts stay comparable between the two passes.
_spec = importlib.util.spec_from_file_location(
    "wahwire_reopening", Path(__file__).resolve().parent / "wahwire-reopening.py")
_mod = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_mod)

engagement, known_ids, known_props, validate = (
    _mod.engagement, _mod.known_ids, _mod.known_props, _mod.validate)
P, R = _mod.P, _mod.R


NEW_POSTS = [

    # =====================================================================
    # 1. THE GRAND REOPENING
    # =====================================================================

    P("ww_reopen_announcement", "wah_media_collective", "thread", weight=5,
      landed=True, reaction="cheer", timestamp="14 Aethel, 1040 BF — 09:00",
      content="📡 THE WIRE IS BACK. Read this before you post anything.",
      thread=[
          "1/ WAHwire is reopen. It was dark for a long time and nobody will "
          "give us a straight answer about why, so we are not going to pretend "
          "there was a good reason.",
          "2/ WHAT THIS IS: the public side of the archive. When a filing "
          "lands, the people who were there get to say something about it "
          "here, under their own name, in their own voice, and it is kept.",
          "3/ WHAT THIS IS NOT: the record. The record is the filing. If the "
          "wire and the filing disagree, the filing wins and somebody owes a "
          "correction. We have a format for those now. Waluigi has used it "
          "twice already and it is only the first morning.",
          "4/ NEW ON REOPENING: you can quote a post. You can post a document "
          "straight out of the exhibit store. You can run a poll. You can post "
          "a tally. Threads like this one. Pictures.",
          "5/ THE RULE, AND THERE IS ONLY ONE: link the record. A post about a "
          "filing that does not link the filing is a rumour, and rumours get "
          "pruned. Everything on this wire points at something you can go and "
          "read.",
          "6/ That is the whole announcement. The archive is open, the wire is "
          "open, and the Scorncrow story is still the worst thing any of us "
          "have read this year. Go and post. WAH.",
      ],
      links=[{"id": "judgement_in_the_grove", "type": "event"},
             {"id": "waluigi", "type": "character"}],
      tags=["reopening", "wahwire", "announcement", "readthis"],
      comments=[
          R("waluigi", "Point 3 is the only one that matters and it is the one "
            "nobody will read. The wire is not the record. Say it back to me.",
            5, True, top=True),
          R("wario", "CAN I ADVERTISE ON IT", 4, True),
          R("generic_toad", "wait so the thing that was broken for months is "
            "fixed and the announcement is a SIX PART THREAD", 3, True),
      ]),

    P("ww_reopen_waluigi_editorial", "waluigi", "text", weight=5, landed=True,
      reaction="resolve", timestamp="14 Aethel, 1040 BF — 09:40",
      content="Waluigi has been asked to say something warm about the "
              "reopening. Here it is. For two years the only public account of "
              "what this company does was whatever Wario shouted at a crowd "
              "and whatever the Regency printed afterwards. Now there is a "
              "third thing, it is on the record, it has my name on it, and "
              "when I am wrong it will have my correction on it as well. That "
              "is not warmth. That is better than warmth. WAH.",
      links=[{"id": "waluigi", "type": "character"},
             {"id": "wario_enterprise", "type": "faction"}],
      tags=["reopening", "ontherecord"],
      comments=[
          R("bowser", "He files the parts that make him look bad. I have said "
            "this once already and I resent being made to say it twice.", 4,
            True, top=True),
          R("wario", "'WHATEVER WARIO SHOUTED AT A CROWD' — those were PRESS "
                     "CONFERENCES and they were WELL ATTENDED.", 4, True),
      ]),

    P("ww_reopen_poll", "wah_media_collective", "poll", weight=4, landed=True,
      reaction="smug", timestamp="14 Aethel, 1040 BF — 11:00",
      content="Reopening day poll. Be honest, the archive is watching and so "
              "are we:",
      poll={"question": "What did you actually miss while the wire was dark?",
            "options": [
                {"label": "The corrections", "votes": 3120},
                {"label": "Wario's invoices", "votes": 5640},
                {"label": "Knowing what happened before the Regency said so",
                 "votes": 11890},
                {"label": "Nothing. It was peaceful.", "votes": 4405}],
            "closes": "Open · 25,055 votes so far"},
      links=[{"id": "mushroom_regency", "type": "faction"}],
      tags=["reopening", "poll"],
      comments=[
          R("chancellor_toadsworth", "Option three is phrased tendentiously "
            "and I would like that minuted.", 3, True, top=True),
          R("wah_media_collective", "MINUTED. STILL WINNING.", 4, True),
      ]),

    # =====================================================================
    # 2. COVERAGE — the Iron Mandate / Order 120 cluster
    # =====================================================================

    P("ww_cov_iron_mandate", "chancellor_toadsworth", "ledger", weight=5,
      landed=True, reaction="alarm", timestamp="21 Highsun, 1040 BF — 09:00",
      content="The Iron Mandate passed this morning. I am posting the division "
              "because in a year somebody will say it was unanimous.",
      ledger=[{"label": "For", "value": "28"},
              {"label": "Against", "value": "8"},
              {"label": "Abstaining", "value": "3"},
              {"label": "Speaker Rivers", "value": "Resigned"},
              {"label": "Time to Order 120", "value": "Six hours"},
              {"label": "Nations condemning", "value": "7"}],
      links=[{"id": "iron_mandate", "type": "event"},
             {"id": "midlands_diet", "type": "faction"},
             {"id": "iron_legion", "type": "faction"}],
      tags=["ironmandate", "diet", "division", "ledger"],
      comments=[
          R("waluigi", "Three abstentions. Three people who were in the room, "
            "heard the whole thing, and decided the safest place to stand was "
            "nowhere. I have their names.", 5, True, top=True),
          R("generic_toad", "reclassified as WHAT", 3, True),
      ]),

    P("ww_cov_order_120", "bones", "text", weight=5, landed=True,
      reaction="rage", timestamp="21 Highsun, 1040 BF — 14:30",
      content="Order 120 was issued at half past two: execute every Toad "
              "prisoner at Aegis Command by quarter to four. I was bleeding in "
              "that courtyard when it went out. The facility fell before the "
              "deadline. I want it understood that the order did not fail "
              "because anybody reconsidered. It failed because we were faster.",
      links=[{"id": "order_120", "type": "event"},
             {"id": "iron_legion", "type": "faction"},
             {"id": "liberated_toads", "type": "faction"}],
      tags=["order120", "aegiscommand", "uprising"],
      comments=[
          R("waluigi", "'Not completed' is how the file records it. Bones is "
            "right that this is the wrong two words. It was not completed the "
            "way a fire is not completed when the building falls on it.", 5,
            True, top=True),
          R("colonel_vera_steelstorm", "I have read the order. I am not going "
            "to defend it and I am not going to pretend I did not serve under "
            "the man who signed it.", 4, True),
      ]),

    P("ww_cov_sovereignty_act", "lord_crimson", "text", weight=4, landed=True,
      reaction="gloating", timestamp="18 Highsun, 1040 BF — 13:00",
      content="They have passed a law declaring me illegal. Me, specifically, "
              "dressed up as a category. I have been illegal in eleven "
              "jurisdictions and outlived nine of them. The interesting clause "
              "is not the one about vampires. It is the one three days later "
              "that let them point the same machinery at a room full of Toads.",
      links=[{"id": "supernatural_sovereignty_act", "type": "event"},
             {"id": "onyx_hand", "type": "faction"},
             {"id": "iron_mandate", "type": "event"}],
      tags=["sovereigntyact", "onyxhand", "theclause"],
      comments=[
          R("waluigi", "He is right and I hate it. The Act was the machinery. "
            "The Mandate just drove it somewhere else.", 5, True, top=True),
          R("alpha_bloodmaw", "The Pack was named in the same sentence. We "
            "were not consulted either.", 3),
      ]),

    P("ww_cov_fractured_heart", "generic_toad", "text", weight=4, landed=True,
      reaction="resolve", timestamp="18 Highsun, 1040 BF",
      content="Speaker L said one line when he issued the docket — 'this is "
              "not retribution's art, but the mending of the fractured heart' "
              "— and half of Toad Town has it written on something by now. My "
              "neighbour has it on her door. She cannot read. She had it "
              "copied.",
      links=[{"id": "fractured_heart", "type": "event"},
             {"id": "liberated_toads", "type": "faction"}],
      tags=["fracturedheart", "speakerl", "toadtown"],
      comments=[
          R("waluigi", "It survived a decoy, an interrogation and Order 120. "
            "Most philosophies do not survive a bad week.", 4, True, top=True),
      ]),

    P("ww_cov_accountability_docket", "archie_miser", "text", weight=4,
      landed=True, reaction="mistrust", timestamp="18 Highsun, 1040 BF",
      content="My name is on the Accountability Docket. So is Bowser's, so is "
              "Waluigi's, so is Dan's, so is Eager's. Five names on a register "
              "created by the same order that names them. I am not saying the "
              "charges are wrong. I am saying a court that writes its own "
              "list is doing two jobs and only admitting to one.",
      links=[{"id": "accountability_docket", "type": "event"},
             {"id": "liberated_toads", "type": "faction"}],
      tags=["docket", "ed001", "fivenames"],
      comments=[
          R("dan", "I read my entry. It is accurate. That is the part that "
            "keeps me up.", 4, True, top=True),
          R("bowser", "FIVE NAMES AND MINE IS SPELLED WRONG.", 4, True),
      ]),

    # =====================================================================
    # COVERAGE — the Mount Ebott survey
    # =====================================================================

    P("ww_cov_ebott_gaster", "dracule_mihawk", "text", weight=4, landed=True,
      reaction="alarm", timestamp="Harvestide 27, 1045 BF",
      content="We went to leave and instead met the single most significant "
              "unresolved entry in the Snowdin registry. We left uninjured and "
              "we left the Iron Legion Protocols manual in his custody — "
              "including the page the Snowdin Line never recorded. I have "
              "assessed the Royal Guard as trained formation infantry. I have "
              "not assessed him at all. I am not certain the word applies.",
      links=[{"id": "mount_ebott_survey_part_5", "type": "event"},
             {"id": "sans", "type": "character"}],
      tags=["mountebott", "gaster", "protocols"],
      comments=[
          R("sans", "he's not in the registry because the registry keeps "
                    "losing the entry. that's not a filing error. that's him.",
            4, True, top=True),
          R("waluigi", "A manual on Legion protocol is now held by something "
            "the Legion cannot file. Somebody senior is going to have a very "
            "bad afternoon.", 4, True),
      ]),

    P("ww_cov_ebott_final_log", "sans", "text", weight=4, landed=True,
      reaction="deadpan", timestamp="Harvestide 29, 1045 BF",
      content="so they swore an oath of silence in the throne room and then "
              "handed over a survey machine that had been quietly logging "
              "every conversation and battle reading the whole time. i'm not "
              "going to say which of those two things is the oath problem. "
              "you can work it out.",
      links=[{"id": "mount_ebott_survey_final_log", "type": "event"},
             {"id": "iron_legion", "type": "faction"}],
      tags=["mountebott", "oath", "themachine"],
      comments=[
          R("waluigi", "The machine went into Legion custody WITH the packet. "
            "They swore silence and shipped the transcript. Magnificent.", 5,
            True, top=True),
          R("colonel_vera_steelstorm", "The Gamma Agent has been summoned to "
            "High Command. I would not read that as a promotion.", 3),
      ]),

    # =====================================================================
    # COVERAGE — the Harvestide cottage nights
    # =====================================================================

    P("ww_cov_green_t_door", "green_t", "text", weight=4, landed=True,
      reaction="confusion", timestamp="30 Harvestide, 1040 BF",
      content="I knocked on the door of a cottage full of my own colleagues, "
              "in the rain, and to be let in I had to be challenged as a fake, "
              "checked for magical residue, and FIRE A GUN THROUGH A WINDOW "
              "THEY HAD JUST REPAIRED. Then I went and fought the Scorncrow. "
              "The Scorncrow was the easy half of the evening.",
      links=[{"id": "green_t_at_the_door_and_the_scorncrow_underfoot",
              "type": "event"},
             {"id": "markop", "type": "character"}],
      tags=["cottage", "greent", "proofofidentity"],
      comments=[
          R("markop", "The last thing that knocked on that door was wearing "
            "somebody's face. I would do it again and I would do it faster.",
            4, True, top=True),
          R("green_t", "You could have asked me a question only I would know.",
            3, True),
          R("markop", "I did. You got it right. That is exactly what a good "
                      "fake does.", 4, True),
      ]),

    P("ww_cov_box_guardian", "remi_akamatsu_full_backstory", "text", weight=4,
      landed=True, reaction="smug", timestamp="30 Harvestide, 1040 BF",
      content="Official account: the Black Crystal was recovered from a "
              "guarded storage cage and the operative exfiltrated undetected. "
              "Unofficial account: I put a cardboard box on my head and walked "
              "out. Both of these are true. Only one of them is going in the "
              "filing and I have been overruled on which.",
      links=[{"id": "the_box_guardian_sharpie_disguise_and_the_soot_barrel",
              "type": "event"},
             {"id": "markop", "type": "character"}],
      tags=["thebox", "blackcrystal", "exfiltration"],
      comments=[
          R("waluigi", "Both went in the filing. I am not losing the box. The "
            "box is the best thing in the whole arc.", 5, True, top=True),
          R("eager", "it was a REALLY good box", 2, True),
      ]),

    P("ww_cov_imp_ambush", "salam", "text", weight=3, landed=True,
      reaction="grief", timestamp="29–30 Harvestide, 1040 BF",
      content="For the record, since everyone keeps apologising to me about "
              "it: Eager did not mean to hit me. I was standing where the imp "
              "had been standing about half a second earlier. That is not an "
              "attack, that is arithmetic.",
      links=[{"id": "the_imp_ambush_aftermath_and_kyrn_cell_escape",
              "type": "event"},
             {"id": "eager", "type": "character"}],
      tags=["impambush", "friendlyfire", "arithmetic"],
      comments=[
          R("eager", "i still think about it", 2, True, top=True),
          R("dan", "Rattles got you out and I patched you up. Nobody is filing "
                   "a complaint. Stop bracing for one.", 3, True),
      ]),

    P("ww_cov_warp_pipe", "captain_toadette", "text", weight=4, landed=True,
      reaction="mistrust", timestamp="5 Aethel, 1040 BF",
      content="We were told we were meeting a guildmaster at a guildhouse. We "
              "met a Goomba, a Koopa, a Magikoopa and a winch, in a rust shack, "
              "through a gate Embercap lied us past. Dewdrop went down twice "
              "and is alive because of the second person to reach him. The rat "
              "did not come back. The rat was the warning and we went anyway.",
      links=[{"id": "warp_pipe_junction_restricted_city", "type": "event"},
             {"id": "scribe_dewdrop", "type": "character"}],
      tags=["warppipe", "junction", "therat"],
      comments=[
          R("scribe_dewdrop", "I have been unconscious twice in one afternoon "
            "and I am still the one writing this up.", 3, True, top=True),
          R("waluigi", "'The rat was the warning and we went anyway' is going "
            "on the front of the filing.", 4, True),
      ]),

    P("ww_cov_embassy_ambush", "mona", "text", weight=3, landed=True,
      reaction="confusion", timestamp="18 Harvestide, 1035 BF",
      content="We were hired to ambush Luigi at an embassy on the strength of "
              "a paper saying Mario wanted to crouch and backwards longjump "
              "out of the kingdom. I want to be clear that I read that sentence "
              "before I agreed to the job and I agreed to the job anyway. Wario "
              "pays on time.",
      links=[{"id": "the_embassy_ambush_and_luigi_interrogation", "type": "event"},
             {"id": "wario", "type": "character"}],
      tags=["embassy", "longjump", "mercenarywork"],
      comments=[
          R("wario", "WARIO PAYS ON TIME. Put that on the poster.", 3, True,
            top=True),
          R("luigi", "i was THERE. i was having a NORMAL DAY.", 4, True),
      ]),

    P("ww_cov_first_snowfall", "mystic_morel", "text", weight=2,
      reaction="suspicion", timestamp="14 Chillwind, 978 BF",
      content="Sixty-two years on and the Snowflake Village outbreak is still "
              "filed as 'baffled local and regional authorities alike'. I have "
              "read the surviving reports. They were not baffled. They were "
              "three days late, and the report arrived stiff with frost with "
              "the receipt stamp still legible. Somebody sat on it.",
      links=[{"id": "first_snowfall_incident", "type": "event"}],
      tags=["snowflakevillage", "coldcase", "receiptstamp"],
      comments=[
          R("waluigi", "The receipt stamp is the part that matters. It is "
            "always the part that matters.", 4, True, top=True),
      ]),

    # =====================================================================
    # COVERAGE — reactions, running bits, and the wire talking to itself
    # =====================================================================

    P("ww_cov_quote_order120", "speaker_l", "quote", weight=5, landed=True,
      reaction="resolve", timestamp="22 Highsun, 1040 BF",
      content="He says it failed because they were faster. It failed because "
              "eleven people who had every reason to run stood in a corridor "
              "instead. Speed is what it looks like from outside. From inside "
              "it was a decision, taken eleven times, by name.",
      quoteOf="ww_cov_order_120",
      links=[{"id": "order_120", "type": "event"},
             {"id": "liberated_toads", "type": "faction"}],
      tags=["order120", "eleven", "byname"],
      comments=[
          R("bones", "I will take that correction.", 4, True, top=True),
      ]),

    P("ww_cov_exhibit_frost_report", "waluigi", "exhibit", weight=3,
      landed=True, reaction="suspicion", timestamp="Recovered 1040 BF",
      content="Since we are doing cold cases this week. One leaf, militia "
              "hand, unsigned, recovered stiff with frost — and received three "
              "days after the event it reports. Read the stamp, not the prose.",
      exhibit="prop_frozen_incident_report_01",
      links=[{"id": "first_snowfall_incident", "type": "event"}],
      tags=["exhibit", "snowflakevillage", "readthestamp"],
      comments=[
          R("mystic_morel", "Three days. In a village you can walk across in "
            "twenty minutes.", 3, True, top=True),
      ]),

    P("ww_cov_wario_ad", "wario", "text", weight=3, landed=True,
      reaction="gloating", timestamp="14 Aethel, 1040 BF",
      content="WAHAHAHA! The wire is back and WARIO is the FIRST ADVERTISER. "
              "Storm-watch kits, vampire deterrents, motorbike retrieval, "
              "elixirs of QUESTIONABLE but LEGAL provenance. Mention the wire "
              "and pay full price. WARIO does not do discounts, WARIO does "
              "RECOGNITION.",
      links=[{"id": "wario_enterprise", "type": "faction"}],
      tags=["reopening", "advertising", "fullprice"],
      comments=[
          R("waluigi", "Nine hours. The wire was open for NINE HOURS before "
            "this.", 5, True, top=True),
          R("remi_akamatsu_full_backstory", "I bought three things off this "
            "catalogue during a storm and I would like to state that the "
            "deterrent did not deter.", 3, True),
          R("wario", "IT DETERRED. Nothing bit you. That is the PRODUCT "
                     "WORKING.", 4, True),
      ]),

    P("ww_cov_toad_lee_reopening", "toad_lee", "text", weight=3,
      reaction="relief", timestamp="14 Aethel, 1040 BF",
      content="Everyone is posting about the reopening like it is a party. I "
              "am mostly relieved there is somewhere to say a thing that is "
              "not a filing. A filing needs an outcome. Some of this does not "
              "have one yet.",
      links=[{"id": "feyward_i_cant_afford_not_to_care", "type": "event"}],
      tags=["reopening", "nooutcomeyet"],
      comments=[
          R("waluigi", "That is the most accurate description of what this "
            "wire is for that anybody has managed, including me, in a "
            "six-part thread.", 4, True, top=True),
      ]),

    P("ww_cov_poll_worst_night", "wah_media_collective", "poll", weight=4,
      landed=True, reaction="alarm", timestamp="14 Aethel, 1040 BF",
      content="Now the archive is searchable again, settle the argument that "
              "has been running in every tavern in the Midlands:",
      poll={"question": "Worst night on record for Disaster Inc.?",
            "options": [
                {"label": "The Belly of the Beast — sealed in", "votes": 6870},
                {"label": "Judgement in the Grove — the execution", "votes": 9240},
                {"label": "The imp ambush at the cottage", "votes": 2115},
                {"label": "Whichever one Salam is still out in", "votes": 8930}],
            "closes": "Open · 27,155 votes so far"},
      links=[{"id": "the_belly_of_the_beast", "type": "event"},
             {"id": "judgement_in_the_grove", "type": "event"},
             {"id": "salam", "type": "character"}],
      tags=["poll", "disasterinc", "worstnight"],
      comments=[
          R("markop", "Option four is not a night. Option four is a standing "
            "condition and whoever wrote it knows exactly what they did.", 5,
            True, top=True),
          R("bones", "Voted four. Would vote four again.", 3, True),
      ]),

    P("ww_cov_ledger_wire_stats", "waluigi", "ledger", weight=3, landed=True,
      reaction="smug", timestamp="14 Aethel, 1040 BF — end of day one",
      content="Reopening day, by the numbers, because somebody has to count "
              "and it is always me.",
      ledger=[{"label": "Posts filed, day one", "value": "22"},
              {"label": "Accounts posting", "value": "18"},
              {"label": "Corrections already owed", "value": "0 (give it time)"},
              {"label": "Hours before Wario advertised", "value": "9"},
              {"label": "Filings still owing a post", "value": "Most of them"},
              {"label": "Rumours pruned", "value": "0 — link your records"}],
      links=[{"id": "waluigi", "type": "character"}],
      tags=["reopening", "ledger", "daynumbers"],
      comments=[
          R("wah_media_collective", "'MOST OF THEM' IS NOT A NUMBER, "
                                    "ARCHIVIST.", 4, True, top=True),
          R("waluigi", "It is a number. It is eighty-seven. I softened it "
                       "because it is the first day.", 5, True),
      ]),
]


# ---------------------------------------------------------------------------
# Profiles for authors who were already posting without one.
#
# `wwAuthor()` falls back to the character record, so a missing profile is not
# a crash — it is a blank sidebar. Seven accounts have been posting into that
# blank since before the wire went dark. Hand-written, so `status` is "filed"
# and there is no `_generated` block.
# ---------------------------------------------------------------------------

NEW_PROFILES = {
    "dan": {
        "bio": "Former co-leader, Liberated Toads. One arm, one bad year, and "
               "a field kit. Patches people up and declines to discuss it.",
        "location": "Liberated Toads",
        "joined": "Year of the Uprising",
        "follows": ["speaker_l", "salam", "bones"],
        "followReasons": {
            "speaker_l": "He is the reason there is still a faction to lead.",
            "salam": "Somebody should be watching, and it is usually me.",
            "bones": "He was in the courtyard. So was I."},
        "status": "filed"},
    "mona": {
        "bio": "WarioWare crew. Rides with the jobs, reads the paperwork "
               "first, takes the job anyway. Wario pays on time.",
        "location": "Wario's Enterprise",
        "joined": "Year of the Koopa",
        "follows": ["wario", "waluigi"],
        "followReasons": {
            "wario": "Employer. Volume is part of the package.",
            "waluigi": "He files the parts the invoice leaves out."},
        "status": "filed"},
    "remi_akamatsu_full_backstory": {
        "bio": "Fourteen. From Kivotos. Was in the barrel. Card bearer, "
               "Disaster Inc. Escaped a guarded cage wearing a cardboard box "
               "and will not be letting anyone forget it.",
        "location": "Disaster Inc.",
        "joined": "Harvestide, 1040 BF",
        "follows": ["markop", "eager", "wario"],
        "followReasons": {
            "markop": "He checks the door. I have stopped resenting it.",
            "eager": "He apologises more than he needs to.",
            "wario": "The storm-watch deterrent did not deter. Watching for a "
                     "refund."},
        "status": "filed"},
    "scribe_dewdrop": {
        "bio": "Chroniclers Councilor, Liberated Toads. Keeps the archive, "
               "compares testimony, refuses to let emergency language erase "
               "inconvenient facts. Unconscious twice in one afternoon and "
               "still filed the report.",
        "location": "Liberated Toads",
        "joined": "Year of the Uprising",
        "follows": ["speaker_l", "captain_toadette", "waluigi"],
        "followReasons": {
            "speaker_l": "I minute him. That is not the same as agreeing.",
            "captain_toadette": "She reads the warnings out loud.",
            "waluigi": "Rival archivist. Annoyingly rigorous."},
        "status": "filed"},
    "speaker_l": {
        "bio": "Mastermind of the First Cohort. Issued ED-001. 'This is not "
               "retribution's art, but the mending of the fractured heart.' "
               "Held to that line through a decoy, an interrogation and "
               "Order 120.",
        "location": "Liberated Toads / Pond Patrol",
        "joined": "Year of the Uprising",
        "follows": ["bones", "dan", "scribe_dewdrop"],
        "followReasons": {
            "bones": "He stood in the corridor. By name.",
            "dan": "He built the thing I am now responsible for.",
            "scribe_dewdrop": "Somebody has to write it down honestly, and it "
                              "cannot be me."},
        "status": "filed"},
    "dr_toad": {
        "bio": "Star Hill physician with the least suspicious name possible. "
               "Treated Luigi's burns after the lava-falls rescue. Diagnoses "
               "delirium; declines to diagnose anything political.",
        "location": "Dr. Toad's Star Hill Clinic",
        "joined": "Year of the Koopa",
        "follows": ["luigi", "toad_lee"],
        "followReasons": {
            "luigi": "Patient. Recovering. Still talking about the longjump.",
            "toad_lee": "Sends me the ones who will not come in on their own."},
        "status": "filed"},
    "liam": {
        "bio": "DGK field agent sent to the wrong mansion. Authorization "
               "disputed. Went in for samples, came out with a question about "
               "who the central contact actually was.",
        "location": "DGK (assignment disputed)",
        "joined": "Year of the Koopa",
        "follows": ["waluigi", "mystic_morel"],
        "followReasons": {
            "waluigi": "He files receipts. I need one.",
            "mystic_morel": "She reads paperwork the way I should have."},
        "status": "filed"},
}


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true")
    args = ap.parse_args()

    store = json.loads(STORE.read_text(encoding="utf-8"))
    posts = store["posts"]
    have = {p["id"] for p in posts}
    ids, props = known_ids(), known_props()

    added = [p for p in NEW_POSTS if p["id"] not in have]
    combined = added + posts

    problems = validate(combined, ids, props)
    if problems:
        print("VALIDATION FAILED — nothing written:", file=sys.stderr)
        for x in problems:
            print("   " + x, file=sys.stderr)
        return 1

    for i, p in enumerate(combined):
        p["order"] = i + 1

    covered = set()
    for p in combined:
        for l in p.get("links") or []:
            covered.add(l["id"] if isinstance(l, dict) else l)
    ev = {e["id"] for e in json.loads(
        (DATA / "events.json").read_text(encoding="utf-8"))}

    print(f"added   {len(added):3} new posts")
    print(f"total   {len(combined):3} posts on the wire")
    print("  by type:  ", dict(Counter(p.get("type", "text") for p in combined)))
    top = Counter(p["author"] for p in combined).most_common(1)[0]
    print(f"  top voice: {top[0]} {top[1]} posts "
          f"({100*top[1]/len(combined):.0f}%)")
    prof = json.loads(PROFILES.read_text(encoding="utf-8"))["profiles"]
    missing = {p["author"] for p in combined} - set(prof) - set(NEW_PROFILES)
    print(f"  profiles added: {len(set(NEW_PROFILES) - set(prof))}"
          f"   authors still without one: {len(missing)}")
    print(f"  event coverage: {len(ev & covered)}/{len(ev)} "
          f"({100*len(ev & covered)/len(ev):.0f}%)")

    if args.check:
        print("\n--check: validated, nothing written.")
        return 0

    prof_store = json.loads(PROFILES.read_text(encoding="utf-8"))
    for pid, body in NEW_PROFILES.items():
        prof_store["profiles"].setdefault(pid, body)
    PROFILES.write_text(
        json.dumps(prof_store, indent=2, ensure_ascii=False) + "\n",
        encoding="utf-8")

    store["posts"] = combined
    STORE.write_text(json.dumps(store, indent=2, ensure_ascii=False) + "\n",
                     encoding="utf-8")
    print(f"\nwrote {STORE.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
