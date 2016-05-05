(function(){
	'use strict'

	module.exports = function SketchTemplate(p5js){
		var x = 100; 
	  var y = 100;

	  p5js.setup = function() {
	    p5js.createCanvas(700, 410);
	  };

	  p5js.draw = function() {
	    p5js.background(0);
	    p5js.fill(255);
	    p5js.rect(x,y,50,50);
	  };
	}
})();