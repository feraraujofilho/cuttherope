const WIDTH = 1000;
const HEIGHT = WIDTH;

let origin;
let ball;
let rope;
let angle = 180;
let aVel = 0.0;
let aAcc = 0.0;
let gravity = -0.0056;
let speed = 0;
let ball2;
let clicked = false;
let trashes = [];
let colors = ["yellow", "red", "brown"];
let score = 0;
let indexColors;

const pendulum = new Pendulum();
const newBall = new GetABall(500, 30, 80);
ball2 = new MakeSecondBall();

function preload() {
  rope = 300;
  origin = { x: WIDTH / 2, y: 0 };
  ballPosition = { x: WIDTH / 2, y: rope };
}

function setup() {
  console.log("setup");
  createCanvas(WIDTH, HEIGHT);
  for (let i = 0; i < 3; i++) {
    trashes[i] = new Trash(300 * (i + 0.5), colors[i]);
  }
  indexColors = Math.floor(random(0, 3));

  // trash1.setRandomPosition();
}

function draw() {

  pendulum.draw();
  newBall.update();
  newBall.display();
  ball2.draw();

  for (let i = 0; i < 3; i++) {
    fill(colors[i]);
    trashes[i].draw();
  }

  if (clicked) {
    ball2.show();
    scoreCounter();
      /* if (scored) {
          score += 1;
          scored = false;
      } */
  }

  console.log(score);
}

function keyPressed() {
  // this.index = Math.floor(random(0, 3))
  if (key == " ") {
    ball2 = new MakeSecondBall();
    clicked = true;
  }
  //score();
}

let scored = false;



function scoreCounter() {
  let points = document.querySelector(".points");

  for (let i = 0; i < 3; i++) {
    if (ball2.color === trashes[i].color) {
      if (
        ball2.y > 800 && ball2.y < 850 &&
        ball2.x > trashes[i].x + 5 &&
        ball2.x < trashes[i].x + trashes[i].w - 5
      ) {
        score++
      }
    }
  }
  
  points.innerText = score;
}
