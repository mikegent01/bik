#!/usr/bin/env python3
"""Make Snowdin Bone-Line member cards show their character-article lore."""
from __future__ import annotations
import json,re
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]; TREE=ROOT/'family-tree.js'; CHARS=ROOT/'data'/'characters.json'
start='snowdinBoneLine: {'; end='    successionOrder: ['
chars={c['id']:c for c in json.loads(CHARS.read_text(encoding='utf8'))}
source=TREE.read_text(encoding='utf8'); a=source.index(start); b=source.index(end,a); section=source[a:b]
updated=0
for ident,char in chars.items():
    if not re.search(rf'"id":\s*"{re.escape(ident)}"',section): continue
    # Only touch the generated Bone-Line member object that starts at this id.
    pattern=rf'("id":\s*"{re.escape(ident)}"[\s\S]*?"summary":\s*)"(?:\\.|[^"\\])*"'
    lore=char.get('description') or char.get('summary','')
    replacement=lambda match: match.group(1)+json.dumps(lore,ensure_ascii=False)
    section,count=re.subn(pattern,replacement,section,count=1)
    updated+=count
TREE.write_text(source[:a]+section+source[b:],encoding='utf8')
print(f'Synced expanded character lore into {updated} visible Bone-Line family-tree cards.')
