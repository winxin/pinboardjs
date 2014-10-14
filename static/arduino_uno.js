require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"arduino_uno":[function(require,module,exports){
module.exports=require('uHiCSz');
},{}],"uHiCSz":[function(require,module,exports){
module.exports={
    "name": "Arduino UNO",
    "skin": {
        "board": {
            "background": "#358287",
            "height": 310,
            "offset": {
                "x": 20,
                "y": 15
            },
            "north": {
                "height": 70
            },
            "middle": {
                "height": 240,
                "outer_width": 115,
                "inner_width": 670
            }
        },
        "pins": {
            "small": {
                "height": 20,
                "width": 20,
                "color": "#000000"
            },
            "large": {
                "height": 40,
                "width": 50,
                "color": "#cdc9c9"
            }
        },
        "small": {},
        "processor": {
            "height": 50,
            "width": 140,
            "color": "#000000"
        }
    },
    "pingroups": [
        {
            "name": "west",
            "direction": "vertical",
            "position": {
              "x": 40,
              "y": 120,
              "spacingY": 30
            },
            "pins": [
                {
                    "name": "USB",
                    "type": "large"
                }
            ]
        },
        {
            "name": "east",
            "direction": "vertical",
            "position": {
              "x": 720,
              "y": 120,
              "spacingY": 40
            },
            "pins": [
                {
                    "name": "ISCP",
                    "type": "large"
                }
            ]
        },
        {
            "name": "center",
            "position": {
                "x": 400,
                "y": 180
            },
            "pins": [
                {
                    "name": "ATmega328",
                    "type": "processor"
                }
            ]
        },
        {
            "name": "north",
            "direction": "horizontal",
            "position": {
              "x": 50,
              "y": 40,
              "spacingX": 43
            },
            "pins": [
                {
                    "name": "AREF",
                    "type": "small"
                },
                {
                    "name": "GND"
                },
                {
                    "name": "D13"
                },
                {
                    "name": "D12"
                },
                {
                    "name": "D11"
                },
                {
                    "name": "D10"
                },
                {
                    "name": "D9"
                },
                {
                    "name": "D8"
                },
                {
                    "name": ""
                },
                {
                    "name": "D7"
                },
                {
                    "name": "D6"
                },
                {
                    "name": "D5"
                },
                {
                    "name": "D4"
                },
                {
                    "name": "D3"
                },
                {
                    "name": "D2"
                },
                {
                    "name": "D1"
                },
                {
                    "name": "D0"
                }
            ]
        },
        {
            "name": "south",
             "direction": "horizontal",
            "position": {
              "x": 80,
              "y": 360,
              "spacingX": 45
            },
            "pins": [
                {
                    "name": "RESET"
                },
                {
                    "name": "3V3"
                },
                {
                    "name": "5V"
                },
                {
                    "name": "GND"
                },
                {
                    "name": "GND"
                },
                {
                    "name": "VIN"
                },
                {
                    "name": ""
                },
                {
                    "name": "A0"
                },
                {
                    "name": "A1"
                },
                {
                    "name": "A2"
                },
                {
                    "name": "A3"
                },
                {
                    "name": "A4"
                },
                {
                    "name": "A5"
                }
            ]
        }
    ]
}

},{}]},{},[])