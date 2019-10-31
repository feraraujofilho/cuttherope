function restart() {
    level1.level = 1;
    level = 0;
    playMode = true;
    gameOver = false;
    stop = true;
    countdown();
    time = 20;
}

function scoreCounter() {

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
