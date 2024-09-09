function setup() {
  createCanvas(400, 269);
}

let ax1 = 35;
let ay1 = 205;
let cx1 = 0;
let cy1 = 0;
let ax2 = 200;
let ay2 = 200;
let cx2 = 0;
let cy2 = 0;

function draw() {
  background(100);
  
  // noStroke();
  strokeWeight(0);
  circle(10, 10, 10);

  stroke(255);
  strokeWeight(10);
  point(50, 10);

 

  beginShape();
  vertex(165, 115);
  vertex(200, 115);
  vertex(200, 150);
  vertex(165, 150);
  vertex(144, 51);
  endShape();

cx1 = 170;
cy1 = 213;
ax2 = 363;
ay2 = 206;


  fill(255)
  stroke(0);
  bezier(ax1, ay1,  cx1, cx1, cx2, cy2, ax2, ay2);


  noStroke();
  fill(255, 0, 0);
  text(mouseX, 100, 100);
  text(mouseY, 100, 110);


  if(mouseIsPressed){
    console.log(mouseX, mouseY);
  }

  //console.log(mouseX);
  
}