class TrashBins {
    constructor(x, type,img) {
        this.x = x;
        this.y = 800;
        this.h = 400
        this.w = 200
        this.type= type
        this.img = img
    }

    draw() {
        image(this.img, this.x, this.y, this.w, this.h)
    }
}
