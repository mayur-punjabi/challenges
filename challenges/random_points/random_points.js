var color={
  r:0,
  g:0,
  b:0
};
var x=0;
var y=0;
function setup(){
  var canvas=createCanvas(windowWidth,windowHeight);
  background(0);
}
function draw(){
  color.r=random(0,255);
  color.g=random(0,255);
  color.b=random(0,255);
  stroke(color.r,color.g,color.b);
  x=random(0,windowWidth);
  y=random(0,windowHeight);
  point(x,y);
}
