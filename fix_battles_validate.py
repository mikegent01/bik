with open("Reputation-Matrix2/tools/genkit/systems/desk.py", "r") as f:
    content = f.read()

content = content.replace('        "status": "Generated — review",\n    }\n\n\ndef battles_repair', '        "status": "Generated — review",\n    }\n    return res\n\n\ndef battles_repair')

with open("Reputation-Matrix2/tools/genkit/systems/desk.py", "w") as f:
    f.write(content)
