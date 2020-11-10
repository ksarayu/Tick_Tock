hr = hour();
min = minute();
sec = second();

var secAngle, minAngle, hrAngle;

function setup() {
  createCanvas(800,400);
}

function draw() {
  background(255,255,255);  

  angleMode(DEGREES);

  secAngle = map(sec, 0, 60, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 60, 0, 360);

  push();
  rotate(secAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
}