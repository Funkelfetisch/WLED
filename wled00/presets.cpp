#include "wled.h"

/*
 * Methods to handle saving and loading presets to/from the filesystem
 */

#ifdef ARDUINO_ARCH_ESP32
static char *tmpRAMbuffer = nullptr;
#endif

static volatile byte presetToApply = 0;
static volatile byte callModeToApply = 0;
static volatile byte presetToSave = 0;
static volatile int8_t saveLedmap = -1;
static char quickLoad[9];
static char saveName[33];
static bool includeBri = true, segBounds = true, selectedOnly = false, playlistSave = false;

static const char *getFileName(bool persist = true) {
  return persist ? "/presets.json" : "/tmp.json";
}

bool presetsSavePending(void) {  // WLEDMM true if presetToSave, playlistSave or saveLedmap
  if (presetToSave > 0) return(true);
  if (playlistSave == true) return(true);
  if (saveLedmap >= 0) return(true);
  return(false);
}
bool presetsActionPending(void) {  // WLEDMM true if presetToApply, presetToSave, playlistSave or saveLedmap
  if (presetToApply > 0) return(true);
  if (presetToSave > 0) return(true);
  if (playlistSave == true) return(true);
  if (saveLedmap >= 0) return(true);
  return(false);
}

#ifdef USERMOD_NEBULITE
#include <JPEGENC.h>
  unsigned long nebulitePresetRecordingLastRecord = 0;
  char nebuliteJsonBuffer[MAX_LEDS * 3 * NEBULITE_PRESET_RECORD_FRAMERATE * NEBULITE_PRESET_RECORD_DURATION * 4 / 3 + 4]; // Adjusted size for base64 encoding

  uint16_t pos = 0;

  JPEGENC jpgenc;
  static File myfile;

  void *myOpen(const char *filename) {
    myfile = WLED_FS.open(filename, FILE_WRITE);
    return (void *)&myfile;
  }

  void myClose(JPEGE_FILE *p) {
    File *f = (File *)p->fHandle;
    if (f) f->close();
  }

  int32_t myRead(JPEGE_FILE *p, uint8_t *buffer, int32_t length) {
    File *f = (File *)p->fHandle;
    return f->read(buffer, length);
  }

  int32_t myWrite(JPEGE_FILE *p, uint8_t *buffer, int32_t length) {
    File *f = (File *)p->fHandle;
    return f->write(buffer, length);
  }

  int32_t mySeek(JPEGE_FILE *p, int32_t position) {
    File *f = (File *)p->fHandle;
    return f->seek(position);
  }

  static bool generateJPEGFromNebuliteBuffer(uint16_t ledCount, uint16_t numFrames, const char* outFile) {
    int rc = jpgenc.open(outFile, myOpen, myClose, myRead, myWrite, mySeek);
    if (rc != JPEGE_SUCCESS) {
      Serial.print(F("Could not open ")); Serial.print(outFile); Serial.println(F(" for writing."));
      return false;
    }

    JPEGENCODE jpe;
    rc = jpgenc.encodeBegin(&jpe, ledCount, numFrames, JPEGE_PIXEL_RGB888, JPEGE_SUBSAMPLE_444, JPEGE_Q_HIGH);
    if (rc != JPEGE_SUCCESS) {
      Serial.println(F("JPEG encoding failed."));
      return false;
    }

    for (int frame = 0; frame < numFrames; frame++) {
      for (uint16_t i = 0; i < ledCount; i++) {
        uint32_t c = strip.getPixelColor(i);
        uint8_t pixelData[3];
        pixelData[0] = qadd8(W(c), R(c));
        pixelData[1] = qadd8(W(c), G(c));
        pixelData[2] = qadd8(W(c), B(c));
        rc = jpgenc.addFrame(&jpe, pixelData, 3);
        if (rc != JPEGE_SUCCESS) {
          Serial.println(F("JPEG addFrame failed."));
          return false;
        }
      }
    }

    int32_t dataSize = jpgenc.close();
    Serial.print(F("Wrote JPEG to "));
    Serial.print(outFile);
    Serial.print(F(" (size: "));
    Serial.print(dataSize);
    Serial.println(F(" bytes)."));
    return true;
  }

  static bool handleRecording() {
    if (presetToSave == 0 || presetToSave == 250) return true;

    uint8_t previousBrightness = bri;
    bri = 255;
    strip.setBrightness(bri);

    if (nebulitePresetRecordingLastRecord < millis() - (1000 / NEBULITE_PRESET_RECORD_FRAMERATE)) {
      uint16_t recordTotalBytes = strip.getLengthTotal() * 3 * NEBULITE_PRESET_RECORD_FRAMERATE * NEBULITE_PRESET_RECORD_DURATION;

      if(pos >= recordTotalBytes) {
        Serial.print("NEBULITE finished recording at pos ");
        Serial.println(pos);

        // Generate JPEG
        uint16_t frames = NEBULITE_PRESET_RECORD_FRAMERATE * NEBULITE_PRESET_RECORD_DURATION;
        bool ok = generateJPEGFromNebuliteBuffer(
          strip.getLengthTotal(),
          frames,
          "/nebRecording.jpg" // pick a unique name if needed
        );

        // If desired, just store the filename in nebuliteJsonBuffer for JSON
        if (ok) {
          strlcpy(nebuliteJsonBuffer, "/nebRecording.jpg", sizeof(nebuliteJsonBuffer));
        } else {
          strlcpy(nebuliteJsonBuffer, "JPEGFailed", sizeof(nebuliteJsonBuffer));
        }

        nebulitePresetRecordingLastRecord = 0;
        pos = 0;
        bri = previousBrightness;
        strip.setBrightness(bri);
        return true;
      }

      nebulitePresetRecordingLastRecord = millis();
    }
    return false;
}
#endif

static void doSaveState() {
  bool persist = (presetToSave < 251);
  const char *filename = getFileName(persist);

  if (!requestJSONBufferLock(10)) return; // will set fileDoc

  initPresetsFile(); // just in case if someone deleted presets.json using /edit
  JsonObject sObj = doc.to<JsonObject>();

  DEBUG_PRINTLN(F("Serialize current state"));
  if (playlistSave) {
    serializePlaylist(sObj);
    if (includeBri) sObj["on"] = true;
  } else {
    serializeState(sObj, true, includeBri, segBounds, selectedOnly);
  }
  sObj["n"] = saveName;

  #ifdef USERMOD_NEBULITE
    sObj["r"] = (String) nebuliteJsonBuffer;
  #endif

  if (quickLoad[0]) sObj[F("ql")] = quickLoad;
  if (saveLedmap >= 0) sObj[F("ledmap")] = saveLedmap;

  #ifdef WLED_DEBUG
    DEBUG_PRINTLN(F("Serialized preset"));
    serializeJson(doc,Serial);
    DEBUG_PRINTLN();
  #endif

  #if defined(ARDUINO_ARCH_ESP32)
  if (!persist) {
    if (tmpRAMbuffer!=nullptr) free(tmpRAMbuffer);
    size_t len = measureJson(*fileDoc) + 1;
    DEBUG_PRINTLN(len);
    // if possible use SPI RAM on ESP32
    #if defined(BOARD_HAS_PSRAM) && (defined(WLED_USE_PSRAM) || defined(WLED_USE_PSRAM_JSON))        // WLEDMM
    if (psramFound())
      tmpRAMbuffer = (char*) ps_malloc(len);
    else
    #endif
      tmpRAMbuffer = (char*) malloc(len);
    if (tmpRAMbuffer!=nullptr) {
      serializeJson(*fileDoc, tmpRAMbuffer, len);
    } else {
      writeObjectToFileUsingId(filename, presetToSave, fileDoc);
    }
  } else
  #endif
  writeObjectToFileUsingId(filename, presetToSave, fileDoc);

  if (persist) presetsModifiedTime = toki.second(); //unix time
  releaseJSONBufferLock();
  updateFSInfo();

  // clean up
  saveLedmap   = -1;
  presetToSave = 0;
  saveName[0]  = '\0';
  quickLoad[0] = '\0';
  playlistSave = false;
}

bool getPresetName(byte index, String& name)
{
  if (!requestJSONBufferLock(19)) return false;
  bool presetExists = false;
  if (readObjectFromFileUsingId(getFileName(), index, &doc))
  {
    JsonObject fdo = doc.as<JsonObject>();
    if (fdo["n"]) {
      name = (const char*)(fdo["n"]);
      presetExists = true;
    }
  }
  releaseJSONBufferLock();
  return presetExists;
}

void initPresetsFile()
{
  if (WLED_FS.exists(getFileName())) return;

  StaticJsonDocument<64> doc;
  JsonObject sObj = doc.to<JsonObject>();
  sObj.createNestedObject("0");
  File f = WLED_FS.open(getFileName(), "w");
  if (!f) {
    errorFlag = ERR_FS_GENERAL;
    return;
  }
  serializeJson(doc, f);
  f.close();
}

bool applyPreset(byte index, byte callMode)
{
  DEBUG_PRINT(F("Request to apply preset: "));
  DEBUG_PRINTLN(index);
  presetToApply = index;
  callModeToApply = callMode;
  return true;
}

// apply preset or fallback to a effect and palette if it doesn't exist
void applyPresetWithFallback(uint8_t index, uint8_t callMode, uint8_t effectID, uint8_t paletteID)
{
  applyPreset(index, callMode);
  //these two will be overwritten if preset exists in handlePresets()
  effectCurrent = effectID;
  effectPalette = paletteID;
}

void handlePresets()
{
  if (presetToSave) {
    #ifdef USERMOD_NEBULITE
    if (handleRecording())
    #endif
    doSaveState();
    return;
  }

  if (presetToApply == 0 || fileDoc) return; // no preset waiting to apply, or JSON buffer is already allocated, return to loop until free

  bool changePreset = false;
  uint8_t tmpPreset = presetToApply; // store temporary since deserializeState() may call applyPreset()
  uint8_t tmpMode   = callModeToApply;

  JsonObject fdo;
  const char *filename = getFileName(tmpPreset < 255);

  // allocate buffer
  if (!requestJSONBufferLock(9)) return;  // will also assign fileDoc

  presetToApply = 0; //clear request for preset
  callModeToApply = 0;
  byte presetErrorFlag = ERR_NONE;

  DEBUG_PRINT(F("Applying preset: "));
  DEBUG_PRINTLN(tmpPreset);

  bool haveLocked = false;
  #if defined(ARDUINO_ARCH_ESP32)   // WLEDMM we apply this workaround to all esp32 boards (S3 and classic esp32 included)
  //#if defined(ARDUINO_ARCH_ESP32S2) || defined(ARDUINO_ARCH_ESP32C3)
  // in case we are called from web UI, wait until strip.service() is done
  if (!suspendStripService) { suspendStripService = true; haveLocked = true; } // only lock service if not locked already
  unsigned long waitstart = millis();
  while (strip.isServicing() && millis() - waitstart < FRAMETIME_FIXED) delay(1); // wait for effects to finish updating

  strip.fill(BLACK); strip.show(); // experimental: set LEDs to black while new preset loads (instead of freezing effects)

  unsigned long start = millis();
  while (strip.isUpdating() && millis() - start < FRAMETIME_FIXED) delay(1); // wait for strip to finish updating, accessing FS during sendout causes glitches // WLEDMM delay instead of yield
  #endif

  #ifdef ARDUINO_ARCH_ESP32
  if (tmpPreset==255 && tmpRAMbuffer!=nullptr) {
    deserializeJson(*fileDoc,tmpRAMbuffer);
    if ((errorFlag == ERR_FS_PLOAD) || (errorFlag == ERR_JSON)) errorFlag = ERR_NONE;  // WLEDMM only reset our own error
  } else
  #endif
  {
    presetErrorFlag = readObjectFromFileUsingId(filename, tmpPreset, fileDoc) ? ERR_NONE : ERR_FS_PLOAD;
    if ((errorFlag == ERR_FS_PLOAD) || (errorFlag == ERR_JSON)) errorFlag = ERR_NONE;  // WLEDMM only reset our own error
    if (presetErrorFlag == ERR_FS_PLOAD) errorFlag = presetErrorFlag;
  }
  if (haveLocked) suspendStripService = false; // WLEDMM unlock effects after presets file was loaded
  fdo = fileDoc->as<JsonObject>();

  //HTTP API commands
  const char* httpwin = fdo["win"];
  if (httpwin) {
    String apireq = "win"; // reduce flash string usage
    apireq += F("&IN&"); // internal call
    apireq += httpwin;
    handleSet(nullptr, apireq, false); // may call applyPreset() via PL=
    setValuesFromFirstSelectedSeg(); // fills legacy values
    changePreset = true;
  } else {
    if (!fdo["seg"].isNull() || !fdo["on"].isNull() || !fdo["bri"].isNull() || !fdo["nl"].isNull() || !fdo["ps"].isNull() || !fdo[F("playlist")].isNull()) changePreset = true;
    if (!(tmpMode == CALL_MODE_BUTTON_PRESET && fdo["ps"].is<const char *>() && strchr(fdo["ps"].as<const char *>(),'~') != strrchr(fdo["ps"].as<const char *>(),'~')))
      fdo.remove("ps"); // remove load request for presets to prevent recursive crash (if not called by button and contains preset cycling string "1~5~")
    deserializeState(fdo, CALL_MODE_NO_NOTIFY, tmpPreset); // may change presetToApply by calling applyPreset()
  }
  if (!presetErrorFlag && tmpPreset < 255 && changePreset) currentPreset = tmpPreset;

  #if defined(ARDUINO_ARCH_ESP32)
  //Aircoookie recommended not to delete buffer
  if (tmpPreset==255 && tmpRAMbuffer!=nullptr) {
    free(tmpRAMbuffer);
    tmpRAMbuffer = nullptr;
  }
  #endif

  releaseJSONBufferLock(); // will also clear fileDoc
  if (changePreset) notify(tmpMode); // force UDP notification
  stateUpdated(tmpMode);  // was colorUpdated() if anything breaks
  updateInterfaces(tmpMode);
}

//called from handleSet(PS=) [network callback (fileDoc==nullptr), IR (irrational), deserializeState, UDP] and deserializeState() [network callback (filedoc!=nullptr)]
void savePreset(byte index, const char* pname, JsonObject sObj)
{
  if (index == 0 || (index > 250 && index < 255)) return;
  if (pname) strlcpy(saveName, pname, 33);
  else {
    if (sObj["n"].is<const char*>()) strlcpy(saveName, sObj["n"].as<const char*>(), 33);
    else                             sprintf_P(saveName, PSTR("Preset %d"), index);
  }

  DEBUG_PRINT(F("Saving preset (")); DEBUG_PRINT(index); DEBUG_PRINT(F(") ")); DEBUG_PRINTLN(saveName);

  presetToSave = index;
  playlistSave = false;
  if (sObj[F("ql")].is<const char*>()) strlcpy(quickLoad, sObj[F("ql")].as<const char*>(), 9); // client limits QL to 2 chars, buffer for 8 bytes to allow unicode

  if (sObj.size()==0 || sObj["o"].isNull()) { // no "o" means not a playlist or custom API call, saving of state is async (not immediately)
    includeBri   = sObj["ib"].as<bool>() || sObj.size()==0 || index==255; // temporary preset needs brightness
    segBounds    = sObj["sb"].as<bool>() || sObj.size()==0 || index==255; // temporary preset needs bounds
    selectedOnly = sObj[F("sc")].as<bool>();
    saveLedmap   = sObj[F("ledmap")] | -1;
  } else {
    // this is a playlist or API call
    if (sObj[F("playlist")].isNull()) {
      // we will save API call immediately (often causes presets.json corruption)
      presetToSave = 0;
      if (index > 250 || !fileDoc) return; // cannot save API calls to temporary preset (255)
      sObj.remove("o");
      sObj.remove("v");
      sObj.remove("time");
      sObj.remove(F("error"));
      sObj.remove(F("psave"));
      if (sObj["n"].isNull()) sObj["n"] = saveName;
      initPresetsFile(); // just in case if someone deleted presets.json using /edit
      writeObjectToFileUsingId(getFileName(index<255), index, fileDoc);
      presetsModifiedTime = toki.second(); //unix time
      updateFSInfo();
    } else {
      // store playlist
      // WARNING: playlist will be loaded in json.cpp after this call and will have repeat counter increased by 1
      includeBri   = true; // !sObj["on"].isNull();
      playlistSave = true;
    }
  }
}

void deletePreset(byte index) {
  StaticJsonDocument<24> empty;
  writeObjectToFileUsingId(getFileName(), index, &empty);
  presetsModifiedTime = toki.second(); //unix time
  updateFSInfo();
}


static uint8_t presetIndex = 1;
void iteratePreset() {
  String name = "";
  if (!getPresetName(++presetIndex, name)) {
    presetIndex = 1;
  }
  Serial.println("Applying preset: " + name);
  applyPreset(presetIndex, CALL_MODE_BUTTON_PRESET);
  stateChanged = true; 
  colorUpdated(CALL_MODE_BUTTON); 
}
void iteratePresetReverse() {
  String name = "";
  if (!getPresetName(--presetIndex, name)) {
    presetIndex = 1;
  }
  Serial.println("Applying preset: " + name);
  applyPreset(presetIndex, CALL_MODE_BUTTON_PRESET);
  stateChanged = true; 
  colorUpdated(CALL_MODE_BUTTON); 
}