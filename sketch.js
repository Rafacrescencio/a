
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{ var plane_options={
isStatic: true
}
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
Matter.Body.rotate(rotate1,angle1)
push();
traslate(rotate1,positio.x,rotate1,position.y);
rotate(angle1);
rect(0,0,150,20);
pop();
angle +0.2;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



