class Trash {
    constructor(x, color) {
        this.x = x;
        this.y = 800;
        this.h = 200
        this.w = 120
        this.color= color 
    }

    draw() {
        //fill(0)
        rect(this.x, this.y, this.w, this.h)
    }
}
