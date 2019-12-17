const { Point } = require("./point");

class Rectangle {
  constructor(endA, endB) {
    this.endA = new Point(endA.x, endA.y);
    this.endB = new Point(endB.x, endB.y);
    this.endD = new Point(this.endA.x, this.endB.y);
  }

  get height() {
    return this.endD.findDistanceTo(this.endA);
  }

  get width() {
    return this.endD.findDistanceTo(this.endB);
  }

  toString() {
    return `[Rectangle (${this.endA.x},${this.endA.y}) to (${this.endB.x},${this.endB.y})]`;
  }

  get area() {
    return this.height * this.width;
  }

  get perimeter() {
    return 2 * (this.height + this.width);
  }
}

module.exports = { Rectangle };
