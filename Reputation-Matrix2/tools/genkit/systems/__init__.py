"""The system registry.

Adding a system to the cycle is one import and one list entry. That is the
whole contract — no five-file edit, no scheduler change, no GUI change.
"""

from __future__ import annotations

from ..spec import SystemSpec
from . import (
    abilities,
    bros_attacks,
    crafting,
    faction_dossiers,
    reputation,
    shop_items,
    wahwire,
)


def all_systems() -> list[SystemSpec]:
    """Every system the cycler knows about, in registration order.

    Stage 0 systems (WAHwire's prune pass) gate everything else; the scheduler
    enforces that, not this list.
    """
    return [
        wahwire.PRUNE_SPEC,      # stage 0 — must finish before authoring starts
        shop_items.SPEC,         # disabled: hour-run stock failed mechanics/voice review
        wahwire.AUTHOR_SPEC,     # disabled: hour-run posts invented facts and broke voice
        abilities.SPEC,
        reputation.SPEC,
        faction_dossiers.SPEC,  # expand/review stubs minted by reputation
        crafting.SPEC,
        wahwire.DISCUSS_SPEC,    # disabled: generated replies failed the voice bar
        wahwire.PROFILE_SPEC,    # bios + the follow graph, 13 accounts
        bros_attacks.SPEC,       # paired techniques read out of the events
    ]


def by_id() -> dict[str, SystemSpec]:
    return {system.id: system for system in all_systems()}


__all__ = ["all_systems", "by_id"]
