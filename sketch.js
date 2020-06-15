const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var paper, trsh;
var trash, ground;
var trash1, trash2;
var trsh1, Chain;
var trashlid, trashlid1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    paper = new Bird(100, 100, 10);
    trash1 = new Box(855, 325, 10, 125)
    trash = new Box(800, 385, 100, 10);
    trash2 = new Box(745, 325, 10, 125);
    trashlid = new Box(950, 361, 120, 10);
    trashlid1 = new Box(950, 378, 50, 17);
    Chain = new chain(paper.body, {x: 200, y: 200});
}

function draw(){
    background(255);
    Engine.update(engine);
    ground.display();
    Chain.display();
    paper.display();
    trash.display();
    trash1.display();
    trash2.display();
    trashlid.display();
    trashlid1.display();
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    Chain.fly();
}