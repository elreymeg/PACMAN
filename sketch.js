var circleX = 0


function setup() {
  createCanvas(640, 640) ;
  background(255)
}

function draw() {
  fill(216,235, 16 ) 
  ellipse(320, 240, 400)
  fill(0, 0, 0)
  ellipse(240, 160, 80)
  fill(0, 0, 0)
  ellipse(400, 160, 80)
  fill(0, 0, 0)
  angleMode = 'degrees' 
  arc(320, 300, 100, 100, 0, 180)
  fill(216, 235, 16)
  angleMode='degrees'
  arc(circleX, 460, 100, 100, 0, 150);
  fill(0);
  ellipse(160, 460, 20);
  fill(0);
  ellipse(200, 460, 20);
  fill(0);
  ellipse(240, 460, 20);
  fill(0);
  ellipse(280,460, 20);
  fill(0);
  ellipse(320, 460, 20);
  fill(0);
  ellipse(360, 460, 20);
  fill(0);
  ellipse(400, 460, 20);
  fill(0);
  ellipse(400, 460, 20);
  fill(0);
  ellipse(440, 460, 20);
  
  
}