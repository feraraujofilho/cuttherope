const WIDTH = 1000;
const HEIGHT = WIDTH;

let origin;
let ball;
let rope;
let angle = 180;
let aVel = 0.0;
let aAcc = 0.0;
let gravity = -0.00560
let speed = 0;
let ball2;
let clicked = false
//let balls = [];
 



const pendulum = new Pendulum()
const newBall = new GetABall(500, 30, 80)
const trash1 = new Trash();
//ball2 = new MakeSecondBall()

function preload(){
    rope = 300;
    origin = {x:WIDTH / 2,y: 0};
    ballPosition = {x: WIDTH / 2, y: rope};

}

function setup(){
    console.log("setup")
    createCanvas(WIDTH, HEIGHT);
    background(153)
    trash1.setRandomPosition();
    
}

function draw(){
    
    pendulum.draw();
    newBall.update();
    newBall.display()
    trash1.draw();
    //ball2.draw()
    console.log(clicked);
    if(clicked){
        ball2.show()
    }   
    
}

function keyPressed(){
    if (key == ' ') {
      ball2 = new MakeSecondBall();
    clicked = true;
    }
    
}

