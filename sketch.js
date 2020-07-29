const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

drops = [];
var maxDrops = 100;
var umbrella;
var lightning1, lightning_img1, lightning_img2, lightning_img3;

function preload(){
lightning_img1 = loadImage("lightning.jpg");
lightning_img2 = loadImage("lightning2.jpg");
}

function setup() {
	createCanvas(400,760);
	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);
    if(frameCount % 200 === 0){
     for(var i = 0; i<maxDrops;i++){
    drops.push(new Drops(random(0,400),random(0,400)));
       }

    umbrella = new Umbrella(200,600);

    

    }
}

function draw(){
    background("black");
  
    for(var i = 0; i<maxDrops;i++){
      drops[i].showDrops();
      drops[i].updateDrops();
}
umbrella.display();

lightning();
drawSprites();

}   

function lightning(){
if(frameCount % 12 === 0){ 
    lightning1 = createSprite(200,10);
    //generate random obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: lightning1.addImage(lightning_img1);
              break;
      case 2: lightning1.addImage(lightning_img2);
              break;    
          default: break;
          
    }
    lightning1.scale = 0.6;
}


}

