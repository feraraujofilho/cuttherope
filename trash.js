class Trash {
    constructor(x) {
        this.x = x;
        this.y = 800;
        this.h = 200
        this.w = 120
    }

    draw() {
        //fill(0)
        rect(this.x, this.y, this.w, this.h)
    }

    // setRandomPosition() {
    //     this.x = Math.floor(random(0, 3)) * 100;
    //     this.y = 800;
    // }
}
