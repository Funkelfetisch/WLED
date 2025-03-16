import os
import subprocess
import shutil
# Print the environment variables for debugging
print("Environment variables:")
for key, value in os.environ.items():
    print(f"{key}: {value}")

# Get the PlatformIO environment and target
pio_env = os.getenv("PIOENV")
pio_target = os.getenv("PIOTARGET")
# Set default values if the environment variables are not set
if pio_env is None:
    pio_env = "default_env"
if pio_target is None:
    pio_target = "None"
    # Set default value for PRODUCT_NAME if not set
    if os.getenv("PRODUCT_NAME") is None:
        os.environ["PRODUCT_NAME"] = "croptop"
# Check if the script is being run by PlatformIO for the "upload" target
if "UPLOAD_PORT" in os.environ:
    pio_target = "upload"
# Only run npm build for specific targets
if pio_target in ["upload", "build", "None"]:
    print("Running npm build before compiling WLED...")

    product_name = os.getenv("PRODUCT_NAME")
    if product_name is None:
        print("PRODUCT_NAME environment variable is not set!")
        env.Exit(1)

    source_dir = os.path.join("usermods", "NEBULITE", "configs", product_name)
    target_dir = os.path.join("wled00", "data")

    if not os.path.exists(source_dir):
        print(f"Source directory {source_dir} does not exist!")
        env.Exit(1)

    for filename in os.listdir(source_dir):
        source_file = os.path.join(source_dir, filename)
        target_file = os.path.join(target_dir, filename)
        if os.path.isfile(source_file):
            print(f"Copying {source_file} to {target_file}")
            shutil.copy2(source_file, target_file)

    result = subprocess.run(["npm", "run", "build"], cwd="wled00/data", shell=True)

        # if result.returncode == 0:
        #     for filename in os.listdir(source_dir):
        #         target_file = os.path.join(target_dir, filename)
        #         if os.path.isfile(target_file):
        #             print(f"Deleting {target_file}")
        #             os.remove(target_file)

    if result.returncode != 0:
        print("npm build failed!")
        env.Exit(1)
else:
    print(f"Skipping npm build for target: {pio_target}")