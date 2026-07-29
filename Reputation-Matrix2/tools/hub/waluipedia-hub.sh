#!/usr/bin/env bash
# Start the Waluipedia Hub and open it in your browser.
cd "$(dirname "$0")" || exit 1
exec python3 server.py "$@"
