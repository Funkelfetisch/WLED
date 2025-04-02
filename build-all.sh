#!/usr/bin/env bash
if ! command -v pio &> /dev/null
then
  if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
    if [ -f "$HOME/.platformio/penv/Scripts/activate" ]; then
      source "$HOME/.platformio/penv/Scripts/activate"
    else
      echo "Error: pio command not found and PlatformIO virtual environment not set."
      exit 1
    fi
  else
    if [ -f "$HOME/.platformio/penv/bin/activate" ]; then
      source "$HOME/.platformio/penv/bin/activate"
    else
      echo "Error: pio command not found and PlatformIO virtual environment not set."
      exit 1
    fi
  fi
fi

mkdir -p build_output/NEBULITE
if command -v zip &> /dev/null
then
  ZIP_CMD="zip"
else
  ZIP_CMD=("/c/Program Files/7-Zip/7z.exe" a -tzip)
fi

# Extract environment names from platformio_override.ini
envs=$(grep -Eo '^\[env:[^]]+\]' platformio_override.ini | sed -E 's/^\[env:(.+)\]$/\1/')

for env in $envs; do
  # Derive a product name: take last underscore-part as a simple approach
  PRODUCT_NAME=$(echo "$env" | awk -F'_' '{print $NF}')
  echo "Building for $PRODUCT_NAME ($env)"
  mkdir -p build_output/NEBULITE/"$PRODUCT_NAME"
  
  pio run -e "$env"
  cp .pio/build/"$env"/firmware.bin build_output/NEBULITE/"$PRODUCT_NAME"/firmware.bin
  cp .pio/build/"$env"/bootloader.bin build_output/NEBULITE/"$PRODUCT_NAME"/bootloader.bin
  
  pio run --target=buildfs -e "$env"
  cp .pio/build/"$env"/littlefs.bin build_output/NEBULITE/"$PRODUCT_NAME"/userdata.bin
  
  "${ZIP_CMD[@]}" -r build_output/NEBULITE/"$PRODUCT_NAME"/files.zip ./data/*
  
  cd build_output/NEBULITE/"$PRODUCT_NAME"
  "${ZIP_CMD[@]}" ../"$PRODUCT_NAME"/combined.zip firmware.bin userdata.bin files.zip
  cd - > /dev/null
done