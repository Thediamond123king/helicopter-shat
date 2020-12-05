var helicopterIMG, helicopterSprite, packageSprite,packageIMG,package2Sprite,package2IMG;
var packageBody,package2Body,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	package2IMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 50, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	package2Sprite=createSprite(width/2, 50, 10,10)
	package2Sprite.addImage(packageIMG)
	package2Sprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	
	package2Body = Bodies.circle(width/2 , 200 , 10 , {restitution:3, isStatic:true});
	World.add(world, package2Body);

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
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	package2Sprite=createSprite(width/2, height-35, width,10)
	package2Sprite.addImage(packageIMG)
	package2Sprite.scale=0.2

	package2Body = Bodies.circle(width/2 , 200 , 10 , {restitution:3, isStatic:false});
	World.add(world, package2Body);
  }
}



