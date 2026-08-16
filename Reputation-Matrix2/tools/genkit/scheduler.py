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
        # Still with a worker. Distinct from `_issued`, which never forgets:
        # a stage with in-flight work is *live* and must keep blocking higher
        # stages, whereas a stage whose issued tasks have all come back has
        # genuinely finished even though `_issued` is still full of its keys.
        self._inflight: dict[str, set[str]] = {s.id: set() for s in self.systems}
        # Tasks that came back without changing the disk: rejected by the
        # validator, or skipped because a checkpoint had already recorded them.
        # The system will keep offering these forever, so the refill window has
        # to be wide enough to see past them to the work that is actually left.
        self._stuck: dict[str, int] = {}
        # How many tasks each system has actually been handed. Popcorn order is
        # "one record at a time per system", and the only way to hold that over
        # a long run is to compare totals: a system with 1730 pending records
        # and one with 14 must still alternate, or the big one eats the run and
        # the small ones never get generated at all.
        self._served: dict[str, int] = {s.id: 0 for s in self.systems}

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
        # Ask for a window wide enough to see past the tasks this system will
        # keep re-offering: it derives its queue from what is on disk, so both
        # the work in flight and the work that was rejected still look pending
        # to it. Widen until something new appears rather than guessing once —
        # a system with 40 rejects at the head of its queue is still perfectly
        # productive at offset 41.
        base = 8 + len(self._inflight.get(system.id, ())) + self._stuck.get(system.id, 0)
        queued = {t.key for t in self._buffers[system.id]}
        for window in (min(base, 512), min(base * 4, 512), 512):
            try:
                tasks = system.next_tasks(window) or []
            except Exception:  # noqa: BLE001
                tasks = []
            fresh = [
                t for t in tasks
                if t.key not in self._issued and t.key not in queued
            ]
            if fresh:
                self._buffers[system.id].extend(fresh)
                return True
            if len(tasks) < window:
                # The system offered everything it had and none of it is new,
                # so a wider window cannot help.
                break
        # Nothing new to hand out. If work is still in flight this system may
        # come back to life the moment a worker reports, so it is only parked
        # while it is quiet: marking it drained here is what used to retire a
        # system permanently after a run of rejections and strand the stage.
        if not self._inflight.get(system.id):
            self._drained.add(system.id)
        return False

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

            # Strict least-served-first. Weighted random looked fairer but is
            # not: the penalty only remembered the previous pick, so over
            # hundreds of draws the system with the deepest backlog was served
            # in proportion to how often it appeared as a candidate, and the
            # shallow systems finished the run barely touched. Comparing served
            # totals makes the alternation a guarantee rather than a tendency.
            fewest = min(self._served.get(s.id, 0) for s in candidates)
            level = [s for s in candidates if self._served.get(s.id, 0) == fewest]
            # Among equals, still avoid immediately repeating the last system.
            fresh = [s for s in level if s.id not in self._recent[-1:]]
            system = self._rng.choice(fresh or level)
            task = self._buffers[system.id].pop(0)
            self._issued.add(task.key)
            self._inflight.setdefault(system.id, set()).add(task.key)
            self._served[system.id] = self._served.get(system.id, 0) + 1
            self._recent.append(system.id)
            del self._recent[:-4]
            return task

    def complete(self, task: Task, *, changed: bool) -> None:
        """A worker finished with `task`; `changed` says whether disk moved.

        This is the signal that keeps the run alive. A task that changed
        nothing — rejected by the validator, or already in the checkpoint —
        will be offered by its system again on every future refill, so it is
        counted as stuck and the refill window grows past it. Either way the
        system stops being in flight for this key and is allowed back into
        scheduling.
        """
        with self._lock:
            self._inflight.get(task.system_id, set()).discard(task.key)
            if not changed:
                self._stuck[task.system_id] = self._stuck.get(task.system_id, 0) + 1
            # It may have been parked while this task was out; there is now a
            # concrete reason to ask it for work again.
            self._drained.discard(task.system_id)

    def requeue(self, task: Task) -> None:
        """Put a rejected task back at the FRONT of its system's buffer.

        Front, not back: the retry carries the reason it was rejected, and that
        feedback is most useful while the run is still in the same part of the
        archive. The key stays in `_issued` so a refill cannot offer a second
        copy of a task that is already waiting here.
        """
        with self._lock:
            self._inflight.get(task.system_id, set()).discard(task.key)
            self._buffers.setdefault(task.system_id, []).insert(0, task)
            self._drained.discard(task.system_id)

    def release(self, task: Task) -> None:
        """Put a task back (a worker failed on it for a transient reason)."""
        with self._lock:
            self._issued.discard(task.key)
            self._inflight.get(task.system_id, set()).discard(task.key)
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
