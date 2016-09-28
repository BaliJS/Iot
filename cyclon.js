var Cylon = require("cylon");

Cylon.robot({
  connections: {
    arduino: { adaptor: "firmata", port: "/dev/cu.usbmodem1421" }
  },

  // For this example we are using TMP36 sensor
  devices: {
    sensor: { driver: "analogSensor", pin: 'A0' }
  },

  work: function(my) {
    var analogValue = 0,
        voltage = 0,
        temperature = 0;

    every((5).second(), function() {
      analogValue = my.sensor.analogRead();
      voltage = (analogValue * 5.0) / 1024;
      temperature = (voltage - 0.5) * 100;

      console.log("Current Temperature => ", temperature);
    });

  }
}).start();
