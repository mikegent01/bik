#!/usr/bin/env python3
"""
Updates Eager's character records to standard non-PC / field companion standards,
and validates all character records in characters.json and tools/item sheet examples/.

Changes:
  1. characters.json (id: eager):
     - Sets race to "Toad (Catastrophe Scout)"
     - Updates status to "Active — catastrophe scout and field operator with Disaster Inc. / Liberated Toads"
     - Updates affiliation to "Disaster Inc. / Liberated Toads"
     - Refines summary to clarify his role as a field companion and scout.

  2. fvtt-Actor-eager-level-4-catastrophe-scout-player.json:
     - Renames actor to "Eager — Level 4 Catastrophe Scout"
     - Updates flags.bik.playerCharacter -> False
     - Updates flags.bik.npc -> True
     - Ensures system.details.race and background IDs match embedded item _ids.
     - Ensures all attunements are clean ("").

  3. Runs full validation across all records and files.
"""

import json
import glob
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CHARS_PATH = os.path.join(ROOT, 'Reputation-Matrix2', 'data', 'characters.json')
EAGER_ACTOR_PATH = os.path.join(ROOT, 'Reputation-Matrix2', 'tools', 'item sheet examples', 'fvtt-Actor-eager-level-4-catastrophe-scout-player.json')

def update_eager_characters_json():
    with open(CHARS_PATH, 'r', encoding='utf-8') as f:
        chars = json.load(f)

    eager = next((c for c in chars if c['id'] == 'eager'), None)
    if not eager:
        print("Error: Could not find 'eager' in characters.json")
        return

    eager['race'] = "Toad (Catastrophe Scout)"
    eager['status'] = "Active — catastrophe scout and field operator with Disaster Inc. / Liberated Toads"
    eager['affiliation'] = "Disaster Inc. / Liberated Toads"
    eager['summary'] = (
        "Eager is a Toad catastrophe scout who has a supernatural knack for finding the worst possible place to be and being there. "
        "Though not currently assigned as an active player character, he serves as a resilient field companion, scout, and quest generator for Disaster Inc."
    )

    with open(CHARS_PATH, 'w', encoding='utf-8') as f:
        json.dump(chars, f, indent=2, ensure_ascii=False)

    print("Updated Eager in characters.json.")

def update_eager_actor_json():
    if not os.path.exists(EAGER_ACTOR_PATH):
        print("Error: Eager actor JSON not found at", EAGER_ACTOR_PATH)
        return

    with open(EAGER_ACTOR_PATH, 'r', encoding='utf-8') as f:
        actor = json.load(f)

    actor['name'] = "Eager — Level 4 Catastrophe Scout"
    if 'prototypeToken' in actor:
        actor['prototypeToken']['name'] = "Eager"

    bik_flags = actor.get('flags', {}).get('bik', {})
    bik_flags['playerCharacter'] = False
    bik_flags['npc'] = True

    # Ensure race/bg IDs match items
    details = actor.get('system', {}).get('details', {})
    items = actor.get('items', [])

    actual_race = next((it for it in items if it.get('type') in ['race', 'species']), None)
    actual_bg = next((it for it in items if it.get('type') == 'background'), None)

    if actual_race and actual_race.get('_id'):
        details['race'] = actual_race['_id']
    if actual_bg and actual_bg.get('_id'):
        details['background'] = actual_bg['_id']

    # Clean any attunement="NaN"
    for it in items:
        if it.get('system', {}).get('attunement') == 'NaN':
            it['system']['attunement'] = ""

    with open(EAGER_ACTOR_PATH, 'w', encoding='utf-8') as f:
        json.dump(actor, f, indent=2, ensure_ascii=False)

    print("Updated Eager Foundry actor JSON.")

def validate_all():
    print("\n=== RUNNING FULL VALIDATION ===")
    
    # 1. Validate characters.json
    with open(CHARS_PATH, 'r', encoding='utf-8') as f:
        chars = json.load(f)

    events_path = os.path.join(ROOT, 'Reputation-Matrix2', 'data', 'events.json')
    battles_path = os.path.join(ROOT, 'Reputation-Matrix2', 'data', 'battles.json')
    
    events = json.load(open(events_path, 'r', encoding='utf-8')) if os.path.exists(events_path) else []
    battles = json.load(open(battles_path, 'r', encoding='utf-8')) if os.path.exists(battles_path) else []

    known = {e['id'] for e in events} | {b['id'] for b in battles}

    char_ids = [c.get('id') for c in chars]
    assert len(char_ids) == len(set(char_ids)), "Duplicate character IDs found in characters.json"

    for c in chars:
        for field in ('id', 'name', 'status'):
            assert c.get(field), f"Character {c.get('id')}: missing required field '{field}'"

    print(f"✅ characters.json: {len(chars)} character records valid.")

    # 2. Validate Foundry actor files
    actor_files = sorted(glob.glob(os.path.join(ROOT, 'Reputation-Matrix2', 'tools', 'item sheet examples', '*.json')))
    for fpath in actor_files:
        fname = os.path.basename(fpath)
        with open(fpath, 'r', encoding='utf-8') as f:
            a = json.load(f)

        assert a.get('type') in ['character', 'npc'], f"{fname}: invalid actor type"
        assert 'system' in a and 'items' in a, f"{fname}: missing system or items"

        items = a.get('items', [])
        for it in items:
            assert it.get('name') and it.get('type') and isinstance(it.get('system'), dict), f"{fname}: invalid item {it}"

        details = a.get('system', {}).get('details', {})
        race_ref = details.get('race')
        bg_ref = details.get('background')

        actual_races = [it['_id'] for it in items if it.get('type') in ['race', 'species'] and '_id' in it]
        actual_bgs = [it['_id'] for it in items if it.get('type') == 'background' and '_id' in it]

        if race_ref and actual_races:
            assert race_ref in actual_races, f"{fname}: race ID mismatch ({race_ref} vs {actual_races})"
        if bg_ref and actual_bgs:
            assert bg_ref in actual_bgs, f"{fname}: background ID mismatch ({bg_ref} vs {actual_bgs})"

        nan_count = sum(1 for it in items if it.get('system', {}).get('attunement') == 'NaN')
        assert nan_count == 0, f"{fname}: contains {nan_count} items with attunement='NaN'"

        print(f"✅ {fname}: {len(items)} items valid.")

def main():
    update_eager_characters_json()
    update_eager_actor_json()
    validate_all()

if __name__ == '__main__':
    main()
