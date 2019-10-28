class GetABall {
    constructor(tempX, tempY, tempW) {
        this.x = tempX;  // x location of square 
        this.y = tempY;  // y location of square 
        this.w = tempW;  // size 

        this.display = function () {
            // Display the square 
            fill(175);
            stroke(0);
            ellipse(this.x, this.y, this.w);
        };

        this.update = function () {
            // Add speed to location
            this.x = ballPosition.x
            this.y = ballPosition.y;
        };
    }

}