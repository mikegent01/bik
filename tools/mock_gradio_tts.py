#!/usr/bin/env python3
"""Mock Qwen3-TTS Enhanced Studio (Gradio) for headless bridge tests.

Companion to tools/tests/test-qwen-tts-bridge.mjs — it fakes exactly the API
surface the site's read-aloud bridge uses (see docs/QWEN_TTS_BRIDGE.md) and
logs every synthesis request as a JSON line so the test can assert on the
pipeline: chunk N playing while chunk N+1 synthesizes.

Implements exactly the surface the bridge uses:
  POST /gradio_api/call/generate_base_17       -> {"event_id": "eN"}
  GET  /gradio_api/call/generate_base_17/eN    -> SSE: complete + FileData url
  GET  /gradio_api/file=/audio/cN.wav          -> wav bytes
Requests are logged (one JSON line each) to the file in argv[2].
"""
import json
import struct
import sys
import time
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

PORT = int(sys.argv[1])
LOG = sys.argv[2]
LATENCY = float(sys.argv[3]) if len(sys.argv) > 3 else 0.15

_state = {"n": 0}

def wav_bytes():
    rate = 8000
    n = rate // 4
    data = b"\x00" * n
    hdr = b"RIFF" + struct.pack("<I", 36 + len(data)) + b"WAVE"
    hdr += b"fmt " + struct.pack("<IHHIIHH", 16, 1, 1, rate, rate, 1, 8)
    hdr += b"data" + struct.pack("<I", len(data))
    return hdr + data

WAV = wav_bytes()

class H(BaseHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def log_message(self, *a):
        pass

    def _json(self, obj, code=200):
        body = json.dumps(obj).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_POST(self):
        if "/call/generate_base_" not in self.path:
            self._json({"error": "unknown endpoint"}, 404)
            return
        n = self.headers.get("Content-Length")
        req = json.loads(self.rfile.read(int(n)) or b"{}")
        _state["n"] += 1
        i = _state["n"]
        with open(LOG, "a", encoding="utf-8") as fh:
            fh.write(json.dumps({"i": i, "voice": req["data"][0],
                                 "text": req["data"][1]}) + "\n")
        self._json({"event_id": "e%d" % i})

    def do_GET(self):
        if "/call/generate_base_" in self.path and self.path.rsplit("/", 1)[-1].startswith("e"):
            i = int(self.path.rsplit("/", 1)[-1][1:])
            time.sleep(LATENCY)
            url = "http://127.0.0.1:%d/gradio_api/file=/audio/c%d.wav" % (PORT, i)
            payload = json.dumps([0.5, {"path": "/audio/c%d.wav" % i, "url": url,
                                         "meta": {"_type": "gradio.FileData"}}, "ok"])
            body = ("event: generating\ndata: null\n\n"
                    "event: complete\ndata: %s\n\n" % payload).encode()
            self.send_response(200)
            self.send_header("Content-Type", "text/event-stream")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        if self.path.startswith("/gradio_api/file="):
            self.send_response(200)
            self.send_header("Content-Type", "audio/wav")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.send_header("Content-Length", str(len(WAV)))
            self.end_headers()
            self.wfile.write(WAV)
            return
        if self.path == "/ping":
            self._json({"ok": True})
            return
        self._json({"error": "not found"}, 404)

ThreadingHTTPServer(("127.0.0.1", PORT), H).serve_forever()
