var fixedRect, movingRect,gameobj1,gameobj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  gameobj1 = createSprite(100, 200, 50, 80);
  gameobj1.shapeColor = "green";
  gameobj1.debug = true;

  gameobj2 = createSprite(200, 200, 50, 80);
  gameobj2.shapeColor = "green";
  gameobj2.debug = true;
}

function draw() {
  background(0,0,0);  

  gameobj1.x=mouseX;
  gameobj1.y=mouseY;

bounceOff(movingRect,fixedRect);

if(isTouching(gameobj1,gameobj2)){

  gameobj1.shapeColor="yellow";
  gameobj2.shapeColor="blue";

}
  
else{

  gameobj1.shapeColor="green";
  gameobj2.shapeColor="green";

}
  drawSprites();
}


