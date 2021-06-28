class Cannon {
    constructor(x, y, w, h, angle){
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.angle = angle;
    }
    display(){
       if(keyIsDown(RIGHT_ARROW)&&this.angle < 0.02){
        this.angle = this.angle+0.02;   
       }
       if(keyIsDown(LEFT_ARROW)&&this.angle > -2.3){
        this.angle = this.angle-0.02;   
       }
        fill("grey");
        push();
        translate(this.x, this.y);
        rotate(this.angle)
        rect(0, 0, this.width, this.height);
        pop();
        arc(this.x, this.y, 150, 200, PI, TWO_PI);

    }
}