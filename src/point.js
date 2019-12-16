class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
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
  findDistanceTo(other){
    if(!(other instanceof Point)) return NaN;
    const xDistance = other.x - this.x;
    const yDistance = other.y - this.y;
    return Math.hypot(xDistance,yDistance);
  }
  isOn(line){
    return line.hasPoint(this);
  }
}

module.exports = { Point };
