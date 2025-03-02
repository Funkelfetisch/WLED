#pragma once

#include "wled.h"
#include <BLEDevice.h>
#include <BLEUtils.h>
#include <BLEScan.h>
#include <BLEAdvertisedDevice.h>

class CheapoRemoto : public Usermod {
private:
  BLEScan* pBLEScan;
  int scanTime = 2000; // Scan duration in milliseconds
  bool isScanning = false;
  unsigned long lastScanTime = 0;

  class MyAdvertisedDeviceCallbacks: public BLEAdvertisedDeviceCallbacks {
    void onResult(BLEAdvertisedDevice advertisedDevice) {
      // Check if the received device matches the target address
      if (true || advertisedDevice.getAddress().toString() == "ff:23:06:15:a0:ab") { // Use your remote's address
        Serial.println("=== BLE Advertised Device ===");

        Serial.print("Address: ");
        Serial.println(advertisedDevice.getAddress().toString().c_str());

        Serial.print("RSSI: ");
        Serial.println(advertisedDevice.getRSSI());

        // Display raw advertising data
        Serial.print("Raw Advertising Data: ");
        uint8_t* rawData = advertisedDevice.getPayload();
        int rawDataLength = advertisedDevice.getPayloadLength();

        for (int i = 0; i < rawDataLength; i++) {
          Serial.printf("%02x ", rawData[i]);
        }
        Serial.println();

        // Process the raw data to control WLED
        processBLEData(rawData, rawDataLength);
      }
    }

    void processBLEData(uint8_t* data, int length) {
      // Example processing of BLE data to control WLED
      // Adjust the logic based on your remote's data format
      if (length > 0) {
        switch (data[0]) {
          case 0x01: toggleOnOff(); break; // On/Off
          case 0x02: nextPreset(); break; // Mode +
          case 0x03: previousPreset(); break; // Mode -
          case 0x04: increaseBrightness(); break; // Brightness +
          case 0x05: decreaseBrightness(); break; // Brightness -
          case 0x06: increaseSpeed(); break; // Speed +
          case 0x07: decreaseSpeed(); break; // Speed -
          case 0x08: autoMode(); break; // Auto
          case 0x09: musicMode(); break; // Music
          case 0x0A: delayedOff(); break; // Delayed Off
          case 0x0B: nextColor(); break; // Color +
          case 0x0C: previousColor(); break; // Color -
          case 0x0D: setColor(CRGB::White); break; // White
          case 0x0E: setColor(CRGB::Yellow); break; // Yellow
          case 0x0F: setColor(CRGB::Cyan); break; // Cyan
          case 0x10: setColor(CRGB::Violet); break; // Violet
          case 0x11: setColor(CRGB::Red); break; // Red
          case 0x12: setColor(CRGB::Green); break; // Green
          case 0x13: setColor(CRGB::Blue); break; // Blue
        }
      }
    }

    void toggleOnOff() {
      if (bri == 0) {
        bri = briLast;
      } else {
        briLast = bri;
        bri = 0;
      }
      colorUpdated(CALL_MODE_DIRECT_CHANGE);
    }

    void nextPreset() {
      applyPreset((currentPreset + 1) % 250);
    }

    void previousPreset() {
      applyPreset((currentPreset - 1 + 250) % 250);
    }

    void increaseBrightness() {
      bri = min(bri + 25, 255);
      colorUpdated(CALL_MODE_DIRECT_CHANGE);
    }

    void decreaseBrightness() {
      bri = max(bri - 25, 0);
      colorUpdated(CALL_MODE_DIRECT_CHANGE);
    }

    void increaseSpeed() {
      effectSpeed = min(effectSpeed + 25, 255);
      colorUpdated(CALL_MODE_DIRECT_CHANGE);
    }

    void decreaseSpeed() {
      effectSpeed = max(effectSpeed - 25, 0);
      colorUpdated(CALL_MODE_DIRECT_CHANGE);
    }

    void autoMode() {
      // Implement auto mode logic
    }

    void musicMode() {
      // Implement music mode logic
    }

    void delayedOff() {
      // Implement delayed off logic
    }

    void nextColor() {
      // Implement next color logic
    }

    void previousColor() {
      // Implement previous color logic
    }

    void setColor(CRGB color) {
      for (int i = 0; i < 3; i++) {
        col[i] = color[i];
      }
      colorUpdated(CALL_MODE_DIRECT_CHANGE);
    }
  };

public:
  void setup() {
    Serial.begin(115200);
    Serial.println("Starting BLE Scanner with Clear Results and Erase");
    WLED::instance().disableWiFi();

    // Initialize BLE
    BLEDevice::init("NEBULITE");
    pBLEScan = BLEDevice::getScan(); // Create a BLE scan object
    pBLEScan->setAdvertisedDeviceCallbacks(new MyAdvertisedDeviceCallbacks());

    // Set scan parameters for short repeated scans
    pBLEScan->setActiveScan(true);  // Enable active scanning to receive more data
    pBLEScan->setInterval(100);     // Set scan interval (in milliseconds)
    pBLEScan->setWindow(99);        // Set scan window (in milliseconds)
  }

  void loop() {
    unsigned long currentTime = millis();
    if (currentTime - lastScanTime >= scanTime) {
      if (isScanning) {
        // Stop the scan after the duration
        pBLEScan->stop();
        isScanning = false;

        // Clear results to free up memory and reset any internal state
        pBLEScan->clearResults(); // Clear the stored results after each scan
      } else {
        // Start scanning for a short duration (2 seconds)
        pBLEScan->start(scanTime / 1000, false);
        Serial.println("scanning...");
        isScanning = true;
      }
      lastScanTime = currentTime;
    }
  }

  uint16_t getId() {
    return USERMOD_ID_CHEAPOREMOTO;
  }
};