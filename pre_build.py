import os
import subprocess

print("Running npm build before compiling WLED...")
result = subprocess.run(["npm", "run", "build"], cwd="wled00/web", shell=True)

if result.returncode != 0:
    print("npm build failed!")
    env.Exit(1)
