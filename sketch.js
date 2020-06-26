var bullet, wall;
var speed, weight;
var damage, thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 20);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = rgb(80,80,80);
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

  if(isTouching(bullet, wall)){

    bullet.velocityX = -1

    if(damage<10){
      bullet.shapeColor = rgb(0,255,0);
    }
    if(damage>10){
      bullet.shapeColor = rgb(255,0,0);
    }
  }

}