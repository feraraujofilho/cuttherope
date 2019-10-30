class Pendulum {
  constructor() {}

  draw() {
    //clear();
    // position of the ellipse
    background(backgroundImg);
    ballPosition.x = origin.x + rope * sin(angle);
    ballPosition.y = origin.y + rope * cos(angle);

    //image(vine, origin.x, origin.y, )
    strokeWeight(4);
    line(origin.x, origin.y, ballPosition.x, ballPosition.y);

    aAcc = gravity * sin(angle);

    angle += aVel;
    aVel += aAcc;

    aVel *= 0.992;
  }
}
