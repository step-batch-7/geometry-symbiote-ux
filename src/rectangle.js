const { Point } = require("./point");
const { Line } = require("./line");

const sides = function(start, end) {
  const side1 = new Line({ x: start.x, y: start.y }, { x: end.x, y: start.y });
  const side2 = new Line({ x: end.x, y: start.y }, { x: end.x, y: end.y });
  const side3 = new Line({ x: start.x, y: end.y }, { x: end.x, y: end.y });
  const side4 = new Line({ x: start.x, y: start.y }, { x: start.x, y: end.y });
  return [side1, side2, side3, side4];
};

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

  hasPoint(point) {
    if(!(point instanceof Point)) return false;
    return sides(this.endA, this.endC).some(side => point.isOn(side) == true);
  }
}

module.exports = { Rectangle };
