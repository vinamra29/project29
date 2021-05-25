const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball, polygon;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,250,10);
 polygon = Bodies.circle(50,200,20)
 World.add(world,polygon);
 slingShot = new slingshot(this.polygon,{x:100,y:200})
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //level one
  Block1 = new Block(600,100,30,40);
  console.log(Block1);
  Block2 = new Block(630,100,30,40);
  Block3 = new Block(660,100,30,40);
  Block4 = new Block(690,100,30,40);
  Block5 = new Block(720,100,30,40);
  Block6 = new Block(750,100,30,40);
  Block7 = new Block(780,100,30,40);
   //level two
   Block8 = new Block(630,50,30,40);
   Block9 = new Block(660,50,30,40);
   Block10 = new Block(690,50,30,40);
   Block11 = new Block(720,50,30,40);
   Block12 = new Block(750,50,30,40);
 //level three
 Block13 = new Block(660,25,30,40);
 Block14 = new Block(690,25,30,40);
 Block15 = new Block(720,25,30,40);
 //top
 Block16 = new Block(690,5,30,40);

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
 
  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  Block1.display();
  Block2.display();
  Block3.display();
  Block4.display();
  Block5.display();
  Block6.display();
  Block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("pink");
  Block8.display();
  Block9.display();
  Block10.display();
  Block11.display();
  Block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("turquoise");
  Block13.display();
  Block14.display();
  Block15.display();
  fill("grey");
  Block16.display();
  imageMode (CENTER)
  image(polygon_img,polygon.position.x,polygon.position.y,40,40)
  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition (this.polygon,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingShot.fly()
}