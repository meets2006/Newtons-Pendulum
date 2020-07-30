
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5
var roof1,bobDiameter=0;
var startBobPositionx,startBobPositiony;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
bobDiameter=60;
startBobPositionx=width/2
startBobPositiony=height/4+400
bob1 = new Bob(startBobPositionx-bobDiameter*2,startBobPositiony,bobDiameter);
bob2 = new Bob(startBobPositionx-bobDiameter,startBobPositiony,bobDiameter);
bob3 = new Bob(startBobPositionx,startBobPositiony,bobDiameter);
bob4 = new Bob(startBobPositionx+bobDiameter,startBobPositiony,bobDiameter);
bob5 = new Bob(startBobPositionx+bobDiameter*2,startBobPositiony,bobDiameter);
roof1= new Roof(400,50,750,50)
rope1 = new Rope(bob1.body,roof1.body,-bobDiameter*2,0)
rope2 = new Rope(bob2.body,roof1.body,-bobDiameter,0)
rope3 = new Rope(bob3.body,roof1.body,0,0)
rope4 = new Rope(bob4.body,roof1.body,+bobDiameter,0)
rope5 = new Rope(bob5.body,roof1.body,+bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();

  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.setStatic(bob1.body,false)
		Matter.Body.setStatic(bob2.body,false)
		Matter.Body.setStatic(bob3.body,false)
		Matter.Body.setStatic(bob4.body,false)
		Matter.Body.setStatic(bob5.body,false)
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-85,y:85});
	}
}


