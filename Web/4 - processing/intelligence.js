$(function(){
  var processingSketch=function(processing) {
  // Override draw function, by default it will be called 60 times per second
  processing.draw = function() {
    
    // erase background
    processing.background(224);

    processing.ellipse(50,50,100,100);
  };
  
}

var canvas = document.getElementById("canvas");
// attaching the sketchProc function to the canvas
var p = new Processing(canvas, processingSketch);

})