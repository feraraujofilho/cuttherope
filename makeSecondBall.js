class MakeSecondBall {
    constructor(){
        this.x = newBall.x;
        this.y = newBall.y;
        this.r = 20;
        this.xSpeed =0;

        this.gravity = 1.5;
        this.velocity = -15;
        this.height=1000
        }
        
    draw(){
        
    }

    show() {
        if (this.x > 550){
            this.xSpeed = 4
        }
        if (this.x < 450){
           this.xSpeed = -4
        } 
        fill(220, 20, 60)
        ellipse(this.x, this.y, this.r * 2);

        this.velocity += this.gravity;
        this.y += this.velocity;

        if (this.y >= height) {
            this.y = height;
            this.velocity *= -0.5;
        } else {
            this.x += this.xSpeed;
        }

        if (this.x >= width || this.x <= 0) {
            this.xSpeed *= -1;
        }
    }

}