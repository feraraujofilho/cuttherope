class TrashStuff {
  constructor() {
    this.x = newBall.x;
    this.y = newBall.y;
    this.r = 20;
    this.xSpeed = 0;
    this.gravity = 1.5;
    this.velocity = -15;
    this.color;
    this.type;
    this.angle = 0;
  }

  draw() {
    image(
      itemPic,
      ballPosition.x - stuffs[itemIndex].width * 1.2,
      ballPosition.y + stuffs[itemIndex].height / 1.7,
      stuffs[itemIndex].width / 1.5,
      stuffs[itemIndex].height / 1.5
    );
    this.type = stuffs[itemIndex].type;
    //
  }

  show() {
    if (this.x > 550) {
      this.xSpeed = 4;
    }
    if (this.x < 450) {
      this.xSpeed = -4;
    }

    push();

    translate(
      this.x + stuffs[itemIndex].width / 2 ,
      this.y + stuffs[itemIndex].height / 2
    );
    rotate(this.angle);

    image(
      itemPic,
      0 ,
      0 ,
      stuffs[itemIndex].width / 1.7,
      stuffs[itemIndex].height / 1.7
    );

    this.velocity += this.gravity;
    this.y += this.velocity;
    this.x += this.xSpeed;
    this.angle += 0.6;
    pop();

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
