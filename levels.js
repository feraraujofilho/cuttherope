class Levels {
  constructor() {
    this.level = 1;
    this.pendulum;
    this.createTrash;
  }

  draw() {
    pendulum.draw();
    if (this.level > 0) {
      newBall.update();
      newBall.display();
      thing.draw();

      if (clicked) {
        thing.show();
        scoreCounter();
      }

      if (output.value === "0:00") {
        //console.log("GAME OVEEEEEEER");
      }

      if (score < 3) {
        for (let i = 0; i < 2; i++) {
          trashes[i] = new TrashBins(400 * (i + 0.3), types[i], trashTypes[i]);

          trashes[i].draw();
        }
      }

      if (score >= 3) {
        if (this.level === 1) {
          itemIndex = Math.floor(random(0, stuffs.length));
          itemPic = loadImage(stuffs[itemIndex].imgSrc);
          angle = 180;

          aVel = 0.0;
          aAcc = 0.0;
        }

        this.level = 2;

        trashes = [];

        for (let i = 0; i < 4; i++) {
          trashes[i] = new TrashBins(
            (width / 4) * i + 15,
            types[i],
            trashTypes[i]
          );
          trashes[i].draw();
        }
      }
    }
  }
}
