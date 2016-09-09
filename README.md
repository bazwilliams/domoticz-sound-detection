[![](https://images.microbadger.com/badges/image/bazwilliams/domoticz-sound-detection.svg)](http://microbadger.com/images/bazwilliams/domoticz-sound-detection "Get your own image badge on microbadger.com")  [![](https://images.microbadger.com/badges/version/bazwilliams/domoticz-sound-detection.svg)](http://microbadger.com/images/bazwilliams/domoticz-sound-detection "Get your own version badge on microbadger.com")  [![](https://images.microbadger.com/badges/commit/bazwilliams/domoticz-sound-detection.svg)](http://microbadger.com/images/bazwilliams/domoticz-sound-detection "Get your own commit badge on microbadger.com")  [![](https://images.microbadger.com/badges/license/bazwilliams/domoticz-sound-detection.svg)](http://microbadger.com/images/bazwilliams/domoticz-sound-detection "Get your own license badge on microbadger.com")

Domoticz Sound Detection
---

App to detect sudden noises above ambient from an audio stream and trigger a switch in a locally installed and running Domoticz service. 

It uses my sound detection library at https://github.com/bazwilliams/sound-detection

# Docker

```
docker run -d --restart=always -e DOMOTICZ_ROOT=<DOMOTICZ_ROOT> -e DOMOTICZ_IDX=<DOMOTICZ_SWITCH> -e AUDIO_URL=<CAMERA_AUDIO_FEED> bazwilliams/domoticz-sound-detection
```

DOMOTICZ_ROOT - Where you access Domoticz e.g. `http://localhost:8080`
DOMOTICZ_IDX - The IDX number of the switch to toggle
CAMERA_AUDIO_FEED - the feed for the camera, e.g. `http://camera/audio.cgi`

The following variables can also be set as environment variables and map to their equivalent command line option.

BITDEPTH
CHANNELS
TRIGGERLEVEL

# Installation

```bash
npm install -g domoticz-sound-detection
```

# Running

```bash
  Usage: domoticz-sound-detection [options]

  Options:

    -h, --help              output usage information
    -V, --version           output the version number
    -u --url <url>          Set the URL to the IP Camera
    -i --idx <n>            ID of switch in Domoticz
    -b --bit-depth <n>      Bit depth of audio stream [16]
    -c --channels <n>       Number of Channels [1]
    -t --trigger-level <n>  Number of dB above ambient before triggered [30]

```

The following would stream audio from `http://mycamera.audio.cgi` and toggle a dummy switch running on the locally running Domoticz server with IDX 33. 

`domoticz-sound-detection -u https://mycamera/audio.cgi -i 33`
