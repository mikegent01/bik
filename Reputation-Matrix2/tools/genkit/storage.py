"""Atomic writes and checkpoints.

Lifted from `generate_abilities.py` (which lifted it from
`enrich_shop_items.py`) so every system inherits the same discipline: write to
a temporary file, then replace, retrying because Windows editors, antivirus
and sync clients all like to hold files open.
"""

from __future__ import annotations

import json
import stat
import threading
import time
from datetime import datetime, timezone
from pathlib import Path
from typing import Any


def replace_with_retry(temporary: Path, target: Path, *, attempts: int = 12) -> None:
    last_error: OSError | None = None
    for attempt in range(attempts):
        try:
            if temporary.exists():
                temporary.chmod(stat.S_IWRITE | stat.S_IREAD)
            if target.exists():
                target.chmod(stat.S_IWRITE | stat.S_IREAD)
            temporary.replace(target)
            return
        except PermissionError as error:
            last_error = error
            time.sleep(0.25 * (attempt + 1))
        except OSError as error:
            last_error = error
            time.sleep(0.1 * (attempt + 1))
    raise PermissionError(
        f"Could not replace {target}. Close any editor or sync tool holding the "
        f"file and make sure it is not read-only. Last error: {last_error}"
    )


def atomic_write_text(target: Path, text: str) -> None:
    target.parent.mkdir(parents=True, exist_ok=True)
    temporary = target.with_suffix(target.suffix + ".tmp")
    temporary.write_text(text, encoding="utf-8")
    replace_with_retry(temporary, target)


def atomic_write_json(target: Path, payload: Any, *, indent: int = 2) -> None:
    atomic_write_text(
        target, json.dumps(payload, ensure_ascii=False, indent=indent) + "\n"
    )


def read_json(path: Path, default: Any = None) -> Any:
    try:
        return json.loads(Path(path).read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return default


class Checkpoint:
    """A resumable record of what a run has already done.

    One file per system so two systems never contend for the same write, and
    a lock because the worker pool means several threads finish at once.
    """

    def __init__(self, work_dir: Path, system_id: str) -> None:
        self.path = Path(work_dir) / f"checkpoint-{system_id}.json"
        self._lock = threading.Lock()
        self._data: dict[str, Any] = read_json(self.path, default=None) or {
            "system": system_id,
            "startedAt": datetime.now(timezone.utc).isoformat(),
            "completed": [],
            "failed": [],
        }

    @property
    def completed_keys(self) -> set[str]:
        return {entry.get("key", "") for entry in self._data.get("completed", [])}

    def done(self, key: str) -> bool:
        return key in self.completed_keys

    def record(self, key: str, detail: dict[str, Any], *, ok: bool = True) -> None:
        with self._lock:
            bucket = "completed" if ok else "failed"
            self._data.setdefault(bucket, []).append(
                {
                    "key": key,
                    "at": datetime.now(timezone.utc).isoformat(),
                    **detail,
                }
            )
            self._data["updatedAt"] = datetime.now(timezone.utc).isoformat()
            atomic_write_json(self.path, self._data)

    def counts(self) -> tuple[int, int]:
        return len(self._data.get("completed", [])), len(self._data.get("failed", []))
