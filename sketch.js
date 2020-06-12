const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bird, trsh;
var trash, ground;
var trash1, trash2;
var trashimg, Chain;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    bird = new Bird(100, 100, 10);
    trash1 = new Box(855, 330, 10, 125)
    trash = new Box(800, 390, 100, 10);
    trash2 = new Box(745, 330, 10, 125);
    Chain = new chain(bird.body, {x: 200, y: 200});
}

function draw(){
    background(255);
    Engine.update(engine);
    ground.display();
    Chain.display();
    bird.display();
    trash.display();
    trash1.display();
    trash2.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
    Chain.fly();
}