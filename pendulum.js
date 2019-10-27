class Pendulum {
  constructor() {}

  draw() {
    clear();
    // position of the ellipse
    background(240, 248, 255);
    ballPosition.x = origin.x + rope * sin(angle);
    ballPosition.y = origin.y + rope * cos(angle);

    line(origin.x, origin.y, ballPosition.x, ballPosition.y);

    aAcc = gravity * sin(angle);

    angle += aVel;
    aVel += aAcc;

    aVel *= 0.992;
  }
}