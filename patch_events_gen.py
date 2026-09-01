import re

with open("Reputation-Matrix2/tools/genkit/systems/desk.py", "r") as f:
    content = f.read()

addition = """
    raw["description"] = desc

    # Phase 3: Participants
    if prog: prog("Determining participants...")
    part_sys = "You are an archivist. Extract the participants from the event. Return valid JSON containing a single key 'participants' mapped to a list of objects: [{'id': 'snake_case_id', 'name': 'Full Name', 'role': 'What they did'}]."
    try:
        part_resp = client.complete_json(part_sys, f"Event Description:\\n{desc[-1500:]}\\n\\nList 3-5 participants.", temperature=temperature)
        if "participants" in part_resp:
            raw["participants"] = part_resp["participants"]
    except Exception as e:
        print("Failed participants:", e)

    # Phase 4: XP Awards
    if prog: prog("Calculating XP Awards...")
    xp_sys = "You are Waluigi, auditing the session. Award XP to the participants. Return valid JSON containing a single key 'xpAwards' mapped to a list of objects: [{'character': 'snake_case_id', 'amount': 100, 'reason': 'Why they got it', 'type': 'Combat XP'}]."
    try:
        xp_resp = client.complete_json(xp_sys, f"Event Description:\\n{desc[-1500:]}\\n\\nAssign XP to 2-3 participants.", temperature=temperature)
        if "xpAwards" in xp_resp:
            raw["xpAwards"] = xp_resp["xpAwards"]
    except Exception as e:
        print("Failed xpAwards:", e)

    # Phase 5: Waluigi's Assessment (Investigative stuff)
    if prog: prog("Drafting Waluigi's Assessment...")
    wal_sys = "You are Waluigi. Write a short, cynical, objective assessment (150 words) of the event's consequences and what it means for the world's factions. Use your signature 'WAH.' at the end. Return ONLY plaintext."
    try:
        wal_resp = client.complete_text(wal_sys, f"Event Description:\\n{desc[-1500:]}", temperature=temperature).strip()
        raw["waluigiAssessment"] = wal_resp
    except Exception as e:
        print("Failed waluigiAssessment:", e)

    # Phase 6: Related Investigative Article
    if prog: prog("Drafting Related Investigative Article (Aftermath)...")
    inv_sys = "You are an intelligence agent. Write a short follow-up investigative report (200 words) about the aftermath of this event. Return ONLY plaintext."
    try:
        inv_resp = client.complete_text(inv_sys, f"Event Description:\\n{desc[-1500:]}\\n\\nWrite the aftermath.", temperature=temperature).strip()
        raw["aftermath"] = inv_resp
    except Exception as e:
        print("Failed aftermath:", e)

    return raw
"""

content = content.replace('    raw["description"] = desc\n    return raw\n\n\ndef _parse_year', addition + '\n\ndef _parse_year')

with open("Reputation-Matrix2/tools/genkit/systems/desk.py", "w") as f:
    f.write(content)

print("Patched desk.py")
