class Point {
    constructor (private x?: number, private y?: number){
    }

    draw() {
        console.log(`x: ${this.x} and y: ${this.y}`);
    }
}

let point = new Point(3, 9);

point.draw();


