import os
import sys
import subprocess

if __name__ == "__main__":
    tools_dir = os.path.join("Reputation-Matrix2", "tools")
    script_path = "generate_all.py"
    
    if not os.path.exists(os.path.join(tools_dir, script_path)):
        print(f"Error: Could not find {os.path.join(tools_dir, script_path)}")
        sys.exit(1)
        
    print(f"Redirecting command to {tools_dir}...")
    sys.exit(subprocess.call([sys.executable, script_path] + sys.argv[1:], cwd=tools_dir))
