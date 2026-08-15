"""Faction resolution — merge a near-miss, or create the faction.

The reputation backfill kept throwing away finished work because the model
named a faction the archive has never heard of:

    rejected: nothing scoreable — no such faction: koopa_resistance, primordial_wyrm

Rejecting there is the wrong call. The model had already read the record and
decided who gained and lost standing; the only problem was the label. Three
different situations were being collapsed into one refusal:

  1. **A spelling or wording variant of a faction that exists.** `koopa_troop`
     written as `koopa_resistance`, `dk_crew` as `krew`. Nothing is missing —
     the delta just needs redirecting to the canonical id.

  2. **A real group in the story that has no dossier yet.** The archive has 100
     factions but the campaign has more. `primordial_wyrm` is a thing that
     happened; there is simply no entry for it.

  3. **Genuine noise.** A one-off phrase the model produced that names no group
     at all.

So this module resolves rather than refuses. Case 1 merges via an alias table.
Case 2 mints a real faction record. Case 3 is still dropped, because inventing
a dossier for noise would pollute the matrix — the thing the closed list was
protecting against in the first place.

Where new factions are written
------------------------------
NOT into `index.html`. `LORE_FACTIONS` there is a single 251 KB line, and
rewriting it on every generated faction is both slow and an excellent way to
corrupt the site's largest source file from a background thread. New factions
go to `data/factionsGenerated.json`, which the page merges into LORE_FACTIONS
at load. Hand-written entries always win a key collision.
"""

from __future__ import annotations

import difflib
import json
import re
import threading
from typing import Any

from ..settings import ROOT
from ..storage import atomic_write_json, read_json

GENERATED = ROOT / "data" / "factionsGenerated.json"

_WRITE_LOCK = threading.Lock()
_CACHE: dict[str, Any] | None = None

# Hand-curated redirects for ids the model has actually produced. These are
# judgement calls about the setting, so they are written down rather than left
# to string similarity, which would never connect "krew" to "dk_crew".
ALIASES = {
    "koopa_resistance": "koopa_troop",
    "koopa_kingdom": "koopa_troop",
    "koopa_army": "koopa_troop",
    "krew": "dk_crew",
    "dk_krew": "dk_crew",
    "kongs": "dk_crew",
    "mushroom_kingdom": "mushroom_regency",
    "toadstool_kingdom": "mushroom_regency",
    "princess_peach_loyalists": "peach_loyalists",
    "the_empire": "regal_empire",
    "imperials": "regal_empire",
    "legion": "iron_legion",
    "the_legion": "iron_legion",
    "vampires": "onyx_hand",
    "vampire_court": "onyx_hand",
    "onyx_hand_vampires": "onyx_hand",
    "mages": "mages_guild",
    "the_guild": "mages_guild",
    "wolves": "moonfang_pack",
    "werewolves": "moonfang_pack",
    "toads": "liberated_toads",
    "toad_resistance": "liberated_toads",
    "disaster_incorporated": "disaster_inc",
    "the_party": "disaster_inc",
    "party": "disaster_inc",
    "warios_enterprise": "wario_land",
    "wario_enterprise": "wario_land",
}

# Words that mean "these are not a faction" — a location, an object, a person,
# or a generic noun. Used to reject case 3 without a round trip.
_NOT_A_GROUP = re.compile(
    r"^(the_)?("
    r"unknown|none|n_?a|various|civilians?|everyone|nobody|public|"
    r"bystanders?|locals?|survivors?|witnesses?|world|realm|region|"
    r"party_members?|players?|dm|gm|"
    # Placeholder answers. Creating a faction is the right default, but these
    # are the model declining to answer, not naming a new group.
    r"nope|nil|null|none_of_the_above|no_one|no_change|neutral|other|"
    r"tbd|todo|example|placeholder|test|foo|bar|baz|string|value|faction|"
    r"faction_id|group|groups|all|any|misc|unaffiliated"
    r")$"
)


def _load() -> dict[str, Any]:
    global _CACHE
    if _CACHE is None:
        _CACHE = read_json(GENERATED, default=None) or {
            "version": 1,
            "note": (
                "Factions minted by tools/genkit when a generated record named a "
                "group the archive had no dossier for. Merged into LORE_FACTIONS "
                "at load; hand-written entries win any key collision."
            ),
            "factions": {},
        }
    return _CACHE


def generated_ids() -> set[str]:
    return set(_load().get("factions", {}))


def slugify(name: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "_", str(name).strip().lower()).strip("_")
    return slug[:48]


def resolve(
    proposed: str,
    known: set[str],
    *,
    record_text: str = "",
) -> tuple[str | None, str]:
    """Map a proposed faction id onto a real one.

    Returns `(faction_id, how)` where `how` is one of `exact`, `alias`,
    `fuzzy`, `create` or `reject`. A `create` result means the caller should
    mint the faction; `reject` means the label named no group at all.

    Fuzzy matching is deliberately strict (0.86). At 0.6 it happily proposed
    `flower_kingdom` for `mushroom_kingdom` — two different realms — which
    would have quietly filed deltas against the wrong faction. A wrong merge is
    worse than a new entry, because it is invisible.
    """
    slug = slugify(proposed)
    if not slug or len(slug) < 3:
        return None, "reject"
    if _NOT_A_GROUP.match(slug):
        return None, "reject"

    if slug in known:
        return slug, "exact"

    target = ALIASES.get(slug)
    if target and target in known:
        return target, "alias"

    close = difflib.get_close_matches(slug, sorted(known), n=1, cutoff=0.86)
    if close:
        return close[0], "fuzzy"

    already = generated_ids()
    if slug in already:
        return slug, "exact"

    return slug, "create"


def mint(
    faction_id: str,
    *,
    name: str = "",
    description: str = "",
    region: str = "",
    category: str = "",
    relations: dict[str, list[str]] | None = None,
    source_record: str = "",
    model: str = "",
) -> dict[str, Any]:
    """Write a new faction, or return the existing one if already minted.

    The shape matches what LORE_FACTIONS consumers read: `name`, `description`,
    `relations.allies`, `relations.enemies`, `power_level`, `category`,
    `region`. Anything absent is filled with something honest rather than
    invented — an empty dossier is a visible to-do, a fabricated one is not.
    """
    from datetime import datetime, timezone

    with _WRITE_LOCK:
        store = _load()
        factions = store.setdefault("factions", {})
        if faction_id in factions:
            return factions[faction_id]

        pretty = name.strip() or faction_id.replace("_", " ").title()
        rel = relations or {}
        allies = [a for a in rel.get("allies", []) if isinstance(a, str)][:8]
        enemies = [e for e in rel.get("enemies", []) if isinstance(e, str)][:8]

        entry = {
            "name": pretty,
            "description": (
                description.strip()
                or f"Named in the record “{source_record}”. No dossier has been "
                   f"written yet — this entry exists so reputation against them "
                   f"can be recorded rather than discarded."
            ),
            "region": region.strip() or "Unrecorded",
            "category": category.strip() or "Minor Powers",
            # Deliberately low: an auto-minted group has not earned a rating,
            # and a wrong high number would distort power-projection views.
            "power_level": 1,
            "relations": {"allies": allies, "enemies": enemies},
            "status": "generated",
            "_generated": {
                "by": "tools/genkit",
                "system": "factions",
                "model": model,
                "at": datetime.now(timezone.utc).isoformat(),
                "sourceRecord": source_record,
            },
        }
        factions[faction_id] = entry
        atomic_write_json(GENERATED, store)
        return entry
