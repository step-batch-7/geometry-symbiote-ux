const { Point } = require("./point");

class Rectangle {
  constructor(endA, endC) {
    this.endA = new Point(endA.x, endA.y);
    this.endC = new Point(endC.x, endC.y);
  }

  get height() {
    return Math.abs(this.endA.y - this.endC.y);
  }

  get width() {
    return Math.abs(this.endC.x - this.endA.x);
  }

  toString() {
    return `[Rectangle (${this.endA.x},${this.endA.y}) to (${this.endC.x},${this.endC.y})]`;
  }

  get area() {
    return this.height * this.width;
  }

  get perimeter() {
    return 2 * (this.height + this.width);
  }

  isEqualTo(other) {
    if (!(other instanceof Rectangle)) return false;
    return this.endA.isEqualTo(other.endA) && this.endC.isEqualTo(other.endC);
  }
}

module.exports = { Rectangle };
