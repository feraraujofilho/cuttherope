class Levels {
  constructor() {
      this.level = 1
      this.pendulum;
      this.createTrash;
  }

  setup() {
      if(this.level === 1){
          for (let i = 0; i < 2; i++) {
              trashes[i] = new TrashBins(400 * (i + 0.3), types[i], trashTypes[i]);
          }
      }
      else if (this.level === 2) {
          for (let i = 0; i < 4; i++) {
              trashes[i] = new TrashBins(210 * (i + 0.3), types[i], trashTypes[i]);
          }
      }
    
  }

  draw() {
      if (this.level === 1) {
          pendulum.draw();
          newBall.update();
          newBall.display();
          thing.draw();

          if (clicked) {
              thing.show();
              scoreCounter();
          }

          if (output.value === "0:00") {
              console.log("GAME OVEEEEEEER");
          }

          if (score >= 3) {
              this.level += 1;
              level += 1
              this.setup()
          }

          for (let i = 0; i < 2; i++) {
              //fill(colors[i]);
              trashes[i].draw();
          }
        }
      if (this.level === 2) {
          //dataToLoad();
          

          pendulum2 = new Pendulum;
          this.pendulum = pendulum2
          level1.setup();
          angle = 180;
          aAcc = 1;
          aVel = 1;
          speed = 1;
          pendulum2.draw()
          newBall.update();
          newBall.display();
          thing.draw();

          if (clicked) {
              thing.show();
              scoreCounter();
          }

          if (output.value === "0:00") {
              console.log("GAME OVEEEEEEER");
          }

          if (score >= 3) {
              level += 1;
          }

          for (let i = 0; i < 4; i++) {
              //fill(colors[i]);
              trashes[i].draw();
          }
      }
    
  }

}
