$(document).ready(function() {
  'use strict';
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));
var tool = new Tool();
var c = Shape.Circle(200,200,80);
c.fillColor = 'black';
var text = new PointText(200,200);
text.justification = 'center';
text.fillColor = 'white';
text.fontSize = 10;
text.content = "time marches inexorably forward";
tool.onMouseDown = function(event){
  var c = Shape.Circle(event.point, 10);
  c.fillColor = 'green';
};
  paper.view.draw();
});
