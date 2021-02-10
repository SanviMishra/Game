const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var basket1, basket2, basket3;
var ground1,ground2,ground3,ground4;
var hero;
function setup() {
  createCanvas(1200,400);
 
  engine = Engine.create();
  world = engine.world;


  basket1 = new Basket(1160,330,30,60);
  basket2 = new Basket(1080,330,30,60);
  basket3 = new Basket(1120,360,100,30);

  ground1 = new Ground(600,10,1200,30)
  ground2 = new Ground(600,390,1200,30)
  ground3 = new Ground(0,200,30,400)
  ground4 = new Ground(1200,200,30,400)

hero = new Hero(200, 100, 20);
}

function draw() {
  background(0);  
  Engine.update(engine);
  basket1.display();
  basket2.display();
  basket3.display();

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();

  hero.display();


  
}