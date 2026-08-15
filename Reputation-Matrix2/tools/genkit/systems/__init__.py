"""The system registry.

Adding a system to the cycle is one import and one list entry. That is the
whole contract — no five-file edit, no scheduler change, no GUI change.
"""

from __future__ import annotations

from ..spec import SystemSpec
from . import abilities, crafting, reputation, shop_items, wahwire


def all_systems() -> list[SystemSpec]:
    """Every system the cycler knows about, in registration order.

    Stage 0 systems (WAHwire's prune pass) gate everything else; the scheduler
    enforces that, not this list.
    """
    return [
        wahwire.PRUNE_SPEC,      # stage 0 — must finish before authoring starts
        shop_items.SPEC,
        wahwire.AUTHOR_SPEC,
        abilities.SPEC,
        reputation.SPEC,
        crafting.SPEC,
        wahwire.DISCUSS_SPEC,    # threads posts, interleaved with authoring
        wahwire.PROFILE_SPEC,    # bios + the follow graph, 13 accounts
    ]


def by_id() -> dict[str, SystemSpec]:
    return {system.id: system for system in all_systems()}


__all__ = ["all_systems", "by_id"]
