var diam1=0;

function setup() {
    createCanvas(850,850);
    background("#003366");
}

function draw() {
    
    fill("#add8e6");
    stroke("#ffff00");
    strokeWeight(5);
    ellipse(50,100,diam1,diam1);
    fill("#ff0000");
    ellipse(random(width),random(height),20,20);
    textSize(40);
    textFont("Verdana");
    textStyle(NORMAL);
    textAlign(LEFT);
    text("Click multiple times to find the blue dot",40,40);
}

function mousePressed(){
    if(diam1>50){
        diam1=0;
    }else{
    diam1=diam1+5;
    }
}