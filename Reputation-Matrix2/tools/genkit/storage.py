"""Atomic writes and checkpoints.

Lifted from `generate_abilities.py` (which lifted it from
`enrich_shop_items.py`) so every system inherits the same discipline: write to
a temporary file, then replace, retrying because Windows editors, antivirus
and sync clients all like to hold files open.
"""

from __future__ import annotations

import itertools
import json
import os
import re
import stat
import threading
import time
from datetime import datetime, timezone
from pathlib import Path
from typing import Any


def replace_with_retry(temporary: Path, target: Path, *, attempts: int = 20) -> None:
    """Rename `temporary` over `target`, working around Windows file locking.

    On Windows a rename fails with ACCESS_DENIED while any other process holds
    the destination open — and real-time antivirus opens every file the moment
    it is written. The larger the file the longer that scan holds it, which is
    exactly why this only ever bit the big stores (crafting.json 911 KB,
    abilityShop.json 1.1 MB, events.json 3.2 MB) and never the small ones
    (trials.json, posts.json) in the same run.

    The old budget was 12 attempts of 0.25s..3.0s stepping linearly, but it
    slept AFTER the last attempt and gave up around the point a scan of a
    multi-megabyte file is still running. Now: exponential backoff, a longer
    ceiling, and a non-atomic fallback rather than losing the work.
    """
    last_error: OSError | None = None
    delay = 0.1
    for _ in range(attempts):
        try:
            if temporary.exists():
                temporary.chmod(stat.S_IWRITE | stat.S_IREAD)
            if target.exists():
                target.chmod(stat.S_IWRITE | stat.S_IREAD)
            temporary.replace(target)
            return
        except PermissionError as error:
            last_error = error
            time.sleep(delay)
            delay = min(delay * 1.6, 3.0)
        except OSError as error:
            last_error = error
            time.sleep(min(delay, 1.0))
            delay = min(delay * 1.6, 3.0)

    # Last resort. We cannot swap the file in, but writing THROUGH the existing
    # handle usually still succeeds against a read-lock. This sacrifices
    # atomicity, so it runs only after the retry budget above is exhausted, and
    # the result is read back and compared before the temporary is discarded.
    try:
        payload = temporary.read_bytes()
        with open(target, "wb") as handle:
            handle.write(payload)
            handle.flush()
            os.fsync(handle.fileno())
        if target.read_bytes() == payload:
            temporary.unlink(missing_ok=True)
            return
        raise OSError("verification after in-place write did not match")
    except OSError as error:
        last_error = error

    raise PermissionError(
        f"Could not replace {target}. Close any editor, antivirus scan or sync "
        f"client holding the file and make sure it is not read-only. The "
        f"generated content is preserved at {temporary}. Last error: {last_error}"
    )


_TMP_SEQUENCE = itertools.count()

# Matches only the temporaries THIS module creates: "<name>.<pid>.<n>.tmp".
# Anything else ending in .tmp belongs to someone else and is left alone.
_TMP_NAME = re.compile(r"\.\d+\.\d+\.tmp$")


def atomic_write_text(target: Path, text: str) -> None:
    target.parent.mkdir(parents=True, exist_ok=True)
    # Unique per write. A fixed "<name>.tmp" can still be held by a scanner
    # from the PREVIOUS write, in which case even creating the new temporary
    # fails and the retry loop never gets a chance to help.
    temporary = target.with_name(
        f"{target.name}.{os.getpid()}.{next(_TMP_SEQUENCE)}.tmp"
    )
    temporary.write_text(text, encoding="utf-8")
    try:
        replace_with_retry(temporary, target)
    finally:
        # Never leave debris behind. The old version only deleted the
        # temporary when its bytes still matched the target, which is the one
        # case where .replace() had ALREADY consumed it -- so the check passed
        # on files that no longer existed and skipped the files that did.
        # Anything still sitting here has either been copied into place by the
        # fallback or is a dead draft, and both are garbage.
        try:
            temporary.unlink(missing_ok=True)
        except OSError:
            pass


def sweep_temporaries(*dirs: Path) -> int:
    """Delete stray `<name>.<pid>.<n>.tmp` drafts left by an interrupted run.

    A killed process (Ctrl+C, a closed terminal, a crash) never reaches the
    `finally` above, so its half-written drafts stay on disk and show up as
    untracked files in the next commit. They are pure debris -- the real
    content is in the target file -- so clearing them at startup is safe.
    """
    removed = 0
    for directory in dirs:
        directory = Path(directory)
        if not directory.is_dir():
            continue
        for stray in directory.rglob("*.tmp"):
            if not _TMP_NAME.search(stray.name):
                continue  # not ours; leave other tooling's files alone
            try:
                stray.unlink()
                removed += 1
            except OSError:
                pass
    return removed


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

    def reopen(self, key: str, *, reason: str = "source still reports pending") -> int:
        """Remove stale completion entries for a task the source still offers.

        Data files, not checkpoints, are the source of truth. A successful dry
        run in older versions recorded a completion without changing data, so
        every real run afterwards skipped the same task forever. A restored or
        manually repaired data file creates the same mismatch. If a system's
        `next_tasks()` offers the key again, its checkpoint is stale by
        definition and must not be allowed to veto the work.
        """
        with self._lock:
            completed = self._data.get("completed", [])
            kept = [entry for entry in completed if entry.get("key") != key]
            removed = len(completed) - len(kept)
            if not removed:
                return 0
            self._data["completed"] = kept
            self._data.setdefault("reopened", []).append({
                "key": key,
                "at": datetime.now(timezone.utc).isoformat(),
                "reason": reason,
            })
            self._data["updatedAt"] = datetime.now(timezone.utc).isoformat()
            atomic_write_json(self.path, self._data)
            return removed

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
