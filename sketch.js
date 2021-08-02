
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = Bodies.rectangle(500, 595, 1000, 10)

	Engine.run(engine);
  dustbin1 = new Dustbin(70, 90, 100, 20);
  paper = new Paper(100, 590)
 
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  rect(500, 595, 1000, 10)
 
  dustbin1.display();
  paper.display();
}



