"""What a "generatable system" is.

Every system the cycler touches — shop items, WAHwire posts, abilities,
reputation impacts, bros attacks, badges, crafting recipes — reduces to the
same five questions:

  1. What is one unit of work here?              -> `next_tasks`
  2. What do I ask the model for it?             -> `build_prompt`
  3. Is the answer acceptable?                   -> `validate`
  4. Where does an accepted answer go?           -> `apply`
  5. How much is left to do?                     -> `pending`

A system that answers those is schedulable, and the runner does not care what
kind of content it makes. Long-form systems may additionally provide `generate`
to assemble one record from several bounded model calls; validation and writes
remain shared. That is the whole point: adding another system is one file, not
five hand-edits.
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
    # Phase lets a system order its own work (WAHwire: "prune" before "author").
    phase: str = ""
    # How many times this task has come back to a worker. A rejection is not a
    # verdict on the record, only on one attempt at it, so the runner requeues
    # instead of discarding — but it has to stop eventually.
    attempts: int = 0
    # Why the last attempt was rejected, fed back into the next prompt so the
    # model is told what to fix rather than guessing again.
    last_error: str = ""


@dataclass
class TaskResult:
    task: Task
    ok: bool
    detail: str = ""
    record: dict[str, Any] | None = None
    changed_paths: list[str] = field(default_factory=list)
    # A failure the same task could survive on another attempt (the model broke
    # a rule). Distinct from a permanent one, like "this id already exists".
    retryable: bool = False
    # The rejection reason, replayed into the retry prompt.
    reason: str = ""


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
    # have work. WAHwire's pruning pass is stage 0, authoring is stage 1.
    # Within a stage the scheduler is random ("popcorn").
    stage: int = 1

    next_tasks: Callable[[int], list[Task]] = None            # (count) -> tasks
    build_prompt: Callable[[Task], tuple[str, str]] = None    # -> (system, user)
    # Optional multi-call generation hook. Most systems need one reply and use
    # build_prompt; long-form systems can make several bounded calls and return
    # one assembled raw record for the same validator/apply pipeline.
    generate: Callable[[Task, Any, float], dict] | None = None
    validate: Callable[[Task, dict], dict] = None             # -> clean record
    apply: Callable[[Task, dict], TaskResult] = None          # writes to data/
    pending: Callable[[], int] = None                         # -> records left

    # Last resort before a record is lost.
    #
    # `validate` is the right place to be strict: telling the model "that name
    # is taken" and asking again is how quality stays up. But after the final
    # attempt the choice is no longer "strict or lax", it is "repair or throw
    # the record away", and throwing it away is always the worse answer — the
    # model's judgement was usually sound and only its bookkeeping was wrong.
    #
    # A repair takes the rejected reply and the reason, and returns a record
    # that WILL pass, fixed deterministically in code rather than by asking
    # again: disambiguate the duplicate name, re-file the faction-shaped
    # answer under `effects`, reassign the author who is on cooldown. Return
    # None to accept the loss when there is genuinely nothing to salvage.
    repair: Callable[[Task, dict, str], dict | None] = None   # (task, raw, why)

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
