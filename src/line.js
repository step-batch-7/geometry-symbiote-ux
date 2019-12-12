class Line {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  isEqual() {
    return `(${this.x1},${this.y2},${this.x2},${this.y2}`;
  }
}
// const testLine = new Line(1,2,3,4);
// console.log(testLine);
module.exports = { Line };
