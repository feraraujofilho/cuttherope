

function preload() {
  dataToLoad();
}

function setup() {
    var canvas = createCanvas(WIDTH, HEIGHT);
    canvas.parent('sketch-holder');
  countdown();
}

function draw() {
  if (playMode) {
    if (level === 0) {
      image(startPage, 0, 0, 1000, 1000);
      score = 0;
      time = 20;
      output.value = time;
      points.innerText = score;

      //text("Press Enter to Start", height / 2, width / 2);
    } else if (level === 1) {
      level1.draw();
    } else if (level === 2) {
      level1.draw();
    } else if (level === 3) {
      image(winnerPage, 0, 0, 1000, 1000);
      image(homerCelebrating, width / 2 - 200, height / 2 - 200, 400, 400);
      setTimeout(restart, 5000);
    }
  }
  if (!playMode) {
    image(nextLevelImg, 0, 0, 1000, 1000);
    image(homerGif, width / 2 - 280, height / 2 - 100);
  }
  if (gameOver) {
    image(gameOverPage, 0, 0, 1000, 1000);
    image(homerCrying, width / 2 - 200, height / 2 - 230, 400, 345);
  }
}

/* extra functions below */

function keyPressed() {
  // throw trashes
  if (key == " ") {
    thing = new TrashStuff();
    clicked = true;
  }

  // start game
  if (keyCode === ENTER) {
    level = 1;
    playMode = true;
  }

  // start to play second level
  if (keyCode === 83) {
    playMode = !playMode;
    stop = false;
    countdown();
  }

  // reset function
  if (keyCode === 82) {
    restart();
  }
}
