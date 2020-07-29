class Umbrella{
    constructor(x,y){
        var options = {
          isStatic: true          
        }
        this.radius = 285;

        this.body = Bodies.circle(x,y,20,options);
        this.image = loadImage("umbrella.jpg");
        World.add(world, this.body);
    }
display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 0,this.radius,this.radius);
    pop();
}
}