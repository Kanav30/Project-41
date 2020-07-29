class Drops{
    constructor(x,y){
        var options = {
            friction: 0.0001,
            isStatic: false,
            restitution:0.1
        }
        this.radius = 20;

        this.body = Bodies.circle(x,y,20,options);
        World.add(world, this.body);
    }
showDrops(){
    fill("blue");
ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
}

updateDrops(){
if(this.body.position.y > height){
    Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
}
}

    display(){
        var pos = this.body.position;
        push();
      translate(pos.x,pos.y);
      
      ellipseMode(CENTER);
      
      ellipse(0,0,20,20);
      
      pop();
    }

}