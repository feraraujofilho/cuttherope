const WIDTH = 1000;
const HEIGHT = WIDTH;

let backgroundImg;
let plasticTrash;
let paperTrash;
let glassTrash;
let organicTrash;
let batteriesTrash;
let trashTypes = [];
let origin;
let ball;
let rope;
let angle = 180
let angle2;
let aVel = 0.0;
let aAcc = 0.0;
let gravity = -0.0056;
let speed = 0;
let thing;
let clicked = false;
let trashes = [];
let types = ["packages", "paper", "glass", "eco", "Pfand"];
let score = 0;
let indexColors;
let homer;
let homer2;
let homer3;
let output
let level = 0;
let pendulum2;

let stuffs = [
    {
        name: "Bottle Bier",
        type: "glass",
        imgSrc: "/assets/bottle_bier.png",
        width: 80,
        height: 160
    },
    {
        name: "Can Beer",
        type: "packages",
        imgSrc: "/assets/can_beer.png",
        width: 80,
        height: 120
    },
    {
        name: "Can Tomato",
        type: "packages",
        imgSrc: "/assets/can_tomato.png",
        width: 80,
        height: 120
    },
    {
        name: "Cereal Box",
        type: "paper",
        imgSrc: "/assets/Cereal_box.png",
        width: 80,
        height: 120
    },
    /* {
        name: "Donuts",
        type: "organic",
        imgSrc: "/assets/Donuts.png",
        width: 100,
        height: 100

    }, */
    {
        name: "Milk",
        type: "paper",
        imgSrc: "/assets/milk.png",
        width: 100,
        height: 100

    },
    {
        name: "Plastic Cup",
        type: "packages",
        imgSrc: "/assets/plastic_cup.png",
        width: 80,
        height: 140

    }
];
let item;
let itemIndex;
