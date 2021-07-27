const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
var box1,box2,box3,box4,box5,box6,box7;
var sling;
var poly;
var polygon;
function preload(){
    poly=loadImage("polygon.png");
}

function setup(){
    createCanvas(600,400);  

    engine = Engine.create();
    world = engine.world;
   
    
    ground1 = new Ground(200,300,230,15);
    ground2 =  new Ground(300,160,230,15);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    sling = new SlingShot(this.polygon,{x:70,y:80})

    box1 = new Box(100,280,30,40);
    box2 = new Box(130,280,30,40);
    box3 = new Box(160,280,30,40);
    box4 = new Box(190,280,30,40);
    box5 = new Box(220,280,30,40);
    
    box8 = new Box(110,235,30,40);
    box9 = new Box(140,235,30,40);
    box10 = new Box(170,235,30,40);
    box11 = new Box(200,235,30,40);
    box12 = new Box(120,195,30,40)
    box13 = new Box(150,195,30,40);
    box14 = new Box(180,195,30,40);
    box15 = new Box(150,155,30,40);
    box16 = new Box(300,140,20,20);
    box17 = new Box(320,140,20,20);
    box18 = new Box(280,140,20,20);
    box19 = new Box(260,140,20,20);
    box20 = new Box(340,140,20,20);
    box21 = new Box(320,120,20,20);
    box22= new Box(300,120,20,20);
    box23 = new Box(280,120,20,20);
    box24= new Box(310,100,20,20);
    box25= new Box(290,100,20,20);
    box26 = new Box(300,80,20,20);

  ;
    
}

function draw(){
    background("grey");
    Engine.update(engine);
    ground1.display();
    ground2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    words();

    imageMode(CENTER)
    image(poly ,polygon.position.x,polygon.position.y,40,40);
    
    sling.display();


}   

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    sling.fly();
}


function words(){
    text("Drag the stone and release it toward the blocks", 100,50);
}

