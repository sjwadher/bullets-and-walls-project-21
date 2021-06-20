var car, wall
 
var speed, weight

wall.shapeColor="black"
car.shapeColor="blue"

function setup() {
  createCanvas(800,400);


  car=createSprite(50,200,50,50)
  wall=createSprite(800,200,60,height/2)
  speed=random(55,90);
  weight=random(400,1500);

  car.velocityX=speed;

  
}

function draw() {
  background(255,255,255);  

  if(wall.x-car.x<wall.width/2+car.width/2){

    
    
    if(0.5*weight*speed*speed/22500>180){
car.shapeColor="red"
car.velocityX=0
    }
    if(0.5*weight*speed*speed/22500<180 && 0.5*weight*speed*speed/22500>100){
      car.shapeColor="yellow"
      car.velocityX=0
          }
          if(0.5*weight*speed*speed/22500<100){
            car.shapeColor="green"
            car.velocityX=0
                }
  }
  drawSprites();
}
