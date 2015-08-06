#!/usr/bin/env node

var http = require('http');
var SoundDetection = require('sound-detection');
var program = require('commander');

program
    .version('0.0.1')
    .option('-u --url <url>', 'Set the URL to the IP Camera')
    .option('-i --idx <n>', 'ID of switch in Domoticz')
    .option('-b --bit-depth <n>', 'Bit depth of audio stream [16]', parseInt)
    .option('-c --channels <n>', 'Number of Channels [1]', parseInt)
    .option('-t --trigger-level <n>', 'Number of dB above ambient before triggered [30]', parseInt)
    .parse(process.argv);

var options = {
    url: program.url,
    format: {
        bitDepth: program.bitDepth || 16,
        numberOfChannels: program.channels || 1,
        signed: true
    },
    triggerLevel: program.triggerLevel || 30
}

if (!(program.url && program.idx)) {
    program.outputHelp();
    process.exit(1);
}

var timeout = void 0;

function setNoiseSensor() {
    http.get('http://localhost:8080/json.htm?type=command&param=switchlight&idx=' + program.idx + '&switchcmd=On');
}

function clearNoiseSensor() {
    http.get('http://localhost:8080/json.htm?type=command&param=switchlight&idx=' + program.idx + '&switchcmd=Off');
    timeout = void 0;
}

var detector = new SoundDetection(options, function (dB) {
    if (timeout) {
        clearTimeout(timeout);
    } else {
        setNoiseSensor();
    }
    timeout = setTimeout(clearNoiseSensor, 1000);
});

clearNoiseSensor();
detector.start();
