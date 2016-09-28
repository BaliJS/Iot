var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var jfive = require("johnny-five");
var board = new jfive.Board();

var board, socket,
      connected = false;

app.get('/', function(req, res){
   res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(s){
   console.log('A user has connected');
   
   connected = true;
   
   socket = s;
});

board.on("ready", function() {
   console.log('board has connected');    


   var tempSensor = new jfive.Thermometer({
    controller: "LM35",
      pin: "A0"
   });

   
   tempSensor.on("data", function() {
      
      if(connected) socket.emit('Temperature reading', this.celsius);
   }); 
});

http.listen(3000, function(){
   console.log('listening on *:3000');
});