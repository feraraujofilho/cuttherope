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
    this.width = 50;
  }

  draw() {
    // configuration for the garbage for levels
    if (level1.level === 1) {
      image(
        itemPic,
        ballPosition.x - stuffs[itemIndex].width * 1.2,
        ballPosition.y + stuffs[itemIndex].height / 1.7,
        stuffs[itemIndex].width / 1.5,
        stuffs[itemIndex].height / 1.5
      );
      this.type = stuffs[itemIndex].type;
    }
    if (level1.level === 2) {
      image(
        itemPic,
        ballPosition.x - stuffs2[itemIndex].width * 1.2,
        ballPosition.y + stuffs2[itemIndex].height / 1.7,
        stuffs2[itemIndex].width / 1.5,
        stuffs2[itemIndex].height / 1.5
      );
      this.type = stuffs2[itemIndex].type;
    }
  }

  // configuration for the garbage after yout throw it by levels
  show() {
    if (this.x > 600) {
      this.xSpeed = 4;
    }
    if (this.x < 430) {
      this.xSpeed = -4;
    }

    push();

    // adjusting image according to array of the current level
    if (level1.level === 1) {
      translate(
        this.x + stuffs[itemIndex].width / 2,
        this.y + stuffs[itemIndex].height / 2
      );
      rotate(this.angle);

      image(
        itemPic,
        0,
        0,
        stuffs[itemIndex].width / 1.7,
        stuffs[itemIndex].height / 1.7
      );
    } else if (level1.level === 2) {
      translate(
        this.x + stuffs2[itemIndex].width / 2,
        this.y + stuffs2[itemIndex].height / 2
      );
      rotate(this.angle);

      image(
        itemPic,
        0,
        0,
        stuffs2[itemIndex].width / 1.7,
        stuffs2[itemIndex].height / 1.7
      );
    }

    // below is the standart settings for all levels

    this.velocity += this.gravity;
    this.y += this.velocity;
    this.x += this.xSpeed;
    this.angle += 0.6;
    pop();

    if (this.x >= width || this.x <= 0) {
      this.xSpeed *= -1;
    }
  }
}
