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

# Aggregate report labels produced by the reputation model are not
# organisations. These used to become faction stubs such as "All Factions",
# "United Midlands Factions" and "Midlands Faction Reputations", after which a
# second model was asked to write lore around the mistake. Reject the shape at
# its source instead. This deliberately does NOT match real names such as
# `united_kingdom_of_snowdinia` or `united_forces_of_fight_or_flight`.
_META_LABEL = re.compile(
    r"^(?:"
    r"(?:all|united)(?:_[a-z0-9]+)*_factions?|"
    r"[a-z0-9_]+_faction_reputations?|"
    r"general_public|regional_stability|global|general|disaster_inc_allies"
    r")$"
)


CHARACTERS = ROOT / "data" / "characters.json"
# The larger cast lives in a JS module keyed by id, not in the JSON roster.
# `diddy_kong`, `lanky_kong` and `chunky_kong` are only here — which is exactly
# why they were the ids that got minted as factions.
CHARACTERS_JS = ROOT / "data" / "characters" / "characters-1.js"

_CHARACTER_KEY = re.compile(r"^\s{4}([A-Za-z0-9_]+)\s*:\s*\{", re.M)
_CHARACTER_NAME = re.compile(r"""^\s{8}name\s*:\s*["']([^"']+)["']""", re.M)

_PEOPLE: set[str] | None = None


def people_ids() -> set[str]:
    """Every id and name in the character rosters, slugified.

    A faction resolver that does not know who the *people* are will mint them
    as organisations. `diddy_kong` and `wario` are not near-misses for any
    faction, and they are not noise either, so `resolve()` concluded "new
    group" and wrote each of them a dossier — turning two of the campaign's
    cast into institutions in the reputation matrix.

    No regex can catch this: a person's id looks exactly like a faction's. The
    only reliable signal is the roster itself, so read both of them — the flat
    JSON list and the keyed JS module, which do not hold the same people.
    """
    global _PEOPLE
    if _PEOPLE is None:
        people: set[str] = set()

        roster = read_json(CHARACTERS, default=None) or []
        if isinstance(roster, dict):
            roster = roster.get("characters", []) or []
        for entry in roster:
            if not isinstance(entry, dict):
                continue
            for field in ("id", "name"):
                slug = slugify(entry.get(field) or "")
                if len(slug) >= 3:
                    people.add(slug)

        # Parsed rather than imported: this is a browser ES module, and a
        # generator pass should not need a JS runtime to know who Diddy Kong
        # is. The shape is stable and machine-written, so a keyed-line match
        # is sufficient and fails closed (an unreadable file simply means
        # fewer names, never a wrong one).
        try:
            source = CHARACTERS_JS.read_text(encoding="utf-8")
        except OSError:
            source = ""
        for match in _CHARACTER_KEY.findall(source):
            slug = slugify(match)
            if len(slug) >= 3:
                people.add(slug)
        for match in _CHARACTER_NAME.findall(source):
            slug = slugify(match)
            if len(slug) >= 3:
                people.add(slug)

        _PEOPLE = people
    return _PEOPLE


# Nouns that turn a person's name into an organisation's. `wario` is a man,
# `wario_land` is his company; `bowser` is a king, `bowser_legion` is his army.
# Any slug carrying one of these is a group even when a cast member's name is
# sitting inside it.
_GROUP_NOUN = re.compile(
    r"(?:^|_)("
    r"land|legion|crew|krew|council|guild|army|clan|troop|troops|corps|"
    r"company|co|inc|enterprise|enterprises|syndicate|cartel|gang|band|"
    r"order|circle|court|house|family|dynasty|regime|faction|force|forces|"
    r"squad|team|union|league|alliance|coalition|front|party|cult|church|"
    r"school|academy|bureau|agency|network|collective|resistance|militia|"
    r"brigade|fleet|navy|guard|watch|brotherhood|sisterhood|kingdom|empire|"
    r"republic|state|senate|assembly|ministry|division|society|group|"
    r"followers|loyalists|supporters|fans|media"
    r")(?:$|_)"
)

# A narrower subset safe enough to PROTECT from a model's `not_faction`
# verdict. `_GROUP_NOUN` also includes singular role/location words such as
# `guard` and `land` because they keep `is_person()` from confusing Wario Land
# with Wario. Those are not proof of an organisation: the hour run would have
# forced one nameless Feyward guard into factionhood. This list requires an
# explicit institutional or collective form.
_ORGANIZATION_NOUN = re.compile(
    r"(?:^|_)("
    r"legion|crew|krew|council|guild|army|clan|troop|troops|corps|company|"
    r"inc|enterprise|enterprises|syndicate|cartel|gang|band|order|circle|"
    r"court|house|family|dynasty|regime|faction|force|forces|squad|team|"
    r"union|league|alliance|coalition|front|party|cult|church|school|academy|"
    r"bureau|agency|network|collective|resistance|militia|brigade|fleet|navy|"
    r"watch|brotherhood|sisterhood|kingdom|empire|republic|state|senate|"
    r"assembly|ministry|division|society|group|followers|loyalists|supporters|"
    r"fans|media"
    r")(?:$|_)"
)

# Honorifics and generational suffixes the models attach to a name. Stripping
# them lets `chunky_kong_the_third` be recognised as Chunky Kong rather than as
# a brand-new organisation called the Chunky Kong The Third.
_TITLE_AFFIX = re.compile(
    r"(?:^(?:the|lord|lady|king|queen|prince|princess|sir|dame|captain|"
    r"general|colonel|major|sergeant|chief|chancellor|master|doctor|dr|"
    r"professor|elder|high|grand)_)|"
    r"(?:_(?:the_(?:first|second|third|fourth|fifth|elder|younger|great)|"
    r"jr|sr|i|ii|iii|iv|v)$)"
)


def is_meta_label(proposed: str) -> bool:
    """True for a report bucket that must never become an organisation."""
    return bool(_META_LABEL.match(slugify(proposed)))


def is_group_label(proposed: str) -> bool:
    """True when the label explicitly names a collective/institutional form."""
    return bool(_ORGANIZATION_NOUN.search(slugify(proposed)))


def is_person(proposed: str) -> bool:
    """True when the slug names a member of the cast rather than a group.

    A group noun anywhere in the slug settles it the other way immediately:
    the whole point of `wario_land` is that it is not Wario.
    """
    slug = slugify(proposed)
    if not slug:
        return False
    if _GROUP_NOUN.search(slug):
        return False
    people = people_ids()
    if slug in people:
        return True
    # Strip honorifics and generational suffixes, repeatedly — the models
    # stack them ("the_great_chunky_kong_jr").
    trimmed = slug
    for _ in range(4):
        stripped = _TITLE_AFFIX.sub("", trimmed).strip("_")
        if stripped == trimmed:
            break
        trimmed = stripped
    return len(trimmed) >= 3 and trimmed in people


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
    """Generated factions still active in the live matrix."""
    return {
        faction_id for faction_id, entry in _load().get("factions", {}).items()
        if isinstance(entry, dict) and entry.get("status") not in {"removed", "retired"}
    }


def removed_ids() -> set[str]:
    """Reviewed labels that must not be minted again on a later run."""
    return {
        faction_id for faction_id, entry in _load().get("factions", {}).items()
        if isinstance(entry, dict) and entry.get("status") in {"removed", "retired"}
    }


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
    `fuzzy`, `create`, `person` or `reject`. A `create` result means the
    caller should mint the faction; `person` means the label named a member of
    the cast and belongs to the operator resolver, not here; `reject` means
    the label named no group at all.

    Fuzzy matching is deliberately strict (0.86). At 0.6 it happily proposed
    `flower_kingdom` for `mushroom_kingdom` — two different realms — which
    would have quietly filed deltas against the wrong faction. A wrong merge is
    worse than a new entry, because it is invisible.
    """
    slug = slugify(proposed)
    if not slug or len(slug) < 3:
        return None, "reject"
    if _NOT_A_GROUP.match(slug) or _META_LABEL.match(slug):
        return None, "reject"

    if slug in known:
        return slug, "exact"

    target = ALIASES.get(slug)
    if target and target in known:
        return target, "alias"

    # A named member of the cast is a person, and a person is never a faction
    # — not even a new one. This sits *after* the exact and alias lookups on
    # purpose: the character roster also carries a few entries that really are
    # organisations (`koopa_troop`), and those already have a faction dossier,
    # so a confirmed faction id always wins.
    #
    # It sits *before* the fuzzy pass and `create` because both are how people
    # became institutions: `wario` is one edit from `wario_land`, which would
    # have merged a man into his own company, and `diddy_kong` matched nothing
    # at all, so he was minted a dossier with a region and a power level.
    if is_person(slug):
        return None, "person"

    close = difflib.get_close_matches(slug, sorted(known), n=1, cutoff=0.86)
    if close:
        return close[0], "fuzzy"

    already = generated_ids()
    if slug in already:
        return slug, "exact"
    if slug in removed_ids():
        return None, "reject"

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
