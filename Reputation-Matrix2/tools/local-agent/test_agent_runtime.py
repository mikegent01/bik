#!/usr/bin/env python3
"""Regression tests for the fresh chat-first runtime."""
from __future__ import annotations

import json
import sys
import unittest
from pathlib import Path
from unittest.mock import patch

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))

import agent_runtime as runtime  # noqa: E402


def model_texts(*tokens: str):
    """Patch _complete so every reply is a distinctive model string."""
    replies = list(tokens) or ["MODEL-REPLY"]
    calls: list[str] = []

    def fake(endpoint, model, system, user, **kwargs):
        calls.append(user)
        return replies[min(len(calls) - 1, len(replies) - 1)]

    return calls, fake


class ChatFirstTests(unittest.TestCase):
    def test_normal_conversation_is_chat(self) -> None:
        for prompt in (
            "hello",
            "what do you think about Freddy?",
            "I like this character",
            "the character file looks good",
            "thanks, that works",
            "draft a character profile for Freddy",
            "write a short bio for Freddy",
            "create a character for my story",
            "make a profile for him",
            "read above",
        ):
            with self.subTest(prompt=prompt):
                decision = runtime.classify_request(prompt)
                self.assertEqual(decision["kind"], "chat")
                self.assertFalse(decision["needed"])

    def test_deictic_references_stay_chat_after_a_profile_request(self) -> None:
        """“read above” after a draft is conversation, not another archive run."""
        requested = ("Cosmic Jester seems to be important can we create a character profile "
                     "for him please check the factions json and edit the file")
        conversation = [
            {"role": "user", "content": requested},
            {"role": "assistant", "content": "The draft is ready — reply approve to apply it."},
        ]
        for reply in ("read above", "read that", "check it out", "thanks", "ok cool", "sounds good"):
            with self.subTest(reply=reply):
                decision = runtime.classify_request(reply, conversation=conversation)
                self.assertEqual(decision["kind"], "chat")
        # Insisting or resending still re-enters the profile flow.
        self.assertEqual(runtime.classify_request("i just told you", conversation=conversation)["kind"], "profile")
        resent = conversation + [{"role": "user", "content": requested}]
        self.assertEqual(runtime.classify_request(requested, conversation=resent)["kind"], "profile")

    def test_ambiguous_creation_still_clarifies_before_tools(self) -> None:
        cases = (
            "can we create a new chracer file",
            "The Seven Nights at Fazbear: A Complete Record has some people that we need to create",
            "Let's start with freddy the article should have all it needs right",
            "for Freddy you may edit files",
            "The Seven Nights at Fazbear: A Complete Record you can learn about him from",
        )
        for prompt in cases:
            with self.subTest(prompt=prompt):
                decision = runtime.classify_request(prompt)
                self.assertEqual(decision["kind"], "clarify")
                self.assertFalse(decision["needed"])
                self.assertIn("missing_items", decision["context"])

    def test_source_backed_profile_request_resolves_target_and_source(self) -> None:
        prompt = (
            "for freddy can you make a charcater prfile for him\\n"
            "The Seven Nights at Fazbear: A Complete Record you can learn about him from"
        )
        decision = runtime.classify_request(prompt)
        self.assertEqual(decision["kind"], "profile")
        self.assertEqual(decision["target"], "freddy")
        self.assertEqual(decision["source"], "The Seven Nights at Fazbear: A Complete Record")

        calls, fake = model_texts()
        events: list[dict[str, object]] = []
        with patch.object(runtime, "_complete", side_effect=fake), \
             patch.object(runtime.repo_tools, "add_json_object", side_effect=AssertionError("draft must not write")):
            result = runtime.run_agent(prompt, on_event=events.append)
        self.assertEqual(result["status"], "approval_required")
        self.assertIn("MODEL-REPLY", result["message"])
        self.assertIn("gabriel_freddy", result["message"])
        self.assertTrue(calls, "the reply must be written by the model")
        actions = [event for event in events if event.get("kind") == "action"]
        self.assertEqual([event["action"]["action"] for event in actions], ["repo_search", "catalog_retrieve"])

    def test_original_freddy_request_profiles_without_canned_question(self) -> None:
        """The exact message that kept earning a hardcoded question must profile."""
        prompt = (
            "for freddy  \n"
            "you may edit files  \n"
            "The Seven Nights at Fazbear: A Complete Record you can learn about him from  \n"
            "maybe we can make a profile for him"
        )
        decision = runtime.classify_request(prompt)
        self.assertEqual(decision["kind"], "profile")
        self.assertEqual(decision["target"], "freddy")
        self.assertIn("The Seven Nights at Fazbear: A Complete Record", decision["sources"])
        self.assertNotIn("maybe we can make a profile for him", decision["sources"])

        calls, fake = model_texts()
        events: list[dict[str, object]] = []
        with patch.object(runtime, "_complete", side_effect=fake), \
             patch.object(runtime.repo_tools, "add_json_object", side_effect=AssertionError("draft must not write")):
            result = runtime.run_agent(prompt, on_event=events.append)
        self.assertEqual(result["status"], "approval_required")
        self.assertIn("MODEL-REPLY", result["message"])
        self.assertIn("gabriel_freddy", result["message"])
        self.assertTrue(calls, "the reply must be written by the model")

    def test_profile_request_assembled_from_split_messages(self) -> None:
        conversation = [
            {"role": "user", "content": "for freddy you may edit files"},
            {"role": "assistant", "content": "Sure — what should I create or change for Freddy?"},
            {"role": "user", "content": "The Seven Nights at Fazbear: A Complete Record you can learn about him from"},
            {"role": "assistant", "content": "Got it. And what should I do with it?"},
        ]
        decision = runtime.classify_request("maybe we can make a profile for him", conversation=conversation)
        self.assertEqual(decision["kind"], "profile")
        self.assertEqual(decision["target"], "freddy")
        self.assertEqual(decision["source"], "The Seven Nights at Fazbear: A Complete Record")

    def test_insistence_after_a_question_profiles_anyway(self) -> None:
        conversation = [
            {"role": "user", "content": "for freddy\nyou may edit files\nThe Seven Nights at Fazbear: A Complete Record you can learn about him from\nmaybe we can make a profile for him"},
            {"role": "assistant", "content": "What exact file or canonical entity do you want to create or change? Give me the name or path and the details to include."},
        ]
        decision = runtime.classify_request("i just told you", conversation=conversation)
        self.assertEqual(decision["kind"], "profile")
        self.assertEqual(decision["target"], "freddy")

    def test_cosmic_jester_profiles_from_the_factions_file(self) -> None:
        prompt = ("Cosmic Jester seems to be important can we create a character profile "
                  "for him please check the factions json and edit the file")
        decision = runtime.classify_request(prompt)
        self.assertEqual(decision["kind"], "profile")
        self.assertEqual(decision["target"], "Cosmic Jester")
        self.assertEqual(decision["source"], "factions.json")

        calls, fake = model_texts()
        events: list[dict[str, object]] = []
        with patch.object(runtime, "_complete", side_effect=fake), \
             patch.object(runtime.repo_tools, "add_json_object", side_effect=AssertionError("draft must not write")):
            result = runtime.run_agent(prompt, on_event=events.append)
        self.assertEqual(result["status"], "approval_required")
        self.assertTrue(calls, "the reply must be written by the model")
        draft = json.loads(result["message"].split("\n\n", 1)[1])
        self.assertEqual(draft["id"], "cosmic_jester")
        self.assertEqual(draft["sourceRecord"], "disaster_inc")
        # The draft must quote the record's Cosmic Jester material, not the
        # party's generic summary.
        blob = draft["summary"] + draft["description"]
        self.assertIn("Big Bite", blob)
        self.assertIn("Doughnut World", blob)
        actions = [event for event in events if event.get("kind") == "action"]
        self.assertEqual([event["action"]["action"] for event in actions], ["repo_search", "catalog_retrieve"])

    def test_repeated_request_reply_is_regenerated_not_canned(self) -> None:
        vague = "The Seven Nights at Fazbear: A Complete Record has some people that we need to create"
        first_reply = "Which people or characters should I create? Give me their names first."
        conversation = [
            {"role": "user", "content": vague},
            {"role": "assistant", "content": first_reply},
            {"role": "user", "content": vague},
        ]
        decision = runtime.classify_request(vague, conversation=conversation)
        self.assertEqual(decision["kind"], "clarify")
        # The runtime must tell the model about the repeat instead of re-asking.
        self.assertIn("note", decision["context"])
        self.assertIn("previous", decision["context"]["note"])

        calls, fake = model_texts("FIRST")
        events: list[dict[str, object]] = []
        with patch.object(runtime, "_complete", side_effect=fake), \
             patch.object(runtime.repo_tools, "search", side_effect=AssertionError("unexpected search")):
            result = runtime.run_agent(vague, conversation=conversation, on_event=events.append)
        self.assertEqual(result["status"], "needs_input")
        self.assertIn("FIRST", result["message"])
        self.assertNotIn(first_reply, result["message"])
        self.assertTrue(calls)
        # The model must have been told about the repeat and the prior reply.
        self.assertIn("same request", calls[0])
        self.assertIn(first_reply[:40], calls[0])

    def test_guard_followups_complete_the_profile_request(self) -> None:
        # The user was asked for the source; the next message is just the title.
        conversation = [
            {"role": "user", "content": "for freddy you may edit files"},
            {"role": "assistant", "content": "Sure — which source record should I draft Freddy's profile from?"},
            {"role": "user", "content": "The Seven Nights at Fazbear: A Complete Record"},
        ]
        decision = runtime.classify_request("The Seven Nights at Fazbear: A Complete Record", conversation=conversation)
        self.assertEqual(decision["kind"], "profile")

        # The user was asked for the name; the next message is just the name.
        conversation2 = [
            {"role": "user", "content": "make a profile from The Seven Nights at Fazbear: A Complete Record"},
            {"role": "assistant", "content": "Which character should I profile from that record?"},
            {"role": "user", "content": "freddy"},
        ]
        decision = runtime.classify_request("freddy", conversation=conversation2)
        self.assertEqual(decision["kind"], "profile")
        self.assertEqual(decision["target"], "freddy")

    def test_unresolvable_source_is_an_honest_model_phrased_failure(self) -> None:
        prompt = "for herbert maybe we can make a profile for him from The Sevn Nites at Fazber: A Complete Rekord"
        calls, fake = model_texts()
        events: list[dict[str, object]] = []
        with patch.object(runtime, "_complete", side_effect=fake):
            result = runtime.run_agent(prompt, on_event=events.append)
        self.assertEqual(result["status"], "needs_input")
        self.assertIn("MODEL-REPLY", result["message"])
        errors = [event for event in events if event.get("kind") == "error"]
        self.assertTrue(errors)
        self.assertIn("could not resolve", str(errors[0].get("result", "")))
        # The model must have been given the real failure detail.
        self.assertTrue(any("could not resolve" in call for call in calls), calls)

    def test_approval_writes_once_and_survives_duplicates(self) -> None:
        prompt = (
            "for freddy can you make a charcater prfile for him\\n"
            "The Seven Nights at Fazbear: A Complete Record you can learn about him from"
        )
        calls, fake = model_texts()
        with patch.object(runtime, "_complete", side_effect=fake), \
             patch.object(runtime.repo_tools, "add_json_object", side_effect=AssertionError("draft must not write")):
            draft = runtime.run_agent(prompt)
        self.assertEqual(draft["status"], "approval_required")
        run_id = draft["run"]

        events: list[dict[str, object]] = []
        with patch.object(runtime, "_complete", side_effect=fake), \
             patch.object(runtime.repo_tools, "add_json_object", return_value="added gabriel_freddy to Reputation-Matrix2/data/characters.json (184 records)") as write:
            result = runtime.run_agent("approve", run_id=run_id, on_event=events.append)
        self.assertEqual(result["status"], "done")
        self.assertEqual(write.call_count, 1)
        self.assertIn("MODEL-REPLY", result["answer"])

        duplicate = ValueError("an object with id 'gabriel_freddy' already exists")
        with patch.object(runtime, "_complete", side_effect=fake), \
             patch.object(runtime.repo_tools, "add_json_object", side_effect=duplicate):
            again = runtime.run_agent("approve", run_id=run_id)
        self.assertEqual(again["status"], "done")
        self.assertIn("MODEL-REPLY", again["answer"])

    def test_approval_inside_a_longer_reply(self) -> None:
        """“can you actually write it but good use tools and go ahead” approves."""
        self.assertTrue(runtime._approval_request("can you actually write it but good use tools and go ahead"))
        self.assertTrue(runtime._approval_request("yes please do"))
        self.assertTrue(runtime._approval_request("write it to the file please"))
        for refusal in (
            "make him scarier instead",
            "don't write it",
            "wait",
            "no",
            "can you improve the draft?",
            "write it but make him taller",
        ):
            with self.subTest(refusal=refusal):
                self.assertFalse(runtime._approval_request(refusal))

        prompt = ("for freddy can you make a charcater prfile for him\\n"
                  "The Seven Nights at Fazbear: A Complete Record you can learn about him from")
        calls, fake = model_texts()
        with patch.object(runtime, "_complete", side_effect=fake), \
             patch.object(runtime.repo_tools, "add_json_object", side_effect=AssertionError("draft must not write")):
            draft = runtime.run_agent(prompt)
        with patch.object(runtime, "_complete", side_effect=fake), \
             patch.object(runtime.repo_tools, "add_json_object", return_value="added gabriel_freddy to Reputation-Matrix2/data/characters.json (184 records)") as write:
            result = runtime.run_agent("can you actually write it but good use tools and go ahead", run_id=draft["run"])
        self.assertEqual(result["status"], "done")
        self.assertEqual(write.call_count, 1)

    def test_offline_model_does_not_block_an_approved_write(self) -> None:
        """The write is deterministic; only the reply text needs the model."""
        import urllib.error

        def offline(*args, **kwargs):
            raise urllib.error.URLError("connection refused")

        prompt = ("for freddy can you make a charcater prfile for him\\n"
                  "The Seven Nights at Fazbear: A Complete Record you can learn about him from")
        with patch.object(runtime, "_complete", side_effect=offline), \
             patch.object(runtime.repo_tools, "add_json_object", side_effect=AssertionError("draft must not write")):
            draft = runtime.run_agent(prompt)
        # The draft is still served while offline.
        self.assertEqual(draft["status"], "approval_required")
        self.assertIn("gabriel_freddy", draft["message"])
        self.assertIn("LM Studio is offline", draft["message"])

        events: list[dict[str, object]] = []
        with patch.object(runtime, "_complete", side_effect=offline), \
             patch.object(runtime.repo_tools, "add_json_object", return_value="added gabriel_freddy to Reputation-Matrix2/data/characters.json (185 records)") as write:
            result = runtime.run_agent("can you actually write it but good use tools and go ahead",
                                       run_id=draft["run"], on_event=events.append)
        self.assertEqual(result["status"], "done")
        self.assertEqual(write.call_count, 1)
        self.assertIn("LM Studio is offline", result["answer"])
        self.assertIn("Action completed without the model", result["answer"])
        self.assertIn("added gabriel_freddy", result["answer"])
        # The offline notice must not claim no tool ran when one did.
        self.assertNotIn("No repository or image tool was called", result["answer"])

    def test_timeout_is_not_reported_as_offline(self) -> None:
        """A slow model must not be called offline, and the endpoint is shown."""
        import socket
        import urllib.error
        message = runtime._model_error(socket.timeout(), "http://127.0.0.1:1234/v1/chat/completions")
        self.assertIn("did not finish", message)
        self.assertNotIn("offline", message)

        refused = urllib.error.URLError(ConnectionRefusedError())
        message = runtime._model_error(refused, "http://127.0.0.1:1234/v1/chat/completions")
        self.assertIn("LM Studio is offline", message)
        self.assertIn("127.0.0.1:1234", message)

    def test_complete_retries_once_on_timeout(self) -> None:
        import socket as socket_module

        class FakeResponse:
            def __init__(self, body: bytes) -> None:
                self._body = body

            def read(self) -> bytes:
                return self._body

            def __enter__(self):
                return self

            def __exit__(self, *args):
                return False

        good = FakeResponse(json.dumps({"choices": [{"message": {"content": "finally"}}]}).encode())
        waits: list[int] = []

        def fake_urlopen(request, timeout=None):
            waits.append(timeout)
            if len(waits) == 1:
                raise socket_module.timeout()
            return good

        with patch.object(runtime.urllib.request, "urlopen", side_effect=fake_urlopen):
            answer = runtime._complete("http://x/v1/chat/completions", "", "s", "u", timeout=5)
        self.assertEqual(answer, "finally")
        self.assertEqual(waits, [5, 10])

    def test_reply_uses_a_small_history_and_token_budget(self) -> None:
        """Phrasing replies keep the prompt small so slow models answer fast."""
        conversation = [{"role": ("user" if i % 2 == 0 else "assistant"), "content": "word " * 900}
                        for i in range(10)]
        trimmed = runtime._redact_conversation(conversation, keep=4, limit=1200)
        self.assertEqual(len(trimmed), 4)
        self.assertTrue(all(len(item["content"]) <= 1215 for item in trimmed))

        captured: dict[str, object] = {}

        def fake(endpoint, model, system, user, **kwargs):
            captured.update(kwargs)
            return "ok"

        with patch.object(runtime, "_complete", side_effect=fake):
            runtime._reply({"situation": "x"}, [], "http://e/v1/chat/completions", "m")
        self.assertEqual(captured.get("history_keep"), 4)
        self.assertEqual(captured.get("history_limit"), 1200)
        self.assertEqual(captured.get("max_tokens"), 600)

    def test_file_source_draft_reads_cleanly(self) -> None:
        """No markdown leakage, no circular status, trimmed related articles."""
        calls, fake = model_texts()
        with patch.object(runtime, "_complete", side_effect=fake), \
             patch.object(runtime.repo_tools, "add_json_object", side_effect=AssertionError("draft must not write")):
            result = runtime.run_agent(
                "Cosmic Jester seems to be important can we create a character profile "
                "for him please check the factions json and edit the file"
            )
        draft = json.loads(result["message"].split("\n\n", 1)[1])
        blob = draft["summary"] + draft["description"] + draft["status"]
        self.assertNotIn("###", blob)
        self.assertNotIn("---", blob)
        self.assertTrue(draft["summary"].startswith("Cosmic Jester is referenced in"))
        self.assertNotIn("Referenced in the factions.json record", blob)  # old circular phrasing
        self.assertLessEqual(len(draft["relatedArticles"]), 10)
        self.assertIn("Big Bite", blob)
        self.assertIn("Doughnut World", blob)

    def test_explicit_archive_requests_are_the_only_read_gate(self) -> None:
        for prompt in (
            "read the article about Freddy in canon",
            "what does this article say about Freddy?",
            "find Freddy in the repository",
            "search the repository for Freddy",
            "read the factions json",
        ):
            with self.subTest(prompt=prompt):
                decision = runtime.classify_request(prompt)
                self.assertEqual(decision["kind"], "read")
                self.assertTrue(decision["needed"])

    def test_explicit_file_change_is_write_gate(self) -> None:
        decision = runtime.classify_request("edit Reputation-Matrix2/data/characters.json")
        self.assertEqual(decision["kind"], "write")
        self.assertTrue(decision["needed"])
        self.assertEqual(decision["path"], "Reputation-Matrix2/data/characters.json")

    def test_chat_run_has_no_action_event(self) -> None:
        events: list[dict[str, object]] = []
        with patch.object(runtime, "_chat_answer", return_value="A normal answer"):
            result = runtime.run_agent("I like this character", on_event=events.append)
        self.assertEqual(result["status"], "done")
        self.assertEqual([event for event in events if event.get("kind") == "action"], [])
        check = next(event for event in events if event.get("kind") == "tool_check")
        self.assertFalse(check["needed"])
        assistant = next(event for event in events if event.get("kind") == "assistant")
        self.assertIn("no tools called", assistant["source"])

    def test_clarification_run_has_only_ask_user_action(self) -> None:
        calls, fake = model_texts()
        events: list[dict[str, object]] = []
        with patch.object(runtime, "_complete", side_effect=fake), \
             patch.object(runtime.repo_tools, "search", side_effect=AssertionError("unexpected search")):
            result = runtime.run_agent(
                "The Seven Nights at Fazbear: A Complete Record has some people that we need to create",
                on_event=events.append,
            )
        self.assertEqual(result["status"], "needs_input")
        self.assertIn("MODEL-REPLY", result["message"])
        self.assertTrue(calls, "the clarification must be written by the model")
        actions = [event for event in events if event.get("kind") == "action"]
        self.assertEqual([event["action"]["action"] for event in actions], ["ask_user"])

    def test_creation_room_greeting_is_still_chat(self) -> None:
        events: list[dict[str, object]] = []
        creation = {"year": "2026 BF", "characters": [{"id": "freddy_fazbear"}], "events": []}
        with patch.object(runtime, "_chat_answer", return_value="A roleplay answer"), \
             patch.object(runtime.repo_tools, "catalog_retrieve", side_effect=AssertionError("unexpected prefetch")):
            result = runtime.run_agent("hello", creation_context=creation, on_event=events.append)
        self.assertEqual(result["status"], "done")
        self.assertEqual([event for event in events if event.get("kind") == "action"], [])

    def test_read_run_uses_one_focused_action_and_a_model_answer(self) -> None:
        events: list[dict[str, object]] = []
        with patch.object(runtime.repo_tools, "search", return_value=[{"path": "characters.json", "preview": "Freddy"}]), \
             patch.object(runtime, "_evidence_answer", return_value="Grounded archive answer"):
            result = runtime.run_agent("find Freddy in the repository", on_event=events.append)
        self.assertEqual(result["status"], "done")
        self.assertEqual(result["answer"], "Grounded archive answer")
        actions = [event for event in events if event.get("kind") == "action"]
        self.assertEqual([event["action"]["action"] for event in actions], ["repo_search"])

    def test_every_reply_path_calls_the_model(self) -> None:
        """No user-facing reply may be produced without the local model."""
        prompt = "for freddy can you make a charcater prfile for him\nThe Seven Nights at Fazbear: A Complete Record you can learn about him from"
        vague = "The Seven Nights at Fazbear: A Complete Record has some people that we need to create"
        paths: list[tuple[str, dict[str, object]]] = []

        calls, fake = model_texts()
        with patch.object(runtime, "_complete", side_effect=fake):
            # clarify
            paths.append(("clarify", runtime.run_agent(vague)))
            # profile draft
            draft = runtime.run_agent(prompt)
            paths.append(("profile", draft))
            # profile failure
            paths.append(("profile-failure", runtime.run_agent("for nobody maybe we can make a profile for him from factions.json")))
            # empty message
            paths.append(("empty", runtime.run_agent("")))
            # read with no results
            with patch.object(runtime.repo_tools, "search", return_value=[]):
                paths.append(("read-empty", runtime.run_agent("find Zzzznope in the repository")))
            # write gate without a path
            with patch.object(runtime.repo_tools, "add_json_object", side_effect=AssertionError("no write")):
                paths.append(("write-gate", runtime.run_agent("edit the file please")))
        for name, result in paths:
            with self.subTest(path=name):
                text = str(result.get("message") or result.get("answer") or "")
                self.assertIn("MODEL-REPLY", text, f"{name} reply was not model-generated")

    def test_no_canned_reply_strings_remain_in_the_runtime(self) -> None:
        """The runtime must not contain canned user-facing reply text."""
        source = (HERE / "agent_runtime.py").read_text(encoding="utf-8")
        forbidden = (
            "What exact file or canonical entity",
            "What exact file or canonical record",
            "You already sent that",
            "Which people or characters",
            "I found these bounded archive matches",
            "I read the requested file",
            "I found no matching archive evidence",
            "Tell me what you want to do",
            "What should the image depict",
            "I resolved the image subject",
            "Got it. I can edit files",
            "I have the named source record",
            "I could not safely resolve",
            "I resolved the source and drafted",
            "Applied the grounded character profile",
            "already exists in",
        )
        for needle in forbidden:
            self.assertNotIn(needle, source, f"canned reply text still present: {needle!r}")


if __name__ == "__main__":
    unittest.main()
