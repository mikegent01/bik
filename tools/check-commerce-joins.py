#!/usr/bin/env python3
"""Validate the id joins between wallets, items and the banking ledger.

Written after the wahinterface prototype had to guess that `archie` was
"Archie Miser". Guessing is not safe here: TWO different wallets are named
"Archie Miser" (`archie`, Main Party; and `archie_miser`, Supporting Cast),
and a fuzzy match on "Agent L (Luigi)" resolved to `agent_t` — a different
character. Both joins now run on explicit ids, and this checker makes sure
they keep pointing at something real.

FAIL  an *Id that names a wallet which does not exist (a dangling join)
FAIL  a duplicate item id
ADVISORY  an item or ledger party with no id at all (genuinely unowned, or
          an institution with no wallet) -- these are legitimate, but worth
          counting so the number cannot creep up unnoticed.
"""
import json, os, sys
from collections import Counter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
D = os.path.join(ROOT, 'Reputation-Matrix2', 'data')

def load(p):
    with open(os.path.join(D, p), encoding='utf-8') as f:
        return json.load(f)

def main():
    strict = '--strict' in sys.argv
    wallets = load('commerce/wallets.json')
    keys = {k for k in wallets if not k.startswith('_')}
    items = load('commerce/items.json')
    bank = load('banking.json')

    fails, advisories = [], []

    # duplicate item ids
    ids = [i['id'] for i in items['items']]
    for iid, n in Counter(ids).items():
        if n > 1:
            fails.append(f"item id {iid!r} appears {n} times")

    # item owners
    unowned = 0
    for i in items['items']:
        oid = i.get('ownerId')
        if oid is None:
            unowned += 1
            if not i.get('ownerUnresolved'):
                advisories.append(f"item {i['id']}: no ownerId and no ownerUnresolved note")
        elif oid not in keys:
            fails.append(f"item {i['id']}: ownerId {oid!r} is not a wallet")

    # ledger parties
    noid = 0
    checks = [('debts', [('debtorId', 'debtor'), ('creditorId', 'creditor')]),
              ('loans', [('borrowerId', 'borrower'), ('lenderId', 'lender')]),
              ('bank_accounts', [('ownerId', 'owner')])]
    for section, pairs in checks:
        for rec in bank.get(section, []):
            for idf, namef in pairs:
                if namef not in rec:
                    continue
                v = rec.get(idf)
                if v is None:
                    noid += 1
                elif v not in keys:
                    fails.append(f"{section} {rec.get('id','?')}: {idf} {v!r} is not a wallet")

    for f in fails:
        print(f"  FAIL {f}")
    for a in advisories[:10]:
        print(f"  ·  (advisory) {a}")

    owned = len(ids) - unowned
    print(f"  result           : {'FAIL' if fails else 'PASS'} "
          f"{len(ids)} items ({owned} owned, {unowned} unowned), "
          f"{len(keys)} wallets, {noid} ledger parties without a wallet")
    return 1 if fails and strict or fails else 0

if __name__ == '__main__':
    sys.exit(main())
