
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy;
var dist

function preload()
{
	boyImg=loadImage("Plucking Mangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	tree=new Tree(700,600)
	ground = new Ground(10,height,10,100);
	stone = new Stone(235,420,30);
	mango1 = new Mango(650,580)
	mango2 = new Mango(630,550)
	mango3 = new Mango(540,400)
	mango4 = new Mango(590,650);
	mango5 = new Mango(490,590)
	elasic = new Elasic (stone.body,{x:200,y:100});
	boy=createSprite(210,370,20,30)
	boy.addImage(boyImg)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  	tree.display();
 	ground.display();
	 stone.display();
	 mango1.display();
	 mango2.display();
	 mango3.display();
	 mango4.display();
	 mango5.display();
	 elastic.display();
	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
 	drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    elastic.fly()
}

function detectCollision(stone,mango){
	mangoBodyPosition=stone.body.position
	stoneBodyPosition=mango.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
		if(distance<=mango.radius+stone.radius){
			Matter.body.setStatic(mango.body,false)
		}

}

function keyPressed(){
	if(keyCode === 32)
	Matter.body.setPosition(stone.body,{x:235,y:420})
	launcherObject.attach(stone.body);
}

