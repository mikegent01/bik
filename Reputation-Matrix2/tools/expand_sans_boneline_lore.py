#!/usr/bin/env python3
"""Resumable long-form campaign lore pass for every Snowdin Bone-Line member.

Requires a local LM Studio OpenAI-compatible server. Each accepted entry is
1,000-1,500 words and is written directly into data/characters.json.
"""
from __future__ import annotations
import argparse, json, os, re, urllib.request
from pathlib import Path
from datetime import datetime, timezone
ROOT=Path(__file__).resolve().parents[1]; CHAR=ROOT/'data'/'characters.json'; STATE=ROOT/'tools'/'.shop-enrichment'/'sans-boneline-long-lore.json'
IDS={'sans','papyrus','grandpa_semi','lazybones','baby_bones','dirty_brother','will','cursive','has_a_very_special_attack','times_new_roman','prunsel','real_star','brother_killer','my_little_brother','ness','wing_gaster','my_brother','pretty_soon','helvetica','gee_lady','garbage_brother','starman','quantity','speen_kind_of_down_lately','pet_rock','dedan','mystery_man','sans_deltarune'}
PROMPT='''Write 1,000-1,500 words of original campaign lore for this one Snowdin Bone-Line member. Use Markdown headings. Anchor the lore in the supplied character facts and give the member a distinct voice, household role, past, relationships, personal flaw, and at least two surprising but internally consistent connections to the active campaign: Mount Ebott survey, Gamma Division, Snowdin relief network, Underground science anomalies, or cross-world instability. Do not repeat stock descriptions, do not invent sexual content, and do not contradict supplied facts. Return only JSON: {"lore":"..."}.'''
def ask(endpoint,model,c):
 p={'messages':[{'role':'system','content':PROMPT},{'role':'user','content':json.dumps(c,ensure_ascii=False)}],'temperature':.75}
 if model:p['model']=model
 q=urllib.request.Request(endpoint,data=json.dumps(p).encode(),headers={'Content-Type':'application/json'},method='POST')
 with urllib.request.urlopen(q,timeout=300) as r:return json.loads(json.loads(r.read())['choices'][0]['message']['content'])['lore']
def main():
 a=argparse.ArgumentParser();a.add_argument('--endpoint',default=os.getenv('LM_STUDIO_URL','http://127.0.0.1:1234/v1/chat/completions'));a.add_argument('--model',default=os.getenv('LM_STUDIO_MODEL'));a.add_argument('--limit',type=int,default=0);args=a.parse_args()
 chars=json.loads(CHAR.read_text(encoding='utf8')); STATE.parent.mkdir(parents=True,exist_ok=True); state=json.loads(STATE.read_text(encoding='utf8')) if STATE.exists() else {}; done=0
 for c in chars:
  if c['id'] not in IDS or c['id'] in state:continue
  print('Writing',c['name'],flush=True); lore=ask(args.endpoint,args.model,c); words=len(re.findall(r'\b\w+\b',lore))
  if not 1000<=words<=1500: print('Rejected word count',words);continue
  state[c['id']]={'lore':lore,'reviewedAt':datetime.now(timezone.utc).isoformat()}; c['description']=lore; STATE.write_text(json.dumps(state,ensure_ascii=False,indent=2)+'\n',encoding='utf8'); CHAR.write_text(json.dumps(chars,ensure_ascii=False,indent=2)+'\n',encoding='utf8'); done+=1
  if args.limit and done>=args.limit:break
 print('Completed',done,'entries; rerun to resume.')
if __name__=='__main__':main()
