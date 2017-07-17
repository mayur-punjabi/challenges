var j=0;
var k=0;
var Rectangles = [];
var i=0;
var w=window.innerWidth-20;
function Rectangle(){
    this.y= 200;
    this.col= 0;
    this.i=i;
    this.display= function(){
        noStroke();
        fill(0);
        rect(((w/2)-40),this.y,80,20);
    }
    this.move= function(){
        map(this.col,0,255-this.i,200,this.i);
        if((this.y+(30*(this.i)))<470){
            fill(this.col);
            rect(((w/2)-40),this.y,80,20);
            this.y++;
            this.col++;
        }
        if((this.y+(30*(this.i)))>=470){
            this.y=470-(30*(this.i));
            this.col=255;
            fill(this.col);
            rect(((w/2)-40),this.y,80,20);

        }
    }
    this.moveUp= function(){
        map(this.col,255-this.i,0,200,this.i);
        fill(this.col);
        if(this.y>200){
            rect(((w/2)-40),this.y,80,20);
            this.y--;
            this.col--;
        }
        if(this.y=200){
            this.y=200;
            this.col=0;
            fill(this.col);
            rect(((w/2)-40),this.y,80,20);
        }
    }
}
function setup(){
    createCanvas(w,600);

}
function draw(){
    background(0);
    stroke(255);
    line(((w/2)-50),500,((w/2)+50),500);
    line(((w/2)-50),500,((w/2)-50),250);
    line(((w/2)+50),500,((w/2)+50),250);
    noStroke();
    for(k=0;k<Rectangles.length;k++){
        Rectangles[k].display();
        Rectangles[k].move();
    }
 }
function pushElement() {
    Rectangles.push(new Rectangle());
    i++;
    if(Rectangles.length>7){
        Rectangles.length=8;
    }
    if(i>8){
        alert("stack-overflow");
        i=8;
    }
    console.log("i = "+i);
    console.log("length = "+Rectangles.length);
}
function popElement(){
    //Rectangles[i].moveUp();//Uncaught TypeError: Cannot read property 'moveUp' of undefined
    i--;

    Rectangles.splice(-1,1);
    if(Rectangles.length<=0){
        Rectangles.length=0;
    }
    if(i<0){
        alert("stack-underflow");
        i=0;
    }
    console.log("i = "+i);
    console.log("length = "+Rectangles.length);
}
