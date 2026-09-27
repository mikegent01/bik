#!/usr/bin/env python3
"""Tiny mock LM Studio for integration tests of the chat-first runtime."""
import json
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
        # Echo a distinctive, model-styled reply so tests can prove the reply
        # came from the model and varies per turn.
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
    server = ThreadingHTTPServer(("0.0.0.0", 1234), Handler)
    print("mock LM Studio on :1234", flush=True)
    server.serve_forever()
