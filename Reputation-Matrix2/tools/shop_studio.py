#!/usr/bin/env python3
"""Starting point for all Wario shop maintenance tools."""
from __future__ import annotations
import subprocess, sys
from pathlib import Path
try:
    import tkinter as tk
    from tkinter import ttk
except ImportError as error:
    raise SystemExit(f'Tkinter is required: {error}')

TOOLS = Path(__file__).resolve().parent

def launch(script: str, *args: str) -> None:
    subprocess.Popen([sys.executable, str(TOOLS / script), *args], cwd=TOOLS.parent)

root = tk.Tk(); root.title("Wario Shop Studio"); root.minsize(620, 390)
frame = ttk.Frame(root, padding=22); frame.pack(fill="both", expand=True)
ttk.Label(frame, text="WARIO SHOP STUDIO", font=("Arial", 20, "bold")).pack(pady=(0, 8))
ttk.Label(frame, text="Run a review, keep world context current, clean data, or inspect shop integrity.", wraplength=540).pack(pady=(0, 18))
buttons = [
    ("Review shop items", "AI descriptions, effects, rule details, prices, requirements, and timestamps.", lambda: launch("enrich_shop_items.py", "--gui")),
    ("Build vendor database", "Review vendor descriptions, Wario comments, shipping, markup, and trust data.", lambda: launch("enrich_vendors.py")),
    ("Start world-context watcher", "Continuously rebuild event/battle context for AI reviews.", lambda: launch("generate_shop_context.py", "--watch")),
    ("Validate and report", "Check item JSON and write duplicate/integrity report.", lambda: launch("validate_shop_data.py")),
    ("Remove weaker duplicates", "Keep the more complete duplicate record (writes shop chunks).", lambda: launch("validate_shop_data.py", "--remove-worse")),
    ("Fix spaced object keys", "Remove leading spaces such as ' Pauline_mic' from source keys.", lambda: launch("normalize_shop_keys.py")),
]
for title, detail, command in buttons:
    row = ttk.Frame(frame); row.pack(fill="x", pady=5)
    ttk.Button(row, text=title, command=command, width=27).pack(side="left", padx=(0, 10))
    ttk.Label(row, text=detail, wraplength=300).pack(side="left", fill="x")
ttk.Label(frame, text="Each tool is resumable; generated checkpoints live under tools/.shop-enrichment/.", foreground="#666").pack(pady=(18, 0))
root.mainloop()
