"use strict";

// jshint maxdepth: 2
var shuffle;
var tired;
var sleep;
var unused;
function main(meaning) {
  var day = true;

  if (meaning == 42) {
    while (day) {
      shuffle();

      if (tired) { // JSHint: Blocks are nested too deeply (3).
          sleep();
      }
    }
  }
}

// freeze
Array.prototype.count = function (value) { return 4; };

// undef
function test() {
	var myVar = "Hello world";
	console.log(myvar);
}

// unused
function mytest(a, b) {
	var c, d = 2;

	return a + d;
}

mytest(1, 2);