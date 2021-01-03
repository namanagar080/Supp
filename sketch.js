var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var myEngine, myWorld
var box1, box2, box3, count=0;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	myEngine=Engine.create();
	myWorld=myEngine.world;
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(myWorld, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(myWorld, ground);
    box1=new Box(width/2,650,200,20);
	box2=new Box(500,550,20,200);
	box3=new Box(300,550,20,200);
    
}


function draw() {
  background(0);
  box1.display();
  box2.display();
  box3.display();
  Engine.update(myEngine);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  keyPressed();
  
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
	count+=1;
  }
  if(keyCode===LEFT_ARROW){
	  helicopterSprite.x-=20;
	  translation ={x:-20,y:0};
	  if(count===0){
	  Matter.Body.translate(packageBody,translation);
	  }
  }
  if(keyCode===RIGHT_ARROW){
	helicopterSprite.x+=20;
	translation ={x:20,y:0};
	if(count===0){
	Matter.Body.translate(packageBody,translation);
	}
}
}


