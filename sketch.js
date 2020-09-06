var car, wall;

var speed, weight;

var deformation;

function setup() {
  createCanvas(1600,400);

  speed= random(55, 90);

  weight= random(400, 1500);

  car= createSprite(100, 200, 50, 10);
  car.velocityX= speed;

  wall= createSprite(1500, 200, 60, height/2);

  deformation= (0.5*weight*speed*speed)/22500;
  console.log(deformation);
}

function draw() {
  background(0);  

  if(isTouching(car,  wall)=== true && deformation<100){
    car.shapeColor=color(0, 255, 0);
    wall.shapeColor= "white";
    car.velocityX= 0;
  }
  else{
    car.shapeColor= "white";
    wall.shapeColor= "white";
  } 

  if(isTouching(car,  wall)=== true && deformation>100 && deformation<180){
    car.shapeColor=color(230, 230, 0);
    wall.shapeColor= "white";
    car.velocityX= 0;
  }
  else{
    car.shapeColor= "white";
    wall.shapeColor= "white";
  } 

  if(isTouching(car,  wall)=== true && deformation>180){
    car.shapeColor= color(255, 0, 0);
    wall.shapeColor= "white";
    car.velocityX= 0;
  }
  else{
    car.shapeColor= "white";
    wall.shapeColor= "white";
  } 

  drawSprites();
}