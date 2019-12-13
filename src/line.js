const arePointsEqual = function(point1, point2) {
  return point1.x == point2.x && point1.y == point2.y;
};

class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }
  toString() {
    return `Line (${this.endA.x},${this.endA.y}) to (${this.endB.x},${this.endB.y})`;
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
    return this.slope == line2.slope;
  }
}

module.exports = { Line };
