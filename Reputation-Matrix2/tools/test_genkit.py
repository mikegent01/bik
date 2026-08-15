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
from genkit.systems import crafting, reputation, shop_items, wahwire  # noqa: E402

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

    coerced = wahwire._author_validate(post_task, {
        "author": "toadette", "content": "The docks are gone and nobody will say who signed.",
        "likes": 10, "tags": ["docks"], "reaction": "flabbergasted"})
    check("an unknown reaction falls back to deadpan", coerced["reaction"] == "deadpan")

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

section("wahwire · reaction map parity")
check("18 reactions defined", len(wahwire.REACTIONS) == 18, str(len(wahwire.REACTIONS)))
js = (Path(__file__).resolve().parents[1] / "app/pages/wahwire/wahwire.js").read_text()
missing = [r for r in wahwire.REACTIONS if f"{r}:" not in js and f"'{r}'" not in js]
check("every Python reaction exists in wahwire.js", not missing, str(missing))

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

print(f"\n{PASS} passed, {FAIL} failed")
sys.exit(1 if FAIL else 0)
