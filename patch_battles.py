with open("Reputation-Matrix2/tools/genkit/systems/desk.py", "r") as f:
    content = f.read()

addition = """
    # Phase 3: Participants
    if prog: prog("Determining participants...")
    part_sys = "You are an archivist. Extract the participants from the event. Return valid JSON containing a single key 'participants' mapped to a list of objects: [{'id': 'snake_case_id', 'name': 'Full Name', 'role': 'What they did'}]."
    try:
        part_resp = client.complete_json(part_sys, f"Event Description:\\n{desc[-1500:]}\\n\\nList 3-5 participants.", temperature=temperature)
        if "participants" in part_resp:
            raw["participants"] = part_resp["participants"]
    except Exception as e:
        print("Failed participants:", e)
        raw["participants"] = [{"id": "unknown_operator", "name": "Unknown Operator", "role": "Unrecorded"}]

    # Phase 4: XP Awards
    if prog: prog("Calculating XP Awards...")
    xp_sys = "You are Waluigi, auditing the session. Award XP to the participants. Return valid JSON containing a single key 'xpAwards' mapped to a list of objects: [{'character': 'snake_case_id', 'amount': 100, 'reason': 'Why they got it', 'type': 'Combat XP'}]."
    try:
        xp_resp = client.complete_json(xp_sys, f"Event Description:\\n{desc[-1500:]}\\n\\nAssign XP to 2-3 participants.", temperature=temperature)
        if "xpAwards" in xp_resp:
            raw["xpAwards"] = xp_resp["xpAwards"]
    except Exception as e:
        print("Failed xpAwards:", e)
        raw["xpAwards"] = []

    # Phase 5: Waluigi's Assessment (Investigative stuff)
    if prog: prog("Drafting Waluigi's Assessment...")
    wal_sys = "You are Waluigi. Write a short, cynical, objective assessment (150 words) of the event's consequences and what it means for the world's factions. Use your signature 'WAH.' at the end. Return ONLY plaintext."
    try:
        wal_resp = client.complete_text(wal_sys, f"Event Description:\\n{desc[-1500:]}", temperature=temperature).strip()
        raw["waluigiAssessment"] = wal_resp
    except Exception as e:
        print("Failed waluigiAssessment:", e)
        raw["waluigiAssessment"] = "Waluigi has filed this record, but the intelligence is too sparse for a full tactical assessment. WAH."

    # Phase 6: Related Investigative Article
    if prog: prog("Drafting Related Investigative Article (Aftermath)...")
    inv_sys = "You are an intelligence agent. Write a short follow-up investigative report (200 words) about the aftermath of this event. Return ONLY plaintext."
    try:
        inv_resp = client.complete_text(inv_sys, f"Event Description:\\n{desc[-1500:]}\\n\\nWrite the aftermath.", temperature=temperature).strip()
        raw["aftermath"] = inv_resp
    except Exception as e:
        print("Failed aftermath:", e)
        raw["aftermath"] = "The long-term consequences of this event remain undocumented in the archives."
"""

content = content.replace('    raw["description"] = desc\n    return raw\n\n\ndef _side', '    raw["description"] = desc\n' + addition + '\n    return raw\n\n\ndef _side')

replacement = """        "status": "Generated — review",
    }
    
    if "participants" in raw:
        res["participants"] = raw["participants"]
    if "xpAwards" in raw:
        res["xpAwards"] = raw["xpAwards"]
    if "waluigiAssessment" in raw:
        res["waluigiAssessment"] = raw["waluigiAssessment"]
    if "aftermath" in raw:
        res["aftermath"] = raw["aftermath"]
    if "timeWindow" in raw:
        res["timeWindow"] = raw["timeWindow"]
        
    return res
"""

content = content.replace('        "status": "Generated — review",\n    }\n    return res', replacement)

# For the battles_apply we use replace manually
import re
new_apply = """def battles_apply(task: Task, record: dict[str, Any]) -> TaskResult:
    with _LOCK:
        rows = _load_list(BATTLES)
        if any(r.get("id") == record["id"] for r in rows):
            return TaskResult(task=task, ok=False, detail="id already present")
            
        analysis_text = record.pop("waluigiAssessment", None)
        aftermath_text = record.pop("aftermath", None)
            
        entry = dict(record)
        entry.update(provenance("battles", task.payload.get("model", ""), status="Generated — review"))
        entry["status"] = "Generated — review"
        rows.append(entry)
        atomic_write_json(BATTLES, rows)
        
        changed = [str(BATTLES.relative_to(ROOT))]
        
        if analysis_text:
            aa_path = ROOT / "Reputation-Matrix2" / "data" / "articleAnalyses.json"
            if aa_path.exists():
                import json
                with open(aa_path, "r", encoding="utf-8") as f:
                    aa_data = json.load(f)
                aa_list = aa_data.setdefault("analyses", [])
                aa_id = f"{record['id']}_waluigi_analysis"
                if not any(a.get("id") == aa_id for a in aa_list):
                    aa_list.append({
                        "id": aa_id,
                        "sourceArticle": record["id"],
                        "title": record.get("title") or record.get("name"),
                        "kicker": "Waluigi's Article Analysis",
                        "subtitle": "A signed interpretation of the generated battle record.",
                        "archivist": "Waluigi, Auditor-General",
                        "filed": record.get("date", "Unknown Date"),
                        "summary": record.get("summary", ""),
                        "thesis": analysis_text,
                        "sections": []
                    })
                    atomic_write_json(aa_path, aa_data)
                    changed.append(str(aa_path.relative_to(ROOT)))

        if aftermath_text:
            inv_path = ROOT / "Reputation-Matrix2" / "data" / "investigations.json"
            if inv_path.exists():
                import json
                with open(inv_path, "r", encoding="utf-8") as f:
                    inv_data = json.load(f)
                inv_list = inv_data.setdefault("investigations", [])
                inv_id = f"inv_{record['id']}"
                if not any(i.get("id") == inv_id for i in inv_list):
                    inv_list.append({
                        "id": inv_id,
                        "codename": str(record.get("name", "Investigation")).upper(),
                        "title": f"Aftermath: {record.get('name')}",
                        "subtitle": "The archive requires answers.",
                        "status": "active",
                        "classification": "Generated Investigation",
                        "opened": record.get("date", "Unknown"),
                        "archivist": "Waluigi, Auditor-General",
                        "icon": "🕵️",
                        "accent": "#4a9c6d",
                        "plainSummary": [{"point": aftermath_text}],
                        "leads": [],
                        "sessions": [{"id": f"s_{record['id']}", "label": str(record.get("name", "")), "event": record["id"]}],
                        "relatedEvents": [record["id"]],
                        "exhibits": []
                    })
                    atomic_write_json(inv_path, inv_data)
                    changed.append(str(inv_path.relative_to(ROOT)))

    return TaskResult(
        task=task, ok=True, detail=record["name"], record=record,
        changed_paths=changed,
    )"""

content = re.sub(r'def battles_apply\(task: Task, record: dict\[str, Any\]\) -> TaskResult:.*?(?=\nBATTLE_SPEC =)', new_apply + '\n\n', content, flags=re.DOTALL)

with open("Reputation-Matrix2/tools/genkit/systems/desk.py", "w") as f:
    f.write(content)

print("Patched desk.py battles properly")
