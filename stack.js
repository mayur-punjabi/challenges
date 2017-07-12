var Rectangle = [];

var w=window.innerWidth;
function setup(){
  createCanvas(w,600);
  for(var j=0;j<5;j++){
    Rectangle[j]={
    y: 200,
    col: 0,
    display: function(){
      noStroke();
      fill(0);
      rect(((w/2)-40),this.y,80,20);
    },
    move: function(){
      map(this.col,0,255,200,470);
      if(this.y<470){
        fill(this.col);
        rect(((w/2)-40),this.y,80,20);
        this.y++;
        this.col++;
        console.log("rectangle[0] = "  + Rectangle[0].y);
        console.log("rectangle[1] = "  + Rectangle[1].y);
        console.log("rectangle[2] = "  + Rectangle[2].y);
        console.log("rectangle[3] = "  + Rectangle[3].y);
        console.log("rectangle[4] = "  + Rectangle[4].y);
      }
      if(this.y>=470){
        this.y=470;
        this.col=255;
        fill(this.col);
        rect(((w/2)-40),this.y,80,20);
      }
    }
  }
}
}

function draw(){
  background(0);
  stroke(255);
  line(((w/2)-50),500,((w/2)+50),500);
  line(((w/2)-50),500,((w/2)-50),250);
  line(((w/2)+50),500,((w/2)+50),250);
  noStroke();
  //fill(0);
  Rectangle[0].display();
  Rectangle[0].move();
  Rectangle[1].display();
  Rectangle[1].move();
  console.log(Rectangle[0].y);
  }
