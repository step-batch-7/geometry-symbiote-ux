const { Point } = require("./point");

const areColinear = function(point1, point2, point3) {
  const [x1, y1] = [point1.x, point1.y];
  const [x2, y2] = [point2.x, point2.y];
  const [x3, y3] = [point3.x, point3.y];
  return x1 * (y2 - y3) + x2 * (y3 - y2) + x3 * (y1 - y2) === 0;
};

const isPointInRange = function(midPoint, point1, point2) {
  if (point1 > point2) {
    return point2 <= midPoint && midPoint <= point1;
  }
  return point2 >= midPoint && midPoint >= point1;
};

class Line {
  constructor(endA, endB) {
    this.endA = new Point(endA.x, endA.y);
    this.endB = new Point(endB.x, endB.y);
  }
  toString() {
    return `[Line (${this.endA.x},${this.endA.y}) to (${this.endB.x},${this.endB.y})]`;
  }
  isEqualTo(other) {
    if (!(other instanceof Line)) return false;
    return this.endA.isEqualTo(other.endA) && this.endB.isEqualTo(other.endB);
  }
  get length() {
    return this.endA.findDistanceTo(this.endB);
  }
  get slope() {
    return (this.endB.y - this.endA.y) / (this.endB.x - this.endA.x);
  }
  isParallelTo(line2) {
    if (!(line2 instanceof Line)) return false;
    return (
      this.slope == line2.slope &&
      !areColinear(this.endA, this.endB, line2.endA)
    );
  }
  findX(pointY) {
    if (!isPointInRange(pointY, this.endA.y, this.endB.y)) return NaN;
    return (pointY - this.endA.y) / this.slope + this.endA.x;
  }
  findY(pointX) {
    if (!isPointInRange(pointX, this.endA.y, this.endB.y)) return NaN;
    return (pointX - this.endA.x) * this.slope + this.endA.y;
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
    return this.findX(point.y) === point.x || point.y === this.findY(point.x);
  }
  findPointFromStart(distance) {
    if (!isPointInRange(distance, 0, this.length)) return null;
    const distanceRatio = distance / this.length;
    const pointX =
      (1 - distanceRatio) * this.endA.x + distanceRatio * this.endB.x;
    const pointY =
      (1 - distanceRatio) * this.endA.y + distanceRatio * this.endB.y;
    return new Point(pointX, pointY);
  }
  findPointFromEnd(distance) {
    return this.findPointFromStart(this.length - distance);
  }
}

module.exports = { Line };
