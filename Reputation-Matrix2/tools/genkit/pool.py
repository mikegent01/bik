"""A pool of LM Studio workers.

Two conversations at once by default. The pool has no hard ceiling — pass
`workers=4` and it starts four — because the machine may grow and the code
should not be the thing that stops it.

The only shared mutable state is the write path, and every system serialises
its own writes behind a lock it owns (see `genkit.systems.*`). Workers
themselves share nothing but the stateless HTTP client.
"""

from __future__ import annotations

import threading
import time
from queue import Empty, Queue
from typing import Callable

from .spec import Task, TaskResult


class WorkerPool:
    def __init__(
        self,
        size: int,
        handler: Callable[[Task, int], TaskResult],
        *,
        on_result: Callable[[TaskResult], None] | None = None,
    ) -> None:
        self.size = max(1, size)
        self.handler = handler
        self.on_result = on_result
        self._queue: Queue[Task | None] = Queue()
        self._threads: list[threading.Thread] = []
        self._stop = threading.Event()
        self._busy = 0
        self._busy_lock = threading.Lock()

    # -- lifecycle ----------------------------------------------------------

    def start(self) -> None:
        for index in range(self.size):
            thread = threading.Thread(
                target=self._loop, args=(index,), name=f"genkit-worker-{index + 1}",
                daemon=True,
            )
            thread.start()
            self._threads.append(thread)

    def stop(self) -> None:
        self._stop.set()
        for _ in self._threads:
            self._queue.put(None)

    def join(self, timeout: float | None = None) -> None:
        for thread in self._threads:
            thread.join(timeout)

    # -- work ---------------------------------------------------------------

    def submit(self, task: Task) -> None:
        self._queue.put(task)

    @property
    def busy(self) -> int:
        with self._busy_lock:
            return self._busy

    def idle(self) -> bool:
        return self._queue.empty() and self.busy == 0

    def _loop(self, index: int) -> None:
        while not self._stop.is_set():
            try:
                task = self._queue.get(timeout=0.25)
            except Empty:
                continue
            if task is None:
                return
            with self._busy_lock:
                self._busy += 1
            try:
                result = self.handler(task, index)
            except Exception as error:  # noqa: BLE001 - a worker must not die
                result = TaskResult(task=task, ok=False, detail=f"{type(error).__name__}: {error}")
            finally:
                with self._busy_lock:
                    self._busy -= 1
            if self.on_result:
                try:
                    self.on_result(result)
                except Exception:  # noqa: BLE001
                    pass
            self._queue.task_done()
            time.sleep(0)
