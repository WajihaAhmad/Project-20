var car;
var wall;
var speed; 
var weight;
var deformation;
function setup() {
  createCanvas(1600,400);
  car=createSprite(50,200,50,50)
  wall=createSprite(1400,200,60,height/2)
  wall.shapeColor=color(80);
  speed=random(50,90)
  weight=random(400,1500)
  car.velocityX=speed;
  car.shapeColor=color(255);
}

function draw() {
  background(0);  
  deformation = 0.5 * weight * speed * speed / 22500

  if(deformation<100){
  car.shapeColor=color(0, 255, 0);
  }

  if(deformation>180){
    car.shapeColor=color(255, 0, 0);
  }

  if(deformation>100&&deformation<180){
  car.shapeColor=color(230, 230, 0);
  }

      drawSprites();
  }


 
