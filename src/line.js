class Line {
  constructor(endA, endB) {
    this.endA = endA;
    this.endB = endB;
  }
  toString() {
    return `Line (${this.endA.x},${this.endA.y}) to (${this.endB.x},${this.endB.y})`;
  }
}
module.exports = Line;
