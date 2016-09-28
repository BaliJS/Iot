//##########################blink
// var five = require("johnny-five");
// var board = new five.Board();

// board.on("ready", function() {
//   var led = new five.Led(13);

//   this.repl.inject({
//     led: led
//   });

//   led.blink();
// });



//####################blink timer
// var five = require("johnny-five");
// var board = new five.Board();

// board.on("ready", function() {

//   var led = new five.Led(13);

//   led.blink(500);
// });


//##################blink pulse
// var five = require("johnny-five");
// var board = new five.Board();

// board.on("ready", function() {
//   var led = new five.Led(11);

//   led.pulse();
//   this.wait(10000, function() {
//     led.stop().off();
//   });
// });


//#################pulse animation
// var five = require("johnny-five");
// var board = new five.Board();

// board.on("ready", function() {

//   var led = new five.Led(11);
//   led.pulse({
//     easing: "linear",
//     duration: 3000,
//     cuePoints: [0, 0.2, 0.4, 0.6, 0.8, 1],
//     keyFrames: [0, 10, 0, 50, 0, 255],
//     onstop: function() {
//       console.log("Animation stopped");
//     }
//   });

//   this.wait(12000, function() {

//     led.stop().off();
//   });
// });



//##################led fedin
// var five = require("johnny-five");
// var board = new five.Board();

// board.on("ready", function() {

//   var led = new five.Led(11);

//   led.fadeIn();

//   this.wait(5000, function() {
//     led.fadeOut();
//   });
// });


//##################led demo sequence
// var five = require("johnny-five");
// var board = new five.Board();
// var led;

// var loop = true;

// var demoSequence = [{
//   method: "pulse",
//   args: [1000],
//   duration: 5000
// }, {
//   method: "strobe",
//   args: [500],
//   duration: 3000
// }, {
//   method: "fadeIn",
//   args: [
//     2000,
//     function() {
//       console.log("fadeIn complete!");
//     }
//   ],
//   duration: 2500
// }, {
//   method: "fadeOut",
//   args: [
//     5000,
//     function() {
//       console.log("fadeOut complete!");
//     }
//   ],
//   duration: 5500
// }, {
//   method: "brightness",
//   args: [10],
//   duration: 3000
// }, {
//   method: "off"
// }];


// // Execute a method in the demo sequence
// function execute(step) {

//   // Grab everything we need for this step
//   var method = demoSequence[step].method;
//   var args = demoSequence[step].args;
//   var duration = demoSequence[step].duration || 3000;

//   // Just print out what we're executing
//   console.log("led." + method + "(" + (args ? args.join() : "") + ")");

//   // Make the actual call to the LED
//   five.Led.prototype[method].apply(led, args);

//   // Increment the step
//   step++;

//   // If we're at the end, start over (loop==true) or exit
//   if (step === demoSequence.length) {
//     if (loop) {
//       step = 0;
//     } else {
//       // We're done!
//       process.exit(0);
//     }
//   }

//   // Recursively call the next step after specified duration
//   board.wait(duration, function() {
//     execute(step);
//   });
// }

// board.on("ready", function() {
//   // Defaults to pin 11 (must be PWM)
//   led = new five.Led(process.argv[2] || 11);

//   // Kick off the first step
//   execute(0);
// });


//##################led array
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var array = new five.Leds([3, 5, 6]);

  array.pulse();
});
