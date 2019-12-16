const assert = require("chai").assert;
const { Circle } = require("../src/circle");

describe("Circle", function() {
  describe("toString", function() {
    it("Gives the string representation of the circle", function() {
      const center = { x: 1, y: 2 };
      const circle = new Circle(center, 5);
      assert.strictEqual(circle.toString(), `[Circle @(1,2) radius 5]`);
    });
  });
  describe("isEqual", function() {
    it.only("gives true if the both circles are at same location and are of same size and instance", function() {
      const center = { x: 2, y: 2 };
      const circle1 = new Circle(center, 5);
      const circle2 = new Circle(center, 5);
      assert.ok(circle1.isEqual(circle2));
    });
  });
});
