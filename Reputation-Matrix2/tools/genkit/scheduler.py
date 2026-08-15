"""The popcorn scheduler.

The obvious way to run a batch generator is to drain one system, then the
next. That is also the worst way to *read* the output: you get 40 shop items
in a row, all written in the same voice, all drifting the same direction,
because the model never had to change subject.

So this hops. Each turn it picks a system at random from those that still have
work, takes exactly one record from it, and moves on. Item, post, ability,
reputation pass, item again. The model context changes every turn and the
archive grows evenly instead of lopsidedly.

Two rules bend the randomness:

  * **Stages gate.** A system at stage 0 blocks every higher stage until it
    runs out of work. That is how "quality-check the existing posts before
    writing new ones" is expressed as scheduling rather than as a promise.
  * **Recency penalty.** A system just served is unlikely to be picked again
    immediately, so two of the same kind rarely land back to back even when
    only two systems are live.
"""

from __future__ import annotations

import random
import threading
from typing import Iterable

from .spec import SystemSpec, Task


class PopcornScheduler:
    def __init__(self, systems: Iterable[SystemSpec], *, seed: int = 0) -> None:
        self.systems = [s for s in systems if s.enabled]
        self._rng = random.Random(seed or None)
        self._lock = threading.Lock()
        self._recent: list[str] = []
        self._buffers: dict[str, list[Task]] = {s.id: [] for s in self.systems}
        self._drained: set[str] = set()
        # Keys already handed to a worker. A system computes `next_tasks` from
        # the data on disk, so anything still in flight is not yet reflected
        # there and would be offered a second time on the next refill. Without
        # this the same post gets pruned twice in parallel.
        self._issued: set[str] = set()
        self._issued_count: dict[str, int] = {}

    # -- stage gating -------------------------------------------------------

    def _active_stage(self) -> int | None:
        """The lowest stage that still has work; None when everything is done.

        Every system in the stage is refilled, not just the first one with
        work. Refilling lazily looked cheaper but meant the candidate list
        usually held a single system, so the scheduler served eight of the same
        kind in a row — precisely the draining behaviour popcorn order exists
        to prevent.
        """
        stages = sorted({s.stage for s in self.systems})
        for stage in stages:
            live = False
            for system in self.systems:
                if system.stage != stage or system.id in self._drained:
                    continue
                if self._buffers[system.id] or self._refill(system):
                    live = True
            if live:
                return stage
        return None

    def _refill(self, system: SystemSpec) -> bool:
        """Ask a system for more work. Returns True if any arrived."""
        if system.id in self._drained:
            return False
        # Ask for a window wide enough to see past the tasks already issued
        # for THIS system: it derives its queue from what is on disk, and
        # nothing in flight has been written yet, so the first N it offers are
        # the same N we already handed out.
        window = min(8 + self._issued_count.get(system.id, 0), 512)
        try:
            tasks = system.next_tasks(window) or []
        except Exception:  # noqa: BLE001
            tasks = []
        queued = {t.key for t in self._buffers[system.id]}
        fresh = [
            t for t in tasks
            if t.key not in self._issued and t.key not in queued
        ]
        if not fresh:
            # Everything this system can currently offer is already in flight
            # or already buffered. That is not the same as being finished, but
            # for scheduling purposes there is nothing more to hand out.
            self._drained.add(system.id)
            return False
        self._buffers[system.id].extend(fresh)
        return True

    # -- picking ------------------------------------------------------------

    def next_task(self) -> Task | None:
        with self._lock:
            stage = self._active_stage()
            if stage is None:
                return None
            candidates = [
                s
                for s in self.systems
                if s.stage == stage
                and s.id not in self._drained
                and self._buffers[s.id]
            ]
            if not candidates:
                return None

            weights = []
            for system in candidates:
                # Served recently -> much less likely to come up again now.
                penalty = 0.15 if system.id in self._recent[-1:] else 1.0
                if len(candidates) == 1:
                    penalty = 1.0
                weights.append(penalty)

            system = self._rng.choices(candidates, weights=weights, k=1)[0]
            task = self._buffers[system.id].pop(0)
            self._issued.add(task.key)
            self._issued_count[system.id] = self._issued_count.get(system.id, 0) + 1
            self._recent.append(system.id)
            del self._recent[:-4]
            return task

    def release(self, task: Task) -> None:
        """Put a task back (a worker failed on it for a transient reason)."""
        with self._lock:
            if task.key in self._issued:
                self._issued.discard(task.key)
                self._issued_count[task.system_id] = max(
                    0, self._issued_count.get(task.system_id, 1) - 1
                )
            self._buffers.setdefault(task.system_id, []).append(task)
            self._drained.discard(task.system_id)

    def snapshot(self) -> list[tuple[str, int, int]]:
        """(system id, buffered, pending) for the GUI's progress table."""
        rows = []
        for system in self.systems:
            rows.append(
                (system.id, len(self._buffers[system.id]), system.count_pending())
            )
        return rows
