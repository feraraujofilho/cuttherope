const pendulum = new Pendulum();
const newBall = new GetABall(500, 30, 80);
thing = new TrashStuff();
const level1 = new Levels();
// level = 0;


function preload() {
    dataToLoad()
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
      level1.setup();

 
}

function draw() {
if (level === 0){
        text("Press Enter to Start" ,height / 2, width / 2)
}

else if (level === 1) {
    level1.draw();
    console.log(angle)
  }

  else if (level === 2){
      level1.draw()
  }


}

/* extra functions below */

function keyPressed() {
  if (key == " ") {
    thing = new TrashStuff();
    clicked = true;
  }

    if (keyCode === ENTER) {
        level = 1
    }
}



function scoreCounter() {
  let points = document.querySelector(".points");

  for (let i = 0; i < 2; i++) {
    if (thing.type === trashes[i].type) {
      if (
        thing.y > 860 &&
        thing.y < 880 &&
        thing.x > trashes[i].x + 10 &&
        thing.x < trashes[i].x + trashes[i].w - 10
      ) {
        score++;
      }
    }
  }

  points.innerText = score;
}

window.onload = function() {
  countdown(20); //begins from the 10tn minute
};

function countdown(startTime) {
  let time = startTime;
  let output = document.getElementById("time");
  let timer = setInterval(tick, 1000);

  function tick() {
      if (level >0){
          time--;
          if (time <= 0) {
              clearInterval(timer);
          }
          output.value = `${Math.floor(time / 60)}:${("0" + (time % 60)).slice(-2)}`;
      }
      }
    
}

