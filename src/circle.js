const { Point } = require("./point");

class Circle {
  constructor(center, radius) {
    this.center = new Point(center.x, center.y);
    this.radius = radius;
  }
  toString() {
    return `[Circle @(${this.center.x},${this.center.y}) radius ${this.radius}]`;
  }
  isEqual(other) {
    if (!(other instanceof Circle)) return false;
    return this.radius === other.radius && this.center.isEqualTo(other.center);
  }
  get area() {
    return Math.PI * this.radius * this.radius;
  }
}

module.exports = { Circle };
