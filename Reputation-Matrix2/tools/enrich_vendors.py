#!/usr/bin/env python3
"""Create a reviewed vendor database using the local LM Studio server."""
from __future__ import annotations
import argparse, json, subprocess, sys, urllib.request
from datetime import datetime, timezone
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]; SOURCE=ROOT/'shop-items'/'vendors.js'; OUT=ROOT/'tools'/'.shop-enrichment'/'vendors-reviewed.json'
PROMPT='''Return JSON only. You are editing one whimsical D&D-inspired shop vendor. Preserve id, name, icon, markup, trustLevel and requirements. Return exactly {"description":string,"warioComment":string,"shippingNotes":string,"vendorDetail":string}. Make it specific, original, concise, and internally consistent.'''
def vendors():
 code=f"const m=await import({json.dumps(SOURCE.resolve().as_uri())});console.log(JSON.stringify(m.VENDORS));"
 r=subprocess.run(['node','--input-type=module','-e',code],capture_output=True); return json.loads(r.stdout.decode('utf8'))
def ask(endpoint,model,v):
 p={'messages':[{'role':'system','content':PROMPT},{'role':'user','content':json.dumps(v)}],'temperature':.55}
 if model:p['model']=model
 q=urllib.request.Request(endpoint,data=json.dumps(p).encode(),headers={'Content-Type':'application/json'},method='POST')
 with urllib.request.urlopen(q,timeout=180) as r:return json.loads(json.loads(r.read())['choices'][0]['message']['content'])
def main():
 ap=argparse.ArgumentParser();ap.add_argument('--endpoint',default='http://127.0.0.1:1234/v1/chat/completions');ap.add_argument('--model');ap.add_argument('--limit',type=int,default=0);ap.add_argument('--gui',action='store_true');a=ap.parse_args()
 if a.gui: print('Vendor review uses the selected/default LM Studio model. Run without --gui or use Shop Studio; vendor GUI is coming next.')
 data=vendors(); OUT.parent.mkdir(parents=True,exist_ok=True); reviewed=json.loads(OUT.read_text(encoding='utf8')) if OUT.exists() else {}
 done=0
 for key,vendor in data.items():
  if key in reviewed: continue
  if a.limit and done>=a.limit:break
  print('Reviewing',vendor['name'],flush=True)
  answer=ask(a.endpoint,a.model,vendor)
  if set(answer)!={'description','warioComment','shippingNotes','vendorDetail'}: raise ValueError(f'Bad response for {key}')
  reviewed[key]={**vendor,**answer,'aiReviewedAt':datetime.now(timezone.utc).isoformat()}; OUT.write_text(json.dumps(reviewed,ensure_ascii=False,indent=2)+'\n',encoding='utf8');done+=1
 print(f'Vendor database: {OUT} ({len(reviewed)} reviewed)')
if __name__=='__main__':main()
