function setup() {
  createCanvas(windowWidth,windowHeight);

}
function draw() {
  background(0);
  stroke(255);
  fill(255);
  var x = random(0,windowWidth);
  var y = random(0,windowHeight);
  point(x,y);
  var z  = random(0,100);
  var end = 1;
  for(var i=0;i<=z;i++) {
    point(x--,y++);
    point(x--,y++);
    point(x+2,y-2);
  }

}
