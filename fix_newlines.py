import re

with open("Reputation-Matrix2/tools/genkit/systems/desk.py", "r") as f:
    content = f.read()

# I used an f-string in my script without escaping the backslashes! 
# Let me just restore the file and patch it with raw strings.
