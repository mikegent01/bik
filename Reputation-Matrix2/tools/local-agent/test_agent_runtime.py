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
            "for Freddy you may edit files",
            "The Seven Nights at Fazbear: A Complete Record you can learn about him from",
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
        # The trailing request line must never be mistaken for the source title.
        self.assertNotIn("maybe we can make a profile for him", decision["sources"])

        events: list[dict[str, object]] = []
        with patch.object(runtime.repo_tools, "add_json_object", side_effect=AssertionError("draft must not write")):
            result = runtime.run_agent(prompt, on_event=events.append)
        self.assertEqual(result["status"], "approval_required")
        self.assertIn("gabriel_freddy", result["message"])
        self.assertIn("No file has been changed yet", result["message"])
        actions = [event for event in events if event.get("kind") == "action"]
        self.assertEqual([event["action"]["action"] for event in actions], ["repo_search", "catalog_retrieve"])

    def test_profile_request_assembled_from_split_messages(self) -> None:
        conversation = [
            {"role": "user", "content": "for freddy you may edit files"},
            {"role": "assistant", "content": "Got it. I can edit files, but tell me what you want created or changed for the named character first."},
            {"role": "user", "content": "The Seven Nights at Fazbear: A Complete Record you can learn about him from"},
            {"role": "assistant", "content": "I have the named source record. What should I create or change from it? I will not search until the requested artifact is clear."},
        ]
        decision = runtime.classify_request("maybe we can make a profile for him", conversation=conversation)
        self.assertEqual(decision["kind"], "profile")
        self.assertEqual(decision["target"], "freddy")
        self.assertEqual(decision["source"], "The Seven Nights at Fazbear: A Complete Record")

    def test_insistence_after_canned_question_profiles_anyway(self) -> None:
        conversation = [
            {"role": "user", "content": "for freddy\nyou may edit files\nThe Seven Nights at Fazbear: A Complete Record you can learn about him from\nmaybe we can make a profile for him"},
            {"role": "assistant", "content": "What exact file or canonical entity do you want to create or change? Give me the name or path and the details to include."},
        ]
        decision = runtime.classify_request("i just told you", conversation=conversation)
        self.assertEqual(decision["kind"], "profile")
        self.assertEqual(decision["target"], "freddy")

    def test_repeated_request_never_reasks_the_same_question(self) -> None:
        vague = "The Seven Nights at Fazbear: A Complete Record has some people that we need to create"
        asked = "Which people or characters should I create? Give me their names first; I will read the source only after the targets are clear."
        conversation = [
            {"role": "user", "content": vague},
            {"role": "assistant", "content": asked},
            {"role": "user", "content": vague},
        ]
        decision = runtime.classify_request(vague, conversation=conversation)
        self.assertEqual(decision["kind"], "clarify")
        self.assertNotEqual(decision["question"], asked)
        self.assertIn("character's name", decision["question"])

    def test_guard_followups_complete_the_profile_request(self) -> None:
        base = [
            {"role": "user", "content": "for freddy you may edit files"},
            {"role": "assistant", "content": "Got it. I can edit files, but tell me what you want created or changed for the named character first."},
            {"role": "user", "content": "for freddy you may edit files"},
            {"role": "assistant", "content": (
                "You already sent that, so I will not ask the same question again. I have the character (freddy); "
                "I am still missing the source record to draft from. Send just its name and I will prepare the profile for your approval."
            )},
        ]
        decision = runtime.classify_request("The Seven Nights at Fazbear: A Complete Record", conversation=base)
        self.assertEqual(decision["kind"], "profile")

        missing_name = base[:2] + [
            {"role": "user", "content": "The Seven Nights at Fazbear: A Complete Record has some people that we need to create"},
            {"role": "assistant", "content": (
                "You already sent that, so I will not ask the same question again. I have the source record "
                "(The Seven Nights at Fazbear: A Complete Record); I am still missing the character's name. "
                "Send just the name and I will prepare the profile for your approval."
            )},
        ]
        decision = runtime.classify_request("freddy", conversation=missing_name)
        self.assertEqual(decision["kind"], "profile")
        self.assertEqual(decision["target"], "freddy")

    def test_unresolvable_source_names_nearby_records(self) -> None:
        conversation = [
            {"role": "user", "content": "for herbert maybe we can make a profile for him from The Sevn Nites at Fazber: A Complete Rekord"},
        ]
        events: list[dict[str, object]] = []
        result = runtime.run_agent(
            "for herbert maybe we can make a profile for him from The Sevn Nites at Fazber: A Complete Rekord",
            on_event=events.append,
        )
        self.assertEqual(result["status"], "needs_input")
        # It must not pretend a record was found, and it should stay actionable.
        self.assertNotIn("I found the source record, but", result["message"])
        self.assertIn("could not resolve", result["message"])

    def test_approval_writes_once_and_survives_duplicates(self) -> None:
        prompt = (
            "for freddy can you make a charcater prfile for him\\n"
            "The Seven Nights at Fazbear: A Complete Record you can learn about him from"
        )
        with patch.object(runtime.repo_tools, "add_json_object", side_effect=AssertionError("draft must not write")):
            draft = runtime.run_agent(prompt)
        self.assertEqual(draft["status"], "approval_required")
        run_id = draft["run"]

        events: list[dict[str, object]] = []
        with patch.object(runtime.repo_tools, "add_json_object", return_value="added gabriel_freddy to Reputation-Matrix2/data/characters.json (184 records)") as write:
            result = runtime.run_agent("approve", run_id=run_id, on_event=events.append)
        self.assertEqual(result["status"], "done")
        self.assertEqual(write.call_count, 1)
        self.assertIn("Applied the grounded character profile", result["answer"])

        duplicate = ValueError("an object with id 'gabriel_freddy' already exists")
        with patch.object(runtime.repo_tools, "add_json_object", side_effect=duplicate):
            again = runtime.run_agent("approve", run_id=run_id)
        self.assertEqual(again["status"], "done")
        self.assertIn("already exists", again["answer"])
        self.assertIn("nothing new to write", again["answer"])

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
