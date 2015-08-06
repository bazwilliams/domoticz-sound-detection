Domoticz Sound Detection
---

App to detect sudden noises above ambient from an audio stream and trigger a switch in a locally installed and running Domoticz service. 

It uses my sound detection library at https://github.com/bazwilliams/sound-detection

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
