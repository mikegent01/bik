#!/usr/bin/env python3
"""Routing tests for the minimum-tool controller.

These tests intentionally use short prompts rather than a live LM. The routing
boundary must be deterministic: the model should not be asked to select a
repository action when the operator is only chatting or drafting.
"""
from __future__ import annotations

import sys
import unittest
from unittest.mock import patch

HERE = __import__("pathlib").Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))

import agent_runtime as runtime  # noqa: E402


class MinimumToolRoutingTests(unittest.TestCase):
    def test_generic_conversation_does_not_need_a_tool(self) -> None:
        prompts = (
            "hello",
            "what do you think about Freddy?",
            "I like this character",
            "the character file looks good",
            "thanks, that works",
        )
        for prompt in prompts:
            with self.subTest(prompt=prompt):
                self.assertFalse(runtime._tool_needed(prompt))
                self.assertIsNone(runtime._ambiguous_archive_request(prompt))

    def test_drafting_and_roleplay_bypass_repository_tools(self) -> None:
        prompts = (
            "draft a character profile for Freddy",
            "write a short bio for Freddy",
            "can you help me brainstorm a character?",
            "create a character for my story",
            "write an article about the archive",
        )
        for prompt in prompts:
            with self.subTest(prompt=prompt):
                self.assertEqual(runtime._request_intent(prompt)["kind"], "draft")
                self.assertFalse(runtime._tool_needed(prompt))

    def test_canonical_file_request_is_not_mistaken_for_prose(self) -> None:
        prompt = "can you help me write a character file"
        self.assertEqual(runtime._request_intent(prompt)["kind"], "write")
        self.assertTrue(runtime._tool_needed(prompt))
        self.assertTrue(runtime._missing_write_target(prompt))

    def test_explicit_archive_lookup_still_needs_a_tool(self) -> None:
        prompts = (
            "read the article about Freddy in canon",
            "what does this article say about Freddy?",
            "find Freddy in the repository",
            "search the repository for Freddy",
        )
        for prompt in prompts:
            with self.subTest(prompt=prompt):
                self.assertTrue(runtime._tool_needed(prompt))

    def test_underspecified_collection_write_asks_before_resolving_source(self) -> None:
        prompt = "The Seven Nights at Fazbear: A Complete Record has some people that we need to create"
        # Asking for names must not cause an incidental source search.
        with patch.object(runtime.repo_tools, "resolve_event_reference", side_effect=AssertionError("unexpected lookup")):
            self.assertTrue(runtime._missing_write_target(prompt))

    def test_ambiguous_article_reference_asks_instead_of_searching(self) -> None:
        prompt = "Let's start with freddy the article should have all it needs right"
        conversation = [{
            "role": "user",
            "content": "The Seven Nights at Fazbear: A Complete Record has some people that we need to create",
        }]
        question = runtime._ambiguous_archive_request(prompt, conversation)
        self.assertIsNotNone(question)
        self.assertFalse(runtime._tool_needed(prompt, conversation))

    def test_direct_chat_run_emits_no_repository_action(self) -> None:
        events: list[dict[str, object]] = []
        with patch.object(runtime, "_final_answer", return_value="A direct answer"):
            result = runtime.run_agent("I like this character", on_event=events.append)
        self.assertEqual(result["status"], "done")
        self.assertEqual([event for event in events if event.get("kind") == "action"], [])
        checks = [event for event in events if event.get("kind") == "tool_check"]
        self.assertEqual(len(checks), 1)
        self.assertFalse(checks[0]["needed"])

    def test_ambiguous_run_stops_for_input_without_repository_action(self) -> None:
        events: list[dict[str, object]] = []
        conversation = [{
            "role": "user",
            "content": "The Seven Nights at Fazbear: A Complete Record has some people that we need to create",
        }]
        with patch.object(runtime.repo_tools, "search", side_effect=AssertionError("unexpected search")):
            result = runtime.run_agent(
                "Let's start with freddy the article should have all it needs right",
                conversation=conversation,
                on_event=events.append,
            )
        self.assertEqual(result["status"], "needs_input")
        self.assertIn("not sure", result["message"])
        actions = [event for event in events if event.get("kind") == "action"]
        self.assertEqual([event["action"]["action"] for event in actions], ["ask_user"])

    def test_collection_write_run_asks_for_people_before_source_lookup(self) -> None:
        events: list[dict[str, object]] = []
        prompt = "The Seven Nights at Fazbear: A Complete Record has some people that we need to create"
        with patch.object(runtime.repo_tools, "resolve_event_reference", side_effect=AssertionError("unexpected lookup")):
            result = runtime.run_agent(prompt, on_event=events.append)
        self.assertEqual(result["status"], "needs_input")
        self.assertIn("Which people", result["message"])
        actions = [event for event in events if event.get("kind") == "action"]
        self.assertEqual([event["action"]["action"] for event in actions], ["ask_user"])

    def test_creation_chat_does_not_prefetch_repository_data(self) -> None:
        events: list[dict[str, object]] = []
        creation = {
            "year": "2026 BF",
            "characters": [{"id": "freddy_fazbear", "name": "Freddy Fazbear"}],
            "events": [],
        }
        with patch.object(runtime, "_final_answer", return_value="A roleplay answer"), \
             patch.object(runtime.repo_tools, "catalog_retrieve", side_effect=AssertionError("unexpected prefetch")):
            result = runtime.run_agent("hello", creation_context=creation, on_event=events.append)
        self.assertEqual(result["status"], "done")
        self.assertEqual([event for event in events if event.get("kind") == "action"], [])


if __name__ == "__main__":
    unittest.main()
