"""Ties the scheduler, the pool and the systems together."""

from __future__ import annotations

import threading
import time
from dataclasses import dataclass
from typing import Callable, Iterable

from .client import ContextExceededError, LMStudioClient, LMStudioError
from .pool import WorkerPool
from .scheduler import PopcornScheduler
from .settings import ROOT, Settings
from .spec import SystemSpec, Task, TaskResult, ValidationError
from .storage import Checkpoint, sweep_temporaries


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
    kind: str          # started | task | ok | fail | retry | skip | done | error
    text: str
    system_id: str = ""
    # None means "this event carries no counter", which is different from a
    # genuine zero. Consumers must test for None, not truthiness.
    produced: int | None = None
    failed: int | None = None
    retried: int | None = None


class Runner:
    # How many times one task may be re-attempted after a rule violation.
    # Three attempts clears the duplicate-name and missing-number rejections
    # the local models actually make, without spinning forever on a record the
    # model simply cannot do.
    MAX_ATTEMPTS = 3

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
        self.retried = 0
        # Records that would have been lost and were salvaged in code instead.
        self.repaired = 0
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

        # A previous run that was interrupted mid-write leaves .tmp drafts in
        # the data directories. They are debris, not content, and they turn up
        # as untracked files at commit time, so clear them before starting.
        swept = sweep_temporaries(
            ROOT / "data", ROOT / "shop-items"
        )
        if swept:
            self._emit(RunnerEvent(
                "skip", f"cleared {swept} stray .tmp file(s) from an interrupted run"
            ))

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
            if task is not None and not self.settings.retry_failed:
                checkpoint = self.checkpoints[task.system_id]
                if task.key in checkpoint.failed_keys:
                    self.scheduler.abandon(task)
                    self._emit(RunnerEvent(
                        "skip", f"quarantined after retry ceiling: {task.label}",
                        task.system_id, produced=self.produced,
                        failed=self.failed, retried=self.retried,
                    ))
                    continue
            if task is None:
                if self.pool.idle():
                    break
                time.sleep(0.2)
                continue
            self._reopen_stale_checkpoint(task)
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
                f"produced {self.produced}, failed {self.failed}"
                + (f", recovered {self.retried} retry(ies)" if self.retried else "")
                + (f", repaired {self.repaired}" if self.repaired else ""),
                produced=self.produced,
                failed=self.failed,
                retried=self.retried,
            )
        )

    def _reopen_stale_checkpoint(self, task: Task) -> bool:
        """Let an on-disk pending task override an old completion marker."""
        checkpoint = self.checkpoints[task.system_id]
        if not checkpoint.done(task.key):
            return False
        # `next_tasks()` just read the data file and offered this key, so the
        # data says it is pending. Data wins. Older dry runs wrote successful
        # checkpoints without writing records, which made real runs skip
        # forever; reopening self-heals those installations on first use.
        checkpoint.reopen(task.key)
        self._emit(RunnerEvent(
            "retry", f"reopened stale checkpoint: {task.label}", task.system_id
        ))
        return True

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
            if system.generate:
                # Long-form adapters can split one logical record across
                # several short model calls. The assembled result still goes
                # through the exact same validator and atomic apply path.
                # Surface each bounded sub-call in the CLI/GUI. Without this a
                # five-call dossier looks frozen for several minutes and users
                # stop the run before the first record can finish.
                task.payload["_progress"] = lambda text: self._emit(RunnerEvent(
                    "task", f"{task.label} · {text}", task.system_id,
                ))
                try:
                    raw = system.generate(task, self.client, self.settings.temperature)
                except ContextExceededError:
                    return TaskResult(
                        task=task,
                        ok=False,
                        detail=(
                            "rejected: a multi-part prompt exceeds this model's "
                            "loaded context — raise the context length in LM Studio"
                        ),
                    )
                finally:
                    task.payload.pop("_progress", None)
            else:
                system_prompt, user_prompt = system.build_prompt(task)
                if task.last_error:
                    # This task has been here before. Say what went wrong, in the
                    # imperative, at the end where it is closest to the answer.
                    user_prompt += (
                        f"\n\nYOUR PREVIOUS ATTEMPT WAS REJECTED: {task.last_error}\n"
                        "Return the whole answer again as strictly valid JSON, fixing "
                        "exactly that problem. Do not repeat the rejected value."
                    )
                try:
                    raw = self.client.complete_json(
                        system_prompt, user_prompt, temperature=self.settings.temperature
                    )
                except ContextExceededError:
                    # The prompt did not fit the context length this model was
                    # loaded with. Retry progressively shorter while preserving
                    # the identity at the head and instructions at the tail.
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
                # The model answered, but broke a rule: a duplicate name, an
                # effect with no numbers, an operator that does not exist.
                # That is a verdict on one attempt, not on the record, so the
                # task goes back in the pool carrying the reason — the next
                # prompt tells the model exactly what to fix.
                #
                # Except on the last attempt. At that point requeueing is not
                # on the table any more and the only remaining choice is
                # repair-or-discard, so the system gets to salvage its own
                # reply in code. A rejection must end as a fixed record, not
                # as a lost one.
                final = task.attempts >= self.MAX_ATTEMPTS
                if final and system.repair:
                    try:
                        repaired = system.repair(task, raw, str(error))
                    except Exception as repair_error:  # noqa: BLE001
                        repaired = None
                        self._emit(RunnerEvent(
                            "fail",
                            f"{task.label} — repair itself failed: {repair_error}",
                            task.system_id,
                        ))
                    if repaired is not None:
                        # Re-validate: a repair that cannot pass the system's
                        # own gate is a bug, and letting it through unchecked
                        # would put exactly the content validation exists to
                        # stop into the archive.
                        try:
                            record = system.validate(task, repaired)
                        except ValidationError as still_bad:
                            return TaskResult(
                                task=task, ok=False,
                                detail=f"rejected: {error} · repair also rejected: {still_bad}",
                            )
                        self._emit(RunnerEvent(
                            "retry",
                            f"{task.label} — REPAIRED in code: {error}",
                            task.system_id,
                        ))
                        with self._counter_lock:
                            self.repaired += 1
                        if self.settings.dry_run:
                            return TaskResult(
                                task=task, ok=True,
                                detail="dry run (repaired, nothing written)",
                                record=record,
                            )
                        return system.apply(task, record)
                return TaskResult(
                    task=task, ok=False, detail=f"rejected: {error}",
                    retryable=True, reason=str(error),
                )

        if self.settings.dry_run:
            return TaskResult(
                task=task, ok=True, detail="dry run (nothing written)", record=record
            )
        return system.apply(task, record)

    def _collect(self, result: TaskResult) -> None:
        checkpoint = self.checkpoints[result.task.system_id]
        task = result.task

        # A rejected task is put back rather than thrown away. It carries the
        # reason with it, so the retry prompt says what was wrong instead of
        # asking the same question and hoping for a different answer.
        if not result.ok and result.retryable and task.attempts < self.MAX_ATTEMPTS:
            task.attempts += 1
            task.last_error = result.reason or result.detail
            self.scheduler.requeue(task)
            with self._counter_lock:
                self.retried += 1
            self._emit(
                RunnerEvent(
                    "retry",
                    f"{task.label} — attempt {task.attempts + 1}: {result.reason}",
                    task.system_id,
                    produced=self.produced,
                    failed=self.failed,
                    retried=self.retried,
                )
            )
            return

        # A final failure wrote nothing. Abandon only this exhausted task for
        # the current run so a bad record cannot stop an infinite run or hold
        # every higher-priority system hostage. The source remains pending for
        # a future run/review.
        if not result.ok:
            self.scheduler.abandon(task)
        self.scheduler.complete(task, changed=result.ok)
        with self._counter_lock:
            if result.ok:
                self.produced += 1
            else:
                self.failed += 1
        # Dry-run means *nothing persistent*. Older versions wrote successful
        # checkpoints here even though `_handle()` deliberately skipped the
        # data write. That poisoned every subsequent real run: the source kept
        # reporting the task pending while the runner kept saying "already
        # done". Existing poisoned checkpoints are healed in `run()` above.
        if not self.settings.dry_run:
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
                retried=self.retried,
            )
        )

    def _emit(self, event: RunnerEvent) -> None:
        try:
            self.on_event(event)
        except Exception:  # noqa: BLE001
            pass
