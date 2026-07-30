#!/usr/bin/env python3
"""Double-click / plain `python run_gui.py` launcher for the WahSim GUI.

Deliberately dependency-free and location-independent: it works whether you run
it from inside the wahsim folder, from the repo root, or by double-clicking on
Windows. Use this if you don't want to think about `-m` and packages.
"""
import os
import sys

# Make the repo root importable no matter where this was launched from.
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from wahsim.gui import serve  # noqa: E402

if __name__ == '__main__':
    port = 8765
    live = '--live' in sys.argv
    for i, a in enumerate(sys.argv):
        if a in ('--port', '-p') and i + 1 < len(sys.argv):
            try:
                port = int(sys.argv[i + 1])
            except ValueError:
                pass
    serve(port=port, live=live)
