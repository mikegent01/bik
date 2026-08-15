"""What a "generatable system" is.

Every system the cycler touches — shop items, WAHbook posts, abilities,
reputation impacts, bros attacks, badges, crafting recipes — reduces to the
same five questions:

  1. What is one unit of work here?              -> `next_tasks`
  2. What do I ask the model for it?             -> `build_prompt`
  3. Is the answer acceptable?                   -> `validate`
  4. Where does an accepted answer go?           -> `apply`
  5. How much is left to do?                     -> `pending`

A system that answers those is schedulable, and the runner does not care what
kind of content it makes. That is the whole point: adding a sixth system later
is one file, not five hand-edits.
"""

from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any, Callable


class ValidationError(ValueError):
    """A model reply that must not reach the archive."""


@dataclass
class Task:
    """One record's worth of work."""

    system_id: str
    key: str                       # stable id — the checkpoint dedupe key
    label: str                     # one line for the log/GUI
    payload: dict[str, Any] = field(default_factory=dict)
    # Phase lets a system order its own work (WAHbook: "prune" before "author").
    phase: str = ""


@dataclass
class TaskResult:
    task: Task
    ok: bool
    detail: str = ""
    record: dict[str, Any] | None = None
    changed_paths: list[str] = field(default_factory=list)


@dataclass
class SystemSpec:
    """A schedulable content system."""

    id: str
    title: str
    # One line shown in the inventory report.
    summary: str
    # False keeps a system in the inventory but out of the cycle.
    enabled: bool = True
    # Systems with a lower stage never yield to a higher one while they still
    # have work. WAHbook's pruning pass is stage 0, authoring is stage 1.
    # Within a stage the scheduler is random ("popcorn").
    stage: int = 1

    next_tasks: Callable[[int], list[Task]] = None            # (count) -> tasks
    build_prompt: Callable[[Task], tuple[str, str]] = None    # -> (system, user)
    validate: Callable[[Task, dict], dict] = None             # -> clean record
    apply: Callable[[Task, dict], TaskResult] = None          # writes to data/
    pending: Callable[[], int] = None                         # -> records left

    # A system that needs no model (pure bookkeeping) sets this. The runner
    # skips the LM Studio round trip and calls `apply` with an empty dict.
    offline: bool = False

    def count_pending(self) -> int:
        try:
            return int(self.pending()) if self.pending else 0
        except Exception:  # noqa: BLE001 - inventory must never crash a run
            return 0


def provenance(system_id: str, model: str, *, status: str = "generated") -> dict[str, Any]:
    """The stamp every generated record carries.

    Non-negotiable: a reader must always be able to tell machine-drafted
    content from hand-written canon, and know which run produced it.
    """
    from datetime import datetime, timezone

    return {
        "status": status,
        "_generated": {
            "by": "tools/genkit",
            "system": system_id,
            "model": model or "lm-studio",
            "at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        },
    }
