const { Point } = require("./point.js");

const arePointsEqual = function(point1, point2) {
  return point1.x == point2.x && point1.y == point2.y;
};

const areColinear = function(point1,point2,point3){
  return point1.x*(point2.y -point3.y)+point2.x*(point3.y -point2.y)+point3.x*(point1.y - point2.y)===0;
}

const arePointsInRange = function(midPoint,point1,point2){
  if(point1>point2){
    return point2 <=midPoint &&midPoint<=point;
  }
  return point2>=midPoint &&midPoint>=point1;
}

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
    const xDistance = this.endA.x - this.endB.x;
    const yDistance = this.endA.y - this.endB.y;
    const lengthOfLine = Math.hypot(
      xDistance,
      yDistance
    );
    return lengthOfLine;
  }
  get slope() {
    return (this.endB.y - this.endA.y) / (this.endB.x - this.endA.x);
  }
  isParallelTo(line2) {
    if (!(line2 instanceof Line)) return false;
    return ((this.slope == line2.slope) && (!areColinear(this.endA,this.endB,line2.endA)));
  }
  findX(pointY) {
    if (!arePointsInRange(pointY,this.endA.y,this.endB.y)) return NaN;
    return (pointY - this.endA.y) / this.slope + this.endA.x;
  }
  findY(pointX) {
    if (!arePointsInRange(pointX,this.endA.y,this.endB.y)) return NaN;
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
}

module.exports = { Line };
