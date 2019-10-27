class Trash {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.h = 200
        this.w = 120
    }

    draw() {
        fill(0)
        rect(this.x, this.y, this.w, this.h)
    }

    setRandomPosition() {
        this.x = Math.floor(random(2, 9)) * 100;
        this.y = 800;
    }
}
