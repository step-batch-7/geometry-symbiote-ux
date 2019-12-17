const { Point } = require("./point");

class Rectangle {
  constructor(endA, endB) {
    this.endA = new Point(endA.x, endA.y);
    this.endB = new Point(endB.x, endB.y);
  }

  toString() {
    return `[Rectangle (${this.endA.x},${this.endA.y}) to (${this.endB.x},${this.endB.y})]`;
  }

  get area() {
    const endD = new Point(this.endA.x, this.endB.y);
    const length = endD.findDistanceTo(this.endA);
    const width = endD.findDistanceTo(this.endB);
    return length * width;
  }
}

module.exports = { Rectangle };
