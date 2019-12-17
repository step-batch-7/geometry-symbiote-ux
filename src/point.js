class Point {
  constructor(x, y) {
    [this.x, this.y] = [x, y];
  }

  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }

  visit(functionRef) {
    return functionRef(this.x, this.y);
  }

  isEqualTo(other) {
    if (!(other instanceof Point)) return false;
    return this.x == other.x && this.y == other.y;
  }

  clone() {
    return new Point(this.x, this.y);
  }

  findDistanceTo(other) {
    if (!(other instanceof Point)) return NaN;
    const xDistance = this.x - other.x;
    const yDistance = this.y - other.y;
    return Math.hypot(xDistance, yDistance);
  }

  isOn(shape) {
    return shape.hasPoint(this);
  }
}

module.exports = { Point };
