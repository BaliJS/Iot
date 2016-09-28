// var five = require("johnny-five");
// var board = new five.Board();

// board.on("ready", function() {
//   var multi = new five.Multi({
//     controller: "BMP180"
//   });

//   multi.on("change", function() {
//     console.log("thermometer");
//     console.log("  celsius      : ", this.thermometer.celsius);
//     console.log("  fahrenheit   : ", this.thermometer.fahrenheit);
//     console.log("  kelvin       : ", this.thermometer.kelvin);
//     console.log("--------------------------------------");

//     console.log("barometer");
//     console.log("  pressure     : ", this.barometer.pressure);
//     console.log("--------------------------------------");

//     console.log("altimeter");
//     console.log("  feet         : ", this.altimeter.feet);
//     console.log("  meters       : ", this.altimeter.meters);
//     console.log("--------------------------------------");
//   });
// });


var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var temperature = new five.Thermometer({
    controller: "BMP180",
    freq: 250
  });

  temperature.on("change", function() {
    console.log("temperature");
    console.log("  celsius      : ", this.celsius);
    console.log("  fahrenheit   : ", this.fahrenheit);
    console.log("  kelvin       : ", this.kelvin);
    console.log("--------------------------------------");
  });
});