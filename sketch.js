var movingRect;
var fixedRect;



function setup() {
  createCanvas(800,800);
  movingRect=createSprite(400, 200, 50, 50);
  movingRect.shapeColor= "green";
  

  fixedRect = createSprite(200,200,50,50);
  fixedRect.shapeColor = "green"

}

function draw() {
  background(0);
  
  movingRect.x= mouseX;
  movingRect.y= mouseY;

if (movingRect.isTouching(fixedRect)){
    fixedRect.shapeColor = "red"
    movingRect.shapeColor = "red"
}

  drawSprites();
  
}