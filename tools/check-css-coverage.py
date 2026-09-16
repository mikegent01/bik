#!/usr/bin/env python3
"""Find classes the HTML emits that no stylesheet defines.

Written after two separate bugs of the same shape: a panel was built,
wired in, and shipped, but some of its classes had no rules — so it
rendered as unstyled run-on text and looked like missing content rather
than missing CSS. A function existing is not the same as a feature being
visible, and grep for the function name cannot tell the difference.

Scope is deliberately narrow. It reports only on the class PREFIXES of
the systems this checker was written to protect, because index.html is
full of third-party and legacy markup whose styling lives elsewhere, and
a checker that cries wolf gets ignored. Add a prefix when you add a
system.

Advisory by default; --strict makes unstyled classes a failure.
"""
import re, sys, glob, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WATCHED = ('dyn-', 'fbanner-', 'faction-thumb', 'pclock', 'tokensheet',
           'front-', 'inv-', 'faiths-', 'faith-', 'intel-', 'rep-op-pill',
           'rep-factor-chip')

def main():
    html = open(os.path.join(ROOT, 'index.html'), encoding='utf-8').read()

    used = {}
    for m in re.finditer(r'class="([^"{}]*)"', html):
        for c in m.group(1).split():
            # skip template-interpolated names; they cannot be checked statically
            if re.fullmatch(r'[a-z][a-z0-9-]*', c):
                used.setdefault(c, html[:m.start()].count('\n') + 1)

    css = ''
    for f in glob.glob(os.path.join(ROOT, 'Reputation-Matrix2/app/styles/**/*.css'), recursive=True):
        css += open(f, encoding='utf-8', errors='ignore').read()
    css += ''.join(re.findall(r'<style[^>]*>([\s\S]*?)</style>', html))
    defined = set(re.findall(r'\.([a-z][a-z0-9-]*)', css))

    missing = sorted((c, ln) for c, ln in used.items()
                     if c.startswith(WATCHED) and c not in defined)

    strict = '--strict' in sys.argv
    for c, ln in missing:
        print(f"  {'FAIL' if strict else '·  (advisory)'} .{c} emitted at index.html:{ln}, no rule in any stylesheet")

    watched_n = sum(1 for c in used if c.startswith(WATCHED))
    if missing:
        print(f"  result           : {'FAIL' if strict else 'PASS'} "
              f"{watched_n} watched classes, {len(missing)} unstyled")
        return 1 if strict else 0
    print(f"  result           : PASS {watched_n} watched classes, all styled")
    return 0

if __name__ == '__main__':
    sys.exit(main())
