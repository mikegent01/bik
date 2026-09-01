with open("Reputation-Matrix2/tools/genkit/systems/desk.py", "r") as f:
    content = f.read()

content = content.replace('not (722 <= year <= 1039)', 'not (10 <= year <= 1040)')

with open("Reputation-Matrix2/tools/genkit/systems/desk.py", "w") as f:
    f.write(content)
