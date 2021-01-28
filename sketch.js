
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;






function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
    stone1 = new stone( 210,400,40,40 );
	mango1=new mango(1000,100,30);
	mango2=new mango(1150,80,30);
	mango3=new mango(1100,50,30);

	chain1 = new chain(stone1.body,{x:210,y:400});

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();

  groundObject.display();;
  stone1.display();
  chain1.display();
  
}
function mouseDragged(){
    
    
      Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
    chain1.fly();
 
}