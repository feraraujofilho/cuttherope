const WIDTH = 1000;
const HEIGHT = WIDTH;

let backgroundImg;
let plasticTrash;
let paperTrash;
let glassTrash;
let organicTrash;
let trashTypes = [];
let origin;
let ball;
let rope;
let angle = 180;
let angle2;
let aVel = 0.0;
let aAcc = 0.0;
let gravity = -0.0056;
let speed = 0;
let thing;
let clicked = false;
let trashes = [];
let types = ["packages", "paper", "glass", "organic"];
let score = 0;
let homer;
let homer2;
let homer3;
let homerCrying;
let homerCelebrating;
let level = 0;
let stop = false;
let nextLevelImg;
let startPage;
let winnerPage;
let gameOverPage;
let homerGif;
let time = 20;
let output = document.getElementById("time");
let points = document.querySelector(".points");
let timer;
let pendulum;
let newBall;
let level1;
let playMode = true;
let gameOver = false;

// array for level===1
let stuffs = [
  {
    name: "Can Beer",
    type: "packages",
    imgSrc: "assets/can_beer.png",
    width: 80,
    height: 120
  },
  {
    name: "Can Tomato",
    type: "packages",
    imgSrc: "assets/can_tomato.png",
    width: 80,
    height: 120
  },
  {
    name: "Cereal Box",
    type: "paper",
    imgSrc: "assets/Cereal_box.png",
    width: 80,
    height: 120
  },
  {
    name: "Milk",
    type: "paper",
    imgSrc: "assets/milk.png",
    width: 100,
    height: 100
  },
  {
    name: "Plastic Cup",
    type: "packages",
    imgSrc: "assets/plastic_cup.png",
    width: 80,
    height: 140
  }
];

// array for level === 2
let stuffs2 = [
  {
    name: "Bottle Bier",
    type: "glass",
    imgSrc: "assets/bottle_bier.png",
    width: 80,
    height: 160
  },
  {
    name: "Can Beer",
    type: "packages",
    imgSrc: "assets/can_beer.png",
    width: 80,
    height: 120
  },
  {
    name: "Can Tomato",
    type: "packages",
    imgSrc: "assets/can_tomato.png",
    width: 80,
    height: 120
  },
  {
    name: "Cereal Box",
    type: "paper",
    imgSrc: "assets/Cereal_box.png",
    width: 80,
    height: 120
  },
  {
    name: "Milk",
    type: "paper",
    imgSrc: "assets/milk.png",
    width: 100,
    height: 100
  },
  {
    name: "Plastic Cup",
    type: "packages",
    imgSrc: "assets/plastic_cup.png",
    width: 80,
    height: 140
  }
];

let item;
let itemIndex;
