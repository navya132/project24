
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900,500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hammer1 = new Hammer(436,336,PI/3);
ground1 = new Ground(450,495,900,10);
stone1 = new Stone(238,453,60,60);
rubber1 = new Rubber(600,350,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  text(mouseX+","+mouseY,10,45)
hammer1.display();
ground1.display();
stone1.display();
rubber1.display();

  drawSprites();
 
}



