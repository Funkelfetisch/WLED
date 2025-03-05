import os
import subprocess

print("Running npm build before compiling WLED...")
result = subprocess.run(["npm", "run", "build"], cwd=os.getcwd(), shell=True)

if result.returncode != 0:
    print("npm build failed!")
    env.Exit(1)