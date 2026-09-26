#!/usr/bin/env python3
"""Queue a Qwen Image Edit API workflow through local ComfyUI."""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))
from comfy_workflow import DEFAULT_COMFY, queue_from_files  # noqa: E402


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--workflow", type=Path, required=True,
                        help="ComfyUI Save (API Format) JSON; a UI graph is rejected")
    parser.add_argument("--reference", type=Path, action="append", required=True,
                        help="repository image to send to a LoadImage node; repeatable")
    parser.add_argument("--prompt", required=True)
    parser.add_argument("--negative", default="text, watermark, logo, duplicate subject, distorted anatomy")
    parser.add_argument("--seed", type=int)
    parser.add_argument("--output-prefix", default="waluipedia/qwen-edit")
    parser.add_argument("--comfy", default=DEFAULT_COMFY)
    parser.add_argument("--wait", action="store_true")
    args = parser.parse_args()
    for path in [args.workflow, *args.reference]:
        if not path.is_file():
            parser.error(f"file not found: {path}")
    try:
        result = queue_from_files(args.workflow, args.reference, args.prompt, args.negative,
                                  base=args.comfy, seed=args.seed,
                                  filename_prefix=args.output_prefix, wait=args.wait)
    except Exception as error:  # short CLI failure; no retry loop that can freeze
        print(f"error: {error}", file=sys.stderr)
        return 1
    print(json.dumps(result, indent=2, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
