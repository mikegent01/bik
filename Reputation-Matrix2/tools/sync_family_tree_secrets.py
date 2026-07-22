#!/usr/bin/env python3
"""Mirror interactive Snowdin Bone-Line secrets into data/characters.json.

family-tree.js is the authoritative interactive source for the Bone-Line’s
intel-gated secret cards. This script extracts those cards and saves them under
`familyTreeSecrets` on the matching encyclopedia character records.
"""
from __future__ import annotations
import json, re
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
TREE=ROOT/'family-tree.js'; CHARACTERS=ROOT/'data'/'characters.json'
START='snowdinBoneLine: {'; END='    successionOrder: ['

def balanced(text: str, start: int, opening: str='[', closing: str=']') -> str:
    depth=0; quoted=False; escaped=False
    for index in range(start,len(text)):
        ch=text[index]
        if quoted:
            if escaped: escaped=False
            elif ch=='\\': escaped=True
            elif ch=='"': quoted=False
            continue
        if ch=='"': quoted=True
        elif ch==opening: depth+=1
        elif ch==closing:
            depth-=1
            if depth==0:return text[start:index+1]
    raise ValueError('Unclosed JSON array in family-tree.js')

def extract() -> dict[str,list[dict]]:
    source=TREE.read_text(encoding='utf8'); section=source[source.index(START):source.index(END,source.index(START))]
    results={}
    for match in re.finditer(r'"id":\s*"([^"]+)"',section):
        ident=match.group(1); next_id=re.search(r'\n\s*\{\n\s*"id":',section[match.end():])
        member=section[match.start():match.end()+next_id.start() if next_id else len(section)]
        secret_match=re.search(r'"secrets":\s*\[',member)
        if not secret_match:continue
        start=secret_match.start()+secret_match.group().rfind('[')
        results[ident]=json.loads(balanced(member,start))
    return results

def main():
    secrets=extract(); chars=json.loads(CHARACTERS.read_text(encoding='utf8')); changed=0
    for char in chars:
        if char['id'] not in secrets:continue
        if char.get('familyTreeSecrets')!=secrets[char['id']]:
            char['familyTreeSecrets']=secrets[char['id']]
            char['familyTreeSource']='family-tree.js / Snowdin Bone-Line'
            changed+=1
    temporary=CHARACTERS.with_suffix('.tmp'); temporary.write_text(json.dumps(chars,ensure_ascii=False,indent=2)+'\n',encoding='utf8');temporary.replace(CHARACTERS)
    print(f'Synced {len(secrets)} Bone-Line secret sets; updated {changed} character records.')
if __name__=='__main__':main()
