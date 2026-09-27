#!/usr/bin/env python3
"""Regression tests for the fresh chat-first runtime."""
from __future__ import annotations

import sys
import unittest
from pathlib import Path
from unittest.mock import patch

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))

import agent_runtime as runtime  # noqa: E402


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
        ):
            with self.subTest(prompt=prompt):
                decision = runtime.classify_request(prompt)
                self.assertEqual(decision["kind"], "chat")
                self.assertFalse(decision["needed"])

    def test_ambiguous_creation_asks_before_tools(self) -> None:
        cases = (
            "can we create a new chracer file",
            "The Seven Nights at Fazbear: A Complete Record has some people that we need to create",
            "Let's start with freddy the article should have all it needs right",
        )
        for prompt in cases:
            with self.subTest(prompt=prompt):
                decision = runtime.classify_request(prompt)
                self.assertEqual(decision["kind"], "clarify")
                self.assertFalse(decision["needed"])

    def test_source_backed_profile_request_resolves_target_and_source(self) -> None:
        prompt = (
            "for freddy can you make a charcater prfile for him\\n"
            "The Seven Nights at Fazbear: A Complete Record you can learn about him from"
        )
        decision = runtime.classify_request(prompt)
        self.assertEqual(decision["kind"], "profile")
        self.assertEqual(decision["target"], "freddy")
        self.assertEqual(decision["source"], "The Seven Nights at Fazbear: A Complete Record")

        events: list[dict[str, object]] = []
        with patch.object(runtime.repo_tools, "add_json_object", side_effect=AssertionError("draft must not write")):
            result = runtime.run_agent(prompt, on_event=events.append)
        self.assertEqual(result["status"], "approval_required")
        self.assertIn("gabriel_freddy", result["message"])
        actions = [event for event in events if event.get("kind") == "action"]
        self.assertEqual([event["action"]["action"] for event in actions], ["repo_search", "catalog_retrieve"])

    def test_explicit_archive_requests_are_the_only_read_gate(self) -> None:
        for prompt in (
            "read the article about Freddy in canon",
            "what does this article say about Freddy?",
            "find Freddy in the repository",
            "search the repository for Freddy",
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
        events: list[dict[str, object]] = []
        with patch.object(runtime.repo_tools, "search", side_effect=AssertionError("unexpected search")):
            result = runtime.run_agent(
                "The Seven Nights at Fazbear: A Complete Record has some people that we need to create",
                on_event=events.append,
            )
        self.assertEqual(result["status"], "needs_input")
        actions = [event for event in events if event.get("kind") == "action"]
        self.assertEqual([event["action"]["action"] for event in actions], ["ask_user"])
        self.assertIn("Which people", result["message"])

    def test_creation_room_greeting_is_still_chat(self) -> None:
        events: list[dict[str, object]] = []
        creation = {"year": "2026 BF", "characters": [{"id": "freddy_fazbear"}], "events": []}
        with patch.object(runtime, "_chat_answer", return_value="A roleplay answer"), \
             patch.object(runtime.repo_tools, "catalog_retrieve", side_effect=AssertionError("unexpected prefetch")):
            result = runtime.run_agent("hello", creation_context=creation, on_event=events.append)
        self.assertEqual(result["status"], "done")
        self.assertEqual([event for event in events if event.get("kind") == "action"], [])

    def test_read_run_uses_one_focused_action(self) -> None:
        events: list[dict[str, object]] = []
        with patch.object(runtime.repo_tools, "search", return_value=[{"path": "characters.json", "preview": "Freddy"}]), \
             patch.object(runtime, "_evidence_answer", return_value="Grounded archive answer"):
            result = runtime.run_agent("find Freddy in the repository", on_event=events.append)
        self.assertEqual(result["status"], "done")
        actions = [event for event in events if event.get("kind") == "action"]
        self.assertEqual([event["action"]["action"] for event in actions], ["repo_search"])


if __name__ == "__main__":
    unittest.main()
