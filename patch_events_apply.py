import json, re

with open("Reputation-Matrix2/tools/genkit/systems/desk.py", "r") as f:
    content = f.read()

new_apply = """def events_apply(task: Task, record: dict[str, Any]) -> TaskResult:
    with _LOCK:
        rows = _load_list(EVENTS)
        if any(r.get("id") == record["id"] for r in rows):
            return TaskResult(task=task, ok=False, detail="id already present")
            
        analysis_text = record.pop("waluigiAssessment", None)
        aftermath_text = record.pop("aftermath", None)
        
        entry = dict(record)
        entry.update(provenance("events", task.payload.get("model", ""), status="Generated — review"))
        entry["status"] = "Generated — review"
        rows.append(entry)
        atomic_write_json(EVENTS, rows)
        
        changed = [str(EVENTS.relative_to(ROOT))]
        
        if analysis_text:
            aa_path = ROOT / "Reputation-Matrix2" / "data" / "articleAnalyses.json"
            if aa_path.exists():
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
                        "subtitle": "A signed interpretation of the generated record.",
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

content = re.sub(r'def events_apply\(task: Task, record: dict\[str, Any\]\) -> TaskResult:.*?(?=\nEVENT_SPEC =)', new_apply + '\n\n', content, flags=re.DOTALL)

with open("Reputation-Matrix2/tools/genkit/systems/desk.py", "w") as f:
    f.write(content)

print("Patched desk.py")
