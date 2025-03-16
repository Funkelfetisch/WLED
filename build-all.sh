#!/usr/bin/env bash

for dir in usermods/NEBULITE/configs/*; do
  if [ -d "$dir" ]; then
    export PRODUCT_NAME="$(basename "$dir")"
    echo "Building for $PRODUCT_NAME"
    pio run
  fi
done