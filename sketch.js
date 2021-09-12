const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var arrows = []
var bag = 10


function preload() {
  base1I = loadImage("assets/base1.png")
  //base2I = loadImage("assets/base2.png")
  playerI = loadImage("assets/player.png")
  bgI = loadImage("assets/sky.jpeg")
  playerbowI = loadImage("assets/playerArcher.png")
  //playerbow2I = loadImage("assets/computerArcher.png")
  arrowI = loadImage("assets/arrow.png")
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight-10);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  island1 = new Island1(width*0.2,height*0.8,289,200)
  board1 = new Board(width*0.6,height*0.25,200,200)
  board2 = new Board(width*0.9,height*0.75,200,200)
  //island2 = new Island2(width*0.8,height*0.8,289,200)
  player1 = new Player1(width*0.2,height*0.51,90,200)
  //player2 = new Player2(width*0.8,height*0.51,90,200)
  playerbow = new Bow(width*0.23,height*0.53,100,134,-PI/2)
  //computerbow = new Computerbow(width*0.78,height*0.47,100,134,PI/2)
  //computerarrow = new ComputerArrow(width*0.75,height*0.47,100,7,-PI)
 }

function draw() {

  background(bgI);

  Engine.update(engine);

  //for(var i = 0 ; i < playerarrow.length; i++){
  //  if(playerarrow[i]){
  //    playerarrow[i].display()
  //    if(playerarrow[i].body.position.x > width || playerarrow[i].body.position.y > height-110){
  //      World.remove(world,playerarrow[i].body)
  //      delete playerarrow[i]
  //    }
  //  } 
  //}

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, height*0.1);
  textSize(20)
  text("Remaining Arrows: "+ bag, width *0.085, height*0.05);

   //Display Playerbase and computer base 
  island1.display()
  //island2.display()
  player1.display()
  //player2.display()
  playerbow.display()
  board1.display()
  board2.display()
  
  //computerarrow.display()
  //computerbow.display()

   //display Player and computerplayer
  for(var i = 0 ; i<arrows.length ; i++ ){
    arrows[i].display()
  }

}
function keyPressed(){
  if(keyCode === 32 && bag > 0){
    playerarrow = new Arrow(playerbow.body.position.x +40,playerbow.body.position.y-50,100,7,playerbow.body.angle)
    Matter.Body.setAngle(playerarrow.body, playerbow.body.angle);
    arrows.push(playerarrow)
  }
}
function keyReleased(){
  if(keyCode === 32 && bag > 0){
    playerarrow.shoot(playerbow.body.angle)
    bag = bag - 1
  }
}
