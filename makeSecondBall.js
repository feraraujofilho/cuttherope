class MakeSecondBall {
  constructor() {
    this.x = newBall.x;
    this.y = newBall.y;
    this.r = 20;
    this.xSpeed = 0;
    this.gravity = 1.5;
    this.velocity = -15;
    this.color;
  }

  draw() {
    this.color = colors[indexColors];
    fill(colors[indexColors]);
    ellipse(ballPosition.x, ballPosition.y, this.r * 2);
  }

  show() {
    if (this.x > 550) {
      this.xSpeed = 4;
    }
    if (this.x < 450) {
      this.xSpeed = -4;
    }

    fill(colors[indexColors]);

    ellipse(this.x, this.y, this.r * 2);

    this.velocity += this.gravity;
    this.y += this.velocity;
    this.x += this.xSpeed;
    /*  if (this.y >= height) {
            this.y = height;
            this.velocity *= -0.5;
        } else {
            this.x += this.xSpeed;
        } */

    if (this.x >= width || this.x <= 0) {
      this.xSpeed *= -1;
    }
  }

  fall() {
    if (clicked) {
      this.x = newBall.x;
      this.y = newBall.y;
    } else {
      this.x = ballPosition.x;
      this.y = ballPosition.y;
    }
  }
}
