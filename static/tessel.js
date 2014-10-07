require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"4e4aGu":[function(require,module,exports){
module.exports={
    "skin": {
        "board": {
            "background": "#A02D2D",
            "offset": {
                "x": 20,
                "y": 15
            },
            "height": 330,
            "north": {
                "height": 60
            },
            "middle": {
                "height": 270,
                "outer_width": 105,
                "inner_width": 660
            }
        },
        "pins": {
            "height": 330,
            "offset": {
                "x": 5,
                "y": 0,
                "vertical": 40
            },
            "small": {
                "height": 20,
                "width": 20,
                "color": "#000000"
            },
            "large": {
                "height": 40,
                "width": 50,
                "color": "#cdc9c9"
            },
            "spacing": {
                "x": 50,
                "y": 40
            }
        }
    },
    "pingroups": [
        {
            "name": "north",
            "pins": []
        },
        {
            "name": "east",
            "pins": [
                {
                    "pin": 1,
                    "name": "GND",
                    "notes": "Ground"
                },
                {
                    "pin": 2,
                    "name": "VIN",
                    "notes": "This is the input to the onboard 3.3 V regulator, and typically comes either from USB or an external battery. As such, its voltage can range from ~3.4 V to 15 V. Please read the Powering Tessel documentation before using this pin. It is not recommended as source of significant current and should not be used to power the board."
                },
                {
                    "pin": 3,
                    "name": "3V3",
                    "notes": " 3.3 V power rail. The onboard regulator is rated to 3 A."
                },
                {
                    "pin": 4,
                    "name": "A6",
                    "notes": "ADC6. 10-bit ADC, referenced to GND and 3.3 V. Cannot function as anything else."
                },
                {
                    "pin": 5,
                    "name": "SCL",
                    "notes": "I2C clock line. Common for the entire board."
                },
                {
                    "pin": 6,
                    "name": "A5",
                    "notes": "ADC5. 10-bit ADC, referenced to GND and 3.3 V. Cannot function as anything else."
                },
                {
                    "pin": 7,
                    "name": "SDA",
                    "notes": "I2C data line. Common for the entire board."
                },
                {
                    "pin": 8,
                    "name": "A4",
                    "notes": "ADC5. 10-bit ADC, referenced to GND and 3.3 V. Reconfigurable as digital GPIO."
                },
                {
                    "pin": 9,
                    "name": "SCK",
                    "notes": " SPI clock line. Common for the entire board."
                },
                {
                    "pin": 10,
                    "name": "A3",
                    "notes": "ADC4. 10-bit ADC, referenced to GND and 3.3 V."
                },
                {
                    "pin": 11,
                    "name": "MISO",
                    "notes": "SPI master in/slave out. Common for the entire board."
                },
                {
                    "pin": 12,
                    "name": "A2",
                    "notes": "ADC3. 10-bit ADC, referenced to GND and 3.3 V. Reconfigurable as digital GPIO."
                },
                {
                    "pin": 13,
                    "name": "MOSI",
                    "notes": "SPI master out/slave in. Common for the entire board."
                },
                {
                    "pin": 14,
                    "name": "A1",
                    "notes": "ADC2. 10-bit ADC, referenced to GND and 3.3 V. Reconfigurable as 10-bit DAC."
                },
                {
                    "pin": 15,
                    "name": "G1",
                    "notes": "GPIO1. User-configurable general purpose input/output. Planned as software UART TX."
                },
                {
                    "pin": 16,
                    "name": "G6",
                    "notes": "GPIO6. User-configurable general purpose input/output."
                },
                {
                    "pin": 17,
                    "name": "G2",
                    "notes": "GPIO2. User-configurable general purpose input/output. Planned as software UART RX."
                },
                {
                    "pin": 18,
                    "name": "G5",
                    "notes": "GPIO5. User-configurable general purpose input/output."
                },
                {
                    "pin": 19,
                    "name": "G3",
                    "notes": "GPIO3. User-configurable general purpose input/output."
                },
                {
                    "pin": 20,
                    "name": "G4",
                    "notes": "GPIO4. User-configurable general purpose input/output."
                }
            ]
        },
        {
            "name": "south",
            "pins": [
                {
                    "pin": 1,
                    "name": "GND",
                    "notes": "Ground. Pins are marked with a circle."
                },
                {
                    "pin": 2,
                    "name": "3V3",
                    "notes": "3.3 V power rail. The onboard regulator is rated to 3A."
                },
                {
                    "pin": 3,
                    "name": "SCL",
                    "notes": "I2C clock line. Ports A and B and the GPIO bank share a common I2C bus, as do ports C and D."
                },
                {
                    "pin": 4,
                    "name": "SDA",
                    "notes": "I2C data line. Ports A and B and the GPIO bank share a common I2C bus, as do ports C and D."
                },
                {
                    "pin": 5,
                    "name": "SCK",
                    "notes": "SPI clock line. Common for the entire board."
                },
                {
                    "pin": 6,
                    "name": "MISO",
                    "notes": "SPI master in/slave out. Common for the entire board."
                },
                {
                    "pin": 7,
                    "name": "MOSI",
                    "notes": "SPI master out/slave in. Common for the entire board."
                },
                {
                    "pin": 8,
                    "name": "TX/G1",
                    "notes": "User-configurable general purpose input/output. Unique to each module port. / UART serial transmit. See note below."
                },
                {
                    "pin": 9,
                    "name": "RX/G2",
                    "notes": "User-configurable general purpose input/output. Unique to each module port. / UART serial receive. See note below."
                },
                {
                    "pin": 10,
                    "GPIO3": "User-configurable general purpose input/output. Unique to each module port."
                }
            ]
        }
    ]
}

},{}],"tessel":[function(require,module,exports){
module.exports=require('4e4aGu');
},{}]},{},[])