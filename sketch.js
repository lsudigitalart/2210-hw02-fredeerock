function setup() {
  createCanvas(400, 269);
  // fill(255, 0, 0, 125);
  // ellipse(100, 100, 100);
  // fill(0, 255, 0, 125);
  // ellipse(150, 100, 100);
  // fill(0, 0, 255, 125);
  // ellipse(125, 150, 100);
}

var x1 = 311;
var y1 = 227;
var x2 = 38;
var y2 = 258;
var x3 = 232;
var y3 = 118;
var x4 = 350;
var y4 = 551;

function draw() {
  background(0);
  noStroke();
  fill(137, 1, 0);
  rect(0, 0, width, 65);

  fill(0);
  rect(0, 28, width, 8)

  beginShape();
  vertex(0, 60);
  vertex(0, 52);
  vertex(width, 45);
  vertex(width, 55);
  endShape(CLOSE);

  fill(221, 176, 26)
  quad(0, 65, width, 65, width, height, 0, height);


  // x1 = mouseX;
  // y1 = mouseY;


  fill(255, 0, 0);
  circle(x1, y1, 10);
  fill(0, 255, 0);
  circle(x2, y2, 10);
  fill(0, 255, 0);
  circle(x3, y3, 10);
  fill(255, 0, 0);
  circle(x4, y4, 10);

  strokeWeight(10);
  stroke(0);
  noFill();

  curve(x1, y1, x2, y2, x3, y3, x4, y4);
  // curve(85, 127, 45, 178, 337, 174, 343, 104);

  // curve(14, 143, 2, 245, 168, 161, 135, 91);


  
  noStroke();

  // Where's my mouse!?
  fill(255);
  text(mouseX, 10, 10);
  text(mouseY, 10, 20);
}