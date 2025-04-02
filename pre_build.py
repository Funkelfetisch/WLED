import os
import subprocess
import shutil
import re
import sys
import json
from SCons.Script import Import, COMMAND_LINE_TARGETS

Import("env")

print("Pre-build script started...")

def get_env_variables():
    if not COMMAND_LINE_TARGETS:
        pio_target = "build"
    else:
        pio_target = COMMAND_LINE_TARGETS[0]

    print(f"PIO target: {pio_target}")

    # Extract PRODUCT_NAME from build_flags in platformio.ini
    product_name = "croptop"  # Default value
    build_flags = env.get("BUILD_FLAGS", "")
    if isinstance(build_flags, list):
        build_flags = " ".join(build_flags)
    match = re.search(r"-D\s*PRODUCT_NAME=([^\s]+)", build_flags)
    if match:
        product_name = match.group(1).strip('\'"')

    return pio_target, product_name

def copy_source_to_target(source_dir, target_dir):
    if not os.path.exists(source_dir):
        print(f"Source directory {source_dir} does not exist!")
        sys.exit(1)
    # Delete all files in the target_dir
    for filename in os.listdir(target_dir):
        file_path = os.path.join(target_dir, filename)
        if os.path.isfile(file_path):
            print(f"Deleting {file_path}")
            os.remove(file_path)
    # Copy files over (special-case previewOutput.js)
    for filename in os.listdir(source_dir):
        source_file = os.path.join(source_dir, filename)
        if os.path.isfile(source_file):
            if filename == "previewOutput.js":
                target_file = os.path.join("wled00", "data", filename)
            else:
                target_file = os.path.join(target_dir, filename)
            print(f"Copying {source_file} to {target_file}")
            shutil.copy2(source_file, target_file)

def run_npm_build(cwd):
    result = subprocess.run(["npm", "run", "build"], cwd=cwd, shell=True)
    if result.returncode != 0:
        print("npm build failed!")
        sys.exit(1)


def process_html_files(is_helio, svg_choice, html_folder):
    for filename in os.listdir(html_folder):
        if filename.lower().endswith('.htm'):
            file_path = os.path.join(html_folder, filename)
            try:
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()

                # Function to perform the replacement
                def replace_text(text):
                    if is_helio:
                        return text.replace("NEBULITE", "HELIO")
                    else:
                        return text.replace("HELIO", "NEBULITE")
                
                # Replace text between tags (visible text)
                pattern = re.compile(r'>([^<]+)<', re.DOTALL)
                new_content = pattern.sub(lambda m: ">" + replace_text(m.group(1)) + "<", content)

                # Also replace in <a href="..."> attributes
                anchor_pattern = re.compile(r'(<a\b[^>]*\bhref=(["\']))(.*?)(\2)', re.IGNORECASE | re.DOTALL)
                new_content = anchor_pattern.sub(
                    lambda m: m.group(1) +
                        (m.group(3).replace("nebulite.berlin", "helio.lighting")
                                   .replace("NEBULITE", "HELIO")
                         if is_helio else
                         m.group(3).replace("helio.lighting", "nebulite.berlin")
                                   .replace("HELIO", "NEBULITE"))
                         + m.group(4),
                    new_content
                )
                
                # Replace the SVG placeholder content for index.htm and settings.htm
                if filename in ["index.htm", "settings.htm"]:
                    svg_pattern = re.compile(
                        r'(<div[^>]*class=["\'][^"\']*logoWrapper[^"\']*["\'][^>]*>)(.*?)(</div>)',
                        re.DOTALL | re.IGNORECASE
                    )
                    new_content = svg_pattern.sub(lambda m: m.group(1) + svg_choice + m.group(3), new_content)
                
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Processed {filename}")
            except Exception as e:
                print(f"Error processing {filename}: {e}")


def unprettify_json_files(directory):
    for filename in os.listdir(directory):
        if filename.lower().endswith('.json'):
            file_path = os.path.join(directory, filename)
            try:
                with open(file_path, "r", encoding="utf-8") as f:
                    data = json.load(f)
                if "ap" in data:
                    del data["ap"]
                with open(file_path, "w", encoding="utf-8") as f:
                    json.dump(data, f, separators=(",", ":"))
                print(f"Unprettified {file_path}")
            except Exception as e:
                print(f"Error unprettifying {file_path}: {e}")


def main():
    pio_target, product_name = get_env_variables()
    
    # Only run npm build and file processing for the intended targets.
    if pio_target in ["upload", "build"]:
        print("Running npm build before compiling WLED...")
        
        source_dir = os.path.join("usermods", "NEBULITE", "configs", product_name)
        target_dir = os.path.join("", "data")
        copy_source_to_target(source_dir, target_dir)
        unprettify_json_files(target_dir)
        
        run_npm_build(cwd=os.path.join("wled00", "data"))
        
        is_helio = product_name.lower().startswith("helio")
        # Define your SVG blocks (update with the actual SVG content)
        svg_helio = '''<svg xmlns="http://www.w3.org/2000/svg" id="Ebene_2" viewBox="0 0 283.47 70.87"><defs><style>.cls-1{fill:#fff}</style></defs><g id="Content"><circle cx="27.63" cy="35.43" r="14.93" class="cls-1"/><circle cx="27.63" cy="35.43" r="14.93" class="cls-1"/><path d="M69.76 69.76h46.17V57.32H84.04V41.56h30.04V29.12H84.04V13.55h31.89V1.11H69.76v68.65Zm117.14 0h14.28V1.11H186.9v68.65ZM40.9 19.5c5.25-.58 9.21.39 10.64 3.05 2.23 4.13-2.32 11.13-10.64 17.39v29.84h14.36V1.09H40.9V19.5ZM0 69.78h14.36V51.37c-5.25.58-9.21-.39-10.64-3.05-2.23-4.13 2.32-11.13 10.64-17.39V1.09H0v68.69ZM248.03 0c-19.57 0-35.43 15.86-35.43 35.43s15.86 35.43 35.43 35.43S283.46 55 283.46 35.43 267.6 0 248.03 0Zm0 57.55c-12.22 0-22.12-9.9-22.12-22.12s9.9-22.12 22.12-22.12 22.12 9.9 22.12 22.12-9.9 22.12-22.12 22.12ZM142.84 1.11h-14.28v68.65h46.17V57.32h-31.89V1.11Z" class="cls-1"/></g></svg>'''
        svg_nebulite = '''<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="enable-background:new 0 0 280.92 35.69" viewBox="0 0 280.92 35.69"><path d="M26.19 29.34 3.02.13 2.92 0H0v35.14h3.14V5.16l23.77 29.98h2.42V0h-3.14zm76.4-12.33c2.55-1.25 5.21-3.62 5.21-8.1v-.1c0-2.22-.78-4.12-2.32-5.66-2.03-2.03-5.3-3.15-9.2-3.15H81.71v35.14h15.31c7.71 0 12.7-3.82 12.7-9.74v-.1c0-3.97-2.46-6.82-7.13-8.29zm-6.6-1.11H84.96V3.05h11.28c5.1 0 8.27 2.3 8.27 6.01v.1c0 4.16-3.27 6.74-8.52 6.74zm1.13 16.2H84.96V18.95h11.33c6.54 0 10.14 2.26 10.14 6.35v.1c0 4.13-3.57 6.7-9.31 6.7zm50.21-11.62c0 7.76-4.06 12.21-11.13 12.21-7.2 0-11.33-4.54-11.33-12.46V0h-3.24v20.48c0 9.38 5.54 15.21 14.47 15.21s14.47-5.94 14.47-15.5V0h-3.24v20.48zM167.75 0h-3.24v35.14h23.47V32.1h-20.23zm32.49 0h3.24v35.14h-3.24zm15.61 3.05h12.01v32.09h3.24V3.05h12.01V0h-27.26zM42.81 35.14h25.45V32.1H42.81zm3.56-19.24h-3.56v3.05h25.2V15.9zM68.01 3.05V0h-25.2v3.05h3.24zm187.46 32.09h25.45V32.1h-25.45zm3.56-19.24h-3.56v3.05h25.2V15.9zm21.64-12.85V0h-25.2v3.05h3.25z" style="fill:#fff"/></svg>'''
        svg_choice = svg_helio if is_helio else svg_nebulite
        
        html_folder = os.path.join("wled00", "data")
        process_html_files(is_helio, svg_choice, html_folder)
    else:
        print(f"Skipping npm build for target: {pio_target}")


main()