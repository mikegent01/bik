import re

with open("Reputation-Matrix2/tools/genkit/systems/desk.py", "r") as f:
    content = f.read()

replacement = """        "summary": _clean(raw.get("summary"), lo=20, hi=400, field="summary"),
        "description": _clean(raw.get("description"), lo=240, hi=6000, field="description"),
        "notableFeatures": _string_list(raw.get("notableFeatures"), min_n=3, field="notableFeatures"),
        "relatedArticles": _string_list(raw.get("relatedArticles") or [], min_n=0, field="relatedArticles"),
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

# Replace the end of `events_validate`
content = re.sub(r'        "summary": _clean\(raw\.get\("summary"\), lo=20, hi=400, field="summary"\),\n        "description": _clean\(raw\.get\("description"\), lo=240, hi=6000, field="description"\),\n        "notableFeatures": _string_list\(raw\.get\("notableFeatures"\), min_n=3, field="notableFeatures"\),\n        "relatedArticles": _string_list\(raw\.get\("relatedArticles"\) or \[\], min_n=0, field="relatedArticles"\),\n    }', replacement, content)

with open("Reputation-Matrix2/tools/genkit/systems/desk.py", "w") as f:
    f.write(content)

print("Patched events_validate")
