#!/usr/bin/env python3
"""Regression tests for the Windows-safe Codex save path."""
import importlib.util
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

SCRIPT = Path(__file__).resolve().parents[1] / "gen-mages-guild-code.py"
spec = importlib.util.spec_from_file_location("mages_generator", SCRIPT)
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)


class SaveTests(unittest.TestCase):
    def test_atomic_save_retries_then_succeeds(self):
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder)
            tmp, target = root / "data.tmp", root / "data.json"
            tmp.write_text("complete json", encoding="utf-8")
            original = Path.replace
            calls = {"n": 0}

            def flaky(self, destination):
                calls["n"] += 1
                if calls["n"] < 3:
                    raise PermissionError("simulated Windows lock")
                return original(self, destination)

            with patch.object(Path, "replace", flaky), patch.dict("os.environ", {"MAGES_SAVE_RETRY_SECONDS": "2"}):
                module._atomic_write(tmp, target)
            self.assertEqual(target.read_text(encoding="utf-8"), "complete json")
            self.assertEqual(calls["n"], 3)

    def test_locked_save_fails_loudly_instead_of_claiming_success(self):
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder)
            tmp, target = root / "data.tmp", root / "data.json"
            tmp.write_text("complete json", encoding="utf-8")
            with patch.object(Path, "replace", side_effect=PermissionError("simulated lock")), \
                 patch.object(Path, "write_bytes", side_effect=PermissionError("simulated lock")), \
                 patch.dict("os.environ", {"MAGES_SAVE_RETRY_SECONDS": "1"}):
                with self.assertRaises(RuntimeError) as caught:
                    module._atomic_write(tmp, target)
            self.assertIn("could not save", str(caught.exception))


if __name__ == "__main__":
    unittest.main()
