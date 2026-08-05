"""Best-effort check for obvious local HTML/CSS/JS path mistakes."""
from pathlib import Path
import re
root = Path(__file__).resolve().parents[1]
missing=[]
for p in root.rglob('*'):
    if '.git' in p.parts or p.suffix not in {'.html','.css','.js'}: continue
    try: text=p.read_text()
    except (UnicodeDecodeError,OSError): continue
    for value in re.findall(r'''(?:src|href|import\(|fetch\()\s*=?\s*["'`]([^"'`?#$]+)''', text):
        if not value.startswith(('.', '/')) or value.startswith(('http:', 'https:', 'data:')): continue
        target=(p.parent/value).resolve()
        if not target.exists(): missing.append(f'{p.relative_to(root)} -> {value}')
print('\n'.join(sorted(set(missing))))
print(f'Obvious missing local paths: {len(set(missing))}')
raise SystemExit(1 if missing else 0)
