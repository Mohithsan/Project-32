const Bodies = Matter.Bodies
const Body = Matter.Body
const Engine = Matter.Engine
const World = Matter.World


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width/2-10, height/2-60, 30,30)
  blower = new Blower(width/2-50,height/2+30,150,20)
  blowermouth = new Blowermouth(width/2+870,height/2+20,100,90)

  button = createButton("click to blow")
  button.position(width/2,height-100)
  button.class("blowbutton")
  button.mouseClicked(blow)
}

function draw() {
  Engine.update(engine)

  background(255,255,255);  
  drawSprites();
   ball.show()
   blower.show()
   blowermouth.show()
}

function blow() {
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.1})
};