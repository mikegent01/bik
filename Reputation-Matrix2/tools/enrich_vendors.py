#!/usr/bin/env python3
"""Create a reviewed vendor database using the local LM Studio server."""
from __future__ import annotations

import argparse
import json
import re
import stat
import subprocess
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
DATA_SOURCE = ROOT / 'data' / 'shop-items' / 'vendors.js'
LEGACY_SOURCE = ROOT / 'shop-items' / 'vendors.js'
SOURCE = DATA_SOURCE if DATA_SOURCE.exists() else LEGACY_SOURCE
OUT = ROOT / 'tools' / '.shop-enrichment' / 'vendors-reviewed.json'
PROMPT = '''Return JSON only. You are editing one whimsical D&D-inspired shop vendor. Preserve id, name, icon, markup, trustLevel and requirements. Return exactly {"description":string,"warioComment":string,"shippingNotes":string,"vendorDetail":string}. Make it specific, original, concise, and internally consistent.'''


def vendors() -> dict[str, Any]:
    code = f"const m=await import({json.dumps(SOURCE.resolve().as_uri())});console.log(JSON.stringify(m.VENDORS));"
    result = subprocess.run(['node', '--input-type=module', '-e', code], capture_output=True, text=False)
    if result.returncode:
        raise RuntimeError(result.stderr.decode('utf-8', errors='replace'))
    return json.loads(result.stdout.decode('utf-8'))


def extract_json_object(text: str) -> dict[str, Any]:
    text = text.strip()
    text = re.sub(r'^```(?:json)?\s*|\s*```$', '', text, flags=re.IGNORECASE | re.DOTALL).strip()
    try:
        value = json.loads(text)
    except json.JSONDecodeError:
        match = re.search(r'\{.*\}', text, flags=re.DOTALL)
        if not match:
            raise
        value = json.loads(match.group(0))
    if not isinstance(value, dict):
        raise ValueError('LM Studio response was JSON, but not an object')
    return value


def ask(endpoint: str, model: str | None, vendor: dict[str, Any]) -> dict[str, Any]:
    payload: dict[str, Any] = {
        'messages': [
            {'role': 'system', 'content': PROMPT},
            {'role': 'user', 'content': json.dumps(vendor, ensure_ascii=False)},
        ],
        'temperature': .55,
    }
    if model:
        payload['model'] = model
    request = urllib.request.Request(
        endpoint,
        data=json.dumps(payload).encode('utf-8'),
        headers={'Content-Type': 'application/json'},
        method='POST',
    )
    try:
        with urllib.request.urlopen(request, timeout=180) as response:
            raw = response.read().decode('utf-8', errors='replace')
    except urllib.error.URLError as error:
        raise RuntimeError(f'LM Studio vendor request failed: {error}') from error
    try:
        envelope = json.loads(raw)
        content = envelope['choices'][0]['message']['content']
        return extract_json_object(content)
    except (KeyError, IndexError, TypeError, json.JSONDecodeError, ValueError) as error:
        raise RuntimeError(f'Could not parse LM Studio vendor JSON. Raw response starts: {raw[:500]!r}') from error


def replace_with_retry(temporary: Path, target: Path, attempts: int = 12) -> None:
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
    raise PermissionError(f'Could not replace {target}; close programs holding it. Last error: {last_error}')


def save_reviewed(reviewed: dict[str, Any]) -> None:
    OUT.parent.mkdir(parents=True, exist_ok=True)
    temporary = OUT.with_suffix('.tmp')
    temporary.write_text(json.dumps(reviewed, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    replace_with_retry(temporary, OUT)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument('--endpoint', default='http://127.0.0.1:1234/v1/chat/completions')
    parser.add_argument('--model')
    parser.add_argument('--limit', type=int, default=0)
    parser.add_argument('--gui', action='store_true')
    args = parser.parse_args()
    if args.gui:
        print('Vendor review uses the selected/default LM Studio model. Run without --gui or use Shop Studio; vendor GUI is coming next.')
    data = vendors()
    try:
        reviewed = json.loads(OUT.read_text(encoding='utf-8')) if OUT.exists() else {}
    except json.JSONDecodeError:
        OUT.replace(OUT.with_suffix(f'.corrupt-{int(time.time())}.json'))
        reviewed = {}
    done = 0
    for key, vendor in data.items():
        if key in reviewed:
            continue
        if args.limit and done >= args.limit:
            break
        print('Reviewing', vendor['name'], flush=True)
        answer = ask(args.endpoint, args.model, vendor)
        if set(answer) != {'description', 'warioComment', 'shippingNotes', 'vendorDetail'}:
            raise ValueError(f'Bad response for {key}: {answer}')
        reviewed[key] = {**vendor, **answer, 'aiReviewedAt': datetime.now(timezone.utc).isoformat()}
        save_reviewed(reviewed)
        done += 1
    print(f'Vendor database: {OUT} ({len(reviewed)} reviewed)')


if __name__ == '__main__':
    main()
