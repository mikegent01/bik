import sys
import os

sys.path.append(os.path.join(os.getcwd(), 'Reputation-Matrix2', 'tools'))
from genkit.client import LmStudioClient
from genkit.systems.desk import events_generate
from collections import namedtuple

Task = namedtuple('Task', ['payload', 'last_error'])
task = Task(payload={"_progress": print, "nation_name": "Koopa Kingdom", "slot": 99}, last_error=None)
client = LmStudioClient(port=1234)

# We will just print the prompt and logic flow to see what it does
# Let's mock client.complete_json and client.complete_text

class MockClient:
    def complete_json(self, sys, user, **kwargs):
        print("MOCK JSON SYS:", sys[:100])
        print("MOCK JSON USER:", user[:100])
        if "participants" in sys:
            return {"participants": [{"id": "bowser", "name": "Bowser", "role": "Fought"}]}
        if "xpAwards" in sys:
            return {"xpAwards": [{"character": "bowser", "amount": 100, "reason": "Fought", "type": "Combat XP"}]}
        return {
            "id": "mock_event",
            "name": "Mock Event",
            "title": "A mock event",
            "type": "event",
            "date": "100 BF",
            "era": "Test Era",
            "location": "Test Location",
            "summary": "This is a mock summary.",
            "notableFeatures": ["A feature"],
            "relatedArticles": []
        }

    def complete_text(self, sys, user, **kwargs):
        if "outline" in user:
            return '["Section 1", "Section 2"]'
        if "waluigiAssessment" in sys or "You are Waluigi" in sys:
            return "This is a Waluigi assessment. WAH."
        if "aftermath" in user:
            return "This is an aftermath."
        return "This is some section text. It is very descriptive. Blah blah."

print(events_generate(task, MockClient(), 0.7))
