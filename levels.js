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
          trashes[i] = new TrashBins(400 * (i + 0.5), types[i], trashTypes[i]);

          trashes[i].draw();
        }
      }

      if (score >= 3) {
        if (this.level === 1) {
          itemIndex = Math.floor(random(0, stuffs2.length));
          itemPic = loadImage(stuffs2[itemIndex].imgSrc);
          angle = 300;

          aVel = 0.1;
          aAcc = 0.1;
          stop = true;
          countdown();
          playMode = false;
        }

        this.level = 2;

        if (this.level === 2) {
          
          trashes = [];

          for (let i = 0; i < 3; i++) {
            trashes[i] = new TrashBins(
              (width / 3) * i + 70,
              types[i],
              trashTypes[i]
            );
            trashes[i].draw();
          }

          if (score >= 9) {
            this.level = 3;
          }
        }

        if (this.level === 3) {
            stop = true;
             countdown();
          image(winnerPage, 0, 0, 1000, 1000);
            image(homerCelebrating, width / 2 - 200, height / 2 - 200, 400, 400);
        }
      }
    }
  }
}
