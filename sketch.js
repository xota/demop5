function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  spongeJoek(mouseX,frameCount%400,86);
  
}

function spongeJoek(xPos, yPos, grootte) {
  fill(255, 255, 0);
  //buik
  rect(xPos, yPos, grootte,1.5*grootte);
  //ogen
  fill(255, 0, 0);
  ellipse(xPos + grootte/4, yPos +grootte/2.5, 0.2 *grootte, 0.15* grootte);
  ellipse(xPos + 3*grootte/4, yPos +grootte/2.5,  0.2 *grootte, 0.15* grootte);
  
  //mond
  fill(0,0,255);
  rect(xPos + grootte/5, yPos + 1.1 * grootte, 0.6 * grootte, grootte/10);
  
}
