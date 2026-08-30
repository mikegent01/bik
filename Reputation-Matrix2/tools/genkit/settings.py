"""Run settings shared by every system."""

from __future__ import annotations

import os
from dataclasses import dataclass, field
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
WORK_DIR = ROOT / "tools" / ".genkit"
DEFAULT_ENDPOINT = "http://127.0.0.1:1234/v1/chat/completions"


@dataclass
class Settings:
    """Everything a run needs that is not system-specific.

    `workers` is the headline knob. Two concurrent LM Studio conversations is
    the default because that is what one machine comfortably serves; the pool
    itself has no upper bound, so raising this to 4 needs no code change.
    """

    endpoint: str = os.environ.get("LM_STUDIO_URL", DEFAULT_ENDPOINT)
    model: str = os.environ.get("LM_STUDIO_MODEL", "")
    workers: int = 2
    timeout: int = 240
    temperature: float = 0.7

    # How many records to produce in total. 0 = keep cycling until stopped.
    limit: int = 0
    # Restrict the cycle to these system ids. Empty = every enabled system.
    only: list[str] = field(default_factory=list)
    # Systems to skip even when they are enabled.
    skip: list[str] = field(default_factory=list)
    # Optional generation mix percentages. Missing systems retain equal weight;
    # zero explicitly disables a system for this run.
    weights: dict[str, float] = field(default_factory=dict)

    # Dry run: call the model and validate, but persist neither data nor a
    # checkpoint (a checkpoint would incorrectly block the later real run).
    dry_run: bool = False
    # Failed tasks are quarantined across process restarts. Set this only when
    # deliberately revisiting the failed queue after fixing its validator/data.
    retry_failed: bool = False
    # Seed for the popcorn order. 0 = clock-seeded.
    seed: int = 0
    # Pause between records, seconds. Keeps a shared LM Studio responsive.
    pace: float = 0.0

    work_dir: Path = WORK_DIR

    def resolved_workers(self) -> int:
        return max(1, int(self.workers))
