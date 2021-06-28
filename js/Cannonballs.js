class CannonBall{
    constructor(x, y){
        var options = {
            isStatic: true,
            restitution: 0.08,
            friction0:0.04,
            density:1,
        }
        this.r = 40;
        this.image = loadImage("/assets/cannonball.png");
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body)
    }
     display(){
         var pos = this.body.position;
         var angle = this.body.angle;
         push();
         translate(pos.x, pos.y);
         rotate(angle);
         imageMode(CENTER);
         image(this.image, 0, 0, this.r, this.r);
         pop();
    }
    shoot(){
        var velocity = p5.Vector.fromAngle(cannon.angle);
        velocity.mult(20);
        Matter.Body.setStatic(this.body, false);
        console.log("shoot");
        Matter.Body.setVelocity(this.body, {x: -velocity.x, y: -velocity.y});
    }
}