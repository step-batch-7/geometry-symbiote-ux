const isPointsEqual = function(point1, point2) {
  return point1.x == point2.x && point1.y == point2.y;
};

class Line {
  constructor(endA, endB) {
    this.endA = endA;
    this.endB = endB;
  }
  toString() {
    return `Line (${this.endA.x},${this.endA.y}) to (${this.endB.x},${this.endB.y})`;
  }
  isEqualTo(otherLine) {
    return (
      isPointsEqual(this.endA, otherLine.endA) &&
      isPointsEqual(this.endB, otherLine.endB)
    );
  }
}
module.exports = { Line };
