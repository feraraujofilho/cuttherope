class GetABall {
  constructor(tempX, tempY, tempW) {
    this.x = tempX; // x location of square
    this.y = tempY; // y location of square
    this.w = tempW;
    this.state = "still";
    this.angle = 0;
  }



  display = function() {
    if (keyIsDown(32)) {
      this.state = "action";
    } else {
      this.state = "still";
    }

    if (this.state === "still") {
      image(homer, this.x - 150, this.y - 25, 240, 288);
    } else if (this.state === "action") {
      if (newBall.x > 450) {
        image(homer2, this.x - 150, this.y - 25, 240, 288);
      } else {
        image(homer3, this.x - 150, this.y - 25, 240, 288);
      }
    }

      
  };

  update = function() {
    this.x = ballPosition.x;
    this.y = ballPosition.y;
  };
}
