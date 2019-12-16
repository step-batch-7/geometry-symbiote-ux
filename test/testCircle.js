const assert = require("chai").assert;
const { Circle } = require("../src/circle");

describe("Circle", function() {
  describe("toString", function() {
    it.only("Gives the string representation of the circle", function() {
      const center = { x: 1, y: 2 };
      const circle = new Circle(center, 5);
      assert.strictEqual(circle.toString(), `[Circle @(1,2) radius 5]`);
    });
  });
});
