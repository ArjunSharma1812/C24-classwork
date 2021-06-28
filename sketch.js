const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon, cannonBall;




function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  tower = new Tower(150, 350, 160, 310);
  ground = new Ground(600, 580, 1200, 10);
  cannon = new Cannon(150, 195, 30, 170, -PI/1.5);
  cannonBall = new CannonBall(cannon.x, cannon.y)
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  cannon.display();
  cannonBall.display();

  Engine.update(engine);
  ground.display();
  

  tower.display();
  
 
}

function keyReleased(){
  if(keyCode === DOWN_ARROW){
    cannonBall.shoot();
  }
}





