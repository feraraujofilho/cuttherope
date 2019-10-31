const pendulum = new Pendulum();
const newBall = new GetABall(500, 30, 80);
thing = new TrashStuff();
const level1 = new Levels();
let playMode = true;
let gameOver = false;

function preload() {
  dataToLoad();
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
  countdown();
}

function draw() {
  if (playMode) {
    if (level === 0) {
      image(startPage, 0, 0, 1000, 1000);
      //text("Press Enter to Start", height / 2, width / 2);
    } else if (level === 1) {
      level1.draw();
    } else if (level === 2) {
      level1.draw();
    } else if (level === 3) {
      image(winnerPage, 0, 0, 1000, 1000);
        image(homerCelebrating, width / 2 - 200 , height / 2 - 200, 400, 400);
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
  }

  // start to play second level
  if (keyCode === 83) {
    playMode = !playMode;
    stop = false;
    countdown();
  }

  // reset function
  /*  if (keyCode === 82) {
    level = 0;
    preload();
    setup();
    angle = 180;
    loop()
  } */
}

function scoreCounter() {
  let points = document.querySelector(".points");

  if (level1.level === 1) {
    for (let i = 0; i < 2; i++) {
      if (thing && thing.type === trashes[i].type) {
        if (
          thing.y > trashes[i].y &&
          thing.y < trashes[i].y + 50 &&
          thing.x + thing.width > trashes[i].x &&
          thing.x + thing.width + thing.width < trashes[i].x + trashes[i].w - 20
        ) {
          score++;
          console.log(score);
        }
      }
    }
  }

  if (level1.level === 2) {
    for (let i = 0; i < 3; i++) {
      if (thing && thing.type === trashes[i].type) {
        if (
          thing.y > trashes[i].y &&
          thing.y < trashes[i].y + 50 &&
          thing.x + thing.width > trashes[i].x &&
          thing.x + thing.width + thing.width < trashes[i].x + trashes[i].w - 20
        ) {
          score++;
          console.log(score);
        }
      }
    }
  }

  points.innerText = score;
}

let timer;

function countdown() {
  if (!stop) {
    timer = setInterval(tick, 1000);

    function tick() {
      if (level === 1) {
        time--;
        if (time <= 0) {
          clearInterval(timer);
          gameOver = true;
        }
        output.value = `${time % 60}`;
      }
    }
  }

  if (stop) {
    clearInterval(timer);
    time = 30;
    stop = false;
  }
  output.value = `${time % 60}`;
}
