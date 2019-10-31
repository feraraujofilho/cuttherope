
function dataToLoad() {
    pendulum = new Pendulum();
    newBall = new GetABall(500, 30, 80);
    thing = new TrashStuff();
    level1 = new Levels();
    itemIndex = Math.floor(random(0, stuffs.length));
    rope = 200;
    origin = { x: WIDTH / 2, y: 0 };
    ballPosition = { x: WIDTH / 2, y: rope };
    backgroundImg = loadImage("assets/simpsons-background.jpg");
    plasticTrash = loadImage("assets/plastic_trash.png");
    paperTrash = loadImage("assets/paper_trash.png");
    glassTrash = loadImage("assets/glass_trash.png");
    organicTrash = loadImage("assets/organic_trash.png")
    homer = loadImage("assets/homer_1.png");
    homer2 = loadImage("assets/homer_2.png");
    homer3 = loadImage("assets/homer_3.png");
    homerGif = loadImage("assets/homer_dancing.gif")
    homerCrying = loadImage("assets/homer_crying.gif")
    homerCelebrating = loadImage("assets/homer_celebrating.gif")
    nextLevelImg = loadImage("assets/next_level.png")
    startPage = loadImage("assets/start_page.png")
    winnerPage = loadImage("assets/you_win_page.png")
    gameOverPage = loadImage("assets/gameover_page.png")
    trashTypes = [plasticTrash, paperTrash, glassTrash, organicTrash];
    itemPic = loadImage(stuffs[itemIndex].imgSrc);
    output = document.getElementById("time");
}