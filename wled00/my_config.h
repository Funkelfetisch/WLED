#pragma once

// uncomment to force the compiler to show a warning to confirm that this file is included
// #warning **** my_config.h: Settings from this file are honored ****

/* Uncomment to use your WIFI settings as defaults
  //WARNING: this will hardcode these as the default even after a factory reset
#define CLIENT_SSID "Your_SSID"
#define CLIENT_PASS "Your_Password"
*/

#define MAX_LEDS 100       //Maximum total LEDs. More than 1500 might create a low memory situation on ESP8266.

#define WLED_AP_SSID "NEBULITE"
#define WLED_AP_PASS "nebulite"

#define USERMOD_AUTO_SAVE
#define AUTOSAVE_AFTER_SEC 15
#define AUTOSAVE_PRESET_NUM 250
#define USERMOD_AUTO_SAVE_ON_BOOT true

#define WLED_DISABLE_INFRARED
#define WLED_WATCHDOG_TIMEOUT 0

#define USERMOD_NEBULITE
// #define USERMOD_ID_NEBULITE 80
#define NEBULITE_PRESET_RECORD_DURATION 5 // in seconds
#define NEBULITE_PRESET_RECORD_FRAMERATE 10

// #define WLED_DEBUG

#define WLED_RELEASE_NAME NEBULITE_0.1

#define SR_DMTYPE 0
#define AUDIOPIN 35
#define SR_SQUELCH 50
#define SR_GAIN 50
#define SR_AGC 2
// #define I2S_GRAB_ADC1_COMPLETELY

#define LEDPIN 26
#define BTNPIN 21