import os
import subprocess
import json
from SCons.Script import Import
import time

Import("env")

if os.getenv("PRODUCT_NAME") is None:
    os.environ["PRODUCT_NAME"] = "croptop"

def merge_firmware_action(target, source, env):
    # print("Debug: SCons environment variables:")
    # for key, value in env.items():
    #     print(f"{key}: {value}")
    # build_env_name = env.get("PIOENV")
    build_dir = os.path.join(env["PROJECT_BUILD_DIR"], "WLED_nebulite")
    product_name = os.environ["PRODUCT_NAME"]
    # Our firmware bin produced by PlatformIO (usually found in the build directory)

    # Define the output merged firmware filename
    merged_bin = os.path.join(env["PROJECT_DIR"], "build_output", "NEBULITE", product_name, "merged-firmware.bin")

    # Define the component firmware files.
    # Use the build directory for the current environment for component firmware files.
    # component_dir = os.path.join(build_dir)
    app_bin = os.path.join(build_dir, "firmware.bin")
    bootloader = os.path.join(build_dir, "bootloader.bin")
    boot_app0 = os.path.join(env["PROJECT_DIR"], "tools", "updater", "boot_app0.bin")
    partitions = os.path.join(build_dir, "partitions.bin")
    userdata = os.path.join(env["PROJECT_DIR"], "build_output", "NEBULITE", product_name, "userdata.bin")

    cmd = [
        "esptool",
        "--chip", "esp32-s3",
        "merge_bin",
        "-o", merged_bin,
        "--flash_mode", "dio",
        "--flash_freq", "40m",
        "--flash_size", "8MB",
        "0x0", bootloader,
        "0x8000", partitions,
        "0xe000", boot_app0,
        "0x10000", app_bin,
        "0x410000", userdata
    ]

    print("Running merge_bin command:")
    print(" ".join(cmd))
    subprocess.check_call(cmd)

    # Create a manifest file similar to the provided example.
    # (Here only the ESP32 build is listed; add additional entries if needed.)
    version = env.get("WLED_VERSION")
    if not version:
        version = time.strftime("v%Y%m%d%H%M%S")
    
    manifest = {
        "name": env.get("WLED_RELEASE_NAME", "NEBULITE"),
        "version": version,
        "home_assistant_domain": "wled",
        "funding_url": "https://nebulite.berlin",
        "new_install_prompt_erase": False,
        "builds": [
            {
                "chipFamily": "ESP32-S3",
                "parts": [
                    { "path": "merged-firmware.bin", "offset": 0 }
                    # { "path": "firmware.bin", "offset": 65536 },
                    # { "path": "userdata.bin", "offset": 4259840 },
                    # { "path": os.path.basename(merged_bin), "offset": 0 }
                ]
            }
        ]
    }

    manifest_file = os.path.join("build_output", "NEBULITE", os.environ["PRODUCT_NAME"], "manifest.json")
    with open(manifest_file, "w") as mf:
        json.dump(manifest, mf, indent=4)
    print(f"Manifest file created: {manifest_file}")

# Add the post-action for merging firmware after a successful build.
env.AddPostAction("$BUILD_DIR/${PROGNAME}.bin", merge_firmware_action)