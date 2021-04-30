function setup() {
  createCanvas(1200,800);
  fixedRect= createSprite(200, 200, 50, 50);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;

  movingRect = createSprite(400,200,80,20);
  movingRect.shapeColor="green";
  movingRect.debug=true;

  gameobject1= createSprite(400, 200, 50, 50);
  gameobject1.shapeColor="green";
  gameobject1.debug=true;

  gameobject2 = createSprite(600,200,50,50);
  gameobject2.shapeColor="green";
  gameobject2.debug=true;

  gameobject3= createSprite(100, 400, 50, 50);
  gameobject3.shapeColor="Yellow";
  gameobject3.debug=true;
  gameobject3.velocityX=3;

  gameobject4 = createSprite(1100,400,50,50);
  gameobject4.shapeColor="blue";
  gameobject4.debug=true;
  gameobject4.velocityX=-3;

}

function draw() {
  background(0);
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
  console.log(fixedRect.x-movingRect.x);

  //Function with arguments(movingrect, fixedrect)
  if(istouching(movingRect,fixedRect)){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  
  if(istouching(movingRect,gameobject1)){
     movingRect.shapeColor="red";
     gameobject1.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    gameobject1.shapeColor="green";
  }
  
  if(istouching(movingRect,gameobject2)){
    movingRect.shapeColor="red";
    gameobject2.shapeColor="red";
 }
 else{
   movingRect.shapeColor="green";
   gameobject2.shapeColor="green";
 }

bounceoff(gameobject3,gameobject4);


  drawSprites();
}

