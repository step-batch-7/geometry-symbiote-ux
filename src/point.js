class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }
  visit(givenFunction) {
    return givenFunction(this.x, this.y);
  }
  isEqualTo(other) {
    if (!(other instanceof Point)) return false;
    return this.x == other.x && this.y == other.y;
  }
  clone() {
    return new Point(this.x, this.y);
  }
}

module.exports = { Point };
