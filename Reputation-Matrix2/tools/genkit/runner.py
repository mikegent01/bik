"""Ties the scheduler, the pool and the systems together."""

from __future__ import annotations

import threading
import time
from dataclasses import dataclass
from typing import Callable, Iterable

from .client import ContextExceededError, LMStudioClient, LMStudioError
from .pool import WorkerPool
from .scheduler import PopcornScheduler
from .settings import Settings
from .spec import SystemSpec, Task, TaskResult, ValidationError
from .storage import Checkpoint


def _shorten_prompt(prompt: str, fraction: float) -> str:
    """Keep the head and tail of a prompt, drop the middle.

    The head carries the record's identity and the tail carries the actual
    instruction; it is the bulk description in between that is expendable.
    Cutting purely from the end would remove the question being asked.
    """
    target = max(400, int(len(prompt) * fraction))
    if len(prompt) <= target:
        return prompt
    tail = min(1200, target // 3)
    head = target - tail
    return (
        prompt[:head].rstrip()
        + "\n\n[… record abridged to fit the context window …]\n\n"
        + prompt[-tail:].lstrip()
    )


@dataclass
class RunnerEvent:
    kind: str          # started | task | ok | fail | skip | done | error
    text: str
    system_id: str = ""
    produced: int = 0
    failed: int = 0


class Runner:
    def __init__(
        self,
        systems: Iterable[SystemSpec],
        settings: Settings,
        *,
        on_event: Callable[[RunnerEvent], None] | None = None,
    ) -> None:
        chosen = []
        for system in systems:
            if settings.only and system.id not in settings.only:
                continue
            if system.id in settings.skip:
                continue
            chosen.append(system)
        self.systems = {s.id: s for s in chosen}
        self.settings = settings
        self.on_event = on_event or (lambda event: None)
        self.scheduler = PopcornScheduler(chosen, seed=settings.seed)
        self.client = LMStudioClient(
            settings.endpoint, settings.model, settings.timeout
        )
        self.checkpoints = {
            s.id: Checkpoint(settings.work_dir, s.id) for s in chosen
        }
        self.produced = 0
        self.failed = 0
        self._counter_lock = threading.Lock()
        self._stop = threading.Event()
        self.pool = WorkerPool(
            settings.resolved_workers(), self._handle, on_result=self._collect
        )

    # -- public -------------------------------------------------------------

    def stop(self) -> None:
        self._stop.set()
        self.pool.stop()

    def run(self) -> None:
        try:
            advertised = self.client.ping()
        except LMStudioError as error:
            self._emit(RunnerEvent("error", str(error)))
            return
        if not self.settings.model:
            self.settings.model = advertised
            self.client.model = advertised

        self._emit(
            RunnerEvent(
                "started",
                f"{self.settings.resolved_workers()} worker(s) on {advertised} — "
                f"{len(self.systems)} system(s) in the cycle"
                + (" [DRY RUN]" if self.settings.dry_run else ""),
            )
        )

        self.pool.start()
        limit = self.settings.limit

        while not self._stop.is_set():
            if limit and self.produced >= limit:
                break
            # Keep every worker fed, never more than that: one in flight per
            # worker means a stop request lands quickly.
            if self.pool.busy + self.pool._queue.qsize() >= self.pool.size:
                time.sleep(0.1)
                continue
            task = self.scheduler.next_task()
            if task is None:
                if self.pool.idle():
                    break
                time.sleep(0.2)
                continue
            checkpoint = self.checkpoints[task.system_id]
            if checkpoint.done(task.key):
                self._emit(
                    RunnerEvent("skip", f"already done: {task.label}", task.system_id)
                )
                continue
            self._emit(RunnerEvent("task", task.label, task.system_id))
            self.pool.submit(task)
            if self.settings.pace:
                time.sleep(self.settings.pace)

        # Let in-flight work land before reporting.
        deadline = time.time() + self.settings.timeout
        while not self.pool.idle() and time.time() < deadline:
            time.sleep(0.2)
        self.pool.stop()
        self._emit(
            RunnerEvent(
                "done",
                f"produced {self.produced}, failed {self.failed}",
                produced=self.produced,
                failed=self.failed,
            )
        )

    # -- worker body --------------------------------------------------------

    def _handle(self, task: Task, worker_index: int) -> TaskResult:
        system = self.systems[task.system_id]
        # Systems stamp provenance from the payload; only the runner knows
        # which model actually answered, so it supplies the name here rather
        # than every adapter reaching into settings.
        task.payload.setdefault("model", self.settings.model or self.client.model)

        if system.offline:
            record = {}
        else:
            system_prompt, user_prompt = system.build_prompt(task)
            try:
                raw = self.client.complete_json(
                    system_prompt, user_prompt, temperature=self.settings.temperature
                )
            except ContextExceededError:
                # The prompt did not fit the context length this model was
                # loaded with. Retrying it verbatim would fail identically, and
                # dropping the task loses a record for a reason that has
                # nothing to do with its content -- so retry progressively
                # shorter. Systems keep their most important fields at the
                # front of the prompt, so a halved prompt is degraded, not
                # meaningless.
                raw = None
                for fraction in (0.6, 0.35):
                    shortened = _shorten_prompt(user_prompt, fraction)
                    try:
                        raw = self.client.complete_json(
                            system_prompt,
                            shortened,
                            temperature=self.settings.temperature,
                        )
                        break
                    except ContextExceededError:
                        continue
                if raw is None:
                    return TaskResult(
                        task=task,
                        ok=False,
                        detail=(
                            "rejected: prompt exceeds this model's loaded context "
                            "even at 35% — raise the context length in LM Studio"
                        ),
                    )
            try:
                record = system.validate(task, raw)
            except ValidationError as error:
                return TaskResult(task=task, ok=False, detail=f"rejected: {error}")

        if self.settings.dry_run:
            return TaskResult(
                task=task, ok=True, detail="dry run (nothing written)", record=record
            )
        return system.apply(task, record)

    def _collect(self, result: TaskResult) -> None:
        checkpoint = self.checkpoints[result.task.system_id]
        with self._counter_lock:
            if result.ok:
                self.produced += 1
            else:
                self.failed += 1
        checkpoint.record(
            result.task.key,
            {"label": result.task.label, "detail": result.detail},
            ok=result.ok,
        )
        self._emit(
            RunnerEvent(
                "ok" if result.ok else "fail",
                f"{result.task.label} — {result.detail}",
                result.task.system_id,
                produced=self.produced,
                failed=self.failed,
            )
        )

    def _emit(self, event: RunnerEvent) -> None:
        try:
            self.on_event(event)
        except Exception:  # noqa: BLE001
            pass
