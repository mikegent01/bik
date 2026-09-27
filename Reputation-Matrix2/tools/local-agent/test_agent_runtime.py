#!/usr/bin/env python3
"""Regression tests for the fresh chat-first runtime."""
from __future__ import annotations

import json
import sys
import unittest
from contextlib import contextmanager
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


@contextmanager
def auto_write(result: str = "added gabriel_freddy to Reputation-Matrix2/data/characters.json (184 records)"):
    """The auto-write path: upsert is mocked, the legacy append must not run."""
    with patch.object(runtime.repo_tools, "upsert_json_object", return_value=result) as upsert, \
         patch.object(runtime.repo_tools, "add_json_object", side_effect=AssertionError("writes go through upsert")):
        yield upsert


class ChatFirstTests(unittest.TestCase):
    def test_normal_conversation_is_chat(self) -> None:
        for prompt in (
            "hello",
            "what do you think about Freddy?",
            "I like this character",
            "thanks, that works",
            "draft a character profile for Freddy",
            "write a short bio for Freddy",
            "create a character for my story",
            "read above",
        ):
            with self.subTest(prompt=prompt):
                decision = runtime.classify_request(prompt)
                self.assertEqual(decision["kind"], "chat")
                self.assertFalse(decision["needed"])
        # Messages that name archive things get the reasoning loop — the model
        # decides whether any tool is actually needed.
        for prompt in ("the character file looks good", "make a profile for him"):
            with self.subTest(prompt=prompt):
                self.assertEqual(runtime.classify_request(prompt)["kind"], "agent")

    def test_deictic_references_stay_chat_after_a_profile_request(self) -> None:
        """“read above” after a written profile is conversation, not another run."""
        requested = ("Cosmic Jester seems to be important can we create a character profile "
                     "for him please check the factions json and edit the file")
        conversation = [
            {"role": "user", "content": requested},
            {"role": "assistant", "content": "The profile is written — anything else?"},
        ]
        for reply in ("read above", "read that", "check it out", "thanks", "ok cool", "sounds good"):
            with self.subTest(reply=reply):
                decision = runtime.classify_request(reply, conversation=conversation)
                self.assertEqual(decision["kind"], "chat")
        # Insisting or resending still re-enters the profile flow.
        self.assertEqual(runtime.classify_request("i just told you", conversation=conversation)["kind"], "profile")
        resent = conversation + [{"role": "user", "content": requested}]
        self.assertEqual(runtime.classify_request(requested, conversation=resent)["kind"], "profile")

    def test_ambiguous_creation_asks_in_prose_before_tools(self) -> None:
        cases = (
            "can we create a new chracer file",
            "The Seven Nights at Fazbear: A Complete Record has some people that we need to create",
            "Let's start with freddy the article should have all it needs right",
            "for Freddy you may edit files",
        )
        for prompt in cases:
            with self.subTest(prompt=prompt):
                decision = runtime.classify_request(prompt)
                self.assertEqual(decision["kind"], "agent")
        calls, fake = model_texts("Which people or characters should I create? Give me their names first.")
        events: list[dict[str, object]] = []
        with patch.object(runtime, "_complete", side_effect=fake), \
             patch.object(runtime.repo_tools, "search", side_effect=AssertionError("no tools before the names")), \
             patch.object(runtime.repo_tools, "upsert_json_object", side_effect=AssertionError("no writes before the names")):
            result = runtime.run_agent(
                "The Seven Nights at Fazbear: A Complete Record has some people that we need to create",
                on_event=events.append,
            )
        self.assertEqual(result["status"], "done")
        self.assertIn("Which people", result["message"])
        self.assertTrue(calls, "the question must be written by the model")
        actions = [event for event in events if event.get("kind") == "action"]
        self.assertEqual(actions, [], "no tool runs when the model only asks for the missing piece")

    def test_source_backed_profile_request_resolves_and_writes(self) -> None:
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
        with patch.object(runtime, "_complete", side_effect=fake), auto_write() as upsert:
            result = runtime.run_agent(prompt, on_event=events.append)
        self.assertEqual(result["status"], "done")
        self.assertEqual(upsert.call_count, 1)
        self.assertEqual(upsert.call_args[0][1]["id"], "gabriel_freddy")
        self.assertIn("MODEL-REPLY", result["message"])
        self.assertTrue(calls, "the reply must be written by the model")
        actions = [event for event in events if event.get("kind") == "action"]
        self.assertEqual([event["action"]["action"] for event in actions],
                         ["repo_search", "catalog_retrieve", "repo_upsert_object"])

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
        with patch.object(runtime, "_complete", side_effect=fake), auto_write() as upsert:
            result = runtime.run_agent(prompt)
        self.assertEqual(result["status"], "done")
        self.assertEqual(upsert.call_count, 1)
        self.assertIn("MODEL-REPLY", result["message"])
        self.assertIn("gabriel_freddy", result["message"])

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

    def test_cosmic_jester_profiles_and_writes_from_the_factions_file(self) -> None:
        prompt = ("Cosmic Jester seems to be important can we create a character profile "
                  "for him please check the factions json and edit the file")
        decision = runtime.classify_request(prompt)
        self.assertEqual(decision["kind"], "profile")
        self.assertEqual(decision["target"], "Cosmic Jester")
        self.assertEqual(decision["source"], "factions.json")

        calls, fake = model_texts()
        events: list[dict[str, object]] = []
        with patch.object(runtime, "_complete", side_effect=fake), \
             auto_write("updated cosmic_jester in Reputation-Matrix2/data/characters.json (185 records)") as upsert:
            result = runtime.run_agent(prompt, on_event=events.append)
        self.assertEqual(result["status"], "done")
        self.assertEqual(upsert.call_count, 1)
        self.assertTrue(calls, "the reply must be written by the model")
        draft = json.loads(result["message"].split("\n\n", 1)[1])
        self.assertEqual(draft["id"], "cosmic_jester")
        self.assertEqual(draft["sourceRecord"], "disaster_inc")
        blob = draft["summary"] + draft["description"]
        self.assertIn("Big Bite", blob)
        self.assertIn("Doughnut World", blob)
        # The party's self-description must not be mashed into the Jester.
        self.assertNotIn("distributed survival organism", blob)
        actions = [event for event in events if event.get("kind") == "action"]
        self.assertEqual([event["action"]["action"] for event in actions],
                         ["repo_search", "catalog_retrieve", "repo_upsert_object"])

    def test_repeated_request_reply_is_regenerated_not_canned(self) -> None:
        vague = "The Seven Nights at Fazbear: A Complete Record has some people that we need to create"
        first_reply = "Which people or characters should I create? Give me their names first."
        conversation = [
            {"role": "user", "content": vague},
            {"role": "assistant", "content": first_reply},
            {"role": "user", "content": vague},
        ]
        self.assertEqual(runtime.classify_request(vague, conversation=conversation)["kind"], "agent")

        seen_conversations: list[list[dict[str, str]]] = []
        def fake(endpoint, model, system, user, **kwargs):
            seen_conversations.append(list(kwargs.get("conversation") or []))
            return "Which people? I still need their names."
        with patch.object(runtime, "_complete", side_effect=fake), \
             patch.object(runtime.repo_tools, "search", side_effect=AssertionError("unexpected search")):
            result = runtime.run_agent(vague, conversation=conversation)
        self.assertEqual(result["status"], "done")
        self.assertIn("Which people?", result["message"])
        self.assertNotEqual(result["message"], first_reply)
        joined = " ".join(str(item.get("content", "")) for item in seen_conversations[0])
        self.assertIn(first_reply[:40], joined, "the model must see its own previous reply")

    def test_guard_followups_complete_the_profile_request(self) -> None:
        conversation = [
            {"role": "user", "content": "for freddy you may edit files"},
            {"role": "assistant", "content": "Sure — which source record should I draft Freddy's profile from?"},
            {"role": "user", "content": "The Seven Nights at Fazbear: A Complete Record"},
        ]
        decision = runtime.classify_request("The Seven Nights at Fazbear: A Complete Record", conversation=conversation)
        self.assertEqual(decision["kind"], "profile")

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
        self.assertTrue(any("could not resolve" in call for call in calls), calls)

    def test_approval_recognition_and_revision_intent(self) -> None:
        """Approval inside sentences works; revision notes are not approvals."""
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
            "write it better flesh out the description please",
        ):
            with self.subTest(refusal=refusal):
                self.assertFalse(runtime._approval_request(refusal))
        self.assertTrue(runtime._is_revision_request("write it better flesh out the description please"))
        self.assertTrue(runtime._is_revision_request("make it sound good, waluigi tone"))
        self.assertFalse(runtime._is_revision_request("go ahead"))

    def test_offline_model_does_not_block_the_write(self) -> None:
        """The write is deterministic; only the reply text needs the model."""
        import urllib.error

        def offline(*args, **kwargs):
            raise urllib.error.URLError("connection refused")

        prompt = ("for freddy can you make a charcater prfile for him\\n"
                  "The Seven Nights at Fazbear: A Complete Record you can learn about him from")
        events: list[dict[str, object]] = []
        with patch.object(runtime, "_complete", side_effect=offline), auto_write() as upsert:
            result = runtime.run_agent(prompt, on_event=events.append)
        self.assertEqual(result["status"], "done")
        self.assertEqual(upsert.call_count, 1)
        self.assertIn("LM Studio is offline", result["message"])
        self.assertIn("Action completed without the model", result["message"])
        self.assertNotIn("No repository or image tool was called", result["message"])
        self.assertIn("gabriel_freddy", result["message"])

    def test_pending_profile_notes_revise_and_rewrite(self) -> None:
        prompt = ("for freddy can you make a charcater prfile for him\\n"
                  "The Seven Nights at Fazbear: A Complete Record you can learn about him from")
        calls, fake = model_texts()
        with patch.object(runtime, "_complete", side_effect=fake), auto_write() as upsert:
            draft = runtime.run_agent(prompt)
        self.assertEqual(draft["status"], "done")
        run_id = draft["run"]

        revision = json.dumps({
            "reply": "Noted — the profile now records him as the leader of the original five.",
            "profile": {
                "id": "gabriel_freddy",
                "name": "Gabriel / Freddy",
                "title": "The Frontman and Leader of the Original Five",
                "summary": "Gabriel is the frontman of the original five and their leader.",
                "description": "## The stage\n\nHe held the frontman position for decades.",
                "status": "Released Night Seven",
                "race": "Human child",
                "affiliation": "The original five",
            },
        })
        events: list[dict[str, object]] = []
        with patch.object(runtime, "_complete", return_value=revision), \
             auto_write("updated gabriel_freddy in Reputation-Matrix2/data/characters.json (184 records)") as upsert:
            result = runtime.run_agent("this is the leader of it i guess", run_id=run_id, on_event=events.append)
        self.assertEqual(result["status"], "done")
        self.assertIn("leader", result["message"])
        self.assertEqual(upsert.call_count, 1)
        written = upsert.call_args[0][1]
        self.assertEqual(written["title"], "The Frontman and Leader of the Original Five")
        # grounded structural fields are restored no matter what the model returned
        self.assertEqual(written["keyEvents"], ["fazbear_seven_nights"])
        self.assertEqual(written["sourceRecord"], "fazbear_seven_nights")

    def test_write_it_is_a_revision_not_an_approval(self) -> None:
        """“write it better flesh out the description please” revises the file."""
        prompt = ("Cosmic Jester seems to be important can we create a character profile "
                  "for him please check the factions json and edit the file")
        calls, fake = model_texts()
        with patch.object(runtime, "_complete", side_effect=fake), \
             auto_write("updated cosmic_jester in Reputation-Matrix2/data/characters.json (185 records)"):
            first = runtime.run_agent(prompt)
        self.assertEqual(first["status"], "done")

        revision = json.dumps({
            "reply": "Fleshed out — the description now covers the whole bite.",
            "profile": {
                "id": "cosmic_jester", "name": "Cosmic Jester", "title": "The Bite That Was Taken",
                "summary": "The Cosmic Jester is the entity that took the Big Bite.",
                "description": "## The bite\n\nA doughnut, a bite, a hole.",
                "status": "At large", "race": "Cosmic entity", "affiliation": "The Doughnut World",
            },
        })
        with patch.object(runtime, "_complete", return_value=revision), \
             auto_write("updated cosmic_jester in Reputation-Matrix2/data/characters.json (185 records)") as upsert:
            result = runtime.run_agent("write it better flesh out the description please", run_id=first["run"])
        self.assertEqual(result["status"], "done")
        self.assertEqual(upsert.call_count, 1)
        self.assertEqual(upsert.call_args[0][1]["description"], "## The bite\n\nA doughnut, a bite, a hole.")

    def test_courtesy_after_a_written_profile_stays_chat(self) -> None:
        prompt = ("for freddy can you make a charcater prfile for him\\n"
                  "The Seven Nights at Fazbear: A Complete Record you can learn about him from")
        calls, fake = model_texts()
        with patch.object(runtime, "_complete", side_effect=fake), auto_write():
            draft = runtime.run_agent(prompt)
        with patch.object(runtime, "_chat_answer", return_value="You are welcome.") as chat:
            result = runtime.run_agent("thanks", run_id=draft["run"])
        self.assertEqual(result["status"], "done")
        self.assertEqual(result["answer"], "You are welcome.")
        self.assertEqual(chat.call_count, 1)

    def test_error_notices_never_reach_the_model(self) -> None:
        """The runtime's own failure texts are not fed back as conversation."""
        conversation = [
            {"role": "user", "content": "hello"},
            {"role": "assistant", "content": "LM Studio is offline. Start the local model server and retry. No repository or image tool was called."},
            {"role": "user", "content": "Cosmic Jester seems important, can we profile him from the factions json"},
            {"role": "assistant", "content": "LM Studio returned HTTP 400. The model backend reported an error."},
            {"role": "user", "content": "this is the leader of it i guess"},
        ]
        trimmed = runtime._redact_conversation(conversation)
        self.assertEqual([item["role"] for item in trimmed], ["user", "user", "user"])
        self.assertEqual(runtime._redact_conversation(conversation, keep=0), [])

    def test_model_writes_the_profile_prose(self) -> None:
        """“waluigi tone and all”: the model writes title/summary/description."""
        def fake(endpoint, model, system, user, **kwargs):
            if "staff writer" in system:
                return json.dumps({
                    "title": "The Bite That Was Taken",
                    "summary": "The Cosmic Jester is the entity that took the Big Bite out of the Doughnut World.",
                    "description": "## The Big Bite\n\nThe world is a doughnut, and a bite-sized chunk of it is simply gone.",
                    "waluigiComment": "Waluigi documented this under protest. WAH.",
                })
            return "MODEL-INTRO"

        with patch.object(runtime, "_complete", side_effect=fake), \
             auto_write("updated cosmic_jester in Reputation-Matrix2/data/characters.json (185 records)") as upsert:
            result = runtime.run_agent(
                "Cosmic Jester seems to be important can we create a character profile "
                "for him please check the factions json and edit the file waluigi tone and all go ahead make it sound good"
            )
        self.assertEqual(result["status"], "done")
        draft = json.loads(result["message"].split("\n\n", 1)[1])
        self.assertEqual(draft["title"], "The Bite That Was Taken")
        self.assertIn("Big Bite", draft["summary"])
        self.assertEqual(draft["waluigiComment"], "Waluigi documented this under protest. WAH.")
        # structural fields stay deterministic and grounded
        self.assertEqual(draft["id"], "cosmic_jester")
        self.assertEqual(draft["sourceRecord"], "disaster_inc")
        self.assertEqual(draft["keyEvents"], ["disaster_inc_naming_dispute"])
        self.assertEqual(upsert.call_args[0][1]["title"], "The Bite That Was Taken")

    def test_file_source_draft_reads_cleanly(self) -> None:
        """No markdown leakage, no circular status, trimmed related articles."""
        calls, fake = model_texts()
        with patch.object(runtime, "_complete", side_effect=fake), \
             auto_write("updated cosmic_jester in Reputation-Matrix2/data/characters.json (185 records)"):
            result = runtime.run_agent(
                "Cosmic Jester seems to be important can we create a character profile "
                "for him please check the factions json and edit the file"
            )
        self.assertEqual(result["status"], "done")
        draft = json.loads(result["message"].split("\n\n", 1)[1])
        blob = draft["summary"] + draft["description"] + draft["status"]
        self.assertNotIn("###", blob)
        self.assertNotIn("---", blob)
        self.assertTrue(draft["summary"].startswith("Cosmic Jester is referenced in"))
        self.assertNotIn("Referenced in the factions.json record", blob)
        self.assertLessEqual(len(draft["relatedArticles"]), 10)
        self.assertIn("Big Bite", blob)
        self.assertIn("Doughnut World", blob)

    def test_explicit_archive_requests_reach_the_reasoning_loop(self) -> None:
        for prompt in (
            "read the article about Freddy in canon",
            "what does this article say about Freddy?",
            "find Freddy in the repository",
            "search the repository for Freddy",
            "read the factions json",
            "can we add a noki race to the campagin?",
            "update the Noki race to mention their shells",
            "add a race",
            "what race is Markop",
            "edit Reputation-Matrix2/data/characters.json",
        ):
            with self.subTest(prompt=prompt):
                decision = runtime.classify_request(prompt)
                self.assertEqual(decision["kind"], "agent")
                self.assertTrue(decision["needed"])

    def test_agent_loop_files_a_record_from_one_prompt(self) -> None:
        """'add a noki race' — the model reasons: search, read the format, write, reply."""
        turns = (
            json.dumps({"tool": "search_archive", "args": {"term": "Noki", "limit": 5}}),
            json.dumps({"tool": "read_collection", "args": {"path": "Reputation-Matrix2/data/races.json"}}),
            json.dumps({"tool": "write_record", "args": {"path": "Reputation-Matrix2/data/races.json",
                        "record": {"id": "noki", "name": "Nokis", "title": "Nokis — The Shell and the Shore",
                                   "summary": "A short, shelled folk of Isle Delfino.", "status": "Native — thriving"}}}),
            "Filed it. The Nokis are in races.json now, in the file's own format.",
        )
        calls, fake = model_texts(*turns)
        events: list[dict[str, object]] = []
        with patch.object(runtime, "_complete", side_effect=fake), \
             patch.object(runtime.repo_tools, "upsert_json_object",
                          return_value="added noki in Reputation-Matrix2/data/races.json (52 records)") as upsert:
            result = runtime.run_agent("can we add a noki race to the campagin?", on_event=events.append)
        self.assertEqual(result["status"], "done")
        self.assertEqual(upsert.call_count, 1)
        self.assertEqual(upsert.call_args[0][0], "Reputation-Matrix2/data/races.json")
        self.assertEqual(upsert.call_args[0][1]["id"], "noki")
        actions = [event["action"]["action"] for event in events if event.get("kind") == "action"]
        self.assertEqual(actions, ["search_archive", "read_collection", "write_record"])
        # the format samples reached the model on the drafting call
        self.assertIn("TOOL RESULT (read_collection)", calls[2])
        self.assertIn("record_keys", calls[2])
        state = runtime._load_state(result["run"])
        self.assertEqual(state["kind"], "agent")
        self.assertEqual(state["status"], "done")
        self.assertIn("write_record", state["tools"])

    def test_agent_loop_gathers_evidence_without_being_asked(self) -> None:
        """'Noki' alone surfaces the Isle Delfino nation — no second prompt needed."""
        turns = (
            json.dumps({"tool": "search_archive", "args": {"term": "Noki", "limit": 5}}),
            json.dumps({"tool": "find_records", "args": {"path": "Reputation-Matrix2/data/nations.json",
                                                          "term": "Isle Delfino"}}),
            "The Isle Delfino nation grounds the record; filing it.",
        )
        calls, fake = model_texts(*turns)
        with patch.object(runtime, "_complete", side_effect=fake), \
             patch.object(runtime.repo_tools, "upsert_json_object",
                          return_value="added noki in Reputation-Matrix2/data/races.json (52 records)"):
            result = runtime.run_agent("can we add a noki race, they are from Isle Delfino")
        self.assertEqual(result["status"], "done")
        self.assertIn("isle_delfino", calls[1], "the nation record must reach the model as evidence")

    def test_agent_loop_offline_writes_nothing(self) -> None:
        """A model failure writes nothing and leaves a resumable run."""
        def broken(endpoint, model, system, user, **kwargs):
            raise RuntimeError("connection refused at http://127.0.0.1:1234")
        with patch.object(runtime, "_complete", side_effect=broken), \
             patch.object(runtime.repo_tools, "upsert_json_object",
                          side_effect=AssertionError("nothing may be written offline")) as upsert:
            result = runtime.run_agent("can we add a noki race")
        self.assertEqual(result["status"], "error")
        self.assertEqual(upsert.call_count, 0)
        state = runtime._load_state(result["run"])
        self.assertEqual((state["kind"], state["status"]), ("agent", "error"))

    def test_agent_loop_retry_continues_the_run(self) -> None:
        """'really try again' after a failure resumes the same job — no regexes."""
        def broken(endpoint, model, system, user, **kwargs):
            raise RuntimeError("HTTP 400: bad request")
        with patch.object(runtime, "_complete", side_effect=broken):
            failed = runtime.run_agent("can we add a pianta race too")
        self.assertEqual(failed["status"], "error")
        with patch.object(runtime, "_complete", side_effect=["Filed the Piantas on retry."]):
            retried = runtime.run_agent("really try again", run_id=failed["run"])
        self.assertEqual(retried["status"], "done")
        self.assertIn("Piantas", retried["answer"])

    def test_agent_loop_updates_existing_records(self) -> None:
        """The model reads the existing record and writes the amended version."""
        turns = (
            json.dumps({"tool": "find_records", "args": {"path": "Reputation-Matrix2/data/races.json", "term": "Noki"}}),
            json.dumps({"tool": "write_record", "args": {"path": "Reputation-Matrix2/data/races.json",
                        "record": {"id": "noki", "name": "Nokis", "summary": "amended"}}}),
            "Updated with the shell lore.",
        )
        calls, fake = model_texts(*turns)
        with patch.object(runtime, "_complete", side_effect=fake), \
             patch.object(runtime.repo_tools, "upsert_json_object",
                          return_value="updated noki in Reputation-Matrix2/data/races.json (52 records)") as upsert:
            result = runtime.run_agent("update the Noki race to mention their shells")
        self.assertEqual(result["status"], "done")
        self.assertEqual(upsert.call_args[0][1]["summary"], "amended")

    def test_agent_loop_tool_errors_feed_back_to_the_model(self) -> None:
        """A refused write is reported to the model, which corrects course."""
        turns = (
            json.dumps({"tool": "write_record",
                        "args": {"path": "Reputation-Matrix2/data/mainPage.json", "record": {"id": "x"}}}),
            "That file is not a record collection, so nothing was written there.",
        )
        calls, fake = model_texts(*turns)
        with patch.object(runtime, "_complete", side_effect=fake), \
             patch.object(runtime.repo_tools, "upsert_json_object",
                          side_effect=ValueError("writes are limited to existing JSON list collections")):
            result = runtime.run_agent("add a test entry to mainPage.json")
        self.assertEqual(result["status"], "done")
        self.assertIn("not a record collection", result["answer"])
        self.assertIn("TOOL ERROR (write_record)", calls[1], "the tool error must reach the model")

    def test_collection_samples_are_condensed(self) -> None:
        """Sample records fit a small model context: strings clipped, keys intact."""
        import tempfile
        with tempfile.TemporaryDirectory() as tmp:
            fake_data = Path(tmp) / "data"
            fake_data.mkdir()
            target = fake_data / "races.json"
            target.write_text(json.dumps([
                {"id": "big", "name": "Big", "summary": "x" * 5000, "description": "y" * 5000, "status": "Active"},
            ]), encoding="utf-8")
            import importlib
            module = importlib.import_module("repo_tools")
            with patch.object(module, "safe_path", return_value=target), \
                 patch.object(module, "PROJECT", Path(tmp)), \
                 patch.object(module, "ROOT", Path(tmp)):
                overview = module.collection_overview(str(target), sample_count=1, cap=400)
            blob = json.dumps(overview["samples"], ensure_ascii=False)
            self.assertLessEqual(len(blob), 3400)
            self.assertIn("summary", overview["samples"][0])

    def test_upsert_rejects_non_list_collections(self) -> None:
        """Dict-shaped bookkeeping files are not record collections."""
        import tempfile
        with tempfile.TemporaryDirectory() as tmp:
            fake_data = Path(tmp) / "data"
            fake_data.mkdir()
            target = fake_data / "mainPage.json"
            target.write_text(json.dumps({"featuredArticle": {}}), encoding="utf-8")
            import importlib
            module = importlib.import_module("repo_tools")
            with patch.object(module, "safe_path", return_value=target), \
                 patch.object(module, "PROJECT", Path(tmp)):
                with self.assertRaises(ValueError):
                    module.upsert_json_object(str(target), {"id": "x"})

    def test_generator_limit_follows_the_wording(self) -> None:
        """'a new battle' is one record, 'some events' is three, numbers are honored."""
        cases = {
            "can you generate a new battle using the tools": 1,
            "make some events please": 3,
            "run the generator for reputation": 2,
            "generate 3 battles": 3,
            "create two new events with the tools": 2,
            "give me a few more shop items": 3,
        }
        for prompt, expected in cases.items():
            self.assertEqual(runtime._requested_generator_limit(prompt), expected, prompt)

    def test_generator_requests_run_the_archive_tools(self) -> None:
        for prompt in (
            "can you generate a new battle using the tools",
            "make some events please",
            "run the generator for reputation",
            "fill in the faction dossiers with the generator",
        ):
            with self.subTest(prompt=prompt):
                decision = runtime.classify_request(prompt)
                self.assertEqual(decision["kind"], "generate")
        self.assertEqual(runtime.classify_request("can you generate a new battle using the tools")["system"], "battles")

        inventory = [
            {"id": "battles", "title": "Battles · new records", "summary": "Append battles", "pending": 6, "enabled": True},
            {"id": "events", "title": "Events · new records", "summary": "Append events", "pending": 0, "enabled": True},
        ]
        calls, fake = model_texts()
        events: list[dict[str, object]] = []
        with patch.object(runtime, "_complete", side_effect=fake), \
             patch.object(runtime.repo_tools, "generator_inventory", return_value=inventory), \
             patch.object(runtime.repo_tools, "run_generator",
                          return_value={"command": "python tools/generate_all.py --only battles --limit 2",
                                        "returncode": 0, "output": "✅ wrote 2 battles"}) as run:
            result = runtime.run_agent("can you generate a new battle using the tools", on_event=events.append)
        self.assertEqual(result["status"], "done")
        self.assertEqual(run.call_count, 1)
        self.assertEqual(run.call_args[0][0], "battles")
        self.assertEqual(run.call_args.kwargs.get("limit"), 1)
        self.assertTrue(calls, "the reply must be written by the model")
        actions = [event for event in events if event.get("kind") == "action"]
        self.assertEqual([event["action"]["action"] for event in actions], ["run_generator"])

    def test_generator_reports_empty_systems_honestly(self) -> None:
        inventory = [{"id": "events", "title": "Events · new records", "summary": "Append events",
                      "pending": 0, "enabled": True}]
        calls, fake = model_texts()
        with patch.object(runtime, "_complete", side_effect=fake), \
             patch.object(runtime.repo_tools, "generator_inventory", return_value=inventory), \
             patch.object(runtime.repo_tools, "run_generator", side_effect=AssertionError("nothing should run")) as run:
            result = runtime.run_agent("make some events please")
        self.assertEqual(result["status"], "done")
        self.assertEqual(run.call_count, 0)
        self.assertIn("MODEL-REPLY", result["answer"])
        self.assertTrue(any("pending" in call for call in calls), "the model must see the inventory")

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

    def test_creation_room_greeting_is_still_chat(self) -> None:
        events: list[dict[str, object]] = []
        creation = {"year": "2026 BF", "characters": [{"id": "freddy_fazbear"}], "events": []}
        with patch.object(runtime, "_chat_answer", return_value="A roleplay answer"), \
             patch.object(runtime.repo_tools, "catalog_retrieve", side_effect=AssertionError("unexpected prefetch")):
            result = runtime.run_agent("hello", creation_context=creation, on_event=events.append)
        self.assertEqual(result["status"], "done")
        self.assertEqual([event for event in events if event.get("kind") == "action"], [])

    def test_read_run_uses_one_focused_tool_and_a_model_answer(self) -> None:
        turns = (
            json.dumps({"tool": "search_archive", "args": {"term": "Freddy", "limit": 5}}),
            "Grounded archive answer: Freddy is in characters.json.",
        )
        calls, fake = model_texts(*turns)
        events: list[dict[str, object]] = []
        with patch.object(runtime, "_complete", side_effect=fake), \
             patch.object(runtime.repo_tools, "search",
                          return_value=[{"path": "Reputation-Matrix2/data/characters.json", "line": "12",
                                         "preview": "\"id\": \"freddy\"", "entity_id": "freddy"}]):
            result = runtime.run_agent("find Freddy in the repository", on_event=events.append)
        self.assertEqual(result["status"], "done")
        self.assertIn("Grounded archive answer", result["answer"])
        actions = [event["action"]["action"] for event in events if event.get("kind") == "action"]
        self.assertEqual(actions, ["search_archive"])
        self.assertIn("TOOL RESULT (search_archive)", calls[1])

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

    def test_upsert_replaces_by_id(self) -> None:
        """repo_tools.upsert_json_object updates an existing record in place."""
        import tempfile
        with tempfile.TemporaryDirectory() as tmp:
            fake_data = Path(tmp) / "data"
            fake_data.mkdir()
            target = fake_data / "characters.json"
            target.write_text(json.dumps([{"id": "a", "name": "Old"}, {"id": "b", "name": "B"}]), encoding="utf-8")
            import importlib
            module = importlib.import_module("repo_tools")
            with patch.object(module, "safe_path", return_value=target), \
                 patch.object(module, "ROOT", Path(tmp)), \
                 patch.object(module, "PROJECT", Path(tmp)):
                result = module.upsert_json_object(str(target), {"id": "a", "name": "New"})
            data = json.loads(target.read_text(encoding="utf-8"))
            self.assertEqual(len(data), 2)
            self.assertEqual(data[0], {"id": "a", "name": "New"})
            self.assertIn("updated a", result)

    def test_every_reply_path_calls_the_model(self) -> None:
        """No user-facing reply may be produced without the local model."""
        prompt = "for freddy can you make a charcater prfile for him\nThe Seven Nights at Fazbear: A Complete Record you can learn about him from"
        vague = "The Seven Nights at Fazbear: A Complete Record has some people that we need to create"
        paths: list[tuple[str, dict[str, object]]] = []

        calls, fake = model_texts()
        with patch.object(runtime, "_complete", side_effect=fake), auto_write():
            paths.append(("clarify", runtime.run_agent(vague)))
            paths.append(("profile", runtime.run_agent(prompt)))
            paths.append(("profile-failure", runtime.run_agent("for nobody maybe we can make a profile for him from factions.json")))
            paths.append(("empty", runtime.run_agent("")))
            with patch.object(runtime.repo_tools, "search", return_value=[]):
                paths.append(("read-empty", runtime.run_agent("find Zzzznope in the repository")))
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
            "reply approve",
            "waiting for the user's approval",
        )
        for needle in forbidden:
            self.assertNotIn(needle, source, f"canned reply text still present: {needle!r}")


if __name__ == "__main__":
    unittest.main()
