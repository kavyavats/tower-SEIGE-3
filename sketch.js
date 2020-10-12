
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score;
var backgroundImg;
var bg;

function preload(){
  getBackgroundImage();
}


function setup() {
var canvas=	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;


  score=0;
	
shooter=new Shooter(100,400,20)
chain = new Chain(shooter.body,{x:180,y:400})
ground= new Ground(490,500,300,20)
box1=new Box(400,450,30,50)
box2=new Box(430,450,30,50)
box3=new Box(460,450,30,50)
box4=new Box(490,450,30,50)
box5=new Box(520,450,30,50)
box6=new Box(550,450,30,50)
box7=new Box(580,450,30,50)
box8=new Box(430,400,30,50)
box9=new Box(460,400,30,50)
box10=new Box(490,400,30,50)
box11=new Box(520,400,30,50)
box12=new Box(550,400,30,50)
box13=new Box(460,300,30,50)
box14=new Box(490,300,30,50)
box15=new Box(520,300,30,50)
box16=new Box(490,280,30,50)


Engine.run(engine);

}


function draw() {
  if(backgroundImg){
  rectMode(CENTER);
  background(backgroundImg);
  textSize(20)
  stroke("black")
  text ("drag the stone with your mouse and release it to destroy the tower refrest the page to play again ",55,100)
  text(score,400,150)

  
shooter.display()
chain.display()
  ground.display()
  fill ("yellow")
  box1.display()
  fill ("blue")
  box2.display()
  fill("pink")
  box3.display()
  fill("orange")
  box4.display()
  fill("red")
  box5.display()
  fill("green")
  box6.display()
  fill("purple")
  box7.display()
  fill("brown")
  box8.display()
  fill("white")
  box9.display()  
  fill("orange")
 box10.display()
 fill("green")
 box11.display()
 fill("red")
 box12.display()
 fill("yellow")
 box13.display()
 fill("red")
 box14.display()
 fill("purple")
 box15.display()
 fill("white")
 box16.display()

 box1.score()
 box2.score()
 box3.score()
 box4.score()
 box5.score()
 box6.score()
 box7.score()
 box8.score()
 box9.score()
 box10.score()
 box11.score()
 box12.score()
 box13.score()
 box14.score()
 box15.score()
 box16.score()


  }
}



async function getBackgroundImage(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata")
  var responseJSON= await response.json()
  var datetime=responseJSON.datetime
  var time=datetime.slice(11,13)  
  
  console.log(time)
  if(time>=06&&time<=19){
      bg="bg2.png"
  }

  else{
      bg="bg2.jpg"
  }
  backgroundImg = loadImage(bg);

}


function mouseDragged(){
   Matter.Body.setPosition(shooter.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    chain.fly();
}



