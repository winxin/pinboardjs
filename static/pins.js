require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"pins":[function(require,module,exports){
module.exports=require('2hOGqZ');
},{}],"2hOGqZ":[function(require,module,exports){
module.exports=[ {"pin": 1, "name": "GND", "notes": "Ground"},
{"pin": 2 , "name":  " VIN", "notes": " This is the input to the onboard 3.3 V regulator, and typically comes either from USB or an external battery. As such, its voltage can range from ~3.4 V to 15 V. Please read the Powering Tessel documentation before using this pin. It is not recommended as source of significant current and should not be used to power the board."},
{"pin": 3  , "name": "3V3", "notes": " 3.3 V power rail. The onboard regulator is rated to 3 A."},
{"pin": 4  , "name": "A6", "notes": "  ADC6. 10-bit ADC, referenced to GND and 3.3 V. Cannot function as anything else."},
{"pin": 5  , "name": "SCL", "notes": "  I2C clock line. Common for the entire board."},
{"pin": 6  , "name": "A5", "notes": "  ADC5. 10-bit ADC, referenced to GND and 3.3 V. Cannot function as anything else."},
{"pin": 7  , "name": "SDA", "notes": "  I2C data line. Common for the entire board."},
{"pin": 8  , "name": "A4", "notes": "  ADC5. 10-bit ADC, referenced to GND and 3.3 V. Reconfigurable as digital GPIO."},
{"pin": 9  , "name": "SCK", "notes": "  SPI clock line. Common for the entire board."},
{"pin": 10 , "name": "A3", "notes": "  ADC4. 10-bit ADC, referenced to GND and 3.3 V."},
{"pin": 11 , "name": "MISO", "notes": "  SPI master in/slave out. Common for the entire board."},
{"pin": 12 , "name": "A2", "notes": "  ADC3. 10-bit ADC, referenced to GND and 3.3 V. Reconfigurable as digital GPIO."},
{"pin": 13 , "name": "MOSI", "notes": "  SPI master out/slave in. Common for the entire board."},
{"pin": 14 , "name": "A1", "notes": "  ADC2. 10-bit ADC, referenced to GND and 3.3 V. Reconfigurable as 10-bit DAC."},
{"pin": 15 , "name": "G1", "notes": "  GPIO1. User-configurable general purpose input/output. Planned as software UART TX."},
{"pin": 16 , "name": "G6", "notes": "  GPIO6. User-configurable general purpose input/output."},
{"pin": 17 , "name": "G2", "notes": "  GPIO2. User-configurable general purpose input/output. Planned as software UART RX."},
{"pin": 18 , "name": "G5", "notes": "  GPIO5. User-configurable general purpose input/output."},
{"pin": 19 , "name": "G3", "notes": "  GPIO3. User-configurable general purpose input/output."},
{"pin": 20 , "name": "G4", "notes": "  GPIO4. User-configurable general purpose input/output."}
]

},{}]},{},[])