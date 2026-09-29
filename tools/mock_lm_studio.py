#!/usr/bin/env python3
"""Tiny mock LM Studio for integration tests of the chat-first runtime."""
import json
import os
import time
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer


class Handler(BaseHTTPRequestHandler):
    def log_message(self, fmt, *args):
        pass

    def do_GET(self):
        if self.path == "/v1/models":
            body = json.dumps({"data": [{"id": "mock-model"}]}).encode()
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        self.send_error(404)

    def do_POST(self):
        if self.path != "/v1/chat/completions":
            self.send_error(404)
            return
        size = int(self.headers.get("Content-Length", "0"))
        payload = json.loads(self.rfile.read(size))
        messages = payload.get("messages", [])
        last_user = next((m["content"] for m in reversed(messages) if m.get("role") == "user"), "")
        all_text = " ".join(str(m.get("content", "")) for m in messages)
        # Echo a distinctive, model-styled reply so tests can prove the reply
        # came from the model and varies per turn.
        if 'list_archive_collections' in all_text:
            # Agent-loop mode: serve scripted turns (MOCK_AGENT_TURNS, a JSON
            # array of replies) in order; default is a plain prose reply.
            turns = json.loads(os.environ.get("MOCK_AGENT_TURNS", "[]") or "[]")
            if turns:
                Handler.sequence = getattr(Handler, "sequence", 0)
                content = str(turns[min(Handler.sequence, len(turns) - 1)])
                Handler.sequence += 1
            else:
                content = "MOCK-AGENT REPLY: no tools needed for that."
        elif "ONLY a JSON array" in all_text:
            # Cast suggestion flow: names picked from the candidate list.
            content = os.environ.get("MOCK_ARRAY_REPLY", '["Sans", "Bowser"]')
        elif "ONLY a JSON object" in all_text or "ONLY a JSON" in all_text:
            # Structured flows (record filing, draft revision) expect JSON; the
            # canned body is overridable per-test with MOCK_JSON_REPLY.
            content = os.environ.get(
                "MOCK_JSON_REPLY",
                '{"reply": "MOCK JSON REPLY: filed by the mock model.", '
                '"record": {"id": "mock_record", "name": "Mock Record", '
                '"title": "Mock Record — Filed From the Mock", "summary": "A mock record."}}',
            )
        else:
            content = (
                f"MOCK-MODEL REPLY #{int(time.time() * 1000) % 100000}: I read your context "
                f"({len(last_user)} chars) and I am writing this reply myself."
            )
        body = json.dumps({"choices": [{"message": {"role": "assistant", "content": content}}]}).encode()
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


if __name__ == "__main__":
    import sys
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 1234
    delay = float(os.environ.get("MOCK_DELAY_SECONDS", "0") or 0)

    class SlowHandler(Handler):
        def do_POST(self):
            if delay:
                time.sleep(delay)
            super().do_POST()

    server = ThreadingHTTPServer(("0.0.0.0", port), SlowHandler)
    print(f"mock LM Studio on :{port} (delay {delay}s)", flush=True)
    server.serve_forever()
