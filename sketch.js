var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1,box2,box3;
var ox1,ox2,ox3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	//helicopterSprite.velocityX=2;

	box1=createSprite(350,650,200,20);
	box2=createSprite(440,600,20,100);
	box3=createSprite(260,600,20,100);
	
	box2.shapeColor="red";
	box1.shapeColor="red";
	box3.shapeColor="red";





	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5,isStatic:true });
	
	ox1= Bodies.rectangle(350, 650, 200, 20,{isStatic:true});
	
	ox2= Bodies.rectangle(440, 600, 20, 100);
	ox3= Bodies.rectangle(260, 600, 20, 100);
	

	World.add(world, packageBody);
	World.add(world,ox1);
	World.add(world,ox2);
	World.add(world,ox3);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  packageSprite.x=helicopterSprite.x;

  box1.x=ox1.position.x
  box1.y=ox1.position.y
  box2.x=ox2.position.x
  box2.y=ox2.position.y
  box3.x=ox3.position.x
  box3.y=ox3.position.y
 if  (keyCode === LEFT_ARROW)
 {
	helicopterSprite.velocityX=-2;
	
	

 } 

 
 if  (keyCode === RIGHT_ARROW) {
	helicopterSprite.velocityX=2;
	
 }


  keyPressed();
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    
	Matter.Body.setStatic(packageBody, false);
  }
}



