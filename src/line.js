const arePointsEqual = function(point1, point2) {
  return point1.x === point2.x && point1.y === point2.y;
};

const isTypeSame = function(otherLine) {
  return otherLine instanceof Line;
};

class Line {
  constructor(endA, endB) {
    this.endA = { ...endA };
    this.endB = { ...endB };
  }
  toString() {
    return `Line (${this.endA.x},${this.endA.y}) to (${this.endB.x},${this.endB.y})`;
  }
  isEqualTo(otherLine) {
    const isLineObj = isTypeSame(otherLine);
    const areEndAsEqual = arePointsEqual(this.endA, otherLine.endA);
    const areEndBsEqual = arePointsEqual(this.endB, otherLine.endB);
    return isLineObj && areEndAsEqual && areEndBsEqual;
  }
}
module.exports = { Line };
