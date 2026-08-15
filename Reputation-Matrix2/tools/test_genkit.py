#!/usr/bin/env python3
"""Regression tests for the generator's repair-and-retry behaviour.

The rule these protect: a rejected generation is a verdict on one *attempt*,
not on the record. Anything salvageable must be repaired, and anything
retryable must go back in the pool — never silently dropped.

Run:  python3 tools/test_genkit.py
"""
from __future__ import annotations

import sys
import traceback
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from genkit.spec import Task, TaskResult, ValidationError  # noqa: E402
from genkit.scheduler import PopcornScheduler  # noqa: E402
from genkit.systems import (  # noqa: E402
    abilities, crafting, factions, reputation, shop_items, wahwire,
)

PASS = FAIL = 0


def check(name: str, cond: bool, detail: str = "") -> None:
    global PASS, FAIL
    if cond:
        PASS += 1
        print(f"  ok   {name}")
    else:
        FAIL += 1
        print(f"  FAIL {name}" + (f" — {detail}" if detail else ""))


def section(title: str) -> None:
    print(f"\n-- {title} --")


# --------------------------------------------------------------- operators
section("reputation · operator repair")

for proposed, expected in [
    ("Original Dan", "dan"),
    ("GREEN T", "green_t"),
    ("remi", "remi_akamatsu_full_backstory"),
    ("archie", "archie_miser"),
    ("Bowser", "bowser"),
    ("hjumpick", "hjumpik"),
]:
    got = reputation.resolve_operator(proposed)
    check(f"{proposed!r} → {expected}", got == expected, f"got {got!r}")

for junk in ("koopa_resistance", "wario", "diddy_kong"):
    check(f"{junk!r} is not forced onto an operator",
          reputation.resolve_operator(junk) is None)

section("reputation · salvage instead of reject")

task = Task(system_id="reputation", key="k", label="l",
            payload={"name": "The Fall of the Regent Sorcerer", "kind": "majorBattles"})

# Factions filed in the operator slot: the right judgement, the wrong key.
out = reputation.validate(task, {
    "reputationChanges": {"koopa_resistance": {"koopa_troop": -8}},
    "effects": {}, "reputationNotes": {},
})
check("faction-in-operator-slot survives as an effect",
      out["effects"].get("koopa_troop") == -8, str(out))

# Misspelled operators are corrected rather than dropped.
out = reputation.validate(task, {
    "reputationChanges": {"Original Dan": {"koopa_troop": 6}, "greent": {"koopa_troop": -4}},
    "effects": {}, "reputationNotes": {},
})
check("both misspelled operators recovered",
      set(out["reputationChanges"]) == {"dan", "green_t"}, str(out["reputationChanges"]))

# Duplicate spellings of one operator merge, keeping the stronger reading.
out = reputation.validate(task, {
    "reputationChanges": {"dan": {"koopa_troop": 3}, "Original Dan": {"koopa_troop": 9}},
    "effects": {}, "reputationNotes": {},
})
check("duplicate spellings merge on the larger delta",
      out["reputationChanges"].get("dan", {}).get("koopa_troop") == 9,
      str(out["reputationChanges"]))

# A malformed field must not crash the record — this used to raise
# AttributeError out of the worker and cost the whole task.
out = reputation.validate(task, {
    "reputationChanges": {"bowser": {"koopa_troop": 5}},
    "effects": "the koopas lose face",      # prose where a map belongs
    "reputationNotes": "none",              # ditto
})
check("string in `effects` is ignored, not fatal", out["reputationChanges"]["bowser"]["koopa_troop"] == 5)

# A response with nothing scoreable at all must still be rejected. Note the
# faction names here are placeholders, not new groups: an unrecognised *group*
# gets minted by design, so the empty case has to be built from non-answers.
try:
    reputation.validate(task, {"reputationChanges": {"tbd": {"placeholder": 4}},
                               "effects": {}, "reputationNotes": {}})
    check("genuinely empty response is still rejected", False, "no raise")
except ValidationError as err:
    check("genuinely empty response is still rejected", True)
    check("rejection names the allowed operators", "bowser" in str(err), str(err))

# --------------------------------------------------------------- vocabulary
section("crafting · school repair")

for proposed, expected in [("ALCHEMY", "TRANSMUTATION"), ("Potion", "TRANSMUTATION"),
                           ("TRANSMUATION", "TRANSMUTATION"), ("necromancy", "NECROMANCY"),
                           ("healing", "ABJURATION")]:
    got = crafting.resolve_school(proposed)
    check(f"{proposed!r} → {expected}", got == expected, f"got {got!r}")
check("'banana' is still rejected", crafting.resolve_school("banana") is None)

section("shop · category repair")

for proposed, expected in [("gadgets", "curiosities"), ("weapons", "equipment"),
                           ("Consumable", "consumables"), ("black market", "forbidden"),
                           ("EQUIPMENT", "equipment")]:
    got = shop_items.resolve_category(proposed)
    check(f"{proposed!r} → {expected}", got == expected, f"got {got!r}")
check("'banana' is still rejected", shop_items.resolve_category("banana") is None)

# --------------------------------------------------------------- cooldown
section("wahwire · author cooldown")

original_load = wahwire._load
wahwire._load = lambda: {"version": 1, "posts": [
    {"id": "a", "author": "waluigi", "order": 1},
    {"id": "b", "author": "bowser", "order": 2},
    {"id": "c", "author": "waluigi", "order": 3},
]}
try:
    check("recent_authors reads the last 3 by order",
          wahwire.recent_authors() == ["waluigi", "bowser", "waluigi"],
          str(wahwire.recent_authors()))

    post_task = Task(system_id="wahwire-author", key="k", label="l",
                     payload={"record": {"id": "e1", "name": "X"}})
    try:
        wahwire._author_validate(post_task, {
            "author": "waluigi", "content": "x" * 60, "likes": 10,
            "tags": ["a"], "reaction": "smug"})
        check("a cooling-off author is rejected", False, "waluigi was allowed")
    except ValidationError as err:
        check("a cooling-off author is rejected", True)
        check("the rejection lists who is on cooldown", "bowser" in str(err), str(err))

    ok = wahwire._author_validate(post_task, {
        "author": "toadette", "content": "The docks are gone and nobody will say who signed.",
        "likes": 10, "tags": ["docks"], "reaction": "despair"})
    check("an eligible author passes", ok["author"] == "toadette")
    check("a newly added reaction is preserved", ok["reaction"] == "despair", ok["reaction"])

    # The palette is open-ended now: a real feeling word the archive has not
    # seen before is minted rather than flattened. Stubbed so the assertion
    # does not depend on (or write to) the live palette file.
    minted = []
    original_mint = wahwire.mint_reaction

    def _record_mint(name, **kw):
        # Delegate to the real guard so the test still exercises it, but
        # write to a throwaway palette instead of the repo's file.
        result = original_mint(name, **kw)
        if result:
            minted.append(result)
        return result

    original_doc = wahwire._reactions_doc
    scratch = {"version": 1, "reactions": {
        r: {"glyph": "·", "label": r.title(), "tone": "#78909c", "origin": "canon"}
        for r in wahwire.SEED_REACTIONS}}
    wahwire._reactions_doc = lambda: scratch
    wahwire.mint_reaction = _record_mint
    original_write = wahwire.atomic_write_json
    wahwire.atomic_write_json = lambda *a, **k: None
    try:
        coerced = wahwire._author_validate(post_task, {
            "author": "toadette", "content": "The docks are gone and nobody will say who signed.",
            "likes": 10, "tags": ["docks"], "reaction": "flabbergasted"})
        check("a genuinely new emotion is minted, not flattened",
              coerced["reaction"] == "flabbergasted" and minted == ["flabbergasted"],
              f'{coerced["reaction"]} / minted={minted}')

        misspelled = wahwire._author_validate(post_task, {
            "author": "toadette", "content": "The docks are gone and nobody will say who signed.",
            "likes": 10, "tags": ["docks"], "reaction": "greif"})
        check("a misspelling folds onto the existing tone",
              misspelled["reaction"] == "grief", misspelled["reaction"])

        inflected = wahwire._author_validate(post_task, {
            "author": "toadette", "content": "The docks are gone and nobody will say who signed.",
            "likes": 10, "tags": ["docks"], "reaction": "rageful"})
        check("an inflection folds onto its root tone",
              inflected["reaction"] == "rage", inflected["reaction"])

        junk = wahwire._author_validate(post_task, {
            "author": "toadette", "content": "The docks are gone and nobody will say who signed.",
            "likes": 10, "tags": ["docks"], "reaction": "mixed feelings really"})
        check("a non-word still falls back to deadpan", junk["reaction"] == "deadpan",
              junk["reaction"])
    finally:
        wahwire.mint_reaction = original_mint
        wahwire._reactions_doc = original_doc
        wahwire.atomic_write_json = original_write

    section("wahwire · comments and replies")

    threaded = wahwire._author_validate(post_task, {
        "author": "toadette",
        "content": "The docks are gone and nobody will say who signed the order.",
        "likes": 10, "tags": ["docks"], "reaction": "despair",
        "comments": [
            {"author": "toadsworth", "content": "I say, this is most irregular indeed.",
             "likes": 5, "reaction": "suspicion"},
            {"author": "bowser", "content": "Irregular? It was efficient.",
             "likes": 900, "reaction": "gloating", "replyTo": "toadsworth"},
            {"author": "toadette", "content": "self-reply should be dropped entirely",
             "likes": 1, "reaction": "cheer"},
            {"author": "nobody_at_all", "content": "unknown author should be dropped",
             "likes": 1, "reaction": "cheer"},
            {"author": "markop", "content": "short", "likes": 1, "reaction": "cheer"},
            {"author": "markop", "content": "Reply to someone not in this thread.",
             "likes": 1, "reaction": "cheer", "replyTo": "alpha_bloodmaw"},
        ]})
    comments = threaded["comments"]
    check("valid comments kept", len(comments) == 3, f"kept {len(comments)}")
    check("ids are sequential", [c["id"] for c in comments] == ["c1", "c2", "c3"],
          str([c["id"] for c in comments]))
    check("self-reply by the post author is dropped",
          all(c["author"] != "toadette" for c in comments))
    check("unknown commenter is dropped",
          all(c["author"] != "nobody_at_all" for c in comments))
    check("too-short comment is dropped",
          all(c["content"] != "short" for c in comments))
    check("in-thread replyTo is kept", comments[1]["replyTo"] == "toadsworth")
    check("out-of-thread replyTo is cleared", comments[2]["replyTo"] == "")

    # A completely malformed comments block must cost the comments, not the post.
    survived = wahwire._author_validate(post_task, {
        "author": "toadette", "content": "The docks are gone and nobody will say who signed.",
        "likes": 10, "tags": ["docks"], "reaction": "grief", "comments": "not a list"})
    check("garbage comments never fail the post", survived["comments"] == [])
finally:
    wahwire._load = original_load

section("wahwire · reaction palette")

# The palette moved out of both source files and into data/wahwire/reactions.json
# so the generator can extend it without a code change on either side. What
# matters now is that the two readers agree on the file, not that two frozen
# literals happen to match.
palette = wahwire.reactions()
check("palette loads from data/wahwire/reactions.json", len(palette) >= 18,
      str(len(palette)))
for seeded in wahwire.SEED_REACTIONS:
    if seeded not in palette:
        check(f"seed reaction {seeded} present in the palette", False)
        break
else:
    check("every seed reaction survives in the palette", True)

js = (Path(__file__).resolve().parents[1] / "app/pages/wahwire/wahwire.js").read_text()
check("wahwire.js reads the palette file",
      "REACTIONS_URL" in js and "loadReactions" in js)
# The palette fetch was folded into the profile fetch when profiles landed, so
# accept either the bare await or the combined one -- what matters is that the
# load is awaited inside load(), before the first paint.
check("wahwire.js folds the palette in before the first paint",
      "await loadReactions();" in js
      or "await Promise.all([loadReactions(), loadProfiles()]);" in js)
# The built-in fallback must still cover the seed set, so a failed fetch
# degrades to the hand-written tones rather than to blank badges.
absent = [r for r in wahwire.SEED_REACTIONS if f"{r}:" not in js]
check("wahwire.js keeps a built-in fallback for every seed reaction",
      not absent, str(absent))

# --------------------------------------------------------------- requeue
section("scheduler · requeue")

t = Task(system_id="demo", key="demo:1", label="demo 1")
waiting = Task(system_id="demo", key="demo:2", label="demo 2")

sched = PopcornScheduler([])
sched._buffers = {"demo": [waiting]}
sched._inflight = {"demo": {"demo:1"}}
sched._issued = {"demo:1", "demo:2"}
sched._drained = {"demo"}
sched.requeue(t)

check("requeued task jumps the queue", sched._buffers["demo"] == [t, waiting],
      str([x.key for x in sched._buffers["demo"]]))
check("requeue clears inflight", "demo:1" not in sched._inflight["demo"])
check("requeue keeps the key issued (no duplicate refill)", "demo:1" in sched._issued)
check("requeue un-drains the system", "demo" not in sched._drained)

section("spec · retry plumbing")
check("Task tracks attempts", Task(system_id="s", key="k", label="l").attempts == 0)
r = TaskResult(task=t, ok=False, detail="d", retryable=True, reason="because")
check("TaskResult carries retryable", r.retryable is True)
check("TaskResult carries a reason", r.reason == "because")

# ------------------------------------------------- people are not factions
section("factions · a person is never a faction")

# The salvage path that rescues faction-shaped reputation answers used to run
# every unrecognised operator id through the faction resolver, which mints
# anything it does not know. That turned members of the cast into
# organisations: `diddy_kong` and `wario` were both written real dossiers,
# with a region and a power level, into data/factionsGenerated.json.
check("a cast member is recognised as a person", factions.is_person("diddy_kong"))
check("so is one written with a title",
      factions.is_person("chunky_kong_the_third"))
check("and one from the JSON roster", factions.is_person("wario"))
check("a group noun means it is a group, not the person it is named after",
      not factions.is_person("wario_land") and not factions.is_person("bowser_legion"))
check("a real faction is not mistaken for a person",
      not factions.is_person("koopa_troop") and not factions.is_person("dk_crew"))

known = set(reputation.faction_ids())
check("resolving a person reports 'person', and mints nothing",
      factions.resolve("diddy_kong", known) == (None, "person"))
check("an organisation sharing a person's name still resolves",
      factions.resolve("wario_land", known)[1] in ("exact", "alias", "fuzzy"))
check("a genuinely new group is still created",
      factions.resolve("magikoopa_council", known)[1] == "create")

rep_task = Task(system_id="reputation", key="k", label="l",
                payload={"kind": "majorBattles", "id": "x", "name": "X"})
scored = reputation.validate(rep_task, {
    "reputationChanges": {"diddy_kong": {"koopa_troop": -5},
                          "wario": {"warios_enterprise": 8}}})
check("a person in the operator slot is not minted as a faction",
      scored["_created"] == [], str(scored["_created"]))
check("the factions they named are still scored as effects",
      scored["effects"].get("koopa_troop") == -5
      and scored["effects"].get("wario_land") == 8, str(scored["effects"]))
check("and the people are reported rather than silently absorbed",
      scored["_people"] == ["diddy_kong", "wario"], str(scored["_people"]))

# ------------------------------------------------------------ repair passes
section("repair · a rejection becomes a record")

check("every system that can reject has a repair or a reason not to",
      reputation.SPEC.repair is not None
      and abilities.SPEC.repair is not None
      and wahwire.AUTHOR_SPEC.repair is not None)

# A person in the operator slot whose deltas DO name real factions is now
# salvaged by validate() itself and never reaches repair.
survivor = reputation.validate(rep_task, {
    "reputationChanges": {"lanky_kong": {"dk_crew": 6, "koopa_troop": -3}},
    "effects": "prose instead of a map"})
check("a person naming real factions is salvaged without needing repair",
      survivor["effects"].get("dk_crew") == 6
      and survivor["effects"].get("koopa_troop") == -3, str(survivor["effects"]))

# Repair is for the case validate cannot save: the factions are buried a level
# deeper than the schema allows, so nothing scores on the first pass.
bad = {"reputationChanges": {"the_battle": {"aftermath": {"dk_crew": 6,
                                                          "koopa_troop": -3}}},
       "effects": "prose instead of a map"}
try:
    reputation.validate(rep_task, bad)
    check("a mis-nested reputation reply is rejected first", False, "it passed")
except ValidationError as err:
    check("a mis-nested reputation reply is rejected first", True)
    fixed = reputation.repair(rep_task, bad, str(err))
    check("repair digs the real factions out of the wrong nesting",
          fixed is not None and fixed["effects"].get("dk_crew") == 6, str(fixed))
    check("and the repaired record passes validation",
          reputation.validate(rep_task, fixed)["effects"].get("koopa_troop") == -3)

check("repair declines when there is genuinely nothing to keep",
      reputation.repair(rep_task, {"reputationChanges": {"nobody": {"unknown": 4}}},
                        "nothing scoreable — unknown operators: nobody") is None)
check("repair does not fire for an unrelated rejection",
      reputation.repair(rep_task, bad, "some other complaint") is None)

# abilities: the duplicate name the model would not stop reusing
taken = abilities._abilities()
if taken:
    dupe = dict(taken[0])
    ab_task = Task(system_id="abilities", key="k", label="l",
                   payload={"class": "brawler", "level": 5})
    repaired_ability = abilities.repair(
        ab_task, dupe, f"duplicate ability name {dupe.get('name')!r}")
    names = {(a.get("name") or "").strip().lower() for a in taken}
    check("a duplicate ability name is renamed to something free",
          repaired_ability is not None
          and repaired_ability["name"].lower() not in names,
          str(repaired_ability and repaired_ability["name"]))
    check("the rename keeps the model's own wording",
          repaired_ability["name"].split()[0] == str(dupe.get("name")).split()[0])
    check("abilities repair declines for a non-name rejection",
          abilities.repair(ab_task, dupe, "effect has no numbers") is None)

# ------------------------------------------------- cooldown under concurrency
section("wahwire · cooldown binds across workers")

wahwire._INFLIGHT_AUTHORS.clear()
saved_load = wahwire._load
wahwire._load = lambda: {"version": 1, "posts": [
    {"id": "a", "author": "markop", "order": 1},
    {"id": "b", "author": "bowser", "order": 2},
]}
try:
    check("an author free on disk is offered", "waluigi" not in wahwire.recent_authors())
    # Another worker picks waluigi and has not written yet.
    wahwire._claim_author("waluigi")
    check("an in-flight claim blocks the same author",
          "waluigi" in wahwire.recent_authors(), str(wahwire.recent_authors()))

    dup_task = Task(system_id="wahwire-author", key="k", label="l",
                    payload={"record": {"id": "e1", "name": "X"}})
    raw_post = {"author": "waluigi", "content": "x" * 60, "likes": 5,
                "tags": [], "reaction": "smug"}
    try:
        wahwire._author_validate(dup_task, raw_post)
        check("a claimed author is rejected", False, "waluigi was allowed twice")
    except ValidationError as err:
        check("a claimed author is rejected", True)
        rescued = wahwire._author_repair(dup_task, raw_post, str(err))
        check("the post is reassigned rather than lost",
              rescued is not None and rescued["author"] != "waluigi",
              str(rescued and rescued["author"]))
        check("and the reassigned post validates",
              wahwire._author_validate(dup_task, rescued)["author"] == rescued["author"])

    check("the claim ages out after the cooldown window",
          (wahwire._claim_author("toadette"), wahwire._claim_author("hjumpik"),
           wahwire._claim_author("markop"),
           "waluigi" not in wahwire.recent_authors())[-1],
          str(wahwire.recent_authors()))
finally:
    wahwire._load = saved_load
    wahwire._INFLIGHT_AUTHORS.clear()

# ------------------------------------------------------- discussion pass
section("wahwire · threading existing posts")

saved_load = wahwire._load
wahwire._load = lambda: {"version": 1, "posts": [
    {"id": "p1", "author": "waluigi", "order": 1, "content": "Docks are gone.",
     "status": "canon", "comments": [
         {"id": "c1", "author": "bowser", "content": "Good. They were in the way."}]},
    {"id": "p2", "author": "markop", "order": 2, "content": "Nobody signed for it.",
     "status": "canon"},
    {"id": "p3", "author": "hjumpik", "order": 3, "content": "Retired.", "status": "retired"},
]}
try:
    thin = [p["id"] for p in wahwire._thin_threads()]
    check("posts with thin threads are queued", thin == ["p1", "p2"], str(thin))
    check("retired posts are never threaded", "p3" not in thin)

    d_task = Task(system_id="wahwire-discuss", key="k", label="l",
                  payload={"id": "p1", "post": wahwire._load()["posts"][0]})
    threaded = wahwire._discuss_validate(d_task, {"comments": [
        {"author": "markop", "content": "I have the signed order right here.",
         "likes": 12, "reaction": "suspicion"},
        {"author": "toadette", "content": "Then read out the name on it.",
         "likes": 3, "reaction": "resolve", "replyTo": "markop"},
        {"author": "waluigi", "content": "Replying to my own post should be dropped.",
         "likes": 1, "reaction": "smug"},
        {"author": "bowser", "content": "Good. They were in the way.",
         "likes": 1, "reaction": "gloating"},
    ]})
    added = threaded["comments"]
    check("comments on an existing post are accepted", len(added) == 2, str(len(added)))
    check("the post's own author cannot reply to itself",
          all(c["author"] != "waluigi" for c in added))
    check("a reply to an existing commenter is kept",
          added[1]["replyTo"] == "markop", added[1]["replyTo"])
    check("a comment already in the thread is not repeated",
          all("in the way" not in c["content"] for c in added))

    try:
        wahwire._discuss_validate(d_task, {"comments": [
            {"author": "waluigi", "content": "only a self-reply here", "likes": 1}]})
        check("a thread with nothing usable is rejected", False, "it passed")
    except ValidationError:
        check("a thread with nothing usable is rejected", True)
finally:
    wahwire._load = saved_load

# --------------------------------------------------- repair covers every system
section("repair · full coverage across the registry")

from genkit.systems import all_systems  # noqa: E402

missing = [s.id for s in all_systems() if s.repair is None]
check("every registered system has a repair hook", not missing, ", ".join(missing))

# --- shop items: a duplicate name is a label problem, a bad price is not
shop_task = Task(system_id="shop_items", key="k", label="shop item · common",
                 payload={"rarity": "common"})
# Stub the store rather than reading the shard: on a clean tree the generated
# shard is empty, and a test that quietly skips itself is not a test.
saved_generated = shop_items._generated
dupe = "Chrono Snail"
shop_items._generated = lambda: {"wz_gen_common_0001": {"name": dupe}}
try:
    fixed = shop_items.repair(shop_task, {"name": dupe}, f"duplicate item name {dupe!r}")
    check("a duplicate item name is disambiguated in code",
          fixed is not None and fixed["name"] != dupe, str(fixed and fixed["name"]))
    check("the repaired name keeps the model's own wording in front",
          fixed is not None and fixed["name"].startswith(dupe))
    check("the repaired name stays inside the 60-character limit",
          fixed is not None and len(fixed["name"]) <= 60)

    # Exhaust every mark so the rarity-counter fallback is exercised too.
    crowded = {f"i{n}": {"name": f"{dupe} {mark}"}
               for n, mark in enumerate(shop_items._RENAME_MARKS)}
    crowded["orig"] = {"name": dupe}
    shop_items._generated = lambda: crowded
    fallback = shop_items.repair(shop_task, {"name": dupe},
                                 f"duplicate item name {dupe!r}")
    taken = {v["name"].lower() for v in crowded.values()}
    check("a name that has exhausted every mark still gets a unique fallback",
          fallback is not None and fallback["name"].lower() not in taken,
          str(fallback and fallback["name"]))
finally:
    shop_items._generated = saved_generated

check("a price rejection is not repaired into a made-up price",
      shop_items.repair(shop_task, {"name": "Ordinary Rope", "price": 99999},
                        "price 99999 outside the common band") is None)

# --- crafting: classify only on unambiguous evidence
craft_task = Task(system_id="crafting", key="k", label="recipe",
                  payload={"name": "Bone Charm",
                           "description": "carved from undead remains"})
fixed = crafting.repair(craft_task, {"school": "Spooky", "reason": "x"},
                        "unknown school 'Spooky'")
check("an unknown school is recovered from the recipe's own wording",
      fixed is not None and fixed["school"] == "NECROMANCY", str(fixed))
check("the substituted reason survives validation's length rule",
      fixed is not None and 10 <= len(fixed["reason"]) and len(fixed["reason"].split()) <= 26)
vague = Task(system_id="crafting", key="k", label="recipe",
             payload={"name": "Mystery Goo", "description": "indescribable"})
check("a recipe with no clear evidence is left rejected, not guessed",
      crafting.repair(vague, {"school": "Spooky", "reason": "x"},
                      "unknown school 'Spooky'") is None)

# --- prune: a synonym is vocabulary, an undecided answer is a real failure
prune_task = Task(system_id="wahwire-prune", key="k", label="post",
                  payload={"id": "p1"})
check("'remove' is read as a retire verdict",
      (wahwire._prune_repair(prune_task, {"verdict": "remove"},
                             "bad verdict 'remove'") or {}).get("verdict") == "retire")
check("'retain' is read as a keep verdict",
      (wahwire._prune_repair(prune_task, {"verdict": "retain"},
                             "bad verdict 'retain'") or {}).get("verdict") == "keep")
check("an undecided verdict is not defaulted to keep",
      wahwire._prune_repair(prune_task, {"verdict": "revise"},
                            "bad verdict 'revise'") is None)

# --- discuss: reassign a bad handle, but never pad a short comment
saved_load = wahwire._load
wahwire._load = lambda: {"posts": [
    {"id": "p1", "author": "waluigi", "order": 1, "content": "x", "comments": []}]}
try:
    d_task = Task(system_id="wahwire-discuss", key="k", label="thread",
                  payload={"id": "p1", "author": "waluigi"})
    fixed = wahwire._discuss_repair(d_task, {"comments": [
        {"author": "not_a_real_account",
         "content": "The freight manifest never matched what came off the barge."},
        {"author": "waluigi",
         "content": "Counting the crates twice does not make them mine."},
    ]}, "no usable comments — each needs an account from the list")
    check("comments with invented handles are reassigned, not discarded",
          fixed is not None and len(fixed["comments"]) == 2, str(fixed))
    check("reassigned comments use real accounts",
          fixed is not None
          and all(c["author"] in wahwire.KNOWN_AUTHORS for c in fixed["comments"]))
    check("the post's own author is never used as a replier",
          fixed is not None
          and all(c["author"] != "waluigi" for c in fixed["comments"]))
    check("the model's comment text is preserved verbatim",
          fixed is not None and "freight manifest" in fixed["comments"][0]["content"])
    check("a too-short comment is not padded to make it pass",
          wahwire._discuss_repair(d_task, {"comments": [
              {"author": "nobody", "content": "lol"}]},
              "no usable comments — each needs an account") is None)
finally:
    wahwire._load = saved_load

print(f"\n{PASS} passed, {FAIL} failed")
sys.exit(1 if FAIL else 0)
