class Trash {
    constructor(x, color,img) {
        this.x = x;
        this.y = 800;
        this.h = 200
        this.w = 120
        this.color= color
        this.img = img
    }

    draw() {
        image(this.img, this.x, this.y)
        // let img = loadImage(this.photo)
        // image(img, this.x, this.y)
        //this.img = loadImage(img);
        //fill(0)
        //rect(this.x, this.y, this.w, this.h)
    }
}
