const Engine= Matter.Engine
const World = Matter.World
const Bodies=Matter.Bodies

var engine,world;
var ground,ball;

function setup() {
  createCanvas(800,400);
   
  var props= {
    isStatic : true
  }

  engine=Engine.create();
  world=engine.world
  
  ground=Bodies.rectangle(200,380,400,10,props)
World.add(world,ground)



  ball=Bodies.circle(200,200,20,{restitution:0.7})
  World.add(world,ball)

ball1=Bodies.circle(200,150,10,{restitution:0.9})
World.add(world,ball1)

}

function draw() {
  background(255,255,255); 
  
  Engine.update(engine)
  
   

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10)

  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,40,40)

  ellipse(ball1.position.x,ball1.position.y,20,20)
}