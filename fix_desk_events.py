import re

with open("Reputation-Matrix2/tools/genkit/systems/desk.py", "r") as f:
    content = f.read()

events_gen_code = """
def events_generate(task: Task, client: Any, temperature: float) -> dict[str, Any]:
    system, user = events_build_prompt(task)
    # Remove description from JSON schema so we only generate metadata first
    system = system.replace('  "description": "<detailed Waluigi-voiced event record>",\\n', '')
    
    # Instruct the AI to vary the date and focus on obscure lore
    user += "\\n\\nIMPORTANT: Do NOT use the year 1040 BF! Pick a random year between 100 BF and 1035 BF, or even earlier. Focus on minor characters, remote POIs, other countries, and deep lore, NOT main party canon events! Do not invent new major world-altering canon."
    
    if task.last_error:
        user += f"\\n\\nYOUR PREVIOUS ATTEMPT FAILED: {task.last_error}\\nFix this in your next attempt."
        
    try:
        raw = client.complete_json(system, user, temperature=temperature)
    except Exception as e:
        if type(e).__name__ == "ContextExceededError":
            from ..runner import _shorten_prompt
            try:
                raw = client.complete_json(system, _shorten_prompt(user, 0.5), temperature=temperature)
            except Exception:
                raw = client.complete_json(system, _shorten_prompt(user, 0.25), temperature=temperature)
        else:
            raise

    # Phase 2: Generate the article step-by-step
    prog = task.payload.get("_progress")
    if prog: prog("Drafting article sections...")
    
    desc_sys = "You are an encyclopedic chronicler. Write objectively about minor characters and distant regions. Use markdown headers."
    
    # Step A: Get an outline
    outline_user = f"We are writing a historical archive record for '{raw.get('name')}' (Location: {raw.get('location')}, Era: {raw.get('era')}). \\nProvide a 3-5 section outline for this article. Return ONLY a JSON list of strings, like [\\"Prologue: The Rising Tension\\", \\"The Main Conflict\\", \\"Aftermath\\"]. Do not include markdown or explanations."
    
    try:
        outline_resp = client.complete_text(desc_sys, outline_user, temperature=temperature).strip()
        import json
        if outline_resp.startswith("```json"):
            outline_resp = outline_resp.split("```json")[1].split("```")[0].strip()
        elif outline_resp.startswith("```"):
            outline_resp = outline_resp.split("```")[1].split("```")[0].strip()
        outline = json.loads(outline_resp)
        if not isinstance(outline, list): outline = ["Introduction", "Key Events", "Conclusion"]
    except Exception:
        outline = ["Background", "The Incident", "Aftermath"]
        
    # Step B: Generate each section
    final_desc = []
    for i, section_title in enumerate(outline):
        if prog: prog(f"Writing section {i+1}/{len(outline)}: {section_title}...")
        
        section_user = f"Event: {raw.get('name')}\\nSummary: {raw.get('summary')}\\n\\nWe are writing the section: '{section_title}'.\\n"
        if final_desc:
            section_user += f"Previous section ended with:\\n{final_desc[-1][-200:]}\\n\\n"
            
        section_user += "Write this specific section in rich, encyclopedic prose (200-400 words). Use double newlines for paragraphs. DO NOT just output a wall of text. Focus on the lore, factions, and minor unmentioned players. Return ONLY the plaintext content for this section. Do NOT include the section title itself, I will add it."
        
        try:
            section_content = client.complete_text(desc_sys, section_user, temperature=temperature)
            final_desc.append(f"## {section_title}\\n\\n{section_content.strip()}")
        except Exception:
            continue
            
    desc = "\\n\\n".join(final_desc)

    # Auto-expander if STILL too short
    while _words(desc) < 600 and len(desc) > 0:
        if prog: prog(f"Expanding short description ({_words(desc)} words)...")
        expand_sys = "You are an archivist. Continue the historical record in plaintext. Return ONLY the continuation text."
        expand_user = (
            f"You are writing the event '{raw.get('name')}'. Here is what you have so far:\\n\\n{desc[-1000:]}\\n\\n"
            f"This is a good start, but it needs to be longer. Add one more detailed section (add another 300-500 words) with a markdown header (##). "
            f"Return ONLY the NEW continuation text."
        )
        try:
            expansion = client.complete_text(expand_sys, expand_user, temperature=temperature)
            if _words(expansion) > 50:
                desc = desc + "\\n\\n" + expansion
            else:
                break
        except Exception:
            break

    raw["description"] = desc
    return raw
"""

import re
content = re.sub(r'def events_generate\(task: Task, client: Any, temperature: float\) -> dict\[str, Any\]:.*?(?=\ndef [a-z0-9_]+\()', events_gen_code, content, flags=re.DOTALL | re.MULTILINE)

with open("Reputation-Matrix2/tools/genkit/systems/desk.py", "w") as f:
    f.write(content)

print("Updated events_generate")
