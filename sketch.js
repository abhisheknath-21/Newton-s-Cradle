
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roofObject = new Roof(380,50);

	bobObject1 = new Bob(250, 350, 70);
	bobObject2 = new Bob(300, 350, 70);
	bobObject3 = new Bob(350, 350, 70);
	bobObject4 = new Bob(400, 350, 70);
	bobObject5 = new Bob(450, 350, 70);

	bobDiameter = 50;
	rope1 = new Rope(bobObject1.body , roofObject.body, -bobDiameter*2.6, 0)
	rope2 = new Rope(bobObject2.body , roofObject.body, -bobDiameter*1.3, 0)
	rope3 = new Rope(bobObject3.body , roofObject.body, -bobDiameter*0, 0)
	rope4 = new Rope(bobObject4.body , roofObject.body, -bobDiameter*-1.3, 0)
	rope5 = new Rope(bobObject5.body , roofObject.body, -bobDiameter*-2.6, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230, 230, 230);

  
  roofObject.display();
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed(){   
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x : -250 ,  y:-105} );
	}
} 





