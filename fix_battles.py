with open("Reputation-Matrix2/tools/genkit/systems/desk.py", "r") as f:
    content = f.read()

content = content.replace('raise ValidationError("date must be a past year 722-1039 BF")', 'raise ValidationError("date must be a past year 10-1040 BF")')

with open("Reputation-Matrix2/tools/genkit/systems/desk.py", "w") as f:
    f.write(content)
