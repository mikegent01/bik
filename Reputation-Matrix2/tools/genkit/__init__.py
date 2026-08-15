"""genkit — the shared machinery behind the all-systems content cycler.

`tools/generate_abilities.py` proved the method: talk to a local LM Studio
model, validate hard, write atomically, checkpoint so a run can resume. That
method is good but it is welded to one system (Training Wing abilities).

genkit lifts the method out so every generatable system in the archive can use
it, and adds the two things the single-system script never needed:

  * a **worker pool** — N LM Studio conversations running at once (2 by
    default, the architecture scales to 4+),
  * a **popcorn scheduler** — instead of draining one system dry, the runner
    hops between systems one record at a time: an item, then a post, then an
    ability, then a reputation pass, then back around.

Nothing in here knows what a "shop item" is. Systems declare themselves as
`SystemSpec` objects (see `genkit.registry`) and the runner treats them all
identically.
"""

from .settings import Settings, DEFAULT_ENDPOINT
from .client import LMStudioClient, LMStudioError
from .storage import (
    atomic_write_text,
    atomic_write_json,
    read_json,
    Checkpoint,
)
from .spec import SystemSpec, Task, TaskResult, ValidationError
from .pool import WorkerPool
from .scheduler import PopcornScheduler
from .runner import Runner, RunnerEvent

__all__ = [
    "Settings",
    "DEFAULT_ENDPOINT",
    "LMStudioClient",
    "LMStudioError",
    "atomic_write_text",
    "atomic_write_json",
    "read_json",
    "Checkpoint",
    "SystemSpec",
    "Task",
    "TaskResult",
    "ValidationError",
    "WorkerPool",
    "PopcornScheduler",
    "Runner",
    "RunnerEvent",
]
