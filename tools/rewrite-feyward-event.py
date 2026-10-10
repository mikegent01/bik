#!/usr/bin/env python3
import json, os, sys

ROOT = "/home/user/bik"
DATA = os.path.join(ROOT, "Reputation-Matrix2", "data")

EVENT_ID = "feyward_the_soul_ring_and_the_twenty_one_day_cut"
COMMENTARY_ID = "feyward_the_soul_ring_and_the_twenty_one_day_cut_commentary"

# Let's inspect current events.json and commentaries.json
with open(os.path.join(DATA, "events.json"), "r", encoding="utf-8") as f:
    events = json.load(f)

with open(os.path.join(DATA, "commentaries.json"), "r", encoding="utf-8") as f:
    comm_data = json.load(f)

print(f"Events loaded: {len(events)}, commentaries loaded: {len(comm_data.get('commentaries', []))}")
