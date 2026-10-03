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
        elif "spoken commentary track" in all_text:
            # Commentary mode: a couple of labelled exchanges per segment, so
            # a test can prove the planner, the parser and the stitching.
            Handler.part = getattr(Handler, "part", 0) + 1
            content = os.environ.get(
                "MOCK_COMMENTARY_REPLY",
                f"WALUIGI: Part {Handler.part}. The record says twenty-eight for, eight against, three abstaining, "
                "and everybody quotes the twenty-eight.\n"
                f"LUIGI: That is the part that bothers me, Waluigi. Who were the three?\n"
                "WALUIGI: Unfiled. Which is its own answer, and not a flattering one.",
            )
        elif "You are the archivist for a roleplay session" in all_text:
            # Lore-book extraction: canned pages in the exact filing format,
            # overridable with MOCK_BOOK_REPLY.
            content = os.environ.get(
                "MOCK_BOOK_REPLY",
                "PLACE: The Ledger Room | a back office off the studio corridor, lined with unfiled boxes\n"
                "PERSON: Marguerite Oyle | the night archivist, wants the ledger back before dawn\n"
                "EVENT: The Door Pushed Open | the party forced the ledger room and found the boxes already searched\n"
                "FACT: the ledger room door does not lock from the inside\n"
                "DIARY: They went looking for a ledger and found somebody had been there first.",
            )
        elif "ONE TURN." in all_text and "\u27f6 " in all_text:
            # The per-card audit (🩺 on a card): one turn is marked ⟶ and
            # the reply is about that turn only — a correction for its
            # speaker and a note on the play, so a page test can prove the
            # card's button reaches the same review dialog.
            who = ""
            for line in all_text.split("\n"):
                if line.startswith("\u27f6 ") and ":" in line:
                    who = line[2:].split(":", 1)[0].strip()
            content = os.environ.get("MOCK_TURN_AUDIT_REPLY", (
                "[[HP: {{WHO}} -2]]\n"
                "NOTE: {{WHO}} took the hit in this turn and the sheet did not show it."
            )).replace("{{WHO}}", who)
        elif "AUDIT THE SHEETS" in all_text:
            # The AI audit of the sheets (run by hand from the dock): it
            # answers with corrections for the first person on the sheets,
            # so a page test can prove they are previewed, applied across
            # the sheets and the clock, and undone in one step.
            who = ""
            marker = all_text.find("CHARACTER STATE")
            if marker >= 0:
                line = all_text[marker:].split("- ", 1)
                if len(line) > 1:
                    who = line[1].split(":", 1)[0].strip()
            content = os.environ.get("MOCK_AUDIT_REPLY", (
                "[[HP: {{WHO}} -3]]\n"
                "[[MP: {{WHO}} = 7]]\n"
                "[[MOOD: {{WHO}} anger 2 | the bill]]\n"
                "[[STATUS: {{WHO}} soot on the face]]\n"
                "[[TIME: 23:40]]\n"
                "[[NEW: Nobody Real | a stranger | should be refused]]\n"
                "NOTE: {{WHO}} took a knife to the ribs two turns ago and should not be sprinting; show the wound.\n"
                "NOTE: The player was answered by everyone at once; let one voice carry the next turn."
            )).replace("{{WHO}}", who)
        elif "STAGE DIRECTIONS" in all_text and os.environ.get("MOCK_ADVERSARIAL"):
            # A deliberately badly-behaved model, for tools/tests/audit-chatroom.mjs:
            # it writes the wrong character, stops mid-sentence, invents its
            # own bracket syntax and returns nothing at all, in rotation.
            Handler.bad = getattr(Handler, "bad", 0) + 1
            other = "Wario"
            marker = all_text.find("THE CAST")
            if marker >= 0:
                for line in all_text[marker:marker + 400].split("\n"):
                    line = line.strip()
                    if line.startswith("- ") and " — " in line:
                        other = line[2:].split(" — ")[0].strip()
                        break
            mode = Handler.bad % 5
            if mode == 0:
                content = f"{other} growls, \"Stop reading that out loud.\""      # wrong mouth
            elif mode == 1:
                content = "The wind drops out of the courtyard and the papers lift, and then the"   # truncated
            elif mode == 2:
                content = "He sets the lamp down.\n[[MOOD: ominous]]\n[[TIME: 23:00]]"            # stray brackets
            elif mode == 3:
                content = "   "                                                     # nothing at all
            else:
                content = "He turns the page and says nothing for a moment."        # fine
        elif "STAGE DIRECTIONS" in all_text and "the aircraft crashes" in last_user:
            # A crash narrated with NO stage directions at all — the model
            # forgot to file the wounds — so a page test can prove the hurt
            # ledger reads the prose and bills everyone in the scene itself.
            content = (
                "The helicopter clips the awning and slams into the pavement. "
                "The impact throws everyone forward against the dashboard, and for a moment nobody moves."
            )
        elif "STAGE DIRECTIONS" in all_text and "answers from the door" in last_user:
            # Round 13: the reply carries a paragraph by somebody who is NOT
            # in the scene (Kamek, whom the archive knows) and one by the
            # narrator — so a page test can prove the first walks in and
            # gets his own card, and the second becomes a world card.
            content = (
                "MOCK-MODEL REPLY: *He taps the ledger twice.* \"Who else is in here?\"\n\n"
                "Kamek: *from the doorway, broom in hand* \"You rang, and I was passing.\"\n"
                "Narrator: The lamp gutters and steadies."
            )
        elif "STAGE DIRECTIONS" in all_text and "the room answers" in last_user:
            # The room answering (round 12): the reply ends with a beat from
            # each person the audience block names, as its own "Name:"
            # paragraph, so a page test can prove they are cut out of the
            # speaker's reply and filed as their own cards.
            names = []
            marker = all_text.find("THE AUDIENCE")
            if marker >= 0:
                head = all_text[marker:].split("\n", 1)[0]
                after = head.split("this turn:", 1)[1] if "this turn:" in head else ""
                names = [n.strip().rstrip(".") for n in after.split(",") if n.strip()]
            content = "MOCK-MODEL REPLY: *He puts the invoice on the table and waits.* \"Sign it.\""
            for name in names[:2]:
                content += (f"\n{name}: *{name} looks up from the register.* \"He means it. He has the invoice out.\" "
                            "There is a long pause, and nobody reaches for a pen.")
        elif "STAGE DIRECTIONS" in all_text and "flat on the floor" in last_user:
            # A speaker at 0 HP (round 12): the first take has them up and
            # roaring; once the page sends it back with the body spelled
            # out, the second take keeps to the floor.
            if "Your last attempt had them" in all_text:
                content = "*A hand twitches against the tiles. He coughs, once, and the word does not come.* \"...wah.\""
            else:
                content = "*He erupts off the floor, roaring, and charges at the door with both fists up.*"
        elif "STAGE DIRECTIONS" in all_text and os.environ.get("MOCK_DIRECTIVES"):
            # {{WHO}} is filled with the first character named in the prompt's
            # CHARACTER STATE block, so a test does not have to know in
            # advance which archive character it ended up playing with.
            who = ""
            marker = all_text.find("CHARACTER STATE")
            if marker >= 0:
                line = all_text[marker:].split("- ", 1)
                if len(line) > 1:
                    who = line[1].split(":", 1)[0].strip()
            # Roleplay turns in a room with mechanics on: MOCK_DIRECTIVES is
            # appended verbatim so a test can prove stage directions are
            # parsed, applied to the sheets, and stripped from the prose.
            content = (
                f"MOCK-MODEL REPLY #{int(time.time() * 1000) % 100000}: the blade goes in.\n"
                + os.environ["MOCK_DIRECTIVES"].replace("{{WHO}}", who)
            )
        else:
            content = (
                f"MOCK-MODEL REPLY #{int(time.time() * 1000) % 100000}: I read your context "
                f"({len(last_user)} chars) and I am writing this reply myself."
            )
        # A 🎬 direction in the prompt is echoed back, so a page test can
        # prove the direction reached the model and was spent by the turn.
        if "THE READER DIRECTS THIS TURN" in all_text and "MOCK-MODEL REPLY" in content:
            content += " (The mock saw the direction.)"
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
