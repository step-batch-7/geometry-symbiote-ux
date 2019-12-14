const { Point } = require("./point.js");
const arePointsEqual = function(point1, point2) {
  return point1.x == point2.x && point1.y == point2.y;
};

class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }
  toString() {
    return `[Line (${this.endA.x},${this.endA.y}) to (${this.endB.x},${this.endB.y})]`;
  }
  isEqualTo(other) {
    if (!(other instanceof Line)) return false;
    return (
      arePointsEqual(this.endA, other.endA) &&
      arePointsEqual(this.endB, other.endB)
    );
  }
  get length() {
    const horizontalDistanceBetween2Points = this.endA.x - this.endB.x;
    const verticalDistanceBetween2Points = this.endA.y - this.endB.y;
    const lengthOfLine = Math.hypot(
      horizontalDistanceBetween2Points,
      verticalDistanceBetween2Points
    );
    return lengthOfLine;
  }
  get slope() {
    return (this.endB.y - this.endA.y) / (this.endB.x - this.endA.x);
  }
  isParallelTo(line2) {
    if (!(line2 instanceof Line)) return false;
    return this.slope == line2.slope;
  }
  findX(y) {
    if (!(y >= this.endA.y && y <= this.endB.y)) return NaN;
    return (y - this.endA.y) / this.slope + this.endA.x;
  }
  findY(x) {
    if (!(x >= this.endA.x && x <= this.endB.x)) return NaN;
    return (x - this.endA.x) * this.slope + this.endA.y;
  }
  split() {
    const xMid = (this.endA.x + this.endB.x) / 2;
    const yMid = (this.endA.y + this.endB.y) / 2;
    const midPoint = { x: xMid, y: yMid };
    const line1 = new Line(this.endA, midPoint);
    const line2 = new Line(midPoint, this.endB);
    return [line1, line2];
  }
  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    return (
      point.x >= this.endA.x &&
      point.x <= this.endB.x &&
      point.y >= this.endA.y &&
      point.y <= this.endB.y
    );
  }
}

module.exports = { Line };
