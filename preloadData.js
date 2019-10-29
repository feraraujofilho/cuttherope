
function dataToLoad() {
    itemIndex = Math.floor(random(0, stuffs.length));
    rope = 200;
    origin = { x: WIDTH / 2, y: 0 };
    ballPosition = { x: WIDTH / 2, y: rope };
    backgroundImg = loadImage("/assets/simpsons-background.jpg");
    plasticTrash = loadImage("/assets/plastic_trash.png");
    paperTrash = loadImage("/assets/paper_trash.png");
    glassTrash = loadImage("/assets/glass_trash.png");
    organicTrash = loadImage("/assets/organic_trash.png")
    batteriesTrash = loadImage("/assets/batteries_trash.png")
    homer = loadImage("/assets/homer_1.png");
    homer2 = loadImage("/assets/homer_2.png");
    homer3 = loadImage("/assets/homer_3.png");
    trashTypes = [plasticTrash, paperTrash, glassTrash, organicTrash, batteriesTrash];
    itemPic = loadImage(stuffs[itemIndex].imgSrc);
    output = document.getElementById("time");
}