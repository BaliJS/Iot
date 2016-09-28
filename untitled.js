var jfive = require("johnny-five");
var board = new jfive.Board();

board.on("ready", function() {
   console.log('board has connected');    


   var tempSensor = new jfive.Multi({
    controller: "DHT11",
      pin: "A0"
   });

   
   tempSensor.on("data", function() {
      console.log(this.temperature.celsius + "°C");
   }); 
});