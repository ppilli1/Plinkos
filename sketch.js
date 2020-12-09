const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var gameState = "OnSling";
var ground1;
var backgroundImg;
var score = 0;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
	var canvas = createCanvas(480, 800);

	engine = Engine.create();
	world = engine.world;

  ground1 = new Ground(240,height,480,20);
	
	
	//Create the Bodies Here.
  Engine.run(engine);
  
  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }

  for(var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,75,10));
  }
  for(var j = 15; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,175,10));
  }
  for(var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,275,10));
  }
  for(var j = 15; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,375,10));
  }
  
}


function draw() {
  background("black");

  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50)

  rectMode(CENTER);
  //background(255,255,255);
  fill("white");
  text(mouseX + ":" + mouseY, 400,100)

  ground1.display();
  for(var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

  for(var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }

  if(frameCount % 60 == 0){
    particles.push(new Particle(random(width/2 - 20, width/2 + 20),10,10));
  }

  for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }
  
  drawSprites();
}