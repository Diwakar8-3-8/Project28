
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var grnd;

function preload()
{
	boyImg = loadImage("boy.png");
	stoneImg = loadImage("stone.png");
	treeImg = loadImage("tree.png");
	mngImg = loadImage("mango.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    grnd = new ground(650,400,w,h);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



