import re

with open("Reputation-Matrix2/tools/genkit/systems/desk.py", "r") as f:
    content = f.read()

# Replace the specific catch blocks with templates
p3 = '''    except Exception as e:
        print("Failed participants:", e)
        raw["participants"] = [{"id": "unknown_operator", "name": "Unknown Operator", "role": "Unrecorded"}]'''
content = re.sub(r'    except Exception as e:\n        print\("Failed participants:", e\)', p3, content)

p4 = '''    except Exception as e:
        print("Failed xpAwards:", e)
        raw["xpAwards"] = []'''
content = re.sub(r'    except Exception as e:\n        print\("Failed xpAwards:", e\)', p4, content)

p5 = '''    except Exception as e:
        print("Failed waluigiAssessment:", e)
        raw["waluigiAssessment"] = "Waluigi has filed this record, but the intelligence is too sparse for a full tactical assessment. WAH."'''
content = re.sub(r'    except Exception as e:\n        print\("Failed waluigiAssessment:", e\)', p5, content)

p6 = '''    except Exception as e:
        print("Failed aftermath:", e)
        raw["aftermath"] = "The long-term consequences of this event remain undocumented in the archives."'''
content = re.sub(r'    except Exception as e:\n        print\("Failed aftermath:", e\)', p6, content)

with open("Reputation-Matrix2/tools/genkit/systems/desk.py", "w") as f:
    f.write(content)

print("Patched desk templates")
