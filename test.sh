    mkdir -p build_output/NEBULITE/$PRODUCT_NAME
    echo "Building for $PRODUCT_NAME"
    pio run -e WLED_nebulite
    cp .pio/build/WLED_NEBULITE/firmware.bin build_output/NEBULITE/$PRODUCT_NAME/firmware.bin
    cp .pio/build/WLED_NEBULITE/bootloader.bin build_output/NEBULITE/$PRODUCT_NAME/bootloader.bin
    pio run --target=buildfs -e WLED_nebulite
    cp .pio/build/WLED_NEBULITE/littlefs.bin build_output/NEBULITE/$PRODUCT_NAME/userdata.bin
    "${ZIP_CMD[@]}" -r build_output/NEBULITE/$PRODUCT_NAME/files.zip ./data/*
    cd build_output/NEBULITE/$PRODUCT_NAME
    "${ZIP_CMD[@]}" ../$PRODUCT_NAME/combined.zip firmware.bin userdata.bin files.zip
    cd -
