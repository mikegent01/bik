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

from genkit.spec import SystemSpec, Task, TaskResult, ValidationError  # noqa: E402
from genkit.scheduler import PopcornScheduler  # noqa: E402
from genkit.runner import Runner  # noqa: E402
from genkit.settings import Settings  # noqa: E402
from genkit.gui import render_web_page  # noqa: E402
from genkit.storage import Checkpoint  # noqa: E402
from genkit.systems import (  # noqa: E402
    abilities, bros_attacks, crafting, faction_dossier_sections, faction_dossiers,
    factions, reputation, shop_items, wahwire,
)

# Redirect every write target at a scratch copy before a single test runs.
# These tests exercise real apply()/resolve() paths, and those paths write to
# disk: a previous version of this file minted a faction called "The Battle"
# into data/factionsGenerated.json from the dummy record "X" and committed it.
# A test suite must not be able to edit canon.
import shutil  # noqa: E402
import tempfile  # noqa: E402

_SCRATCH = Path(tempfile.mkdtemp(prefix="genkit-test-"))
faction_dossier_sections.DRAFT_DIR = _SCRATCH / "draft-faction-dossiers"


def _sandbox(module, attr: str) -> None:
    """Point one module-level path at a copy inside the scratch directory."""
    real = getattr(module, attr, None)
    # Loudly, not silently: a renamed constant would otherwise leave the real
    # file writable again and this guard would quietly stop guarding.
    if not isinstance(real, Path):
        raise SystemExit(
            f"test sandbox: {module.__name__}.{attr} is {type(real).__name__}, "
            "not a Path — the constant was renamed and canon is unprotected"
        )
    fake = _SCRATCH / f"{module.__name__.rsplit('.', 1)[-1]}-{attr}{real.suffix}"
    if real.exists():
        shutil.copy2(real, fake)
    setattr(module, attr, fake)


for _mod, _attrs in (
    (factions, ("GENERATED",)),
    (wahwire, ("STORE", "PROFILES_FILE", "REACTIONS_FILE")),
    (abilities, ("SHOP",)),
    (shop_items, ("SHARD",)),
    (crafting, ("CRAFTING",)),
    (bros_attacks, ("SOURCE",)),
    ):
    for _attr in _attrs:
        _sandbox(_mod, _attr)

# factions caches the store on first read; drop anything already loaded so the
# cache is rebuilt from the sandboxed copy.
factions._CACHE = None

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
check("record-wide effects alone satisfy the gap-only contract",
      reputation.has_impacts({"reputationChanges": {}, "effects": {"iron_legion": -8}}))
check("a genuinely empty pair of maps remains eligible for backfill",
      not reputation.has_impacts({"reputationChanges": {}, "effects": {}}))

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

check("Warizon generation is re-enabled behind the v2 quality gate",
      shop_items.SPEC.enabled is True)
for proposed, expected in [("gadgets", "curiosities"), ("weapons", "equipment"),
                           ("Consumable", "consumables"), ("black market", "forbidden"),
                           ("EQUIPMENT", "equipment")]:
    got = shop_items.resolve_category(proposed)
    check(f"{proposed!r} → {expected}", got == expected, f"got {got!r}")
check("'banana' is still rejected", shop_items.resolve_category("banana") is None)

v2_item_task = Task(
    system_id="shop_items", key="item:v2", label="v2 item",
    payload={"rarity": "common", "slug": "wz_gen_common_v2_test"},
)
v2_item = {
    "name": "Dockline Knot", "icon": "🪢", "category": "equipment",
    "description": "A waxed harbor knot that tightens itself once before the fibers go slack.",
    "price": 40, "levelRequirement": 1,
    "levelRequirementReason": "Any courier can learn the single locking pull.",
    "effectDetails": [{"title": "Locking Pull", "rules": "Secure one object within 10 feet for 2 rounds."}],
    "usage": {"activation": "action", "duration": "2 rounds", "endsWhen": "the knot goes slack", "charges": "1 use"},
    "warning": "The fibers cannot be tightened a second time.",
    "vendorReason": "Wario buys dock surplus by the barrel.",
    "shippingDetail": "Delivered in a wax-paper coil with a numbered seal.",
}
saved_generated_items = shop_items._generated
shop_items._generated = lambda: {}
try:
    checked_item = shop_items.validate(v2_item_task, v2_item)
    check("v2 shop item passes pictograph, mechanics and in-world gates",
          checked_item["icon"] == "🪢")
    for field, value, label in (
        ("icon", "-Compatible-Game", "text icon"),
        ("description", "A player uses this at the table for a +2 bonus.", "out-of-world prose"),
    ):
        broken = dict(v2_item)
        broken[field] = value
        try:
            shop_items.validate(v2_item_task, broken)
            check(f"v2 shop rejects {label}", False, "it passed")
        except ValidationError:
            check(f"v2 shop rejects {label}", True)
finally:
    shop_items._generated = saved_generated_items
commerce_source = (Path(__file__).resolve().parents[1] / "data/commerce/index.js").read_text()
check("legacy generated shop stock is quarantined from the storefront",
      "ITEMS_WORLD_VETTED" in commerce_source
      and "item._quality.validator === 'shop-v2'" in commerce_source)

# --------------------------------------------------------------- cooldown
section("wahwire · author cooldown")

check("WAHwire authoring is re-enabled behind participant/evidence gates",
      wahwire.AUTHOR_SPEC.enabled is True)
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
        "author": "captain_toadette", "content": "The docks are gone and nobody will say who signed.",
        "likes": 10, "tags": ["docks"], "reaction": "despair"})
    check("an eligible author passes", ok["author"] == "captain_toadette")
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
            "author": "captain_toadette", "content": "The docks are gone and nobody will say who signed.",
            "likes": 10, "tags": ["docks"], "reaction": "flabbergasted"})
        check("a genuinely new emotion is minted, not flattened",
              coerced["reaction"] == "flabbergasted" and minted == ["flabbergasted"],
              f'{coerced["reaction"]} / minted={minted}')

        misspelled = wahwire._author_validate(post_task, {
            "author": "captain_toadette", "content": "The docks are gone and nobody will say who signed.",
            "likes": 10, "tags": ["docks"], "reaction": "greif"})
        check("a misspelling folds onto the existing tone",
              misspelled["reaction"] == "grief", misspelled["reaction"])

        inflected = wahwire._author_validate(post_task, {
            "author": "captain_toadette", "content": "The docks are gone and nobody will say who signed.",
            "likes": 10, "tags": ["docks"], "reaction": "rageful"})
        check("an inflection folds onto its root tone",
              inflected["reaction"] == "rage", inflected["reaction"])

        junk = wahwire._author_validate(post_task, {
            "author": "captain_toadette", "content": "The docks are gone and nobody will say who signed.",
            "likes": 10, "tags": ["docks"], "reaction": "mixed feelings really"})
        check("a non-word still falls back to deadpan", junk["reaction"] == "deadpan",
              junk["reaction"])
    finally:
        wahwire.mint_reaction = original_mint
        wahwire._reactions_doc = original_doc
        wahwire.atomic_write_json = original_write

    section("wahwire · comments and replies")

    threaded = wahwire._author_validate(post_task, {
        "author": "captain_toadette",
        "content": "The docks are gone and nobody will say who signed the order.",
        "likes": 10, "tags": ["docks"], "reaction": "despair",
        "comments": [
            {"author": "chancellor_toadsworth", "content": "I say, this is most irregular indeed.",
             "likes": 5, "reaction": "suspicion"},
            {"author": "bowser", "content": "Irregular? It was efficient.",
             "likes": 900, "reaction": "gloating", "replyTo": "chancellor_toadsworth"},
            {"author": "captain_toadette", "content": "self-reply should be dropped entirely",
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
          all(c["author"] != "captain_toadette" for c in comments))
    check("unknown commenter is dropped",
          all(c["author"] != "nobody_at_all" for c in comments))
    check("too-short comment is dropped",
          all(c["content"] != "short" for c in comments))
    check("in-thread replyTo is kept", comments[1]["replyTo"] == "chancellor_toadsworth")
    check("out-of-thread replyTo is cleared", comments[2]["replyTo"] == "")

    # A completely malformed comments block must cost the comments, not the post.
    survived = wahwire._author_validate(post_task, {
        "author": "captain_toadette", "content": "The docks are gone and nobody will say who signed.",
        "likes": 10, "tags": ["docks"], "reaction": "grief", "comments": "not a list"})
    check("garbage comments never fail the post", survived["comments"] == [])
finally:
    wahwire._load = original_load

saved_load = wahwire._load
wahwire._load = lambda: {"version": 1, "posts": []}
try:
    v2_post_task = Task(
        system_id="wahwire-author", key="author:v2", label="v2 post",
        payload={
            "qualityV2": True, "allowedAuthors": ["markop"],
            "record": {
                "id": "bridge_record", "name": "Bridge Record",
                "summary": "Markop held the north bridge until every refugee crossed safely.",
                "participants": [{"id": "markop", "name": "Markop"}],
            },
        },
    )
    v2_post = wahwire._author_validate(v2_post_task, {
        "author": "markop",
        "content": "I held the north bridge until every refugee crossed safely. Count the people, not the applause.",
        "evidenceQuote": "held the north bridge until every refugee crossed safely",
        "likes": 12, "tags": ["bridge", "refugees"], "reaction": "resolve",
        "comments": [{"author": "bowser", "content": "This must be ignored."}],
    })
    check("v2 WAHwire post is participant/evidence grounded",
          v2_post["author"] == "markop" and v2_post["comments"] == [])
    invented = dict(v2_post)
    invented.update({"content": "My cousin told me the bridge was safe.",
                     "evidenceQuote": "held the north bridge until every refugee crossed safely"})
    try:
        wahwire._author_validate(v2_post_task, invented)
        check("v2 WAHwire rejects invented relatives", False, "it passed")
    except ValidationError:
        check("v2 WAHwire rejects invented relatives", True)
finally:
    wahwire._load = saved_load

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
check("legacy generated WAHwire posts are quarantined from the feed",
      "post._quality?.validator === 'wahwire-v2'" in js)

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

stage0_task = Task(system_id="gate-zero", key="gate-zero:1", label="unfinished dossier")
stage1_task = Task(system_id="gate-one", key="gate-one:1", label="bulk item")
gate_zero = SystemSpec(
    id="gate-zero", title="Gate zero", summary="test", stage=0,
    next_tasks=lambda count: [stage0_task], pending=lambda: 1,
)
gate_one = SystemSpec(
    id="gate-one", title="Gate one", summary="test", stage=1,
    next_tasks=lambda count: [stage1_task], pending=lambda: 1,
)
gated = PopcornScheduler([gate_zero, gate_one], seed=1)
issued_zero = gated.next_task()
gated.complete(issued_zero, changed=False)
check("failed stage-0 work never falls through to bulk stage-1 generation",
      issued_zero.system_id == "gate-zero" and gated.next_task() is None,
      str(gated.snapshot()))

dependent_pending = {"value": 0}
producer_task = Task(system_id="producer", key="producer:1", label="new post")
dependent_task = Task(system_id="dependent", key="dependent:1", label="thread post")
producer = SystemSpec(id="producer", title="Producer", summary="test", stage=1,
                      next_tasks=lambda count: [producer_task], pending=lambda: 1)
dependent = SystemSpec(
    id="dependent", title="Dependent", summary="test", stage=1,
    next_tasks=lambda count: [dependent_task] if dependent_pending["value"] else [],
    pending=lambda: dependent_pending["value"],
)
dynamic = PopcornScheduler([producer, dependent], seed=1)
first_dynamic = dynamic.next_task()
dynamic.complete(first_dynamic, changed=True)
dependent_pending["value"] = 1
check("a drained dependent system revives when another adapter creates work",
      first_dynamic.system_id == "producer"
      and dynamic.next_task().system_id == "dependent")

section("spec · retry plumbing")
check("Task tracks attempts", Task(system_id="s", key="k", label="l").attempts == 0)
r = TaskResult(task=t, ok=False, detail="d", retryable=True, reason="because")
check("TaskResult carries retryable", r.retryable is True)
check("TaskResult carries a reason", r.reason == "because")

# -------------------------------------------- checkpoints follow source data
section("checkpoints · pending data wins")

checkpoint_dir = _SCRATCH / "checkpoint-tests"
checkpoint = Checkpoint(checkpoint_dir, "demo")
checkpoint.record("demo:pending", {"label": "old dry run"}, ok=True)
check("fixture starts with a completed key", checkpoint.done("demo:pending"))
removed = checkpoint.reopen("demo:pending")
check("reopening removes the stale completion",
      removed == 1 and not checkpoint.done("demo:pending"), str(removed))
check("reopening leaves an audit trail",
      checkpoint._data.get("reopened", [{}])[-1].get("key") == "demo:pending",
      str(checkpoint._data.get("reopened")))

checkpoint_spec = SystemSpec(
    id="checkpoint-demo", title="Checkpoint demo", summary="test",
    next_tasks=lambda count: [], pending=lambda: 0,
)
checkpoint_runner = Runner(
    [checkpoint_spec],
    Settings(workers=1, work_dir=checkpoint_dir),
)
checkpoint_task = Task(
    system_id="checkpoint-demo", key="checkpoint-demo:pending", label="pending task",
)
checkpoint_runner.checkpoints["checkpoint-demo"].record(
    checkpoint_task.key, {"label": "old completion"}, ok=True,
)
check("runner reopens a checkpoint when the system offers that task again",
      checkpoint_runner._reopen_stale_checkpoint(checkpoint_task)
      and not checkpoint_runner.checkpoints["checkpoint-demo"].done(checkpoint_task.key))

dry_spec = SystemSpec(
    id="dry-demo", title="Dry demo", summary="test",
    next_tasks=lambda count: [], pending=lambda: 0,
)
dry_runner = Runner(
    [dry_spec],
    Settings(workers=1, dry_run=True, work_dir=checkpoint_dir),
)
dry_task = Task(system_id="dry-demo", key="dry-demo:1", label="dry task")
dry_runner._collect(TaskResult(task=dry_task, ok=True, detail="dry run"))
check("a successful dry run writes no completion checkpoint",
      dry_runner.checkpoints["dry-demo"].counts() == (0, 0),
      str(dry_runner.checkpoints["dry-demo"].counts()))

multi_calls = []
multi_spec = SystemSpec(
    id="multi-demo", title="Multi demo", summary="test",
    next_tasks=lambda count: [], pending=lambda: 0,
    build_prompt=lambda task: (_ for _ in ()).throw(AssertionError("single prompt used")),
    generate=lambda task, client, temperature: (
        multi_calls.append(temperature) or {"assembled": True}
    ),
    validate=lambda task, raw: raw,
)
multi_runner = Runner(
    [multi_spec], Settings(workers=1, dry_run=True, work_dir=checkpoint_dir),
)
multi_result = multi_runner._handle(
    Task(system_id="multi-demo", key="multi-demo:1", label="multi task"), 0,
)
check("runner uses a system's multi-call generator instead of one oversized prompt",
      multi_result.ok and multi_result.record == {"assembled": True}
      and multi_calls == [0.7], str(multi_result.record))

gui_page = render_web_page(Settings(
    workers=1, limit=3, temperature=0.45, dry_run=True,
    only=["faction-dossiers"],
))
check("GUI preserves --only instead of silently running every system",
      'id="only" value="faction-dossiers"' in gui_page)
check("GUI preserves limit, temperature, workers and dry-run defaults",
      'id="workers" type="number" min="1" max="8" value="1"' in gui_page
      and 'id="limit" type="number" min="0" value="3"' in gui_page
      and 'id="temperature" type="number" step="0.05" min="0" max="2" value="0.45"' in gui_page
      and 'id="dry" style="width:auto" checked' in gui_page)

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
# Deliberately nonsense: a real-sounding id would eventually be minted by an
# actual run and this assertion would then flip to "generated" and fail for no
# reason. ("magikoopa_council" did exactly that.)
check("a genuinely new group is still created",
      factions.resolve("the_quixotic_brasswind_conclave", known)[1] == "create")
for meta_label in (
    "all_factions", "united_midlands_factions",
    "midlands_faction_reputations", "regional_stability", "general_public",
):
    check(f"aggregate label {meta_label!r} is not minted as lore",
          factions.resolve(meta_label, known) == (None, "reject"),
          str(factions.resolve(meta_label, known)))
check("a real United-named organisation is not caught by the aggregate guard",
      factions.resolve("united_forces_of_fight_or_flight", known)[1]
      in ("exact", "alias", "fuzzy", "create"))
check("explicit institutional labels are protected from event misclassification",
      factions.is_group_label("crematoria_guild")
      and factions.is_group_label("united_kingdom_of_snowdinia"))
check("a singular role is not treated as proof of an organisation",
      not factions.is_group_label("feyward_nameless_guard"))

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

# ------------------------------------------------------ faction dossier pass
section("faction dossiers · sources before prose")

check("faction review participates in the normal all-systems popcorn cycle",
      faction_dossiers.SPEC.stage == 1 and faction_dossiers.SPEC.enabled,
      f"stage={faction_dossiers.SPEC.stage} enabled={faction_dossiers.SPEC.enabled}")
stub_store = faction_dossiers._store()["factions"]
synthetic_stub = {
    "description": "Named in a record. No dossier has been written yet.",
    "status": "generated", "_generated": {"system": "factions"},
}
check("unfinished generated factions are queued",
      faction_dossiers.needs_dossier(synthetic_stub))
check("reviewed tombstones do not re-enter the queue",
      not faction_dossiers.needs_dossier({**synthetic_stub, "status": "removed"}))
wario_bros_stub = stub_store["wario_bros"]
wario_sources = faction_dossiers.source_context("wario_bros", wario_bros_stub)
wario_source_ids = [s["record"].get("id") for s in wario_sources]
check("the named source record is first",
      wario_source_ids[0] == "the_lounge_brawl", str(wario_source_ids))
check("explicitly referenced articles are added to dossier context",
      "the_lounge_incident_and_the_paper_war" in wario_source_ids,
      str(wario_source_ids))

fd_task = Task(
    system_id="faction-dossiers", key="fd", label="fd",
    payload={"id": "wario_bros", "entry": wario_bros_stub, "sources": wario_sources},
)
# Build a 500+ word dossier without relying on model output. The repeated
# phrase is intentionally plain: this is testing the hard length/shape gate,
# not pretending fixture prose is archive prose.
dossier_text = (
    "## Identity and Evidence\nWaluigi records the Wario Bros as a recurring operational partnership. "
    "The file states, ‘The lounge floor cracked,’ and later admits, ‘The debt is unresolved.’ "
    "Its least dignified fixed point is equally plain: ‘Waluigi cried on the floor.’\n\n"
    "## Recorded Conduct\n" + ("The linked record supplies concrete evidence and limits every inference. " * 55)
    + "\n\n## Structure and Reach\n" +
    ("Waluigi distinguishes what happened from what remains unconfirmed in the archive. " * 35)
    + "\n\n## Assessment\nWaluigi recommends caution, receipts, and a structurally sound floor."
)
valid_dossier = faction_dossiers.validate(fd_task, {
    "classification": "faction",
    "name": "The Wario Bros",
    "title": "A Partnership With an Exit Clause",
    "type": "Recurring operational partnership",
    "region": "Known Realms",
    "currentStatus": "Active when profitable",
    "leader": "Collective",
    "headquarters": "Unrecorded",
    "motto": "No recorded motto",
    "category": "Minor Powers",
    "power_level": 2,
    "summary": "Wario and Waluigi sometimes act together. The arrangement is unstable.",
    "description": dossier_text,
    "evidenceQuotes": [
        "The lounge floor cracked", "The debt is unresolved",
        "Waluigi cried on the floor",
    ],
    "relations": {"allies": ["wario_land"], "enemies": ["disaster_inc"]},
    "waluigi_tip": "Keep the receipt and watch the exits.",
})
check("a source-backed 500+ word dossier passes",
      500 <= faction_dossiers.word_count(valid_dossier["description"]) <= 1100,
      str(faction_dossiers.word_count(valid_dossier["description"])))
check("source article ids are stamped from task context, not model invention",
      valid_dossier["sourceArticles"][0] == "the_lounge_brawl",
      str(valid_dossier["sourceArticles"]))
check("validated evidence quotes are retained with the dossier",
      valid_dossier["evidenceQuotes"] == [
          "The lounge floor cracked", "The debt is unresolved",
          "Waluigi cried on the floor",
      ], str(valid_dossier["evidenceQuotes"]))


def _section_fixture(quote: str, subject: str) -> str:
    text = (
        f"Waluigi files the exact line ‘{quote}’ because it fixes {subject} to "
        "a physical moment instead of an attractive theory. "
    )
    sentence = (
        "The record names the room, the action, and its consequence, while the "
        "archive leaves motive and permanent organisation explicitly unconfirmed. "
    )
    while faction_dossiers.word_count(text) < 185:
        text += sentence
    return text


class _SectionClient:
    def __init__(self, replies):
        self.replies = list(replies)
        self.calls = []

    def complete_json(self, system, user, *, temperature=0.7, attempts=3):
        self.calls.append((system, user, temperature))
        return self.replies.pop(0)


assigned_section_quotes = (
    faction_dossiers.faction_dossier_sections._evidence_candidates(fd_task, 4)
)
section_client = _SectionClient([
    {
        "classification": "faction", "name": "The Wario Bros",
        "title": "A Partnership With an Exit Clause",
        "type": "Recurring operational partnership", "region": "Known Realms",
        "currentStatus": "Active when profitable", "leader": "Collective",
        "headquarters": "Unrecorded", "motto": "No recorded motto",
        "category": "Minor Powers", "power_level": 2,
        "summary": "Wario and Waluigi sometimes act together. The arrangement is unstable.",
        "relations": {"allies": ["wario_land"], "enemies": ["disaster_inc"]},
        "waluigi_tip": "Keep the receipt and watch the exits.",
    },
    {"heading": "Identity and Confirmed Standing",
     "text": _section_fixture(assigned_section_quotes[0], "the partnership"),
     "evidenceQuote": assigned_section_quotes[0]},
    {"heading": "Membership and Structure",
     "text": _section_fixture(assigned_section_quotes[1], "the motive"),
     "evidenceQuote": assigned_section_quotes[1]},
    {"heading": "Recorded Operations and Relationships",
     "text": _section_fixture(assigned_section_quotes[2], "the consequence"),
     "evidenceQuote": assigned_section_quotes[2]},
    {"heading": "Risks and Waluigi Assessment",
     "text": _section_fixture(assigned_section_quotes[3], "the outcome"),
     "evidenceQuote": assigned_section_quotes[3]},
])
section_progress = []
section_task = Task(
    system_id="faction-dossiers", key="section-fd", label="section-fd",
    payload={"id": "wario_bros", "entry": wario_bros_stub,
             "sources": wario_sources, "model": "test-model",
             "_progress": section_progress.append},
)
assembled = faction_dossiers.SPEC.generate(section_task, section_client, 0.7)
assembled_clean = faction_dossiers.validate(section_task, assembled)
check("long dossiers are assembled from one metadata call and four section calls",
      len(section_client.calls) == 5
      and 500 <= faction_dossiers.word_count(assembled_clean["description"]) <= 1100,
      f"calls={len(section_client.calls)} words={faction_dossiers.word_count(assembled_clean['description'])}")
check("each bounded call contributes one independently verified section",
      len(faction_dossiers.HEADING.findall(assembled_clean["description"])) == 4
      and len(assembled_clean["evidenceQuotes"]) == 3)
check("multi-call progress is visible to GUI users before the dossier finishes",
      any("classification" in line for line in section_progress)
      and sum(line.startswith("section ") for line in section_progress) == 4
      and "assembling" in section_progress[-1], str(section_progress))
check("each accepted section is checkpointed for a later GUI run",
      faction_dossier_sections._draft_path(section_task).exists())
resume_progress = []
resume_task = Task(
    system_id="faction-dossiers", key="section-fd-resume", label="section-fd-resume",
    payload={"id": "wario_bros", "entry": wario_bros_stub,
             "sources": wario_sources, "model": "test-model",
             "_progress": resume_progress.append},
)
resume_client = _SectionClient([])
resumed = faction_dossiers.SPEC.generate(resume_task, resume_client, 0.7)
check("a restarted GUI run resumes all completed sections without another model call",
      not resume_client.calls
      and faction_dossiers.validate(resume_task, resumed)["description"]
          == assembled_clean["description"],
      str(resume_progress))
faction_dossier_sections.clear_draft(resume_task)

meta_client = _SectionClient([])
meta_stub = stub_store["united_midlands_factions"]
meta_task = Task(
    system_id="faction-dossiers", key="meta-fd", label="meta-fd",
    payload={"id": "united_midlands_factions", "entry": meta_stub,
             "sources": faction_dossiers.source_context("united_midlands_factions", meta_stub)},
)
meta_verdict = faction_dossiers.SPEC.generate(meta_task, meta_client, 0.7)
check("known aggregate labels are removed without wasting section calls",
      meta_verdict["classification"] == "not_faction" and not meta_client.calls,
      str(meta_verdict))
try:
    faction_dossiers.validate(fd_task, {
        "classification": "not_faction", "notFactionKind": "other",
        "reason": "The source names only an event and therefore this recurring partnership should be removed from the faction registry.",
        "redirectFactionId": "",
    })
    check("an explicit organisation cannot be collapsed into its source event", False, "it passed")
except ValidationError as err:
    check("an explicit organisation cannot be collapsed into its source event",
          "persistent organisation" in str(err), str(err))

invented_evidence = dict({
    "classification": "faction", "name": "The Wario Bros", "power_level": 2,
    "description": dossier_text, "evidenceQuotes": [
        "The lounge floor cracked", "The debt is unresolved",
        "A brass submarine crossed the ballroom",
    ],
})
try:
    faction_dossiers.validate(fd_task, invented_evidence)
    check("invented evidence cannot pass a long dossier", False, "it passed")
except ValidationError as err:
    check("invented evidence cannot pass a long dossier",
          "not verbatim" in str(err), str(err))

apply_stub = factions.mint(
    "test_source_backed_order", name="Test Source-Backed Order",
    source_record="The Lounge Brawl", model="test",
)
apply_task = Task(
    system_id="faction-dossiers", key="apply-fd", label="apply-fd",
    payload={"id": "test_source_backed_order", "entry": apply_stub,
             "sources": wario_sources, "model": "test-model"},
)
applied = faction_dossiers.apply(apply_task, valid_dossier)
applied_entry = faction_dossiers._store()["factions"]["test_source_backed_order"]
check("an accepted dossier replaces the stub atomically",
      applied.ok and applied_entry["description"] == dossier_text,
      applied.detail)
check("the written dossier keeps generated provenance and exact sources",
      applied_entry["status"] == "generated"
      and applied_entry["_generatedDossier"]["model"] == "test-model"
      and applied_entry["keyEvents"][0] == "the_lounge_brawl",
      str(applied_entry.get("_generatedDossier")))

short_reply = dict(valid_dossier)
short_reply["classification"] = "faction"
short_reply["description"] = "## One\nWaluigi saw it.\n## Two\nToo little.\n## Three\nStill too little."
try:
    faction_dossiers.validate(fd_task, short_reply)
    check("a placeholder-sized dossier is rejected", False, "it passed")
except ValidationError as err:
    check("a placeholder-sized dossier is rejected", "at least 500" in str(err), str(err))

person_task = Task(
    system_id="faction-dossiers", key="person", label="person",
    payload={"id": "wario", "entry": stub_store["wario"],
             "sources": faction_dossiers.source_context("wario", stub_store["wario"])},
)
try:
    faction_dossiers.validate(person_task, {
        **valid_dossier, "classification": "faction", "description": dossier_text,
    })
    check("a rostered person cannot be padded into a faction", False, "it passed")
except ValidationError as err:
    check("a rostered person cannot be padded into a faction",
          "one person" in str(err), str(err))

retired = faction_dossiers.validate(person_task, {
    "classification": "not_faction", "notFactionKind": "person",
    "reason": "The source names Wario as one participant, not an institution with a collective standing or persistent membership.",
    "redirectFactionId": "wario_land",
})
check("a misfile can redirect to a canonical faction",
      retired["redirectFactionId"] == "wario_land", str(retired))

remove_stub = factions.mint(
    "test_aggregate_label", name="Test Aggregate Label",
    source_record="The Lounge Brawl", model="test",
)
remove_task = Task(
    system_id="faction-dossiers", key="remove-fd", label="remove-fd",
    payload={"id": "test_aggregate_label", "entry": remove_stub,
             "sources": wario_sources, "model": "test-model"},
)
saved_reputation_files = faction_dossiers.REPUTATION_FILES
faction_dossiers.REPUTATION_FILES = ()
try:
    removed_result = faction_dossiers.apply(remove_task, {
        "classification": "not_faction", "notFactionKind": "generic",
        "reason": "The source uses this as an aggregate report label, not a persistent organisation with members or collective standing.",
        "redirectFactionId": "",
    })
finally:
    faction_dossiers.REPUTATION_FILES = saved_reputation_files
removed_entry = faction_dossiers._store()["factions"]["test_aggregate_label"]
check("a non-faction becomes a minimal tombstone, not a retirement paragraph",
      removed_result.ok
      and removed_entry["status"] == "removed"
      and "description" not in removed_entry,
      str(removed_entry))
check("reviewed tombstones are excluded from live ids and cannot be minted again",
      "test_aggregate_label" not in factions.generated_ids()
      and "test_aggregate_label" in factions.removed_ids()
      and factions.resolve("test_aggregate_label", known) == (None, "reject"))

rewrite_fixture = {
    "reputationChanges": {"waluigi": {"wario": -4, "wario_land": -2}},
    "effects": {"wario": 3},
    "belligerents": {"attackers": {"factionId": "wario"}},
}
rewrites = faction_dossiers._rewrite_node(rewrite_fixture, "wario", "wario_land")
check("retirement repairs reputation and explicit factionId keys",
      rewrites == 3
      and rewrite_fixture["reputationChanges"]["waluigi"]["wario_land"] == -4
      and rewrite_fixture["effects"]["wario_land"] == 3
      and rewrite_fixture["belligerents"]["attackers"]["factionId"] == "wario_land",
      str(rewrite_fixture))

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
          (wahwire._claim_author("captain_toadette"), wahwire._claim_author("hjumpik"),
           wahwire._claim_author("markop"),
           "waluigi" not in wahwire.recent_authors())[-1],
          str(wahwire.recent_authors()))
finally:
    wahwire._load = saved_load
    wahwire._INFLIGHT_AUTHORS.clear()

# ------------------------------------------------------- discussion pass
section("wahwire · threading existing posts")

check("WAHwire threading is re-enabled behind evidence gates",
      wahwire.DISCUSS_SPEC.enabled is True)
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
        {"author": "captain_toadette", "content": "Then read out the name on it.",
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

registry = all_systems()
missing = [s.id for s in registry if s.repair is None]
check("every registered system has a repair hook", not missing, ", ".join(missing))
enabled_ids = {system.id for system in registry if system.enabled}
check("normal all-systems runs include faction dossiers",
      "faction-dossiers" in enabled_ids)
check("quality-gated generators participate in normal runs",
      {"shop_items", "wahwire-author", "wahwire-discuss", "bros_attacks"}
      <= enabled_ids)

# --- shop items: a duplicate name goes BACK TO THE MODEL, it is not renamed
# in code. Appending "Mark II" in the repair hook is what shipped 412 suffixed
# items and stacked suffixes like "Mark XI Mark II"; worse, it hid the
# collision from the model, so it never stopped proposing the same prefix.
shop_task = Task(system_id="shop_items", key="k", label="shop item · common",
                 payload={"rarity": "common"})
saved_generated = shop_items._generated
dupe = "Chrono Snail"
shop_items._generated = lambda: {"wz_gen_common_0001": {"name": dupe}}
try:
    check("a duplicate item name is NOT renamed in code",
          shop_items.repair(shop_task, {"name": dupe},
                            f"duplicate item name {dupe!r}") is None)

    # The name gates themselves: suffixes are stripped before comparison, so a
    # "Mark IV" variant collides with its own root instead of sneaking past.
    check("a series suffix is stripped down to the root name",
          shop_items._name_root("Zoofy Zeep Zzstorm Mark IV")
          == shop_items._name_root("Zoofy Zeep Zzstorm"))
    check("stacked suffixes strip all the way down",
          shop_items._name_root("Zzbubble Mark XI Mark II") == "zzbubble")
    check("a family is the first two meaningful words",
          shop_items._name_family("Eternity's Chronal Annihilator")
          == "eternity chronal")

    # A saturated family is refused with an instruction, not accepted.
    crowded = {f"i{n}": {"name": f"Zoofy Zeep Thing {n}"} for n in range(200)}
    shop_items._generated = lambda: crowded
    try:
        shop_items.validate(shop_task, {"name": "Zoofy Zeep Another"})
        check("an over-used name family is rejected", False, "it passed")
    except ValidationError as err:
        check("an over-used name family is rejected", True)
        check("the rejection tells the model the prefix is full",
              "full" in str(err).lower() or "reject" in str(err).lower(), str(err))
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

# ------------------------------------------------- bros attacks · paired techniques
section("bros attacks · a technique must belong to the record it came from")

_EVENT = {
    "id": "test_event_bridge",
    "name": "The Bridge at Low Water",
    "description": "Mossy braced under the span while Green T went over the top "
                   "and cut the mooring line before the barge could swing.",
    "participants": [
        {"id": "mossy", "name": "Mossy", "role": "Heavy Breacher"},
        {"id": "green_t", "name": "Green T", "role": "Forensics"},
    ],
}
bros_task = Task(system_id="bros_attacks", key="bros:test_event_bridge",
                 label="bros attack", payload={"event": _EVENT,
                                                "eligiblePairs": [("green_t", "mossy")]})


def _reply(**over):
    body = {
        "name": "Low Water Bros Attack",
        "subtitle": "Mossy braces, Green T cuts",
        "partnerA": "mossy",
        "partnerB": "green_t",
        "type": "Lift and cut",
        "school": "clearing",
        "difficulty": "medium",
        "evidenceQuote": "Mossy braced under the span while Green T went over the top and cut the mooring line",
        "description": "Mossy sets a braced shoulder under the span and holds it "
                       "steady while Green T climbs over the top. The cut lands on "
                       "the mooring line at the moment the barge stops swinging. "
                       "It works because neither of them counts out loud.",
        "steps": ["Mossy braces", "Green T climbs", "The cut lands", "Both disengage"],
        "risks": "If the brace slips early the cutter falls with the line.",
        "waluigiNote": "WAH! Two people doing one person's job and calling it "
                       "a technique. Wonderful. Put it on a plaque.",
        "drill": {
            "promptDescription": "Hold the brace, then time the cut.",
            "steps": [
                {"actor": "A", "title": "Set the brace", "gesture": "down",
                 "instruction": "Hold until the meter settles into the green zone.",
                 "icon": "\U0001f9be"},
                {"actor": "A", "title": "Hold the span", "gesture": "tap",
                 "instruction": "Tap on the beat to keep the footing steady.",
                 "icon": "\U0001faa8"},
                {"actor": "B", "title": "Climb over", "gesture": "up",
                 "instruction": "Push up as soon as the brace locks in place.",
                 "icon": "\U0001f9d7"},
                {"actor": "B", "title": "Cut the line", "gesture": "aim",
                 "instruction": "Aim into the shrinking window and release.",
                 "icon": "\u2702\ufe0f"},
            ],
        },
    }
    body.update(over)
    return body


out = bros_attacks.validate(bros_task, _reply())
check("evidence-gated Bros generation is enabled", bros_attacks.SPEC.enabled is True)
check("a well-formed technique validates", out["name"] == "Low Water Bros Attack")
check("the exact coordination excerpt is retained", out["evidenceQuote"] == _reply()["evidenceQuote"])
check("the source event comes from the task, not the reply",
      out["sourceEvent"] == "test_event_bridge")
check("generated bros attacks are written as confirmed canon",
      out["status"] == "confirmed", out["status"])
check("participants are stored as ids", out["participants"] == ["mossy", "green_t"])
check("the drill names both partners by display name",
      out["drill"]["partnerA"] == "Mossy" and out["drill"]["partnerB"] == "Green T")
check("no per-attack difficulty numbers are invented — Foundry scales them",
      out["resource"]["cost"] == 1 and out["difficulty"] == "medium")

for bad, why in (
    ({"partnerB": "bowser"}, "a character who was not at the event is rejected"),
    ({"partnerB": "mossy"}, "a technique cannot be performed by one person twice"),
    ({"description": "They did a thing."}, "a one-line description is rejected"),
    ({"risks": ""}, "a technique with no failure mode is rejected"),
    ({"waluigiNote": "wah"}, "a stub waluigi note is rejected"),
    ({"evidenceQuote": "They coordinated somehow outside the written record"},
     "an invented coordination quote is rejected"),
):
    try:
        bros_attacks.validate(bros_task, _reply(**bad))
        check(why, False, "it passed")
    except ValidationError:
        check(why, True)

# gestures the Foundry drill cannot score must not reach the module
crooked = _reply()
crooked["drill"]["steps"][0]["gesture"] = "spin"
try:
    bros_attacks.validate(bros_task, crooked)
    check("a gesture bros-attacks.js cannot score is rejected", False, "it passed")
except ValidationError:
    check("a gesture bros-attacks.js cannot score is rejected", True)

solo = _reply()
for _s in solo["drill"]["steps"]:
    _s["actor"] = "A"
try:
    bros_attacks.validate(bros_task, solo)
    check("a drill that leaves one partner idle is rejected", False, "it passed")
except ValidationError:
    check("a drill that leaves one partner idle is rejected", True)

# an unknown school is a proposal, not an error — but it has to be argued for
try:
    bros_attacks.validate(bros_task, _reply(school="bridgework"))
    check("a new school with no reason is rejected", False, "it passed")
except ValidationError:
    check("a new school with no reason is rejected", True)

minted = bros_attacks.validate(bros_task, _reply(
    school="bridgework",
    schoolReason="Techniques performed on unstable spans where one partner is the structure."))
check("a new school can be minted when it is justified",
      minted["school"] == "bridgework" and minted["_newSchool"] is not None)
check("the minted school carries the reason as its summary",
      "unstable spans" in minted["_newSchool"]["summary"])

# --- repair
saved_attacks = bros_attacks._attacks
bros_attacks._attacks = lambda: [{"name": "Low Water Bros Attack"}]
try:
    fixed = bros_attacks.repair(bros_task, _reply(),
                                "duplicate attack name 'Low Water Bros Attack'")
    check("a duplicate technique name is disambiguated rather than dropped",
          fixed is not None and fixed["name"] != "Low Water Bros Attack", str(fixed and fixed["name"]))
    check("the disambiguated name keeps the model's own title in front",
          fixed is not None and fixed["name"].startswith("Low Water Bros Attack"))
    revalidated = bros_attacks.validate(bros_task, fixed)
    check("the repaired technique passes validation on the second look",
          revalidated["name"] == fixed["name"])
finally:
    bros_attacks._attacks = saved_attacks

named = bros_attacks.repair(
    bros_task, _reply(partnerA="Mossy", partnerB="Green T"),
    "partners must come from the event's participants ['green_t', 'mossy']")
check("a partner given by display name is resolved to an id, not rejected",
      named is not None and named["partnerA"] == "mossy" and named["partnerB"] == "green_t",
      str(named and (named["partnerA"], named["partnerB"])))

check("a thin description is not padded out in code",
      bros_attacks.repair(bros_task, _reply(description="Short."),
                          "description is too thin") is None)
check("an outsider is not silently swapped for somebody who was there",
      bros_attacks.repair(
          bros_task, _reply(partnerB="bowser"),
          "partners must come from the event's participants ['green_t', 'mossy']") is None)

# --- task construction reads real events
tasks = bros_attacks.next_tasks(3)
check("tasks are built from events with two or more participants", len(tasks) == 3, str(len(tasks)))
check("each task carries the whole event record for the prompt",
      all(len(t.payload["event"]["participants"]) >= 2 for t in tasks))
_covered = bros_attacks._covered_events()
check("events that already have a technique are not offered again",
      all(t.payload["event"]["id"] not in _covered for t in tasks))
sys_prompt, user_prompt = bros_attacks.build_prompt(tasks[0])
check("the prompt lists only the participants the record names",
      all(p["id"] in user_prompt for p in tasks[0].payload["event"]["participants"][:2]))
check("the prompt offers the existing schools", "clearing" in user_prompt)

# ---------------------------------------------- wahwire · feed share cap
section("wahwire · no account may dominate the feed")

# The cooldown alone permits a 25% share (one post in every four), which is
# how one voice legally reached 77% of a 94-post feed. The share cap is the
# second constraint; these fix the ceiling so it cannot regress.
saved_load = wahwire._load


def _feed(counts):
    """A store where each author has the given number of posts."""
    posts, order = [], 0
    for author, n in counts.items():
        for _ in range(n):
            order += 1
            posts.append({"id": f"p{order}", "author": author, "order": order})
    return lambda: {"posts": posts}


try:
    # 30 posts, one author holding 15 (50%); the rest sit under the 18% cap
    # (5 of 30 is 16.7%), so only the dominant account should be flagged.
    wahwire._load = _feed({"waluigi": 15, "bowser": 5, "luigi": 5, "mario": 5})
    check("an over-represented account is reported over quota",
          "waluigi" in wahwire.over_quota())
    check("accounts inside their share are not flagged",
          "bowser" not in wahwire.over_quota() and "luigi" not in wahwire.over_quota())
    check("the share figure is the real fraction of the feed",
          abs(wahwire.author_shares()["waluigi"] - 0.5) < 0.01)

    a_task = Task(system_id="wahwire-author", key="k", label="post",
                  payload={"record": {"id": "r", "name": "R"}})
    try:
        wahwire._author_validate(a_task, {
            "author": "waluigi",
            "content": "A post long enough to clear the length floor without any "
                       "trouble at all, said plainly.",
        })
        check("a post from an over-quota account is rejected", False, "it passed")
    except ValidationError as exc:
        check("a post from an over-quota account is rejected", True)
        check("the rejection names the cap so the retry can act on it",
              "%" in str(exc), str(exc))

    # The cap must not fire on a small feed, where one post is a large share.
    wahwire._load = _feed({"waluigi": 3, "bowser": 1})
    check("the cap stays off below the noise floor", not wahwire.over_quota())

    # Repair should move an over-quota post rather than lose it.
    wahwire._load = _feed({"waluigi": 15, "bowser": 5, "luigi": 5, "mario": 5})
    fixed = wahwire._author_repair(
        a_task,
        {"author": "waluigi", "content": "A finished post that only has the "
                                         "wrong name attached to it."},
        "waluigi already writes 50% of the feed (cap is 18%)")
    check("an over-quota post is reassigned, not discarded", fixed is not None)
    check("the reassignment does not pick another over-quota account",
          fixed is not None and fixed["author"] not in wahwire.over_quota())
    check("the post's text survives reassignment untouched",
          fixed is not None and "finished post" in fixed["content"])
finally:
    wahwire._load = saved_load

# Every account the generator can choose must be renderable and characterised;
# an account with no voice note is one the model will not pick, which is how
# the roster silently narrowed to one loud voice in the first place.
check("every author has a voice note",
      not [a for a in wahwire.KNOWN_AUTHORS if a not in wahwire.ROLE_NOTES],
      str([a for a in wahwire.KNOWN_AUTHORS if a not in wahwire.ROLE_NOTES]))

_page_js = (Path(__file__).resolve().parents[1]
            / "app" / "pages" / "wahwire" / "wahwire.js").read_text(encoding="utf-8")
_index = (Path(__file__).resolve().parents[2] / "index.html").read_text(encoding="utf-8")
_unrendered = [a for a in wahwire.KNOWN_AUTHORS if f"\n  {a}:" not in _page_js]
check("every author is renderable on the feed page", not _unrendered, str(_unrendered))
_unpanelled = [a for a in wahwire.KNOWN_AUTHORS if f"\n  {a}:" not in _index]
check("every author is renderable in the article panel", not _unpanelled,
      str(_unpanelled))

check("the roster is wide enough that the cap is satisfiable",
      len(wahwire.KNOWN_AUTHORS) * wahwire.AUTHOR_MAX_SHARE >= 1.0,
      f"{len(wahwire.KNOWN_AUTHORS)} accounts x {wahwire.AUTHOR_MAX_SHARE}")

# ------------------------------------------------------- writing quality
section("wahwire · voice, substance and rewording")

# Third person. The reason 94 posts were deleted: a note meant only for
# Waluigi's bit leaked into the shared role notes and put every character
# into the third person about themselves.
for _author, _text, _should_fail in [
    ("bowser", "Bowser does not negotiate with fools like these.", True),
    ("bowser", "They thought they could challenge ME. Wrong.", False),
    ("peach", "Peach is deeply concerned by the news from the north.", True),
    ("peach", "I am deeply concerned by the news from the north.", False),
    # Waluigi's bit IS the third person, so he is exempt on purpose.
    ("waluigi", "WALUIGI DOES NOT LOSE. WALUIGI IS SIMPLY EARLY.", False),
]:
    _failed = False
    try:
        wahwire._check_third_person(_author, _text)
    except ValidationError:
        _failed = True
    check(f"{'rejects' if _should_fail else 'allows'} {_author}: {_text[:34]!r}",
          _failed == _should_fail)

# Substance. A reply that only agrees, or only restates the post, is noise.
_source = "The siege of Ironwood ended at dawn when the supply lines collapsed."
for _text, _should_fail in [
    ("Agreed.", True),
    ("This.", True),
    ("So true, well said.", True),
    ("The siege of Ironwood ended at dawn because supply lines collapsed.", True),
    ("Three grain carts never reached the north road. Ask who was paid.", False),
    ("I lost two cousins on that ridge. Dawn means nothing to me.", False),
]:
    _failed = False
    try:
        wahwire._check_substance(_text, _source)
    except ValidationError:
        _failed = True
    check(f"{'rejects' if _should_fail else 'allows'} {_text[:38]!r}",
          _failed == _should_fail)

# Rewording. Exact-match dedup passed all of these; that is why whole threads
# read as one sentence said four ways.
for _a, _b in [
    ("Something weird happened at the tower last night.",
     "Something strange occurred at the tower yesterday evening."),
    ("The siege is over, their supply lines failed.",
     "The siege has ended because their supply lines collapsed."),
    ("I am scared of what comes next.",
     "I am frightened about what happens next."),
    ("A big battle was lost near the forest.",
     "A massive fight was lost by the forest."),
    # Real pair from the deleted batch: different openings, same closing move.
    ("Oh ReMi... poor thing got scared silly! Hope she's okay. Still, what did"
     " YOU buy for YOURSELF today, Waluigi?",
     "ReMi should've known better than to go into a haunted gallery! But she"
     " had fun, right? What did YOU get today, Waluigi?"),
]:
    check(f"catches rewording: {_a[:40]!r}", bool(wahwire._too_similar(_a, [_b])))

# Guard the other direction. A false positive throws away good writing and
# sends the task back to the pool, so distinct replies must survive.
for _a, _b in [
    ("The siege is over and the Onyx Hand has fallen.",
     "Supply lines were the bottleneck; their strategy held until logistics did not."),
    ("I was there when the gate came down.",
     "Three carts of grain never reached the north road."),
    ("My rent is due and nobody is talking about that.",
     "The Empire calls it order. I call it a curfew."),
    # Both from one real thread, both about Koffin-K, genuinely different.
    ("That's a pile of nonsense. Koffin-K's vision is the only thing keeping"
     " this disaster from being worse.",
     "Koffin-K's grandstanding is what got us into this mess to begin with."),
]:
    check(f"keeps distinct reply: {_a[:40]!r}", not wahwire._too_similar(_a, [_b]))


print(f"\n{PASS} passed, {FAIL} failed")
sys.exit(1 if FAIL else 0)
